Solution:

For a fixed point $x \in P$, let $T_{x}$ be the set of all triangles with vertices in $P$ which have $x$ as a vertex. Clearly, $\left|T_{x}\right|=\left(\begin{array}{c}n-1 \\ 2\end{array}\right)$, and each triangle in $T_{x}$ has a side which is not a side of any other triangle in $T_{x}$. For any $x, y \in P$ such that $x \neq y$, we have $T_{x} \neq T_{y}$ if and only if $n \geqslant 4$. We will show that any possible set $T$ is equal to $T_{x}$ for some $x \in P$, i.e. that the answer is 1 for $n=3$ and $n$ for $n \geqslant 4$.

Let
$$
T=\left\{t_{i}: i=1,2, \ldots,\left(\begin{array}{c}
n-1 \\
2
\end{array}\right)\right\}, \quad S=\left\{s_{i}: i=1,2, \ldots,\left(\begin{array}{c}
n-1 \\
2
\end{array}\right)\right\}
$$
such that $T$ is a set of triangles whose vertices are all in $P$, and $s_{i}$ is a side of $t_{i}$ but not of any $t_{j}$, $j \neq i$. Furthermore, let $C$ be the collection of all the $\left(\begin{array}{l}n \\ 3\end{array}\right)$ triangles whose vertices are in $P$. Note that
$$
|C \backslash T|=\left(\begin{array}{c}
n \\
3
\end{array}\right)-\left(\begin{array}{c}
n-1 \\
2
\end{array}\right)=\left(\begin{array}{c}
n-1 \\
3
\end{array}\right)
$$
Let $m$ be the number of pairs $(s, t)$ such that $s \in S$ is a side of $t \in C \backslash T$. Since every $s \in S$ is a side of exactly $n-3$ triangles from $C \backslash T$, we have
$$
m=|S| \cdot(n-3)=\left(\begin{array}{c}
n-1 \\
2
\end{array}\right) \cdot(n-3)=3 \cdot\left(\begin{array}{c}
n-1 \\
3
\end{array}\right)=3 \cdot|C \backslash T|
$$
On the other hand, every $t \in C \backslash T$ has at most three sides from $S$. By the above equality, for every $t \in C \backslash T$, all its sides must be in $S$.

Assume that for $p \in P$ there is a side $s \in S$ such that $p$ is an endpoint of $s$. Then $p$ is also a vertex of each of the $n-3$ triangles in $C \backslash T$ which have $s$ as a side. Consequently, $p$ is an endpoint of $n-2$ sides in $S$. Since every side in $S$ has exactly 2 endpoints, the number of points $p \in P$ which occur as a vertex of some $s \in S$ is
$$
\frac{2 \cdot|S|}{n-2}=\frac{2}{n-2} \cdot\left(\begin{array}{c}
n-1 \\
2
\end{array}\right)=n-1
$$
Consequently, there is an $x \in P$ which is not an endpoint of any $s \in S$, and hence $T$ must be equal to $T_{x}$.
