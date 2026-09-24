Solution:

First observe that if $n^{2} \mid 3^{n}+1$, then $n$ must be odd, because if $n$ is even, then $3^{n}$ is a square of an odd integer, hence $3^{n}+1 \equiv 1+1=2\pmod{4}$, so $3^{n}+1$ cannot be divisible by $n^{2}$ which is a multiple of $4$.

Assume that for some $n>1$ we have $n^{2} \mid 3^{n}+1$. Let $p$ be the smallest prime divisor of $n$. We have shown that $p>2$. It is also clear that $p \neq 3$, since $3^{n}+1$ is never divisible by $3$. Therefore $p \geq 5$. We have $p \mid 3^{n}+1$, so also $p \mid 3^{2 n}-1$. Let $k$ be the smallest positive integer such that $p \mid 3^{k}-1$. Then we have $k \mid 2 n$, but also $k \mid p-1$ by Fermat's theorem. The numbers $3^{1}-1, 3^{2}-1$ do not have prime divisors other than $2$, so $p \geq 5$ implies $k \geq 3$. This means that $\gcd(2 n, p-1) \geq k \geq 3$, and therefore $\gcd(n, p-1)>1$, which contradicts the fact that $p$ is the smallest prime divisor of $n$. This completes the proof.
