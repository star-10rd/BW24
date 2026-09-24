**Answer.** There does not exist such a set.

**Proof.** Assume that $M = \{a, b, c, d, e\}$ were such a set. As there are $20$ differences of distinct members from $M$ and $20$ residue classes modulo $25$ whose members are not divisible by $5$, the two lines
$$
1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24
$$
and
$$
a-b, a-c, a-d, a-e, b-a, b-c, b-d, b-e, \dots, e-d
$$
contain the same numbers when considered modulo $25$. Taking products, we get
$$
-1 \equiv \prod_{x,y \in M, x \neq y} (x-y) \pmod{25}.
$$
Note that this implies that no two members of $M$ are congruent modulo $5$. Setting
$$
\Omega(x_1, x_2, x_3, x_4, x_5) = \prod_{1 \le i,j \le 5, i \ne j} (x_i - x_j)
$$
for all integers $x_1, \dots, x_5$ the above congruence may be rewritten as
$$
\Omega(a, b, c, d, e) \equiv -1 \pmod{25}.
$$
**Claim.** If $x_1, \dots, x_5$ are integers no two of which are congruent modulo $5$, then
$$
\Omega(x_1 + 5, x_2, x_3, x_4, x_5) - \Omega(x_1, x_2, x_3, x_4, x_5)
$$
is a multiple of $25$.
To see this, we note that this difference is $\prod_{2 \le i < j \le 5} (x_i - x_j)$ times
$$
(x_1 - x_2 + 5)^2 \cdots (x_1 - x_5 + 5)^2 - (x_1 - x_2)^2 \cdots (x_1 - x_5)^2.
$$
The second factor is
$$
\equiv ((x_1 - x_2)^2 + 10(x_1 - x_2)) \cdots ((x_1 - x_2)^2 + 10(x_1 - x_2)) - (x_1 - x_2)^2 \cdots (x_1 - x_5)^2
$$
$$
\equiv 10(x_1 - x_2) \cdots (x_1 - x_5) \cdot \Psi \pmod{25},
$$
where $\Psi$ denotes the sum of all four product involving three of the numbers $x_1-x_2, \dots, x_1-x_4$. So it suffices to show that $\Psi$ is divisible by $5$, and as the four differences $x_1-x_2, \dots, x_1-x_4$ coincide modulo $5$ with the numbers $1, 2, 3, 4$ we do indeed have
$$
\Psi \equiv 1 \cdot 2 \cdot 3 + 1 \cdot 2 \cdot 4 + 1 \cdot 3 \cdot 4 + 2 \cdot 3 \cdot 4 \equiv 50 \equiv 0 \pmod{5}.
$$
This concludes the proof of our claim. Note that as the function $\Omega$ is symmetric in its variables, a similar statement holds when $5$ is added not to $x_1$ but to any other of these variables. Applying this fact iteratedly and using symmetry again, we get
$$
\Omega(a, b, c, d, e) \equiv \Omega(0, 1, 2, 3, 4) \equiv 82944 \equiv 19 \pmod{25},
$$
whereby we have reached a contradiction. This solves our problem.
