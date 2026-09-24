Calculating modulo $p$ we have that $(p-k)\frac{1}{k} = -1$ so $\frac{1}{p-k} = -\frac{1}{k}$. If $p$ is odd, we set $m = \frac{p-1}{2}$ and it follows that
$$
\sum_{k=1}^{p-1} \frac{1}{k} = \sum_{k=1}^{m} \left(\frac{1}{k} + \frac{1}{p-k}\right) = 0.
$$
For $\ell$ such that $m < \ell < p-1$ we calculate the $\ell$-th term in the sequence
$$
\sum_{k=1}^{\ell} \frac{1}{k} = \sum_{k=1}^{\ell} \frac{1}{k} - \sum_{k=1}^{p-1} \frac{1}{k} = - \sum_{k=\ell+1}^{p-1} \frac{1}{k} = - \sum_{k=1}^{p-\ell-1} \frac{1}{p-k} = \sum_{k=1}^{p-\ell-1} \frac{1}{k}
$$
and see that it is equal to one of the first $m-1$ terms in the sequence. We conclude that there are at most $m+1 = \frac{p+1}{2}$ distinct terms in the sequence (the first $m$ and the last one).

If $p$ is the even prime $2$, then the sequence contains only one term $1$, and $1 < (2+1)/2$.
