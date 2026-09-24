Solution:

Suppose to the contrary that there exists a set $X = \{a_{1}, a_{2}, \ldots, a_{n-1}\}$ violating the statement of the problem, and let $a_{n-2} \not\equiv a_{n-1} \pmod{n}$. Denote $S_{i} = a_{1} + a_{2} + \cdots + a_{i}$, $i = 1, \ldots, n-1$. The conditions of the problem imply that all the numbers $S_{i}$ must give different remainders when divided by $n$. Indeed, if for some $j < k$ we had $S_{j} \equiv S_{k} \pmod{n}$, then $a_{j+1} + a_{j+2} + \cdots + a_{k} = S_{k} - S_{j} \equiv 0 \pmod{n}$.

Consider now the sum $S' = S_{n-3} + a_{n-1}$. We see that $S'$ cannot be congruent to any of the sums $S_{i}$ (for $i \neq n-2$ the above argument works and for $i = n-2$ we use the assumption $a_{n-2} \not\equiv a_{n-1} \pmod{n}$). Thus we have $n$ sums that give pairwise different remainders when divided by $n$, consequently one of them has to give the remainder $0$, a contradiction.
