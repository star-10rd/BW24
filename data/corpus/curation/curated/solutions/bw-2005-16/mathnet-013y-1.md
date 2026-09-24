Solution:

It is sufficient to show the statement for $q$ prime. We need to prove that
$$
(n+1)^{p} \equiv n^{p} \quad(\bmod q) \Longrightarrow q \equiv 1 \quad(\bmod p) .
$$
It is obvious that $\operatorname{gcd}(n, q)=\operatorname{gcd}(n+1, q)=1$ (as $n$ and $n+1$ cannot be divisible by $q$ simultaneously). Hence there exists a positive integer $m$ such that $m n \equiv 1(\bmod q)$. In fact, $m$ is just the multiplicative inverse of $n(\bmod q)$. Take $s=m(n+1)$. It is easy to see that
$$
s^{p} \equiv 1 \quad(\bmod q)
$$
Let $t$ be the smallest positive integer which satisfies $s^{t} \equiv 1(\bmod q)$ ($t$ is the order of $s(\bmod q)$). One can easily prove that $t$ divides $p$. Indeed, write $p=a t+b$ where $0 \leq b<t$. Then
$$
1 \equiv s^{p} \equiv s^{a t+b} \equiv\left(s^{t}\right)^{a} \cdot s^{b} \equiv s^{b} \quad(\bmod q) .
$$
By the definition of $t$, we must have $b=0$. Hence $t$ divides $p$. This means that $t=1$ or $t=p$. However, $t=1$ is easily seen to give a contradiction since then we would have
$$
m(n+1) \equiv 1 \quad(\bmod q) \quad \text{ or } \quad n+1 \equiv n \quad(\bmod q)
$$
Therefore $t=p$, and $p$ is the order of $s(\bmod q)$. By Fermat's little theorem,
$$
s^{q-1} \equiv 1 \quad(\bmod q)
$$
Since $p$ is the order of $s(\bmod q)$, we have that $p$ divides $q-1$, and we are done.
