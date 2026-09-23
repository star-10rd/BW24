/**
 * Normalize TeX-style \\( ... \\) and \\[ ... \\] into the dollar syntax
 * understood by remark-math. Fenced and inline code are deliberately left
 * untouched. This is a source-normalization step, not a general LaTeX parser.
 */
export function normalizeMathDelimiters(source: string): string {
  let output = '';
  let index = 0;
  let atLineStart = true;
  let fence: { char: '`' | '~'; length: number } | null = null;
  let inlineCodeTicks = 0;
  let bracketMath: 'inline' | 'display' | null = null;

  const isEscaped = (position: number): boolean => {
    let slashes = 0;
    for (let cursor = position - 1; cursor >= 0 && source[cursor] === '\\'; cursor -= 1) slashes += 1;
    return slashes % 2 === 1;
  };

  const backtickRun = (position: number): number => {
    let length = 0;
    while (source[position + length] === '`') length += 1;
    return length;
  };

  while (index < source.length) {
    if (atLineStart && inlineCodeTicks === 0 && bracketMath === null) {
      const lineEnd = source.indexOf('\n', index);
      const end = lineEnd === -1 ? source.length : lineEnd;
      const line = source.slice(index, end);
      const opening = line.match(/^( {0,3})(`{3,}|~{3,})/);

      if (fence) {
        const closingPattern = new RegExp(`^ {0,3}${fence.char === '`' ? '`' : '~'}{${fence.length},}\\s*$`);
        output += line;
        if (closingPattern.test(line)) fence = null;
        if (lineEnd !== -1) {
          output += '\n';
          index = lineEnd + 1;
          atLineStart = true;
        } else {
          index = end;
        }
        continue;
      }

      if (opening) {
        const marker = opening[2]!;
        fence = { char: marker[0] as '`' | '~', length: marker.length };
        output += line;
        if (lineEnd !== -1) {
          output += '\n';
          index = lineEnd + 1;
          atLineStart = true;
        } else {
          index = end;
        }
        continue;
      }
    }

    const char = source[index]!;

    if (char === '\n') {
      output += char;
      index += 1;
      atLineStart = true;
      continue;
    }

    atLineStart = false;

    if (char === '`' && bracketMath === null) {
      const run = backtickRun(index);
      if (inlineCodeTicks === 0) inlineCodeTicks = run;
      else if (inlineCodeTicks === run) inlineCodeTicks = 0;
      output += source.slice(index, index + run);
      index += run;
      continue;
    }

    if (inlineCodeTicks > 0) {
      output += char;
      index += 1;
      continue;
    }

    if (source.startsWith('\\(', index) && !isEscaped(index) && bracketMath === null) {
      output += '$';
      bracketMath = 'inline';
      index += 2;
      continue;
    }

    if (source.startsWith('\\)', index) && !isEscaped(index) && bracketMath === 'inline') {
      output += '$';
      bracketMath = null;
      index += 2;
      continue;
    }

    if (source.startsWith('\\[', index) && !isEscaped(index) && bracketMath === null) {
      output += '\n\n$$\n';
      bracketMath = 'display';
      index += 2;
      continue;
    }

    if (source.startsWith('\\]', index) && !isEscaped(index) && bracketMath === 'display') {
      output += '\n$$\n\n';
      bracketMath = null;
      index += 2;
      continue;
    }

    output += char;
    index += 1;
  }

  if (bracketMath !== null) {
    throw new Error(`Unclosed TeX-style ${bracketMath} math delimiter.`);
  }

  return output;
}
