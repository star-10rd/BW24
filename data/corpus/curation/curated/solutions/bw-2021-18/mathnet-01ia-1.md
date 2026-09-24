Observe that $(a, b, c) = (0, 0, 0)$ is a solution. Assume that the equation has a solution $(a_0, b_0, c_0) \neq (0, 0, 0)$. Let $d = \gcd(a_0, b_0, c_0) > 0$. Let $(a, b, c) = (a_0/d, b_0/d, c_0/d)$. Then $\gcd(a, b, c) = 1$. From $5a_0^2 + 9b_0^2 = 13c_0^2$ it follows that:
$$
5a^2 + 9b^2 = 5 \left(\frac{a_0}{d}\right)^2 + 9 \left(\frac{b_0}{d}\right)^2 = \frac{5a_0^2 + 9b_0^2}{d^2} = \frac{13c_0^2}{d^2} = 13 \left(\frac{c_0}{d}\right)^2 = 13c^2
$$
hence $(a, b, c)$ is also a solution.
As $(a_0, b_0, c_0) \neq (0, 0, 0)$ it follows that $(a, b, c) \neq (0, 0, 0)$. Consider the equation modulo $13$. It follows that $5a^2 + 9b^2 = 13c^2 \equiv 0 \pmod{13}$, that is $5a^2 \equiv -9b^2 \equiv 4b^2 \pmod{13}$. Multiplying by $8$ gives:
$$
a^2 \equiv 40a^2 = 8 \cdot 5a^2 \equiv 8 \cdot 4b^2 = 32b^2 \equiv 6 \cdot b^2 \pmod{13}
$$
If $13\mid b$ then $6b^2 \equiv 6 \cdot 0^2 = 0 \pmod{13}$ and therefore $a^2 \equiv 0 \pmod{13}$, that is $13\mid a^2$. As $13$ is prime it follows that $13\mid a$. Hence $13$ divides $a$ and $b$. It follows that $13^2\mid 5a^2 + 9b^2 = 13c^2$. Consequently $13$ divides $c^2$. As $13$ is prime, $13\mid c$. This means that $13$ divides $a, b$ and $c$ contradicting the fact that $\gcd(a, b, c) = 1$. We conclude that $13 \nmid b$ does not hold.
As $13\mid b$ does not hold and $13$ is a prime it follows that $b$ and $13$ are relatively prime. Therefore there exists $x \in \mathbb{Z}$ such that $b \cdot x \equiv 1 \pmod{13}$. Multiplying by $x^2$ gives:
$$
(a \cdot x)^2 = a^2 \cdot x^2 \equiv 6 \cdot b^2 \cdot x^2 = 6 \cdot (b \cdot x)^2 \equiv 6 \cdot 1^2 = 6 \pmod{13}
$$
That is $y^2 \equiv 6 \pmod{13}$ where $y = a \cdot x$. As $y^2 \equiv 6 \pmod{13}$ it follows that $y$ and $13$ are relatively prime. By Fermat's little theorem it follows that $y^{12} \equiv 1 \pmod{13}$. Hence:
$$
\begin{aligned}
1 &\equiv y^{12} = (y^2)^6 \equiv 6^6 = (6^2)^3 \equiv (36)^3 \equiv 10^3 \\
&= 10^2 \cdot 10 = 100 \cdot 10 \equiv 9 \cdot 10 = 90 \equiv 12 \pmod{13}
\end{aligned}
$$
but $1 \not\equiv 12 \pmod{13}$ so we have a contradiction. We conclude that the equation $5a^2 + 9b^2 = 13c^2$ has no solution besides the solution $(a, b, c) = (0, 0, 0)$.

$\boxed{(a, b, c) = (0, 0, 0)}$ is the only integer solution.
