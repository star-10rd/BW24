(a) Substituting $a^{2}+b^{2}$ from the second equation to the first one gives

$$
(a b-1)^{2}=c\left(c^{2}+a b\right)+a b+1
$$

Rearranging terms in the obtained equation gives

$$
(a b)^{2}-(c+3) a b-c^{3}=0
$$

which we can consider as a quadratic equation in $a b$. Its discriminant is

$$
D=(c+3)^{2}+4 c^{3}=4 c^{3}+c^{2}+6 c+9=(c+1)\left(4 c^{2}-3 c+9\right)=(c+1)\left(4(c-1)^{2}+5(c+1)\right)
$$

To have solutions in integers, $D$ must be a perfect square. Note that $c+1$ and $4(c-1)^{2}+5(c+1)$ can have no common odd prime factors. Hence $\operatorname{gcd}\left(c+1,4(c-1)^{2}+5(c+1)\right)$ is a power of 2 , so $c+1$ and $4(c-1)^{2}+5(c+1)$ are either both perfect squares or both twice of some perfect squares. In the first case, we are done. In the second case, note that

$$
4(c-1)^{2}+5(c+1) \equiv 4(c-1)^{2}=(2(c-1))^{2} \quad(\bmod 5)
$$

so $4(c-1)^{2}+5(c+1)$ must be $0,1,4$ modulo 5 . On the other hand, twice of a perfect square is $0,2,3$ modulo 5 . Consequently, $c+1 \equiv 0(\bmod 5)$ and $4(c-1)^{2}+5(c+1) \equiv 0(\bmod 5)$, the latter of which implies $c-1 \equiv 0(\bmod 5)$. This leads to contradiction since $c-1$ and $c+1$ cannot be both divisible by 5 .
(b) By the solution of part (a), both $c+1$ and $4 c^{2}-3 c+9$ are perfect squares. However, due to $c>0$ we have $(2 c-1)^{2}=4 c^{2}-4 c+1<4 c^{2}-3 c+9$, and for $c>3$ we also have $(2 c)^{2}=4 c^{2}>4 c^{2}-3 c+9$. Thus $4 c^{2}-3 c+9$ is located between two consecutive perfect squares, which gives a contradiction with it being a square itself.
Out of $c=1,2,3$, only $c=3$ makes $c+1$ a perfect square. In this case, the quadratic equation $(a b)^{2}-(c+3) a b-c^{3}=0$ yields $a b=9$, so $a=1, b=9$ or $a=3, b=3$ or $a=9, b=1$. Out of those, only $a=3, b=3$ satisfies the equations.
Remark: Part (a) of the problem can be solved yet another way. By substituting $a^{2}+b^{2}$ from the second equation to the first one, we obtain

$$
(a b-1)^{2}=c\left(c^{2}+a b\right)+a b+1=c^{3}+1+a b c+a b=(c+1)\left(c^{2}-c+1+a b\right)
$$

Whenever an integer $n$ divides $c+1$, it also divides $a b-1$. Therefore $c \equiv-1(\bmod n)$ and $a b \equiv 1$ $(\bmod n)$. But then $c^{2}-c+1+a b \equiv 4(\bmod n)$, i.e., $n$ divides $c^{2}-c+1+a b-4$. Thus the greatest common divisor of $c+1$ and $c^{2}-c+1+a b$ divides 4 , i.e., it is either 1,2 or 4 . In the first and third case we are done. If their greatest common divisor is 2 , then clearly all three of $a, b, c$ are odd, so $a^{2} \equiv b^{2} \equiv c^{2} \equiv 1(\bmod 8)$. Thus from the second equation we have $a b=a^{2}+b^{2}-c^{2} \equiv 1$ $(\bmod 8)$, so $(a b-1)^{2}$ is divisible by 64 . Now, if $c \equiv 1(\bmod 4)$, then $c^{2}-c+1+a b \equiv 2(\bmod 4)$, which means that $(c+1)\left(c^{2}-c+1+a b\right) \equiv 4(\bmod 8)$, giving a contradiction with $(a b-1)^{2}$ being divisible by 64 . If instead $c \equiv 3(\bmod 4)$, then $c^{2}-c+1+a b \equiv 0(\bmod 4)$. This means that both $c+1$ and $c^{2}-c+1+a b$ are divisible by 4 , giving a contradiction with the assumption that their greatest common divisor is 2 . Therefore $c+1$ must be a perfect square.
