Let $P(x, y)$ denote the assertion of the given functional equation. Note that $P(1,0)$ is $f(1)=f(1)+f(0)$ which implies

$$
f(0)=0
$$

Applying this result to $P(x,-x)$ and $P(-x, x)$ where $x \neq 0$ we get:

$$
\begin{aligned}
& 0=(1-\alpha) x f(x)+x f(-x) \\
& 0=(\alpha-1) x f(-x)-x f(x)
\end{aligned}
$$

By adding (1) and (2) and simplifying, we get $0=\alpha x f(-x)-\alpha x f(x)$ which implies

$$
f(x)=f(-x)
$$

for all $x \neq 0$. Since $f(0)=0=f(-0)$, we can conclude that $f$ is even. Therefore (1) simplifies to

$$
0=x f(x)(2-\alpha)
$$

which implies that if $\alpha \neq 2$ then $f(x)=0$ for all $x \in \mathbb{R}$. It is easy to check that this function works. Now let us consider the case $\alpha=2$. The initial functional equation becomes

$$
x f(x+y)=(x+2 y) f(x)+x f(y)
$$

which can be rewritten as

$$
x f(x+y)-(x+y) f(x)=y f(x)+x f(y)
$$

Note that the right hand side is symmetric with respect to $x$ and $y$. From this we can deduce that $x f(x+y)-(x+y) f(x)=y f(x+y)-(x+y) f(y)$ where factorizing yields

$$
(x-y) f(x+y)=(x+y)(f(x)-f(y)) .
$$

By replacing $y$ with $-y$ and using the fact that $f$ is even, we get

$$
(x+y) f(x-y)=(x-y)(f(x)-f(y))
$$

Taking $x=\frac{z+1}{2}$ and $y=\frac{z-1}{2}$ in both (3) and 4, we get

$$
\begin{aligned}
f(z) & =z\left(f\left(\frac{z+1}{2}\right)-f\left(\frac{z-1}{2}\right)\right) \\
z f(1) & =f\left(\frac{z+1}{2}\right)-f\left(\frac{z-1}{2}\right)
\end{aligned}
$$

respectively. Equations (5) and (6) together yield $f(z)=z \cdot z f(1)=z^{2} f(1)$ which must hold for all $z \in \mathbb{R}$.

Thus, the only possible functions that satisfy the given relation for $\alpha=2$ are $f(x)=c x^{2}$ for some real constant $c$. It is easy to check that they indeed work.
