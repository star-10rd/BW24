Set $y=1$ in the first equation. This gives $f(x)=f(x) f(-1)-f(x)+f(1)$, that is, $f(x)(2-f(-1))=f(1)$. Since $f$ is not constant, we must have $f(-1)=2$ and $f(1)=0$. Substituting $-x$ instead of $x$ and $y=-1$ in the first equation gives $f(x)=f(-x) f(1)-f(-x)+f(-1)=-f(-x)+2$. If we let $g(x)=1-f(x)$, this means that $g$ is an odd function.

Rewriting the first equation in terms of $g$ gives

$$
\begin{aligned}
g(x y) & =1-f(x y)=1-((1-g(x))(1-g(-y))-(1-g(x))+(1-g(y))) \\
& =-g(x) g(-y)+g(-y)+g(y)=g(x) g(y)
\end{aligned}
$$

Now the second equation gives (since $g(1)=-g(-1)=1$ )

$$
1-g(1-g(x))=\frac{1}{1-g(1 / x)}=\frac{1}{1-1 / g(x)}=\frac{g(x)}{g(x)-1}
$$

that is,

$$
g(1-g(x))=\frac{1}{1-g(x)}
$$

Since $f$ takes all values except $1, g$ takes all values except 0 . By setting $y=1-g(x)$ it follows that $g(y)=1 / y$ for all $y \neq 0$, that is, $f(x)=1-g(x)=1-1 / x$.

It is easily verified that this function satisfies the conditions of the problem.
