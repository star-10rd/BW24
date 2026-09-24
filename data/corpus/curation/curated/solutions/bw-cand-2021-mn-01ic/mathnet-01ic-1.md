Observe that $397$ is a prime. If $n$ is divisible by $397$, the statement is trivial.

Fix an arbitrary positive integer $n$ not divisible by $397$. If for $x_1, x_2, x_3, x_4 \in A$, where $(x_1, x_4)$ and $(x_2, x_3)$ are different ordered pairs, we have
$$
x_1 n + x_4 \equiv x_2 n + x_3 \pmod{397},
$$
then we are done (if $x_1 = x_2$ then $x_3 = x_4$ due to this equivalence).

Otherwise, this equivalence is impossible and therefore a map $(a, b) \mapsto an + b$ is an injective map from $A \times A$ to $\mathbb{Z}_{397}$. But this is impossible since the number of elements in $A \times A$ is $400 > 397$. $\square$
