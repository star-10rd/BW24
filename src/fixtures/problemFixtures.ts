import type { ProblemDocument } from '../lib/problems/types';

const markdownTick = '`';

export const representativeProblem: ProblemDocument = {
  id: 'demo',
  domain: 'G',
  statement: {
    language: 'en',
    markdown: String.raw`
Let $ABC$ be an acute triangle. Points $D$, $E$, and $F$ lie on $BC$, $CA$, and $AB$, respectively. The configuration below is deliberately synthetic: it exists to test the BW26 renderer rather than to reproduce an archived Baltic Way problem.

![Main geometry diagram](attached_image_1.png)

Assume that the following relation holds:

\[
\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB}=1.
\]

For a second style of display mathematics, consider

$$
\begin{aligned}
X &= (a+b+c)^2-(a^2+b^2+c^2) \\
  &= 2(ab+bc+ca).
\end{aligned}
$$

Prove that a suitable point $P$ can be chosen so that the three resulting constructions satisfy the required cyclic condition. During the proof you may use the inline form \(x^2+y^2=z^2\), and the following deliberately wide identity is included to test narrow screens:

$$
\prod_{k=1}^{12}\left(1+\frac{x_k}{1+x_1+x_2+\cdots+x_{k-1}}\right)=1+x_1+x_2+x_3+x_4+x_5+x_6+x_7+x_8+x_9+x_{10}+x_{11}+x_{12}.
$$
`,
  },
  appearances: [
    { series: 'BW', year: 2017, number: '13' },
    { series: 'BW-SL', year: 2017, number: 'G4' },
  ],
  topics: ['Circle geometry', 'Transformations'],
  assets: [
    {
      key: 'attached_image_1.png',
      src: '/problem-assets/demo/diagram-main.svg',
      alt: 'Triangle ABC with three marked points on its sides and an interior construction point.',
      width: 720,
      height: 460,
      presentation: 'diagram',
    },
    {
      key: 'attached_image_2.png',
      src: '/problem-assets/demo/diagram-solution.svg',
      alt: 'Auxiliary construction used in the first solution.',
      width: 680,
      height: 420,
      presentation: 'diagram',
    },
    {
      key: 'attached_image_3.png',
      src: '/problem-assets/demo/diagram-grid.svg',
      alt: 'Coordinate-style auxiliary diagram used in the second solution.',
      width: 720,
      height: 420,
      presentation: 'diagram',
    },
  ],
  solutions: [
    {
      id: 'solution-1',
      language: 'en',
      markdown: String.raw`
Introduce the auxiliary point $P$ and apply the ratio condition in the order in which the points occur around the triangle. The purpose of this solution is to test ordinary proof prose together with display mathematics and a diagram.

![Auxiliary construction](attached_image_2.png)

From the construction,

\[
\begin{cases}
\angle PAB=\angle PCB,\\
\angle PBC=\angle PAC.
\end{cases}
\]

Hence the relevant pairs of triangles are similar. Multiplying the three resulting ratios gives

$$
\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB}=1,
$$

which is exactly the compatibility condition required by the construction. The remaining angle equality follows from the cyclic criterion.
`,
    },
    {
      id: 'solution-2',
      language: 'en',
      markdown: String.raw`
A coordinate approach gives a second, intentionally different rendering stress case. Put the reference line on the $x$-axis and write the relevant points as vectors.

![Coordinate auxiliary diagram](attached_image_3.png)

Using

$$
M=\begin{pmatrix}a&b\\c&d\end{pmatrix},\qquad
\det M=ad-bc,
$$

one obtains an equivalent determinant condition. After cancellation, the final relation is again the product condition from the statement.

The inline code example ${markdownTick}\[not math inside code\]${markdownTick} and the fenced example below must remain literal rather than being interpreted as mathematics:

~~~text
\[
this is code, not mathematics
\]
~~~
`,
    },
  ],
};

export const mathStressProblem: ProblemDocument = {
  id: 'math-stress',
  domain: 'A',
  statement: {
    language: 'en',
    markdown: String.raw`
Inline dollar math: $a^2+b^2=c^2$.

Inline TeX delimiters: \(f(x)=x^2-1\).

\[
\sum_{k=1}^{n} k=\frac{n(n+1)}{2}
\]

$$
\begin{cases}
x+y=3,\\
x-y=1.
\end{cases}
$$

$$
\begin{pmatrix}1&2\\3&4\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}
=
\begin{pmatrix}5\\11\end{pmatrix}.
$$

${markdownTick}\(literal code\)${markdownTick}

~~~text
\[
literal fenced code
\]
~~~
`,
  },
  appearances: [{ series: 'BW-SL', year: 2010, number: 'A0' }],
  topics: ['Inequalities', 'Polynomials'],
  assets: [],
  solutions: [],
};

export const safetyStressProblem: ProblemDocument = {
  id: 'safety-stress',
  domain: 'C',
  statement: {
    language: 'en',
    markdown: String.raw`
Raw HTML must not become active content.

<script>globalThis.__bw26Unsafe = true</script>

[Unsafe protocol](javascript:alert('no'))

Safe mathematics still renders: $2^n$.
`,
  },
  appearances: [{ series: 'BW-SL', year: 2011, number: 'C0' }],
  topics: ['Graph theory'],
  assets: [],
  solutions: [],
};

export const publicProblemFixtures = [representativeProblem] as const;
export const validationProblemFixtures = [representativeProblem, mathStressProblem, safetyStressProblem] as const;
