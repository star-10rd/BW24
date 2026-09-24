Solution:

0 and $\frac{1}{2}$.

Obviously the constant functions $f(n) = 0$ and $f(n) = \frac{1}{2}$ provide solutions.

We show that there are no other solutions. Assume $f(2001) \neq 0$. Since $2001 = 3 \cdot 667$ and $\operatorname{gcd}(3, 667) = 1$, then
$$
f(2001) = f(1) \cdot (f(3) + f(667)),
$$
and $f(1) \neq 0$. Since $\operatorname{gcd}(2001, 2001) = 2001$ then
$$
f\left(2001^{2}\right) = f(2001)(2 \cdot f(1)) \neq 0.
$$
Also $\operatorname{gcd}\left(2001, 2001^{3}\right) = 2001$, so
$$
f\left(2001^{4}\right) = f(2001) \cdot \left(f(1) + f\left(2001^{2}\right)\right) = f(1) f(2001)(1 + 2 f(2001))
$$
On the other hand, $\operatorname{gcd}\left(2001^{2}, 2001^{2}\right) = 2001^{2}$ and
$$
f\left(2001^{4}\right) = f\left(2001^{2}\right) \cdot (f(1) + f(1)) = 2 f(1) f\left(2001^{2}\right) = 4 f(1)^{2} f(2001).
$$
So $4 f(1) = 1 + 2 f(2001)$ and $f(2001) = 2 f(1) - \frac{1}{2}$. Exactly the same argument starting from $f\left(2001^{2}\right) \neq 0$ instead of $f(2001)$ shows that $f\left(2001^{2}\right) = 2 f(1) - \frac{1}{2}$. So
$$
2 f(1) - \frac{1}{2} = 2 f(1)\left(2 f(1) - \frac{1}{2}\right).
$$
Since $2 f(1) - \frac{1}{2} = f(2001) \neq 0$, we have $f(1) = \frac{1}{2}$, which implies $f(2001) = 2 f(1) - \frac{1}{2} = \frac{1}{2}$.
