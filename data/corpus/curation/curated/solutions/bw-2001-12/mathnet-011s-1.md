Solution:
By Hölder's inequality,
$$
\sum_{i=1}^{n} a^{3}=\sum_{i=1}^{n}\left(a_{i} \cdot a_{i}^{2}\right) \leqslant\left(\sum_{i=1}^{n} a_{i}^{5 / 3}\right)^{3 / 5} \cdot\left(\sum_{i=1}^{n}\left(a_{i}^{2}\right)^{5 / 2}\right)^{2 / 5} .
$$
We will show that
$$
\sum_{i=1}^{n} a_{i}^{5 / 3} \leqslant\left(\sum_{i=1}^{n} a_{i}\right)^{5 / 3}
$$
Let $S=\sum_{i=1}^{n} a_{i}$, then (4) is equivalent to
$$
\sum_{i=1}^{n}\left(\frac{a_{i}}{S}\right)^{5 / 3} \leqslant 1=\sum_{i=1}^{n} \frac{a_{i}}{S}
$$
which holds since $0<\frac{a_{i}}{S} \leqslant 1$ and $\frac{5}{3}>1$ yield $\left(\frac{a_{i}}{S}\right)^{5 / 3} \leqslant \frac{a_{i}}{S}$. So,
$$
\sum_{i=1}^{n} a_{i}^{3} \leqslant\left(\sum_{i=1}^{n} a_{i}\right) \cdot\left(\sum_{i=1}^{n} a_{i}^{5}\right)^{2 / 5}
$$
which gives $\sum_{i=1}^{n} a_{i} \geqslant \frac{3}{5^{2 / 5}}>\frac{3}{2}$, since $2^{5}>5^{2}$ and hence $2>5^{2 / 5}$.
