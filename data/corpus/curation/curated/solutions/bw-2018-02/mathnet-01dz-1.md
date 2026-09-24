Observe that the sum of numbers in the first column is at most $1 \cdot 100 = 100$, the sum in the first and second columns is at most $1 \cdot 100 + 2 \cdot 99$, the sum in the first, second and third columns is at most $1 \cdot 100 + 2 \cdot 99 + 3 \cdot 98$, etc. But the sum of all nonzero numbers equals $\sum_{i=1}^{100} i(101 - i)$, therefore the sum in the columns from $31$-th to $100$-th is at least
$$
\sum_{i=31}^{100} i(101-i) = \sum_{i=1}^{70} i(101-i) = 101 \sum_{i=1}^{70} i - \sum_{i=1}^{70} i^2 = 35 \cdot 71(101 - 141/3) = 70 \cdot 27 \cdot 71.
$$
Therefore one of these columns has a sum at least $27 \cdot 71 = 1917$. Therefore the ratio of sums in this column and in the first one is more than $19$.
