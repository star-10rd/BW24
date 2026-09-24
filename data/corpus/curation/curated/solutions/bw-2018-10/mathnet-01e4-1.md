Answer: $n = 14$.

At first, let's show that for $n = 13$ the first player can ensure that after his second move no $4$ consecutive numbers are left. In the first move he can erase number $4$ and in the second move he can ensure that numbers $8$, $9$ and $10$ are erased. No interval of length $4$ is left.

If $n = 14$ the second player can use the following strategy. Let the first player erase number $k$ in his first move, because of symmetry assume that $k \le 7$. If $k \ge 5$ then the second player can erase $k+1$ and $k+2$ and there are two intervals left of length at least $4$: $1..(k-1)$ and $(k+3)..14$, but the first player can destroy at most one of them. But if $k \le 4$, then the second player can erase numbers $9$ and $10$ in his first move and again there are two intervals left of length at least $4$: $(k+1)..8$ and $11..14$.
