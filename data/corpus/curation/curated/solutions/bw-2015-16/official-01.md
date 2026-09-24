Answer: The equality holds only for $n=3$.

It is easy to see that $P(n) \neq P(n+1)$. Therefore we need also that $\lfloor\sqrt{n}\rfloor \neq\lfloor\sqrt{n+1}\rfloor$ in order for equality to hold. This is only possible if $n+1$ is a perfect square. In this case,

$$
\lfloor\sqrt{n}\rfloor+1=\lfloor\sqrt{n+1}\rfloor
$$

and hence $P(n)=P(n+1)+1$. As both $P(n)$ and $P(n+1)$ are primes, it must be that $P(n)=3$ and $P(n+1)=2$.

It follows that $n=3^{a}$ and $n+1=2^{b}$, and we are required to solve the equation $3^{a}=2^{b}-1$. Calculating modulo 3 , we find that $b$ is even. Put $b=2 c$ :

$$
3^{a}=\left(2^{c}-1\right)\left(2^{c}+1\right) .
$$

As both factors cannot be divisible by 3 (their difference is 2 ), $2^{c}-1=1$. From this we get $c=1$, which leads to $n=3$.
