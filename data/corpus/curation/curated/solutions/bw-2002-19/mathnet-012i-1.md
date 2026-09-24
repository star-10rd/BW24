Solution:
Suppose $x = \frac{p}{q}$ and $y = \frac{r}{s}$ satisfy the given equation, where $p, q, r, s$ are positive integers and $\operatorname{gcd}(p, q) = 1$, $\operatorname{gcd}(r, s) = 1$. We have
$$
\frac{p}{q} + \frac{r}{s} + \frac{q}{p} + \frac{s}{r} = 3n
$$
or
$$
\left(p^2 + q^2\right) r s + \left(r^2 + s^2\right) p q = 3n p q r s,
$$
so $r s \mid \left(r^2 + s^2\right) p q$. Since $\operatorname{gcd}(r, s) = 1$, we have $\operatorname{gcd}\left(r^2 + s^2, r s\right) = 1$ and $r s \mid p q$. Analogously $p q \mid r s$, so $r s = p q$ and hence there are either two or zero integers divisible by $3$ among $p, q, r, s$. Now we have
$$
\begin{aligned}
\left(p^2 + q^2\right) r s + \left(r^2 + s^2\right) r s & = 3n (r s)^2 \\
p^2 + q^2 + r^2 + s^2 & = 3n r s,
\end{aligned}
$$
but $3n r s \equiv 0 \pmod{3}$ and $p^2 + q^2 + r^2 + s^2$ is congruent to either $1$ or $2$ modulo $3$, a contradiction.
