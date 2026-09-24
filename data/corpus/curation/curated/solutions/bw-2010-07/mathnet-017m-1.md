Let $C$ be the capital and $C_1, C_2, \dots, C_n$ be the remaining cities. Denote by $d(x, y)$ the price of the connection between the cities $x$ and $y$, and let $\sigma$ be the total price of a round trip going exactly once through each city.

Now consider a round trip missing the capital and visiting every other city exactly once; let $s$ be the total price of that trip. Suppose $C_i$ and $C_j$ are two consecutive cities on the route. Replacing the flight $C_i \to C_j$ by two flights: from $C_i$ to the capital and from the capital to $C_j$, we get a round trip through all cities, with total price $\sigma$. It follows that
$$
\sigma = s + d(C, C_i) + d(C, C_j) - d(C_i, C_j),
$$
so it remains to show that the quantity $\alpha(i, j) = d(C, C_i) + d(C, C_j) - d(C_i, C_j)$ is the same for all 2-element subsets $\{i, j\} \subset \{1, 2, \dots, n\}$.

For this purpose, note that $\alpha(i, j) = \alpha(i, k)$ whenever $i, j, k$ are three distinct indices; indeed, this equality is equivalent to
$$
d(C_j, C) + d(C, C_i) + d(C_i, C_k) = d(C_j, C_i) + d(C, C) + d(C, C_k),
$$
which is true by considering any trip from $C_k$ to $C_j$ going through all cities except $C$ and $C_i$ exactly once and completing this trip to a round trip in two ways: $C_j \to C \to C_i \to C_k$ and $C_j \to C_i \to C \to C_k$. Therefore the values of $\alpha$ coincide on any pair of 2-element sets sharing a common element. But then clearly $\alpha(i, j) = \alpha(i, j') = \alpha(i', j')$ for all indices $i, j, i', j'$ with $i \neq j, i' \neq j'$, and the solution is complete.
