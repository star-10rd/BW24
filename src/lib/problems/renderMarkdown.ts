import katex from 'katex';
import rehypeKatex from 'rehype-katex';
import rehypeSanitize, { defaultSchema, type Options as SanitizeOptions } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified, type Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import type { Image, Root } from 'mdast';
import type { ProblemAsset } from './types';
import { normalizeMathDelimiters } from './normalizeMathDelimiters';

type AssetPluginOptions = {
  assets: readonly ProblemAsset[];
  referenced: Set<string>;
  context: string;
};

type MathNode = {
  type: 'math' | 'inlineMath';
  value: string;
};

const katexOptions = {
  output: 'htmlAndMathml' as const,
  trust: false as const,
  strict: 'ignore' as const,
  maxExpand: 1000,
  maxSize: 50,
};

const problemSanitizeSchema: SanitizeOptions = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [
      ...(defaultSchema.attributes?.code ?? []),
      ['className', /^language-./, 'math-inline', 'math-display'],
    ],
    img: [
      ...(defaultSchema.attributes?.img ?? []),
      ['className', 'problem-figure', 'problem-figure--diagram', 'problem-figure--image'],
      'width',
      'height',
      'loading',
      'decoding',
    ],
  },
};

const remarkResolveProblemAssets: Plugin<[AssetPluginOptions], Root> = (options) => {
  return (tree) => {
    const assetMap = new Map(options.assets.map((asset) => [asset.key, asset]));

    visit(tree, 'image', (node: Image) => {
      const asset = assetMap.get(node.url);
      if (!asset) {
        throw new Error(`${options.context}: image reference "${node.url}" has no canonical asset mapping.`);
      }

      options.referenced.add(asset.key);
      node.url = asset.src;
      node.alt = asset.alt;

      const data = (node.data ??= {});
      const hProperties = {
        className: ['problem-figure', `problem-figure--${asset.presentation}`],
        width: asset.width,
        height: asset.height,
        loading: 'lazy',
        decoding: 'async',
      };
      (data as typeof data & { hProperties?: typeof hProperties }).hProperties = hProperties;
    });
  };
};

const remarkValidateMath: Plugin<[{ context: string }], Root> = (options) => {
  return (tree) => {
    visit(
      tree,
      (node) => node.type === 'math' || node.type === 'inlineMath',
      (node) => {
        const math = node as unknown as MathNode;
        try {
          katex.renderToString(math.value, {
            ...katexOptions,
            displayMode: math.type === 'math',
            throwOnError: true,
          });
        } catch (error) {
          const reason = error instanceof Error ? error.message : String(error);
          throw new Error(`${options.context}: KaTeX rejected ${math.type} content: ${reason}`);
        }
      },
    );
  };
};

export type RenderedProblemContent = {
  html: string;
  referencedAssets: string[];
};

export async function renderProblemMarkdown(
  markdown: string,
  assets: readonly ProblemAsset[],
  context: string,
): Promise<RenderedProblemContent> {
  const normalized = normalizeMathDelimiters(markdown);
  const referenced = new Set<string>();

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkResolveProblemAssets, { assets, referenced, context })
    .use(remarkValidateMath, { context })
    .use(remarkRehype)
    .use(rehypeSanitize, problemSanitizeSchema)
    .use(rehypeKatex, katexOptions)
    .use(rehypeStringify)
    .process(normalized);

  if (file.messages.length > 0) {
    const messages = file.messages.map((message) => message.toString()).join('\n');
    throw new Error(`${context}: Markdown renderer reported diagnostics:\n${messages}`);
  }

  return {
    html: String(file),
    referencedAssets: [...referenced],
  };
}
