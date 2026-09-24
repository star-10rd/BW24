Answer: $f(x)=0$ for all $x$.

We first notice that if there exists a number $\alpha$ so that $f(\alpha)=0$, then $f(\alpha+y)=$ $f(f(\alpha)+\alpha+y)=f(\alpha+y)+y f(y)$ for all real $y$. Hence $y f(y)=0$ for all $y$, meaning that $f(y)=0$ for all $y \neq 0$. We are therefore done if we can show that $f(0)=0$, as then $f(x)=0$ for all $x$, which is a solution.

Substituting $y=0$ in the equation yields that:

$$
f(f(x)+x)=f(x) \quad \forall x
$$

Substituting $y=f(x)$ in the equation yields that:

$$
f(f(x)+x+f(x))=f(x+f(x))+f(x) f(f(x))
$$

Let $z=x+f(x)$. Then:

$$
\begin{aligned}
f(x) & =f(x+f(x))=f(z)=f(f(z)+z) \\
& =f(f(x+f(x))+x+f(x)) \\
& =f(f(x)+x+f(x)) \\
& =f(x+f(x))+f(x) f(f(x)) \\
& =f(x)+f(x) f(f(x))
\end{aligned}
$$

Hence $f(x) f(f(x))=0$ for all $x$. Letting $x=0$ in (1), we get that $f(f(0))=f(0)$, which means that $f(0)^{2}=f(0) f(f(0))=0$. But then we must have $f(0)=0$.
