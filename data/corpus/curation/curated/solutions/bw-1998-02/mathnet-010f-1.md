Solution:

By the cosine law, a triple of positive integers $(a, b, c)$ is quasi-Pythagorean if and only if
$$
c^{2} = a^{2} + a b + b^{2}
$$
If a triple $(a, b, c)$ with a common divisor $d > 1$ satisfies (1), then so does the reduced triple $\left(\frac{a}{d}, \frac{b}{d}, \frac{c}{d}\right)$. Hence it suffices to prove that in every irreducible quasi-Pythagorean triple the greatest term $c$ has a prime divisor greater than 5. Actually, we will show that in that case every prime divisor of $c$ is greater than 5.

Let $(a, b, c)$ be an irreducible triple satisfying (1). Note that then $a, b$ and $c$ are pairwise coprime. We have to show that $c$ is not divisible by 2, 3 or 5.

If $c$ were even, then $a$ and $b$ (coprime to $c$) should be odd, and (1) would not hold.

Suppose now that $c$ is divisible by 3, and rewrite (1) as
$$
4 c^{2} = (a + 2b)^{2} + 3 a^{2}
$$
Then $a + 2b$ must be divisible by 3. Since $a$ is coprime to $c$, the number $3 a^{2}$ is not divisible by 9. This yields a contradiction since the remaining terms in (2) are divisible by 9.

Finally, suppose $c$ is divisible by 5 (and hence $a$ is not). Again we get a contradiction with (2) since the square of every integer is congruent to 0, 1 or $-1$ modulo 5; so $4 c^{2} - 3 a^{2} \equiv \pm 2 \pmod{5}$ and it cannot be equal to $(a + 2b)^{2}$. This completes the proof.
