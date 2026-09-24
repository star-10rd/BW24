Assume that there exist positive integers $x$, $y$, $z$ satisfying the given equation. Let's consider two cases:

If $x$ is odd then $7^x \equiv 7 \pmod{8}$. Since each of $y^2$ and $z^2$ can have $0$, $1$, $4$ as the remainders when divided by $8$. We have contradiction because $1 + y^2 + z^2 \equiv 1, 2, 3, 5, 6 \pmod{8}$.

If $x$ is even then $x = 2n$. We have
$$
y^2 + z^2 = 7^{2n} - 1 = (7^n + 1)(7^n - 1)
$$
We can show that the right hand side has at least one prime factor $p \equiv 3 \pmod{4}$ of odd order. Thus $p | (y^2 + z^2)$. It implies that $p | y$ and $p | z$. We have a contradiction because $p$ is a prime factor of even order of the left hand side.
