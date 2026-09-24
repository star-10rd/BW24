Consider the polynomial $P(x)=G(x)-F(x)$. It has degree at most $2 n+1$. By the condition (1) we have $P(x) \geq 0$ for all real $x$. By the condition (2) the numbers $x_{1}, x_{2}, \ldots, x_{n}$ are roots of $P$. Since $P$ is non-negative, each of these roots must have even multiplicity, and therefore $P$ must be divisible by $\left(x-x_{i}\right)^{2}$ for $i=1,2, \ldots, n$. In other words,

$$
P(x)=Q(x)\left(x-x_{1}\right)^{2}\left(x-x_{2}\right)^{2} \cdots\left(x-x_{n}\right)^{2}
$$

for some polynomial $Q$. Calculating degrees we see that $\operatorname{deg} Q=\operatorname{deg} P-2 n \leq 1$. On the other hand, we have $Q(x) \geq 0$ for all real $x$. This can be possible only if $Q$ is constant. Hence

$$
G(x)-F(x)=a\left(x-x_{1}\right)^{2}\left(x-x_{2}\right)^{2} \cdots\left(x-x_{n}\right)^{2}
$$

for some real constant $a \geq 0$. Similarly we prove that

$$
H(x)-F(x)=b\left(x-x_{1}\right)^{2}\left(x-x_{2}\right)^{2} \cdots\left(x-x_{n}\right)^{2}
$$

for some $b \geq 0$. Now we compute that

$$
F(x)+H(x)-2 G(x)=(b-2 a)\left(x-x_{1}\right)^{2}\left(x-x_{2}\right)^{2} \cdots\left(x-x_{n}\right)^{2} .
$$

By the assumption (3) the above number is equal to 0 for some value of $x=x_{0}$ different from $x_{1}, x_{2}, \ldots$, $x_{n}$. Looking at the right-hand side we see that this forces $b-2 a=0$, so the expression becomes identically zero. In other words, we have $F(x)+H(x)-2 G(x)=0$ for all real $x$, which is what we wanted.
