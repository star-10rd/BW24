Answer: Yes, this is always possible.

Consider a graph with a vertex for each person in the group. For each pair of friends we join the corresponding vertices by a red edge. If a pair are not friends, we join their vertices with a blue edge.

Let us label blue edges with different primes $p_{1}, \ldots, p_{k}$. To a vertex $A$ we assign the number $n(A)=\frac{P^{2}}{P(A)}$, where $P=$ $p_{1} p_{2} \ldots p_{k}$, and $P(A)$ is the product of the primes on all blue edges starting from $A$ (for the empty set the product of all its elements equals 1). Now take $N=P^{3}$.

Let us check that all conditions are satisfied. If vertices $A$ and $B$ are connected by a red edge, then $P(A)$ and $P(B)$ are coprime, hence $P(A) P(B) \mid P$ and $P^{3} \left\lvert\, n(A) n(B)=\frac{P^{4}}{P(A) P(B)}\right.$. If vertices $A$ and $B$ are connected by a blue edge labelled with a prime $q$, then $q^{2}$ divides neither $n(A)$ nor $n(B)$. Hence $q^{3}$ does not divide $n(A) n(B)$.
