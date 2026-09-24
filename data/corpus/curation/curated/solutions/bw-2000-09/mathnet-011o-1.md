Solution:

Label the squares by pairs of integers $(i, j)$ where $1 \leqslant i, j \leqslant 2k$. Let $L$ be the set of all such pairs. Define a function $f: L \rightarrow L$ by
$$
f(i, j)= \begin{cases}
(i+1, j+k) & \text{ for } i \text{ odd and } j \leqslant k \\
(i-1, j+k) & \text{ for } i \text{ even and } j \leqslant k, \\
(i+1, j-k) & \text{ for } i \text{ odd and } j>k, \\
(i-1, j-k) & \text{ for } i \text{ even and } j>k
\end{cases}
$$
It is easy to see that $f$ is one-to-one. Let $X \subset L$ be the set of $\times$'d squares and $O \subset L$ the set of $\circ$'d squares. Since the distance from $(i, j)$ to $(i \pm 1, j \pm k)$ is $\sqrt{1+k^{2}}$, we have $f(i, j) \in O$ for every $(i, j) \in X$. Now, since $f$ is one-to-one, the number of elements in $f(S)$ is the same as the number of elements in $S$. As $f(X) \subset O$, the number of elements in $X$ is at most the number of elements in $O$, or $m \leqslant n$.
