The functions we are looking for are $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 0$ and $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x$. For $n$ even $f : \mathbb{R} \to \mathbb{R}$, $f(x) = -x$ is also a solution.

Throughout the solution, $P(x_0, y_0)$ will denote the substitution of $x_0$ and $y_0$ for $x$ and $y$, respectively, in the given equation.

$P(x, 0)$ for $x \neq 0$ gives
$$
f(x)^{n+1} = f(x)^{n+1} + x^n f(0)
$$
and therefore
$$
f(0) = \frac{f(x)^{n+1} - f(x)^{n+1}}{x^n} = 0.
$$

$P(x, -x)$ for $x \neq 0$ gives
$$
0 = f(x)^n f(0) = f(x)^{n+1} + x^n f(-x),
$$
and therefore
$$
f(-x) = -\frac{f(x)^{n+1}}{x^n}.
$$

$$
f(x)(x^{n^2+2n} - f(x)^{n^2+2n}) = 0.
$$
If there exists an $a \neq 0$ for which $f(a) = 0$, then $P(a, y)$ yields
$$
0 = a^n f(y),
$$
which means that $f(y) = 0$ for all $y \in \mathbb{R}$. This is a solution to the equation for all $n$.

If instead $f(x) \neq 0$ for all $x \neq 0$, then we have
$$
x^{n^2+2n} = f(x)^{n^2+2n}.
$$
If $n$ is odd, then so is $n(n + 2) = (n^2 + 2n)$, meaning $f(x) = x$ for all $x \in \mathbb{R}$. This is a solution to the equation.

If $n$ is even, then so is $n(n + 2) = (n^2 + 2n)$, meaning $f(x) = \pm x$ for all $x \in \mathbb{R}$. Both $f(x) = x$ and $f(x) = -x$ are solutions to the equation. In all other cases there must exist $x, y \neq 0$ such that $f(x) = x$ and $f(y) = -y$. Then $P(x, y)$ yields
$$
x^n f(x + y) = x^{n+1} - x^n y,
$$
which after dividing by $x^n \neq 0$ yields
$$
f(x + y) = x - y.
$$
Since $(f(x))^2 = x^2$ for all $x \in \mathbb{R}$, we have $(x + y)^2 = (x - y)^2$. That is $4xy = 0$ which is impossible as $x, y \neq 0$.

There are therefore no more solutions to the equation. $\square$
