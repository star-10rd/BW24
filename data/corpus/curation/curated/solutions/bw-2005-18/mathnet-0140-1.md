Solution:
Let $x=2^{s} x_{1}$ and $y=2^{t} y_{1}$ where $x_{1}$ and $y_{1}$ are odd integers. Without loss of generality we can assume that $s \geq t$. We have
$$
z=\frac{2^{s+t+2} x_{1} y_{1}}{2^{t}\left(2^{s-t} x_{1}+y_{1}\right)}=\frac{2^{s+2} x_{1} y_{1}}{2^{s-t} x_{1}+y_{1}}
$$
If $s \neq t$, then the denominator is odd and therefore $z$ is even. So we have $s=t$ and $z=\frac{2^{s+2} x_{1} y_{1}}{x_{1}+y_{1}}$. Let $x_{1}=d x_{2},\ y_{1}=d y_{2}$ with $\operatorname{gcd}\left(x_{2}, y_{2}\right)=1$. So $z=\frac{2^{s+2} d x_{2} y_{2}}{x_{2}+y_{2}}$. As $z$ is odd, it must be that $x_{2}+y_{2}$ is divisible by $2^{s+2} \geq 4$, so $x_{2}+y_{2}$ is divisible by $4$. As $x_{2}$ and $y_{2}$ are odd integers, one of them, say $x_{2}$, is congruent to $3$ modulo $4$. But $\operatorname{gcd}\left(x_{2}, x_{2}+y_{2}\right)=1$, so $x_{2}$ is a divisor of $z$.
