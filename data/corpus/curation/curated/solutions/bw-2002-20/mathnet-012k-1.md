Solution:

For an arithmetic progression $a_{1}, a_{2}, \ldots$ with difference $d$ the following holds:
$$
\begin{aligned}
S_{n} & =\frac{1}{a_{1}}+\frac{1}{a_{2}}+\ldots+\frac{1}{a_{n+1}}=\frac{1}{a_{1}}+\frac{1}{a_{1}+d}+\ldots+\frac{1}{a_{1}+n d} \geqslant \\
& \geqslant \frac{1}{m}\left(\frac{1}{1}+\frac{1}{2}+\ldots+\frac{1}{n+1}\right),
\end{aligned}
$$
where $m=\max \left(a_{1}, d\right)$. Therefore $S_{n}$ tends to infinity when $n$ increases.

On the other hand, the sum of reciprocals of the powers of a natural number $x \neq 1$ is
$$
\frac{1}{x^{2}}+\frac{1}{x^{3}}+\ldots=\frac{\frac{1}{x^{2}}}{1-\frac{1}{x}}=\frac{1}{x(x-1)}
$$
Hence, the sum of reciprocals of the terms of the progression required in the problem cannot exceed
$$
\frac{1}{1}+\frac{1}{1 \cdot 2}+\frac{1}{2 \cdot 3}+\ldots=1+\left(\frac{1}{1}-\frac{1}{2}+\frac{1}{2}-\frac{1}{3}+\ldots\right)=2
$$
a contradiction.

Alternative solution:

Let $a_{k}=a_{0}+d k,\ k=0,1, \ldots$ Choose a prime number $p>d$ and set $k' \equiv\left(p-a_{0}\right) d^{-1} \bmod p^{2}$. Then $a_{k'}=a_{0}+k' d \equiv p \bmod p^{2}$ and hence, $a_{k'}$ can not be a power of a natural number.

Another solution:

There can be at most $\lfloor\sqrt{n}\rfloor$ squares in the set $\{1,2, \ldots, n\}$, at most $\lfloor\sqrt[3]{n}\rfloor$ cubes in the same set, etc. The greatest power that can occur in the set $\{1,2, \ldots, n\}$ is $\left\lfloor\log _{2} n\right\rfloor$ and thus there are no more than
$$
\lfloor\sqrt{n}\rfloor+\lfloor\sqrt[3]{n}\rfloor+\ldots+\left\lfloor\left\lfloor\log _{2} \sqrt[n]{n}\right\rfloor\right.
$$
powers among the numbers $1,2, \ldots, n$. Now we can estimate this sum above:
$$
\begin{aligned}
\lfloor\sqrt{n}\rfloor+\lfloor\sqrt[3]{n}\rfloor+\ldots+\left\lfloor\left\lfloor\log _{2} \sqrt[n]{n}\right\rfloor\right. & \leqslant\lfloor\sqrt{n}\rfloor\left(\left\lfloor\log _{2} n\right\rfloor-1\right)< \\
& <\lfloor\sqrt{n}\rfloor \cdot\left\lfloor\log _{2} n\right\rfloor=o(n)
\end{aligned}
$$
This means that every arithmetic progression grows faster than the share of powers.
