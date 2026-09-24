Obviously all the roots have to be negative by the positivity of the coefficients. If at least two of the roots are unequal to -1 , then both of them have to be powers of $p_{0}$. Now Vieta's formulæ yield $p_{0} \mid a_{1}$, which is a contradiction. Thus we can factor $f$ as

$$
f(x)=\left(x+a_{0}\right)(x+1)^{n-1}
$$

Expanding yields

$$
a_{2}=\left(\begin{array}{c}
n-1 \\
1
\end{array}\right)+a_{0}\left(\begin{array}{c}
n-1 \\
2
\end{array}\right) \quad \text { and } \quad a_{n-2}=a_{0}\left(\begin{array}{l}
n-1 \\
n-2
\end{array}\right)+\left(\begin{array}{l}
n-1 \\
n-3
\end{array}\right)
$$

If $n \geq 5$, we see that $2 \neq n-2$ and so the two coefficients above are relatively prime, being powers of two distinct primes. However, depending on the parity of $n$, we have that $a_{2}$ and $a_{n-2}$ are both divisible by $n-1$ or $\frac{n-1}{2}$, which is a contradiction.

For $n=1,2,3,4$, the following polynomials meet the requirements:

$$
\begin{aligned}
& f_{1}(x)=x+2 \\
& f_{2}(x)=(x+2)(x+1)=x^{2}+3 x+2 \\
& f_{3}(x)=(x+3)(x+1)^{2}=x^{3}+5 x^{2}+7 x+3 \\
& f_{4}(x)=(x+2)(x+1)^{3}=x^{4}+5 x^{3}+9 x^{2}+7 x+2
\end{aligned}
$$
