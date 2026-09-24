We take $f(x) = (x^2 + 1)^2$ and $g(y) = -(y^2 + 1)^2$ and prove that if $p \equiv 3 \pmod 4$ then the equation $f(x) \equiv g(y) \pmod p$ has no solution. Famously, there are infinitely many primes congruent to $3$ modulo $4$.

Recall the fact that if $p \equiv 3 \pmod 4$ then the only solution to the equation $a^2 + b^2 \equiv 0 \pmod p$ is $a \equiv b \equiv 0 \pmod p$. Hence, for $f(x) \equiv g(y) \pmod p$ to hold, we need
$$
(x^2 + 1)^2 + (y^2 + 1)^2 \equiv 0 \pmod{p}
$$
and thus
$$
x^2 + 1 \equiv y^2 + 1 \equiv 0 \pmod{p},
$$
which is impossible for $p \equiv 3 \pmod 4$.
