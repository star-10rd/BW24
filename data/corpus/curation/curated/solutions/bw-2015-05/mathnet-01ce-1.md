Answer: all functions $f(x) = c(|x| - x)$, where $c$ is a real number. Choosing $x = y = 0$, we find
$$
f(f(0)) = -2f(0).
$$
Denote $a = f(0)$, so that $f(a) = -2a$, and choose $y = 0$ in the initial equation:
$$
a|x| = a + f(x^2) + f(a) = a + f(x^2) - 2a \Rightarrow f(x^2) = a(|x| + 1).
$$
In particular, $f(1) = 2a$. Choose $(x, y) = (z^2, 1)$ in the initial equation:
$$
\begin{align*}
z^2 f(1) + f(z^2) &= f(z^2) + f(z^4) + f(f(1)) \\
\Rightarrow \quad 2az^2 &= z^2 f(1) = f(z^4) + f(f(1)) = a(z^2 + 1) + f(2a) \\
\Rightarrow \quad az^2 &= a + f(2a).
\end{align*}
$$
The right-hand side is constant, while the left-hand side is a quadratic function in $z$, which can only happen if $a = 0$. (Choose $z = 1$ and then $z = 0$.)
We now conclude that $f(x^2) = 0$, and so $f(x) = 0$ for all non-negative $x$. In particular, $f(0) = 0$. Choosing $x = 0$ in the initial equation, we find

for all $y$. Simplifying the original equation and swapping $x$ and $y$ leads to
$$
|x|f(y) + yf(x) = f(xy) = |y|f(x) + xf(y).
$$
Choose $y = -1$ and put $c = \frac{f(-1)}{2}$:
$$
|x|f(-1) - f(x) = f(x) + xf(-1) \quad \Rightarrow \quad f(x) = \frac{f(-1)}{2}(|x| - x) = c(|x| - x).
$$
One easily verifies that these functions satisfy the functional equation for any parameter $c$. $\square$
