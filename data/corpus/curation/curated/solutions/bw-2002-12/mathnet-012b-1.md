Solution:
Let $S = \{A, B, C, D\}$ and let $AB$ be the longest of the six segments formed by these four points (if there are several longest segments, choose any of them). If we choose $X = A$ then we must also choose $Y = B$. Indeed, if we would, for example, choose $Y = C$, we should have $|AC| = |AB| + |AD|$ contradicting the maximality of $AB$. Hence we get
$$
|AB| = |AC| + |AD|.
$$
Similarly, choosing $X = B$ we must choose $Y = A$ and we obtain
$$
|AB| = |BC| + |BD|.
$$
On the other hand, from the triangle inequality we know that
$$
\begin{aligned}
& |AB| \leqslant |AC| + |BC|, \\
& |AB| \leqslant |AD| + |BD|,
\end{aligned}
$$
where at least one of the inequalities is strict if all the four points are not on the same line. Hence, adding the two last inequalities we get
$$
2|AB| < |AC| + |BC| + |AD| + |BD|.
$$
On the other hand, adding the previous two equalities we get
$$
2|AB| = |AC| + |AD| + |BC| + |BD|,
$$
a contradiction.
