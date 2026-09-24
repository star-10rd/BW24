We will prove the more general statement that, for every positive integer $n$, the sum of decimal digits of $2^{2^{2n}}$ is greater than $n$.
Let $m = 2^{2n} = 4^n$, so that we need to consider the digits of $2^m$. It will suffice to prove that at least $n$ of these digits are different from $0$, since the last digit is at least $2$.

Let $0 = e_0 < e_1 < \dots < e_k$ be the positions of non-zero digits, so that $2^m = \sum_{i=0}^k d_i \cdot 10^{e_i}$ with $1 \le d_i \le 9$. Considering this number modulo $10^{e_j}$, for some $0 < j \le k$, the residue $\sum_{i=0}^{j-1} d_i \cdot 10^{e_i}$ is a multiple of $2^{e_j}$, hence at least $2^{e_j}$, but on the other hand it is bounded by $10^{e_{j-1}+1}$.
It follows that $2^{e_j} < 10^{e_{j-1}+1} < 16^{e_{j-1}+1}$, and hence $e_j < 4(e_{j-1} + 1)$. With $e_0 = 4^0 - 1$ and $e_j \le 4(e_{j-1} + 1) - 1$, it follows that $e_j \le 4^j - 1$, for all $0 \le j \le k$. In particular, $e_k \le 4^k - 1$ and hence
$$
2^m = \sum_{i=0}^{k} d_i \cdot 10^{e_i} < 10^{4^k} < 16^{4^k} = 2^{4 \cdot 4^k} = 2^{4^{k+1}},
$$
which yields $4^n = m < 4^{k+1}$, i.e., $n - 1 < k$. In other words, $2^m$ has $k \ge n$ non-zero decimal digits, as claimed.
