First we will show that for all $\lambda>1$ every such sequence is unbounded. Note that $a_{n}=\lambda \cdot \frac{a_{1}+a_{2}+\ldots+a_{n-1}}{n-1}$ implies

$$
\frac{a_{n}(n-1)}{\lambda}=a_{1}+a_{2}+\ldots+a_{n-1}
$$

for all $n>2024^{2024}$. Therefore

$$
\begin{aligned}
a_{n+1} & =\lambda \cdot \frac{a_{1}+a_{2}+\ldots+a_{n}}{n} \\
& =\lambda\left(\frac{a_{1}+a_{2}+\ldots+a_{n-1}}{n}+\frac{a_{n}}{n}\right) \\
& =\lambda\left(\frac{a_{n}(n-1)}{\lambda n}+\frac{a_{n}}{n}\right) \\
& =a_{n}\left(\frac{n-1}{n}+\frac{\lambda}{n}\right) \\
& =a_{n}\left(1+\frac{\lambda-1}{n}\right)
\end{aligned}
$$

Hence for all $n>2024^{2024}$ and positive integers $k$ we have

$$
a_{n+k}=a_{n} \cdot\left(1+\frac{\lambda-1}{n}\right)\left(1+\frac{\lambda-1}{n+1}\right) \ldots\left(1+\frac{\lambda-1}{n+k-1}\right) .
$$

This implies that

$$
\begin{aligned}
\frac{a_{n+k}}{a_{n}} & =\left(1+\frac{\lambda-1}{n}\right)\left(1+\frac{\lambda-1}{n+1}\right) \ldots\left(1+\frac{\lambda-1}{n+k-1}\right) \\
& >\frac{\lambda-1}{n}+\frac{\lambda-1}{n+1}+\ldots+\frac{\lambda-1}{n+k-1} \\
& =(\lambda-1) \cdot\left(\frac{1}{n}+\frac{1}{n+1}+\ldots+\frac{1}{n+k-1}\right) .
\end{aligned}
$$

As the sequence $\left(1+\frac{1}{2}+\frac{1}{3}+\ldots+\frac{1}{m}\right)_{m \geq 1}$ is unbounded and $\lambda-1>0$, the ratio $\frac{a_{n+k}}{a_{n}}$ is unbounded, implying that the sequence $\left(a_{n}\right)_{n \geq 1}$ is also unbounded.
Now it remains to show that for all $\lambda \leq 1$ every such sequence is bounded. To this end, define $M=\max \left(a_{1}, a_{2}, \ldots, a_{20242024}\right)$. We will show by induction on $n$ that $a_{n} \leq M$ for all $n$. This holds trivially for $n=1,2, \ldots, 2024^{2024}$. For the induction step, assume the desired inequality for some $n \geq 2024^{2024}$ and note that

$$
a_{n+1}=\lambda \cdot \frac{a_{1}+a_{2}+\ldots+a_{n}}{n} \leq \frac{a_{1}+a_{2}+\ldots+a_{n}}{n} \leq \max \left(a_{1}, a_{2}, \ldots, a_{n}\right)=M
$$

The required result follows.
