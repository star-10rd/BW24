Answer: nine.

Let

$$
\left\{\left(x_{1}, y_{1}\right), \ldots,\left(x_{m}, y_{m}\right)\right\}, \quad \text { where } \quad x_{1} \leq \cdots \leq x_{m}
$$

be the set, and suppose $m \geq 10$.

A special case of the Erdős-Szekeres Theorem asserts that a real sequence of length $n^{2}+1$ contains a monotonic subsequence of length $n+1$. (Proof: Given a sequence $a_{1} \ldots, a_{n^{2}+1}$, let $p_{i}$ denote the length of the longest increasing subsequence ending with $a_{i}$, and $q_{i}$ the length of the longest decreasing subsequence ending with $a_{i}$. If $i<j$ and $a_{i} \leq a_{j}$, then $p_{i}<p_{j}$. If $a_{i} \geq a_{j}$, then $q_{i}<q_{j}$. Hence all $n^{2}+1$ pairs $\left(p_{i}, q_{i}\right)$ are distinct. If all of them were to satisfy $1 \leq p_{i}, q_{i} \leq n$, it would violate the Pigeon-Hole Principle.)

Applied to the sequence $y_{1}, \ldots, y_{m}$, this will produce a subsequence

$$
y_{i} \leq y_{j} \leq y_{k} \leq y_{l} \quad \text { or } \quad y_{i} \geq y_{j} \geq y_{k} \geq y_{l}
$$

One of the shortest paths from $\left(x_{i}, y_{i}\right)$ to $\left(x_{l}, y_{l}\right)$ will pass through first $\left(x_{j}, y_{j}\right)$ and then $\left(x_{k}, y_{k}\right)$. At least three distinct Manhattan distances will occur.

Conversely, among the nine points

$$
(0,0), \quad( \pm 1, \pm 1), \quad( \pm 2,0), \quad(0, \pm 2),
$$

only the Manhattan distances 2 and 4 occur.
