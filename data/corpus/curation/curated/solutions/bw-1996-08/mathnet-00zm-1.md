Solution:

Let $d = \operatorname{gcd}\left(x_{k}, x_{k+1}\right)$. Then $\operatorname{lcm}\left(x_{k}, x_{k+1}\right) = x_{k} x_{k+1} / d$, and
$$
\operatorname{gcd}\left(x_{k+1}, x_{k+2}\right) = \operatorname{gcd}\left(x_{k+1}, \frac{x_{k} x_{k+1}}{d} + x_{k}\right) = \operatorname{gcd}\left(x_{k+1}, \frac{x_{k}}{d}\left(x_{k+1} + d\right)\right).
$$
Since $x_{k+1}$ and $x_{k} / d$ are relatively prime, this equals $\operatorname{gcd}\left(x_{k+1}, x_{k+1} + d\right) = d$. It follows by induction that $\operatorname{gcd}\left(x_{n}, x_{n+1}\right) = \operatorname{gcd}\left(x_{1}, x_{2}\right) = 19$ for all $n \geq 1$. Hence $\operatorname{gcd}\left(x_{1995}, x_{1996}\right) = 19$.
