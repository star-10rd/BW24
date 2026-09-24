For arbitrary positive integer $N$, we will write $f(N)=\frac{d_{2}}{d_{1}}+\frac{d_{3}}{d_{2}}+\ldots+\frac{d_{k}}{d_{k-1}}$ where $1=d_{1}<d_{2}<\ldots<d_{k}=N$ are all positive divisors of $N$. Let us prove by induction that for any positive integer $M$ there is a positive integer $N$ with exactly $M$ different prime divisors such that $f(N)$ is an integer.

- Base case: If $M=1$, this is clearly true (any prime power $N>1$ works).
- Induction step: Assume that the claim holds for $M$ prime divisors. Let $N$ be a positive integer with exactly $M$ prime divisors such that $f(N)$ is an integer. Pick a prime $p>N$. We claim that there is some choice of $\alpha$ such that $f\left(N \cdot p^{\alpha}\right)$ is an integer. Note that since $p>N$, the divisors of $N \cdot p^{\alpha}$ in the ascending order are

$$
\begin{aligned}
& d_{1}, d_{2}, \ldots, d_{k} \\
& p d_{1}, p d_{2}, \ldots, p d_{k} \\
& \ldots \ldots \ldots \ldots \ldots \ldots \ldots \\
& p^{\alpha} d_{1}, p^{\alpha} d_{2}, \ldots, p^{\alpha} d_{k}
\end{aligned}
$$

Hence we get that

$$
f\left(N \cdot p^{\alpha}\right)=(\alpha+1) f(N)+\alpha \cdot \frac{p d_{1}}{d_{k}}
$$

The term $(\alpha+1) f(N)$ is an integer by the choice of $N$. If we pick $\alpha=N$ then $\alpha \cdot \frac{p d_{1}}{d_{k}}=N \cdot \frac{p}{N}=p$ is an integer, too. Thus $f\left(N \cdot p^{\alpha}\right)$ is an integer and we are done.
