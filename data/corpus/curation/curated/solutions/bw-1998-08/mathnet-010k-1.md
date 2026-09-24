Solution:

Let $A$ and $B$ be the left- and right-hand side of the claimed formula, respectively. Since
$$
(1-x) P_{k}(x) = 1 - x^{k},
$$
we get
$$
(1-x) \cdot A = \sum_{k=1}^{n} \binom{n}{k} (1 - x^{k}) = \sum_{k=0}^{n} \binom{n}{k} (1 - x^{k}) = 2^{n} - (1+x)^{n}
$$
and
$$
\begin{aligned}
(1-x) \cdot B & = 2\left(1 - \frac{1+x}{2}\right) \cdot 2^{n-1} P_{n}\left(\frac{1+x}{2}\right) = \\
& = 2^{n}\left(1 - \left(\frac{1+x}{2}\right)^{n}\right) = 2^{n} - (1+x)^{n}.
\end{aligned}
$$
Thus $A = B$ for all real numbers $x \neq 1$. Since both $A$ and $B$ are polynomials, they coincide also for $x = 1$.
