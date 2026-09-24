This occurs exactly if $n = 1$ or $n = 3$.

To see this, first note that if $n$ is even, then $2^{n+1} - n^2$ is a multiple of $4$ and hence in particular composite. Now let $n$ be odd. Writing $n = 2m - 1$ for some positive integer $m$, we find
$$
2^{n+1} - n^2 = (2^m)^2 - (2m-1)^2 = [2^m + (2m-1)] \cdot [2^m - (2m-1)].
$$
Note that if $m \ge 3$, then, e.g. by Bernoulli's inequality, we have $2^{m-1} > m$ and hence $2^m - (2m-1) > 1$, wherefore the above factorization indicates that $2^{n+1} - n^2$ is again composite. It remains to observe that if $n \in \{1, 3\}$, then $2^{n+1} - n^2$ is indeed a prime number.
