Solution:
Let $y_{n}=2 x_{n}-1$. Then
$$
\begin{aligned}
y_{n} & =2\left(2 x_{n-1} x_{n-2}-x_{n-1}-x_{n-2}+1\right)-1 \\
& =4 x_{n-1} x_{n-2}-2 x_{n-1}-2 x_{n-2}+1 \\
& =\left(2 x_{n-1}-1\right)\left(2 x_{n-2}-1\right)=y_{n-1} y_{n-2}
\end{aligned}
$$
when $n>1$. Notice that $y_{n+3}=y_{n+2} y_{n+1}=y_{n+1}^{2} y_{n}$. We see that $y_{n+3}$ is a perfect square if and only if $y_{n}$ is a perfect square. Hence $y_{3 n}$ is a perfect square for all $n \geq 1$ exactly when $y_{0}$ is a perfect square. Since $y_{0}=2 a-1$, the result is obtained when $a=\frac{(2 m-1)^{2}+1}{2}$ for all positive integers $m$.
