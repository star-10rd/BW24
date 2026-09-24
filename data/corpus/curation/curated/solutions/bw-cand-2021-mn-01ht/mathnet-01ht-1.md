Answer: $\lceil \frac{2021}{101} \rceil = 21$ colours.

Label the vertices along the cycle: $v_0, v_1, \dots, v_{2020}$. It is clear that the distance from $v_0$ to any of $v_1, \dots, v_{101}$ equals 1; the distance from $v_0$ to any of $v_{102}, \dots, v_{202}$ equals 2, etc. Therefore, the distance from $v_0$ to $v_{2020}$ is the longest one, it equals 20.

E.g., for each $i$, $1 \le i \le 20$, let
$$
V_i = \{v_{101(i-1)+1}, v_{101(i-1)+2}, \dots, v_{101i}\}
$$
and we colour the edges that go from vertices of $V_i$ in $i$-th colour. The edges that starts in $v_0$ we colour in 21-st colour. It is evident that for any two vertices $v_i$ and $v_j$ we can choose a directed path from $v_i$ to $v_j$ that intersects each $V_\ell$ in at most one vertex (with the only one exception: we allow $v_i$ and $v_j$ to belong to the same set $V_\ell$). The edges of this path have pairwise different colours.

Assume that we can colour edges in 20 colours. Then consider a path that in each step jumps from the current vertex $v_i$ to $v_{i+101}$. Here and henceforth we are considering addition modulo 2021. Since $\gcd(101, 2021) = 1$, this path is a Hamiltonian cycle $C$.

For each $v_i$ the sub-path from $v_i$ to $v_{i+2020}$ in $C$ consist of 20 edges and this is the shortest path from $v_i$ to $v_{i+2020}$. Since we have a colouring in 20 colours only, the edges of this path have 20 different colours. Thus the edge between $v_i$ and $v_{(i+101)}$ and the edge from $v_{(i+2020)}$ to $v_{(i+2121)}$ are of the same colour. Since $\gcd(2020, 2021) = 1$, this means that all edges in $C$ have the same colour, a contradiction.
