We may assume $m \ge n$. It is well known that
$$
\text{gcd}(2^p - 1, 2^q - 1) = 2^{\text{gcd}(p,q)} - 1,
$$
so that
$$
\begin{aligned}
\text{gcd}(2^m - 2^n, 2^{m^2+mn+n^2} - 1) &= \text{gcd}(2^{m-n} - 1, 2^{m^2+mn+n^2} - 1) \\
&= 2^{\text{gcd}(m-n, m^2+mn+n^2)} - 1.
\end{aligned}
$$
Next, consider a divisor $d \mid m-n$. We must have $\text{gcd}(m, d) = 1$, since $m$ and $n$ are relatively prime. It follows that $0 \equiv m^2 + mn + n^2 \equiv 3m^2 \pmod{d}$ is equivalent to $d \mid 3$, and we infer that
$$
\text{gcd}(m - n, m^2 + mn + n^2) = \text{gcd}(m - n, 3),
$$
which is 1 or 3.
Hence $\text{gcd}(2^m - 2^n, 2^{m^2+mn+n^2} - 1)$ may only assume the values 1 and 7. Both values are possible, since $m = 2, n = 1$ gives
$$
\text{gcd}(2^2 - 2^1, 2^{2^2+2 \cdot 1+1^2} - 1) = \text{gcd}(2, 2^7 - 1) = 1,
$$
and $m = 1, n = 1$ gives
$$
\text{gcd}(2^1 - 2^1, 2^{1^2+1 \cdot 1+1^2} - 1) = \text{gcd}(0, 2^3 - 1) = 7.
$$
