Use the usual coordinate system for which the cells of the main diagonal have coordinates $(k, k)$, where $k = 1, \dots, n$. Let $(k, f(k))$ be the coordinates of the $k$-th rook. Then by color restrictions for rooks we have
$$
\sum_{k=1}^{n} (f(k) - k)^2 = \sum_{i=0}^{n-1} i^2 = \frac{n(n-1)(2n-1)}{6}.
$$
Since the rooks are non-attacking we have
$$
\sum_{k=1}^{n} (f(k))^2 = \sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}.
$$
By subtracting these equalities we obtain
$$
\sum_{k=1}^{n} k f(k) = \frac{n(2n^2 + 9n + 1)}{12}.
$$
Now it is trivial to check that the last number is integer if and only if $n \equiv 0 \text{ or } 1 \pmod{4}$.
