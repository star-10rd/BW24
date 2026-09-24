Solution:

This solution gives a non-constructive proof that the trick is possible. For this, we need to show there is an injective mapping from the set of ordered triples to the set of unordered quadruples that additionally respects inclusion.

To prove that the desired mapping exists, let's consider a bipartite graph such that the set of ordered triples $T$ and the set of unordered quadruples $Q$ form the two disjoint sets of vertices and there is an edge between a triple and a quadruple if and only if the triple is a subset of the quadruple.

For each triple $t \in T$, we can add any of the remaining 97 cards to it, and thus we have 97 different quadruples connected to each triple in the graph. Conversely, for each quadruple $q \in Q$, we can remove any of the 4 cards from it, and reorder the remaining 3 cards in $3!=6$ different ways, and thus we have 24 different triples connected to each quadruple in the graph.

According to Hall's theorem, a bipartite graph $G=(T, Q, E)$ has a perfect matching if and only if for each subset $T' \subseteq T$ the set of neighbours of $T'$, denoted $N(T')$, satisfies $|N(T')| \geqslant |T'|$.

To prove that this condition holds for our graph, consider any subset $T' \subseteq T$. Because we have 97 quadruples for each triple, and there can be at most 24 copies of each of them in the multiset of neighbours, we have $|N(T')| \geqslant \frac{97}{24}|T'| > 4|T'|$, which is even much more than we need.

Thus, the desired mapping is guaranteed to exist.
