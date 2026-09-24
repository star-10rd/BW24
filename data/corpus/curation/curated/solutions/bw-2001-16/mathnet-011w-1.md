Solution:
For any prime $p$ we have $f(p) = f(1) - f(p)$ and thus $f(p) = \frac{f(1)}{2}$. If $n$ is a product of two primes $p$ and $q$, then $f(n) = f(p) - f(q)$ or $f(n) = f(q) - f(p)$, so $f(n) = 0$. By the same reasoning we find that if $n$ is a product of three primes, then there is a prime $p$ such that
$$
f(n) = f\left(\frac{n}{p}\right) - f(p) = -f(p) = -\frac{f(1)}{2}.
$$
By simple induction we can show that if $n$ is the product of $k$ primes, then $f(n) = (2 - k) \cdot \frac{f(1)}{2}$. In particular, $f(2001) = f(3 \cdot 23 \cdot 29) = 1$ so $f(1) = -2$. Therefore, $f(2002) = f(2 \cdot 7 \cdot 11 \cdot 13) = -f(1) = 2$.
