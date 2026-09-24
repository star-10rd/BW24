Answer: $(15!)^2$.

Let us define pairs $(a_i, b_i)$ such that $\{a_i, b_i\} = \{p_i, i\}$ and $a_i \ge b_i$. Then for every $i = 1, \dots, 30$ we have $|p_i - i| = a_i - b_i$ and
$$
\sum_{i=1}^{30} |p_i - i| = \sum_{i=1}^{30} (a_i - b_i) = \sum_{i=1}^{30} a_i - \sum_{i=1}^{30} b_i.
$$
It is clear that the sum $\sum_{i=1}^{30} a_i - \sum_{i=1}^{30} b_i$ is maximal when
$$
\{a_1, a_2, \dots, a_{30}\} = \{16, 17, \dots, 30\} \text{ and } \{b_1, b_2, \dots, b_{30}\} = \{1, 2, \dots, 15\}
$$
and the maximal value equals $2(16 + \dots + 30 - 1 - \dots - 15) = 450$. The number of such permutations is $(15!)^2$.
