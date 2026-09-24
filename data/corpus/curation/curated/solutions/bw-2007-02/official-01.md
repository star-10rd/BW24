Assume that such an exact sequence exists. Then by induction we must have $a_{2 k}^{2}=a_{2 k-2}^{2}+a_{4 k-2} a_{2}=$ $a_{2 k-2}^{2}=0$.

Next we prove by induction that $a_{2 n+1}=(-1)^{n}$. We have $a_{3}=a_{2}^{2}-a_{1}^{2}=-1$ and

$$
\begin{aligned}
& a_{4 k+1}=a_{2 k+1}^{2}-a_{2 k}^{2}=1, \\
& a_{4 k+3}=a_{2 k+2}^{2}-a_{2 k+1}^{2}=-1,
\end{aligned}
$$

when $k \geq 1$. This shows that if such a sequence exists, necessarily $a_{2007}=-1$.

It remains to show that the sequence defined by $a_{n}=0$ for $n$ even, $a_{n}=1$ when $n \equiv 1(\bmod 4)$ and $a_{n}=-1$ when $n \equiv 3(\bmod 4)$ is exact:

If $n$ and $m$ have the same parity, then $n-m$ and $n+m$ are both even, and then clearly $a_{n}^{2}-a_{m}^{2}=0=$ $a_{n-m} a_{n+m}$.

If $n$ is odd and $m$ is even, $n-m \equiv n+m(\bmod 4)$, so $a_{n}^{2}-a_{m}^{2}=1=a_{n-m} a_{n+m}$, since both factors are either -1 or +1 .

Finally, if $n$ is even and $m$ is odd, $n-m \not \equiv n+m(\bmod 4)$, so $a_{n}^{2}-a_{m}^{2}=-1=a_{n-m} a_{n+m}$, since exactly one factor is -1 and one factor is +1 .
