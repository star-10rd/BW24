Solution:
Let $d$ be the greatest common divisor of $m$ and $n$, and let $m = d x$ and $n = d y$. Then the equation is equivalent to
$$
3 d x y = 2008(x + y).
$$
The numbers $x$ and $y$ are relatively prime and have no common divisors with $x + y$ and hence they are both divisors of $2008$. Notice that $2008 = 8 \cdot 251$ and $251$ is a prime. Then $x$ and $y$ fulfill:

1) They are both divisors of $2008$.
2) Only one of them can be even.
3) The number $251$ can only divide none or one of them.
4) $x < y$.

That gives the following possibilities of $(x, y)$:
$$
(1,2),\ (1,4),\ (1,8),\ (1,251),\ (1,2 \cdot 251),\ (1,4 \cdot 251),\ (1,8 \cdot 251),\ (2,251),\ (4,251),\ (8,251).
$$
The number $3$ does not divide $2008$ and hence $3$ divides $x + y$. That shortens the list down to
$$
(1,2),\ (1,8),\ (1,251),\ (1,4 \cdot 251),\ (4,251).
$$
For every pair $(x, y)$ in the list determine the number $d = \frac{2008}{x y} \cdot \frac{x + y}{3}$. It is seen that $x y$ divides $2008$ for all $(x, y)$ in the list and hence $d$ is an integer. Hence exactly $5$ solutions exist to the equation.
