Answer: $P(x)=x^{m}$ if $n$ is even; $P(x)= \pm x^{m}$ if $n$ is odd.

Consider first the case of a monomial $P(x)=a x^{m}$ with $a \neq 0$. Then

$$
a x^{\frac{m n(n+1)}{2}}=P\left(x^{\frac{n(n+1)}{2}}\right)=P(x) P\left(x^{2}\right) P\left(x^{3}\right) \cdots P\left(x^{n}\right)=a x^{m} \cdot a x^{2 m} \cdots a x^{n m}=a^{n} x^{\frac{m n(n+1)}{2}}
$$

implies $a^{n}=a$. Thus, $a=1$ when $n$ is even and $a= \pm 1$ when $n$ is odd. Obviously these polynomials satisfy the desired equality.

Suppose now that $P$ is not a monomial. Write $P(x)=a x^{m}+Q(x)$, where $Q$ is non-zero polynomial with $\operatorname{deg} Q=k<m$. We have

$$
\begin{aligned}
a x^{\frac{m n(n+1)}{2}}+Q & \left(x^{\frac{n(n+1)}{2}}\right)=P\left(x^{\frac{n(n+1)}{2}}\right) \\
& =P(x) P\left(x^{2}\right) P\left(x^{3}\right) \cdots P\left(x^{n}\right)=\left(a x^{m}+Q(x)\right)\left(a x^{2 m}+Q\left(x^{2}\right)\right) \cdots\left(a x^{n m}+Q\left(x^{n}\right)\right) .
\end{aligned}
$$

The highest degree of a monomial, on both sides of the equality, is $\frac{m n(n+1)}{2}$. The second highest degree in the right-hand side is

$$
2 m+3 m+\cdots+n m+k=\frac{m(n+2)(n-1)}{2}+k
$$

while in the left-hand side it is $\frac{k n(n+1)}{2}$. Thus

$$
\frac{m(n+2)(n-1)}{2}+k=\frac{k n(n+1)}{2}
$$

which leads to

$$
(m-k)(n+2)(n-1)=0
$$

and so $m=k$, contradicting the assumption that $m>k$. Consequently, no polynomial of the form $a x^{m}+Q(x)$ fulfils the given condition.
