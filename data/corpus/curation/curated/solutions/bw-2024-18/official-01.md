Assume that every prime divides only finitely many terms of the sequence. In particular this means that there exists an integer $N>1$ such that $2 \nmid a_{n}$ for all $n \geq N$. Let $M=\max \left(a_{N}, a_{N+1}\right)$ We will now show by induction that $a_{n} \leq M$ for all $n \geq N$. This is obvious for $n=N$ and $n=N+1$. Now let $n \geq N+2$ be arbitrary and assume that $a_{n-1}, a_{n-2} \leq M$. By the definition of $N$, it is clear that $a_{n-2}, a_{n-1}, a_{n}$ are all odd and so $a_{n} \neq a_{n-1}+a_{n-2}$, but we know that $a_{n} \mid a_{n-1}+a_{n-2}$ and therefore

$$
a_{n} \leq \frac{a_{n-1}+a_{n-2}}{2} \leq \max \left(a_{n-1}, a_{n-2}\right) \leq M
$$

by the induction hypothesis. This completes the induction.
This shows that the sequence is bounded and therefore there are only finitely many primes which divide a term of the sequence. However there are infinitely many terms, that all have a prime divisor, hence some prime must divide infinitely many terms of the sequence.
