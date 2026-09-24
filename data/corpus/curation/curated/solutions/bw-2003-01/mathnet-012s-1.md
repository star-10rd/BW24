Solution:

Set $g(x)=\frac{f(x)}{f(1)}$. Function $g$ fulfils (1), (2) and $g(1)=1$. First we prove that if $g$ exists then it is unique. We prove that $g$ is uniquely defined on $x=\frac{p}{q}$ by induction on $\max (p, q)$. If $\max (p, q)=1$ then $x=1$ and $g(1)=1$. If $p=q$ then $x=1$ and $g(x)$ is unique. If $p \neq q$ then we can assume (according to (1)) that $p>q$. From (2) we get $g\left(\frac{p}{q}\right)=\left(1+\frac{q}{p-q}\right) g\left(\frac{p-q}{q}\right)$. The induction assumption and $\max (p, q)>\max (p-q, q) \geq 1$ now give that $g\left(\frac{p}{q}\right)$ is unique.

Define the function $g$ by $g\left(\frac{p}{q}\right)=p q$ where $p$ and $q$ are chosen such that $\operatorname{gcd}(p, q)=1$. It is easily seen that $g$ fulfils (1), (2) and $g(1)=1$. All functions fulfilling (1) and (2) are therefore $f\left(\frac{p}{q}\right)=a p q$, where $\operatorname{gcd}(p, q)=1$ and $a \in \mathbb{Q}_{+}$.
