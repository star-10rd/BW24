Let $a=\frac{m}{k}$ and $b=\frac{n}{k}$ where $k$ is the least positive common denominator of $a$ and $b$. Then $k, m, n$ are relatively prime, otherwise we could obtain a smaller positive common denominator by dividing them all by their greatest common divisor.

By the conditions of the problem, $s=\frac{m+n}{k}=\frac{m^{2}+n^{2}}{k^{2}}$, giving

$$
(m+n) k=m^{2}+n^{2}
$$

This representation shows that each prime that divides both $k$ and $m$ divides also $n$ and therefore would be a common divisor of $k, m, n$. Analogous consideration can be made about primes dividing both $k$ and $n$. Thus there cannot be such primes, i.e., $\operatorname{gcd}(k, m)=\operatorname{gcd}(k, n)=1$.

As the denominator in the representation of $s$ as an irreducible fraction obviously divides $k$, it suffices to prove that $\operatorname{gcd}(k, 6)=1$. For that, we prove that $3 \nmid k$ and $2 \nmid k$.

Suppose that $3 \mid k$. Then $3 \nmid m$ and $3 \nmid n$, giving $m^{2} \equiv n^{2} \equiv 1(\bmod 3)$. Hence the left-hand side of equation (2) is divisible by 3 while the right-hand side is not, a contradiction.

Suppose that $2 \mid k$. Then $2 \nmid m$ and $2 \nmid n$, giving both $2 \mid m+n$ and $m^{2} \equiv n^{2} \equiv 1(\bmod 4)$. Hence the left-hand side of equation (2) is divisible by 4 while the right-hand side is not, a contradiction.
