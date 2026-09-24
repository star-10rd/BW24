Solution:
Observe that $1008=2^{4} \cdot 3^{2} \cdot 7$. First we show that $a$ and $b$ cannot both be even. For suppose the largest of them were equal to $2x$ and the smallest of them equal to $2y$, where $x \geq y \geq 1$. Then
$$
\pm 1008=(2x)^{2y}-(2y)^{2x}
$$
so that $2^{2y}$ divides $1008$. It follows that $y \leq 2$. If $y=2$, then $\pm 1008=(2x)^{4}-4^{2x}$, and
$$
\pm 63=x^{4}-4^{2x-2}=\left(x^{2}+4^{x-1}\right)\left(x^{2}-4^{x-1}\right)\text{.}
$$
But $x^{2}-4^{x-1}$ is easily seen never to divide $63$; already at $x=4$ it is too large. Suppose that $y=1$. Then $\pm 1008=(2x)^{2}-2^{2x}$, and
$$
\pm 252=x^{2}-2^{2x-2}=\left(x+2^{x-1}\right)\left(x-2^{x-1}\right) .
$$
This equation has no solutions. Clearly $x$ must be even. $x=2,4,6,8$ do not work, and when $x \geq 10$, then $x+2^{x-1}>252$.
We see that $a$ and $b$ cannot both be even, so they must both be odd. They cannot both be divisible by $3$, for then $1008=a^{b}-b^{a}$ would be divisible by $27$; therefore neither of them is. Likewise, none of them is divisible by $7$.
Everything will now follow from repeated use of the following fact, where $\varphi$ denotes Euler's totient function:
If $n \mid 1008$, $a$ and $b$ are relatively prime to both $n$ and $\varphi(n)$, and $a \equiv b \bmod \varphi(n)$, then also $a \equiv b \bmod n$.
To prove the fact, use Euler's Totient Theorem: $a^{\varphi(n)} \equiv b^{\varphi(n)} \equiv 1 \bmod n$. From $a \equiv b \equiv d \bmod \varphi(n)$, we get
$$
0 \equiv 1008=a^{b}-b^{a} \equiv a^{d}-b^{d} \bmod n,
$$
and since $d$ is invertible modulo $\varphi(n)$, we may deduce that $a \equiv b \bmod n$.
Now begin with $a \equiv b \equiv 1 \bmod 2$. From $\varphi(4)=2$, $\varphi(8)=4$ and $\varphi(16)=8$, we get congruence of $a$ and $b$ modulo $4$, $8$ and $16$ in turn. We established that $a$ and $b$ are not divisible by $3$. Since $\varphi(3)=2$, we get $a \equiv b$ $\bmod 3$, then from $\varphi(9)=6$, deduce $a \equiv b \bmod 9$. Finally, since $a$ and $b$ are not divisible by $7$, and $\varphi(7)=6$, infer $a \equiv b \bmod 7$.
