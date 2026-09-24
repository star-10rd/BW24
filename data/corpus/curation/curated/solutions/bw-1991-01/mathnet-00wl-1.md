Solution:

Let $S = \prod_{1 \leq i < j \leq n} (a_{i} - a_{j})$. Note that $1991 = 11 \cdot 181$. Therefore $S$ is divisible by $1991$ if and only if it is divisible by both $11$ and $181$.

If $n \leq 181$ then we can take the numbers $a_{1}, \ldots, a_{n}$ from distinct congruence classes modulo $181$ so that $S$ will not be divisible by $181$.

On the other hand, if $n \geq 182$ then according to the pigeonhole principle there always exist $a_{i}$ and $a_{j}$ such that $a_{i} - a_{j}$ is divisible by $181$ (and of course there exist $a_{k}$ and $a_{l}$ such that $a_{k} - a_{l}$ is divisible by $11$).
