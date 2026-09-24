Solution:
Expanding the expressions at both sides we obtain the equivalent inequality
$$
-\sum_{i} x_{i}^{3}+2 \sum_{i} x_{i}^{2}-\frac{2}{n}+\frac{1}{n^{2}} \geqslant 0
$$
It is easy to check that the left hand side is equal to
$$
\sum_{i}\left(2-\frac{2}{n}-x_{i}\right)\left(x_{i}-\frac{1}{n}\right)^{2}
$$
and hence is nonnegative.


Alternative solution. First note that for $n=1$ the required condition holds trivially, and for $n=2$ we have
$$
x(1-x)^{2}+(1-x) x^{2}=x(1-x) \leqslant\left(\frac{x+(1-x)}{2}\right)^{2}=\frac{1}{4}=\left(1-\frac{1}{2}\right)^{2} .
$$
So we may further consider the case $n \geqslant 3$.
Assume first that for each index $i$ the inequality $x_{i}<\frac{2}{3}$ holds. Let $f(x)=x(1-x)^{2}=x-2 x^{2}+x^{3}$, then $f''(x)=6 x-4$. Hence, the function $f$ is concave in the interval $\left[0, \frac{2}{3}\right]$. Thus, from Jensen's inequality we have
$$
\begin{aligned}
\sum_{i=1}^{n} x_{i}\left(1-x_{i}\right)^{2} & =\sum_{i=1}^{n} f\left(x_{i}\right) \leqslant n \cdot f\left(\frac{x_{1}+\ldots+x_{n}}{n}\right)=n \cdot f\left(\frac{1}{n}\right)= \\
& =n \cdot \frac{1}{n}\left(1-\frac{1}{n}\right)^{2}=\left(1-\frac{1}{n}\right)^{2} .
\end{aligned}
$$
If some $x_{i} \geqslant \frac{2}{3}$ then we have
$$
x_{i}\left(1-x_{i}\right)^{2} \leqslant 1 \cdot\left(1-\frac{2}{3}\right)^{2}=\frac{1}{9}
$$
For the rest of the terms we have
$$
\sum_{j \neq i} x_{j}\left(1-x_{j}\right)^{2} \leqslant \sum_{j \neq i} x_{j}=1-x_{i} \leqslant \frac{1}{3}
$$
Hence,
$$
\sum_{i=1}^{n} x_{i}\left(1-x_{i}\right)^{2} \leqslant \frac{1}{9}+\frac{1}{3}=\frac{4}{9} \leqslant\left(1-\frac{1}{n}\right)^{2}
$$
as $n \geqslant 3$.
