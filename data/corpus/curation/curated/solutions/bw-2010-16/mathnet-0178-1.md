The answer is $9$. For every $k$ we have $s(k) \equiv k \pmod{9}$. Calculating remainders modulo $9$ we have the following table

| $m$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|-----|---|---|---|---|---|---|---|---|---|
| $m^2$ | 0 | 1 | 4 | 0 | 7 | 7 | 0 | 4 | 1 |
| $m^6$ | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |

If $d(k) = 3$, then $k = p^2$ with $p$ a prime, but $p^2 \equiv 3 \pmod{9}$ is impossible. This shows that $3$ is not an amusing number. If $d(k) = 5$, then $k = p^4$ with $p$ a prime, but $p^4 \equiv 5 \pmod{9}$ is impossible. This shows that $5$ is not an amusing number. If $d(k) = 7$, then $k = p^6$ with $p$ a prime, but $p^6 \equiv 7 \pmod{9}$ is impossible. This shows that $7$ is not an amusing number. To see that $9$ is amusing, note that $d(36) = s(36) = 9$.
