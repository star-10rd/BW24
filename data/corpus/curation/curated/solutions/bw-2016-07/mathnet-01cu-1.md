**Answer:** The inequality holds if and only if $n$ is even.

First suppose that $n$ is odd. Setting $x = -1$ in the inequality, the left-hand side becomes $3 \cdot (-1)^n + n - 3 = n - 6$, while the right-hand side becomes $n \cdot (-1)^2 = n$, and this is a contradiction.

Then let $n$ be even. Since $|x| \ge x$ for all $x$, it suffices to prove that $3x^n + 2n - 3 \ge nx^2 + n|x|$ for all $x$. Writing $y = |x| \ge 0$ and using the fact that $n$ is even, it is enough to prove that
$$
3y^n + (2n - 3) \ge ny^2 + ny
$$
for all $y \ge 0$. By the arithmetic-geometric inequality, we have
$$
2y^n + (n - 2) = y^n + y^n + 1 + \cdots + 1 \quad (1)
$$
$$
\ge n \sqrt[n]{y^n \cdot y^n \cdot 1^{n-2}} = ny^2. \quad (2)
$$
Again by the arithmetic-geometric inequality, we obtain
$$
y^n + (n - 1) = y^n + 1 + \cdots + 1 \ge n \sqrt[n]{y^n \cdot 1^{n-1}} = ny. \quad (3)
$$
Adding these two inequalities together yields the claim.
