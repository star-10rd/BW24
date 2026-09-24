Solution:
Consider the equality
$$
n^{6}-1=\left(n^{2}-n+1\right)(n+1)\left(n^{3}-1\right) \text{.}
$$
The integer $n^{2}-n+1=n(n-1)+1$ clearly has an odd divisor $p$. Then $p \mid n^{3}+1$. Therefore, $p$ does not divide $n^{3}-1$ and consequently $p \mid n^{2}-1$. This implies that $p$ divides $\left(n^{3}+1\right)+\left(n^{2}-1\right)=n^{2}(n+1)$. As $p$ does not divide $n$, we obtain $p \mid n+1$. Also, $p \mid\left(n^{2}-1\right)-\left(n^{2}-n+1\right)=n-2$. From $p \mid n+1$ and $p \mid n-2$ it follows that $p=3$, so $n^{2}-n+1=3^{r}$ for some positive integer $r$.
The discriminant of the quadratic $n^{2}-n+\left(1-3^{r}\right)$ must be a square of an integer, hence
$$
1-4\left(1-3^{r}\right)=3\left(4 \cdot 3^{r-1}-1\right)
$$
must be a square of an integer. Since for $r \geqslant 2$ the number $4 \cdot 3^{r-1}-1$ is not divisible by $3$, this is possible only if $r=1$. So $n^{2}-n-2=0$ and $n=2$.
