Consider the numbers of $T$, which contain $1$ or $2$. Certainly, no $3$ of them can contain all $6$ digits and all $6$ digits appear. Hence $n \ge 9$.

Consider the partitions:
12, 36, 45,
13, 24, 56,
14, 26, 35,
15, 23, 46,
16, 25, 34.

Since every row is a partition of $\{1, 2, ..., 6\}$, it contains all $6$ digits, $S$ can contain at most two numbers of each of the $5$ rows, i.e. $n \le 10$.

Now we will prove that $n = 9$ is the correct number. Therefore we assume that $n = 10$ and will exclude this case by contradiction. Certainly, there is a digit, say $1$, which does not appear at least twice (otherwise at most $3$ numbers are missing in $S$) and at most $4$ times (otherwise this digit does not appear in the members of $S$ at all). Obviously, every row of the above set of partitions contains exactly $2$ members of $S$. W.l.o.g. assume that $12, 13 \notin S$ and $16 \in S$. Then consider the following partitions, where bold-faced numbers are members of $S$ and numbers in italics are not:
12, 36, 45,
13, 24, 56,
14, 26, 35,
15, 23, 46,
16, 25, 34.

By $16, 45 \in S$ it follows $23 \notin S$ and by $24, 36 \in S$ it follows $15 \notin S$. Now $S$ is missing at least $2$ members ($15, 23$) of the partition $15, 23, 46$, which is a contradiction.
