Answer: the functions $f(x) = 0$ and $f(x) = x$.
A first observation is that
$$
f(1) = f(1^2) = f(1)^2,
$$
so that $f(1)$ is either 0 or 1.
Assume first that $f(1) = 0$. For each positive integer $n$, we find
$$
f(n) = f(n \cdot 1^2) = n f(1)^2 = 0.
$$
Given an arbitrary $x$, find $y$ so that $x^2 + y^2$ becomes a positive integer $n$. Then
$$
f(x)^2 + f(y)^2 = f(x^2 + y^2) = f(n) = 0.
$$
Consequently, $f(x) = 0$ for all $x$.
Now assume $f(0) = 1$. We shall prove that $f(x) = x$ for all $x$. For each positive integer $n$, we find
$$
f(n) = f(n \cdot 1^2) = n f(1)^2 = n.
$$
For a non-negative rational number $\frac{p}{q}$, we find
$$
p^2 = f(p^2) = f\left(q^2 \cdot \left(\frac{p}{q}\right)^2\right) = q^2 f\left(\frac{p}{q}\right)^2,
$$
hence $f(x) = x$ also for rational numbers.
Finally, let $x$ be an irrational number. Select a rational number $\frac{p}{q} > x$. Choosing $y$ so that $x^2 + y^2 = \frac{p^2}{q^2}$, we deduce
$$
\frac{p^2}{q^2} = f\left(\frac{p^2}{q^2}\right) = f(x^2 + y^2) = f(x)^2 + f(y)^2 \ge f(x)^2,
$$
hence $f(x) \le \frac{p}{q}$. Next, select a (positive) rational number $\frac{r}{s} < \sqrt{x}$, i.e. $\frac{r^2}{s^2} < x$. Choosing $z$ so that $\frac{r^2}{s^2} + z^2 = x$, we deduce
$$
f(x) = f\left(\frac{r^2}{s^2} + z^2\right) = f\left(\frac{r}{s}\right)^2 + f(z)^2 = \frac{r^2}{s^2} + f(z)^2 \ge \frac{r^2}{s^2},
$$
hence $f(x) \ge \frac{r^2}{s^2}$. Together, these two bounds for $f(x)$ imply $f(x) = x$, and we are finished.
