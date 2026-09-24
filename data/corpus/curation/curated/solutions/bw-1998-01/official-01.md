Answer: $f(x, y)=\operatorname{lcm}(x, y)$ is the only such function.

We first show that there is at most one such function $f$. Let $z \geqslant 2$ be an integer. Knowing the values $f(x, y)$ for all $x, y$ with $0<x, y<z$, we compute $f(x, z)$ for $0<x<z$ using the third equation (with $y=z-x$ ); then from the first two equations we get the values $f(z, y)$ for $0<y \leqslant z$. Hence, if $f$ exists then it is unique.

Experimenting a little, we can guess that $f(x, y)$ is the least common multiple of $x$ and $y$. It remains to verify that the least-common-multiple function satisfies the given equations. The first two are clear, and for the third one:

$$
\begin{aligned}
(x+y) \cdot \operatorname{lcm}(x, y) & =(x+y) \cdot \frac{x y}{\operatorname{gcd}(x, y)}=y \cdot \frac{x(x+y)}{\operatorname{gcd}(x, x+y)}= \\
& =y \cdot \operatorname{lcm}(x, x+y) .
\end{aligned}
$$
