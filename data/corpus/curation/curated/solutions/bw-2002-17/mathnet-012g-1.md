Solution:
Define
$$
x_{n}^{k}=\left(\begin{array}{l}
n \\
k
\end{array}\right)
$$
and note that
$$
x_{n+1}^{k}-x_{n}^{k}=\left(\begin{array}{c}
n+1 \\
k
\end{array}\right)-\left(\begin{array}{l}
n \\
k
\end{array}\right)=\left(\begin{array}{c}
n \\
k-1
\end{array}\right)=x_{n}^{k-1}
$$
Let $m$ be any positive integer. We will prove by induction on $k$ that the sequence $\{x_{n}^{k}\}_{n=k}^{\infty}$ is periodic modulo $m$. For $k=1$ it is obvious that $x_{n}^{k}=n$ is periodic modulo $m$ with period $m$. Therefore it will suffice to show that the following is true: the sequence $\{x_{n}\}$ is periodic modulo $m$ if its difference sequence, $d_{n}=x_{n+1}-x_{n}$, is periodic modulo $m$.
Furthermore, if $t$ then the period of $\{x_{n}\}$ is equal to $h t$ where $h$ is the smallest positive integer such that $h\left(x_{t}-x_{0}\right) \equiv 0$ modulo $m$.
Indeed, let $t$ be the period of $\{d_{n}\}$ and $h$ be the smallest positive integer such that $h\left(x_{t}-x_{0}\right) \equiv 0$ modulo $m$. Then
$$
\begin{aligned}
x_{n+h t} & =x_{0}+\sum_{j=0}^{n+h t-1} d_{j}=x_{0}+\sum_{j=0}^{n-1} d_{j}+h\left(\sum_{j=0}^{t-1} d_{j}\right)= \\
& =x_{n}+h\left(x_{t}-x_{0}\right) \equiv x_{n}(\bmod m)
\end{aligned}
$$
for all $n$, so the sequence $\{x_{n}\}$ is in fact periodic modulo $m$ (with a period dividing $h t$ ).
