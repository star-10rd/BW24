The only such numbers are $n = 1$ and $n = 3$.
If $n$ is even, then so is the last digit of $n^2$. If $n$ is odd and divisible by $5$, then $n = 10k + 5$ for some integer $k \ge 0$ and the second-to-last digit of $n^2 = (10k + 5)^2 = 100k^2 + 100k + 25$ equals $2$.
Thus we may restrict ourselves to numbers of the form $n = 10k \pm m$, where $m \in \{1, 3\}$. Then
$$
n^2 = (10k \pm m)^2 = 100k^2 \pm 20km + m^2 = 20k(5k \pm m) + m^2
$$
and since $m^2 \in \{1, 9\}$, the second-to-last digit of $n^2$ is even unless the number $20k(5k - m)$ is equal to zero. We therefore have $n^2 = m^2$ so $n = 1$ or $n = 3$. These numbers indeed satisfy the required condition.
