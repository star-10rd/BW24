Let $P$ be the set of possible products $ab$, for $a, b \in A$. Clearly, $|P| \ge |aA| \ge \frac{p-1}{2}$, for any $a \in A$. If $|P| \ge \frac{p+1}{2}$, then $|r + P| \ge \frac{p+1}{2}$, too. Hence, $|P| + |r + P| \ge p + 1 > p$, so, by the Pigeonhole Principle, $P$ and $r + P$ must have an element in common. In other words, there are $p_1, p_2$ with $p_1 \equiv r + p_2 \pmod{p}$ and hence $p_1 - p_2 \equiv r \pmod{p}$, which gives a solution of the desired shape from the definition of $P$. So the only remaining case is that of $|P| = |A| = \frac{p-1}{2}$.

Multiplying all elements of $A$ with the same constant and reducing modulo $p$, if necessary, we may assume w.l.o.g. that $1 \in A$. Then $A \subseteq P$ and hence $A = P$. This means that the non-zero elements of $A$ form a group under multiplication.

If $0 \in A$, then this group has size $\frac{p-3}{2}$, which has to divide the group order $p-1$, and hence also has to divide $2 = p-1-2 \cdot \frac{p-3}{2}$. This is impossible for $p > 7$.

Consequently, $0 \notin A$ and the group has size $\frac{p-1}{2}$ and hence is exactly the group of quadratic residues (here we use the existence of primitive roots implicitly).

Replacing $r$ by $r+p$, if necessary, one may assume $r$ to be odd. Then put $b = d := 1 \in A$, as well as
$$
a \equiv \left( \frac{r+1}{2} \right)^2 \pmod{p} \quad \text{and}
$$
$$
c \equiv \left( \frac{r-1}{2} \right)^2 \pmod{p}.
$$
Then $a, c \in A$, too. This yields
$$
ad - bc \equiv a - c \equiv \left(\frac{r+1}{2}\right)^2 - \left(\frac{r-1}{2}\right)^2 \equiv r \pmod{p},
$$
as required.
