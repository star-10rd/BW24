Assume the contrary. Then, there is an index $i$ for which $a_i = \max_{0 \le j \le N} a_j$ and $a_i > 0$. This $i$ cannot be equal to $0$ or $N$, since $a_0 = a_N = 0$. Thus, from $a_i \ge a_{i-1}$ and $a_i \ge a_{i+1}$ we obtain
$$
0 < a_i^2 = (a_{i+1} - a_i) + (a_{i-1} - a_i) \le 0,
$$
which is a contradiction.
