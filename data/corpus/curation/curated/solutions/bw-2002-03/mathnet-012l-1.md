Solution:
Denoting $f(n)=a_{n}$ we have
$$
f\left(m^{2}+n^{2}\right)=f^{2}(m)+f^{2}(n) .
$$
Substituting $m=n=0$ into (7) we get $f(0)=2 f^{2}(0)$, hence either $f(0)=\frac{1}{2}$ or $f(0)=0$. We consider these cases separately.

(1) If $f(0)=\frac{1}{2}$ then substituting $m=1$ and $n=0$ into (7) we obtain $f(1)=f^{2}(1)+\frac{1}{4}$, whence $\left(f(1)-\frac{1}{2}\right)^{2}=0$ and $f(1)=\frac{1}{2}$. Now,
$$
\begin{aligned}
& f(2)=f\left(1^{2}+1^{2}\right)=2 f^{2}(1)=\frac{1}{2}, \\
& f(8)=f\left(2^{2}+2^{2}\right)=2 f^{2}(2)=\frac{1}{2},
\end{aligned}
$$
etc, implying that $f\left(2^{i}\right)=\frac{1}{2}$ for arbitrarily large natural $i$ and, due to monotonity, $f(n)=\frac{1}{2}$ for every natural $n$.

(2) If $f(0)=0$ then by substituting $m=1, n=0$ into (7) we obtain $f(1)=f^{2}(1)$ and hence, $f(1)=0$ or $f(1)=1$. This gives two subcases.

(2a) If $f(0)=0$ and $f(1)=0$ then by the same technique as above we see that $f\left(2^{i}\right)=0$ for arbitrarily large natural $i$ and, due to monotonity, $f(n)=0$ for every natural $n$.

(2b) If $f(0)=0$ and $f(1)=1$ then we compute
$$
\begin{aligned}
& f(2)=f\left(1^{2}+1^{2}\right)=2 f^{2}(1)=2, \\
& f(4)=f\left(2^{2}+0^{2}\right)=f^{2}(2)=4, \\
& f(5)=f\left(2^{2}+1^{2}\right)=f^{2}(2)+f^{2}(1)=5 .
\end{aligned}
$$
Now,
$$
f^{2}(3)+f^{2}(4)=f(25)=f^{2}(5)+f^{2}(0)=25,
$$
hence $f^{2}(3)=25-16=9$ and $f(3)=3$. Further,
$$
\begin{aligned}
f(8) & =f\left(2^{2}+2^{2}\right)=2 f^{2}(2)=8 \\
f(9) & =f\left(3^{2}+0^{2}\right)=f^{2}(3)=9 \\
f(10) & =f\left(3^{2}+1^{2}\right)=f^{2}(3)+f^{2}(1)=10
\end{aligned}
$$
From the equalities
$$
\begin{aligned}
& f^{2}(6)+f^{2}(8)=f^{2}(10)+f^{2}(0), \\
& f^{2}(7)+f^{2}(1)=f^{2}(5)+f^{2}(5)
\end{aligned}
$$
we also conclude that $f(6)=6$ and $f(7)=7$. It remains to note that
$$
\begin{aligned}
& (2 k+1)^{2}+(k-2)^{2}=(2 k-1)^{2}+(k+2)^{2}, \\
& (2 k+2)^{2}+(k-4)^{2}=(2 k-2)^{2}+(k+4)^{2}
\end{aligned}
$$
and by induction it follows that $f(n)=n$ for every natural $n$.
