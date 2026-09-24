Denote the sums on each piece by
$$
\begin{align*}
S_1 &= a_1 + a_2 + \dots + a_{m_1}, \\
S_2 &= a_{m_1+1} + a_{m_1+2} + \dots + a_{m_2}, \\
\vdots \\
S_k &= a_{m_{k-1}+1} + \dots + a_{m_k}.
\end{align*}
$$
By abuse of notation $S_i$ will both denote the set of numbers enclosed by cuts and its sum, the meaning of which must be determined by the context.

We will start the following algorithm. During this algorithm we will move some elements to the neighbouring piece and construct new sequence of pieces $S^* = (S_1^*, S_2^*, \dots, S_k^*)$. Empty pieces may appear.

(i) Find $p \le k$ such that $S_p$ is the piece with the maximum sum of elements.

(ii) If $S_p \le \min(S_1, \dots, S_k) + 1$ we are done.

(iii) If $S_p > \min(S_1, \dots, S_k) + 1$, let $S_q$ be the pieces with minimum sum of elements nearest to $S_p$ (ties broken arbitrarily) and let $S_h$ be the next pieces to $S_q$ between $S_p$ and $S_q$ (it is non empty by the choice of $S_q$). Then either $p < q$ and then $h = q - 1$ and we define $S^*$ by moving the last element from $S_h = S_{q-1}$ to $S_q$, or $q < p$, and then $h = q + 1$ and $S^*$ is obtained by moving the first element of $S_h = S_{q+1}$ to $S_q$. If $p = h$ then set $S = S^*$ and go to step (1). If $p \ne h$ then set $S = S^*$ and proceed to step (2).

Note that in step (3) each number $S_i^*$ is at most $S_p$ and no new pieces with sum $S_p$ is created. Indeed, $S_h^* < S_h \le S_p$, and for some $j$ $S_q^* = S_q + a_j < S_p$ since $a_j \in [0, 1]$ and $S_p > \min(S_1, \dots, S_k) + 1$. It is clear also that $\max(S_1, \dots, S_k)$ does not increase during the algorithm.

Note also that in step (3) the pieces $S_h$ may become empty. Then, in the next iteration of the algorithm, $q = h$ will be chosen since $\min(S_1, \dots, S_k) = S_h = 0$ and in step (3) $S_h^*$ will become non empty (but one of its neighbours may become empty, etc.).

Claim. Step (3) is repeated at most $kn$ times with $S_p$ being the same maximal pieces in $S^*$ and in $S$.

Proof. Let $s_i$ be the number of elements in $i$-th pieces. Then the number
$$
\sum_{i=1}^{k} |i - p|s_i
$$
takes positive integral values and is always less than $kn$. It is clear that this number decreases during the algorithm.

Thus after at most $kn$ iteration of (3), the algorithm decreases the value of $S_p$ and so goes to (1). Consequently it decreases either the number of pieces with maximal sums or $\max(S_1, \dots, S_k)$. As there are only finitely many ways to split the sum onto pieces, the algorithm eventually terminates at (2). $\square$
