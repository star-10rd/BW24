import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { validationProblemFixtures, mathStressProblem, safetyStressProblem, representativeProblem } from '../src/fixtures/problemFixtures';
import { validateProblemDocument } from '../src/lib/problems/model';
import { normalizeMathDelimiters } from '../src/lib/problems/normalizeMathDelimiters';
import { renderProblemMarkdown } from '../src/lib/problems/renderMarkdown';
import type { ProblemDocument } from '../src/lib/problems/types';

async function assertAssetsExist(problem: ProblemDocument): Promise<void> {
  for (const asset of problem.assets) {
    const file = resolve(process.cwd(), 'public', asset.src.replace(/^\//, ''));
    await access(file);
  }
}

for (const problem of validationProblemFixtures) {
  validateProblemDocument(problem);
  await assertAssetsExist(problem);

  await renderProblemMarkdown(problem.statement.markdown, problem.assets, `${problem.id}: statement`);
  for (const solution of problem.solutions) {
    await renderProblemMarkdown(solution.markdown, problem.assets, `${problem.id}: ${solution.id}`);
  }
}

const representative = await renderProblemMarkdown(
  representativeProblem.statement.markdown,
  representativeProblem.assets,
  'representative assertion',
);
assert.match(representative.html, /class="katex/);
assert.match(representative.html, /katex-display/);
assert.match(representative.html, /problem-assets\/demo\/diagram-main\.svg/);
assert.ok(representative.referencedAssets.includes('attached_image_1.png'));

const mathStress = await renderProblemMarkdown(mathStressProblem.statement.markdown, [], 'math stress assertion');
assert.match(mathStress.html, /class="katex/);
assert.match(mathStress.html, /literal fenced code/);
assert.match(mathStress.html, /\\\[/);

const safetyStress = await renderProblemMarkdown(safetyStressProblem.statement.markdown, [], 'safety stress assertion');
assert.doesNotMatch(safetyStress.html, /<script/i);
assert.doesNotMatch(safetyStress.html, /javascript:/i);

const normalized = normalizeMathDelimiters(`Text \\(x+1\\) and:
\\[
x^2
\\]

\`\\(literal\\)\`

~~~text
\\[
literal
\\]
~~~`);
assert.match(normalized, /\$x\+1\$/);
assert.match(normalized, /\$\$[\s\S]*x\^2[\s\S]*\$\$/);
assert.match(normalized, /\\\(literal\\\)/);
assert.match(normalized, /\\\[[\s\S]*literal[\s\S]*\\\]/);

await assert.rejects(
  () => renderProblemMarkdown('![missing](attached_image_404.png)', [], 'missing image assertion'),
  /no canonical asset mapping/,
);

await assert.rejects(
  () => renderProblemMarkdown(`$\\definitelyNotARealCommand{x}$`, [], 'invalid math assertion'),
  /KaTeX rejected/,
);

console.log(`BW26 content check passed (${validationProblemFixtures.length} fixtures).`);
