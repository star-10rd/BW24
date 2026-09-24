Answer: The partition is always possible precisely when $m \ne 4$.
For $m = 3$ it is trivially possible, and for $m = 4$ the four equal numbers $g, g, g, g$ provide a counter-example. Henceforth, we assume $m \ge 5$.
Among all possible partitions $A \sqcup B \sqcup C = \{1, \dots, m\}$ such that
$$
S_A \le S_B \le S_C,
$$
select one for which the difference $S_C - S_A$ is minimal. If there are several such, select one so as to maximise the number of elements in $C$. We will show that $S_C < S_A + S_B$, which is clearly sufficient.
If $C$ consists of a single element, this number is by assumption less than the sum of the remaining ones, hence $S_C < S_A + S_B$ holds true.
Suppose now $C$ contains at least two elements, and let $g_c$ be a minimal number indexed by a $c \in C$. We have the inequality
$$
S_C - S_A \le g_c \le \frac{1}{2}S_C.
$$
The first is by the minimality of $S_C - S_A$, the second by the minimality of $g_c$. These two inequalities together yield
$$
S_A + S_B \ge 2S_A \ge 2(S_C - g_c) \ge S_C.
$$
If either of these inequalities is strict, we are finished.
Hence suppose all inequalities are in fact equalities, so that
$$
S_A = S_B = \frac{1}{2}S_C = g_c.
$$
It follows that $C = \{c, d\}$, where $g_d = g_c$. If $A$ contained more than one element, we could increase the number of elements in $C$ by creating instead a partition
$$
\{1, \dots, m\} = \{c\} \sqcup B \sqcup (A \cup \{d\}),
$$
resulting in the same sums. A similar procedure applies to $B$. Consequently, $A$ and $B$ must be singleton sets, whence
$$
m = |A| + |B| + |C| = 4.
$$
