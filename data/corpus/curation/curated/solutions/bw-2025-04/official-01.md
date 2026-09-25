## Solution

The answers are

$$
f(x)=0,\qquad f(x)=\frac12,\qquad f(x)=x^2.
$$

Let $P(a,b,c,d)$ denote the assertion of the given functional equation. If $f(x)=\lambda$ for all $x\in\mathbb R$, then $P(a,b,c,d)$ gives $4\lambda^2=2\lambda$, hence $\lambda=0$ or $\lambda=\frac12$. Both functions clearly work. From now on assume that $f$ is not constant.

From $P(0,0,t,t)$ we get

$$
4f(-t)f(0)=f(0)+f(2f(0))
$$

for every $t\in\mathbb R$. If $f(0)\ne0$, this immediately makes $f$ constant, a contradiction. Thus $f(0)=0$.

Assume that $\alpha\ne0$ and $f(\alpha)=0$. From $P(\alpha,0,0,t)$ we obtain $0=f(\alpha t)$ for every $t\in\mathbb R$, which again implies that $f$ is constant. Hence

$$
f(x)=0\iff x=0.
$$

Finally, from $P(x,x,x,x)$ we obtain

$$
0=f(2f(x)-2x^2)
$$

for every $x\in\mathbb R$. Therefore $2f(x)-2x^2=0$, so $f(x)=x^2$ for every $x\in\mathbb R$. Direct computation shows that this function works.
