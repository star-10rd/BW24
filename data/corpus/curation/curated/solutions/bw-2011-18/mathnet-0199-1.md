**Answer.** There is only one such pair, namely $(p, q) = (3, 3)$.

**Proof.** Let the pair $(p, q)$ be as described in the statement of the problem.

1.) First we show that $p \neq 2$. Otherwise, there would exist a prime $q$ for which $q^2 + 8$ and $q^3 + 4$ are perfect squares. Because of $q^2 < q^2 + 8$, the second condition gives $(q+1)^2 \le q^2 + 8$ and hence $q \le 3$. But for $q = 2$ or $q = 3$ the expression $q^3 + 4$ fails to be a perfect square. Hence indeed $p \neq 2$ and due to symmetry we also have $q \neq 2$.

2.) Next we consider the special case $p = q$. Then $p^2(p+1)$ is a perfect square, for which reason there exists an integer $n$ satisfying $p = n^2 - 1 = (n+1)(n-1)$. Since $p$ is prime, this factorization yields $n = 2$ and thus $p = 3$. This completes the discussion of the case $p = q$.

3.) So from now on we may suppose that $p$ and $q$ are distinct odd prime. Let $a$ be a positive integer such that $p^2 + q^3 = a^2$, i.e. $q^3 = (a+p)(a-p)$. If both factors $a+p$ and $a-p$ were divisible by $q$, then so were their difference $2p$, which is absurd. So by uniqueness of prime factorization we have $a+p = q^3$ and $a-p = 1$. Subtracting these equations we learn $q^3 = 2p+1$. Due to symmetry we also have $p^3 = 2q+1$. Now if $p < q$, then $q^3 = 2p+1 < 2q+1 = p^3$, which gives a contradiction, and the case $q < p$ is excluded similarly.

Thereby the problem is solved.
