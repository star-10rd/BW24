Solution:

Let $1 \leqslant g < h < i < j \leqslant n$ be fixed integers. Consider all $n$-digit numbers $a = \overline{a_{1} a_{2} \ldots a_{n}}$ with all digits non-zero, such that $a_{g} = 1$, $a_{h} = 9$, $a_{i} = 9$, $a_{j} = 8$ and this quadruple 1998 is the leftmost one in $a$; that is,
$$
\begin{cases}
a_{l} \neq 1 & \text{if } l < g ; \\
a_{l} \neq 9 & \text{if } g < l < h ; \\
a_{l} \neq 9 & \text{if } h < l < i ; \\
a_{l} \neq 8 & \text{if } i < l < j
\end{cases}
$$
There are $k_{g h i j}(n) = 8^{g-1} \cdot 8^{h-g-1} \cdot 8^{i-h-1} \cdot 8^{j-i-1} \cdot 9^{n-j}$ such numbers $a$. Obviously, $k_{g h i j}(n) \equiv 1 \pmod{8}$ for $g = 1, h = 2, i = 3, j = 4$, and $k_{g h i j}(n) \equiv 0 \pmod{8}$ in all other cases. Since $k(n)$ is obtained by summing up the values of $k_{g h i j}(n)$ over all possible choices of $g, h, i, j$, the remainder we are looking for is $1$.
