Solution:
For all reals $x$ we have $P(x)^{2}+1=P\left(x^{2}+1\right)=P(-x)^{2}+1$ and consequently, $(P(x)+P(-x))(P(x)-P(-x))=0$. Now one of the three cases holds:

a.
If both $P(x)+P(-x)$ and $P(x)-P(-x)$ are not identically $0$, then they are nonconstant polynomials and have a finite number of roots, so this case cannot hold.

b.
If $P(x)+P(-x)$ is identically $0$ then obviously, $P(0)=0$. Consider the infinite sequence of integers $a_{0}=0$ and $a_{n+1}=a_{n}^{2}+1$. By induction it is easy to see that $P\left(a_{n}\right)=a_{n}$ for all non-negative integers $n$. Also, $Q(x)=x$ has that property, so $P(x)-Q(x)$ is a polynomial with infinitely many roots, whence $P(x)=x$.

c.
If $P(x)-P(-x)$ is identically $0$ then
$$
P(x)=x^{2n}+b_{n-1} x^{2n-2}+\cdots+b_{1} x^{2}+b_{0}
$$
for some integer $n$ since $P(x)$ is even and it is easy to see that the coefficient of $x^{2n}$ must be $1$. Putting $n=1$ and $n=2$ yield the solutions $P(x)=x^{2}+1$ and $P(x)=x^{4}+2 x^{2}+2$.
