We can assume that at every dinner there were *exactly* $4$ people (just remove the surplus people from every dinner, which does not affect the condition that no group of $3$ people went together to two different dinners, and can only make the task of finding a suitable $24$-people group harder).

Consider a group $A$ with the greatest possible cardinality such that at every dinner there was a person not from $A$. Assume there are $m$ people in $A$. It is sufficient to show that $m \ge 24$.

By the definition of $A$, for every person $p \notin A$ there exists a group $G_p \subset A \cup \{p\}$ of $4$ people which went to the restaurant together one day. But $G_p \not\subset A$, so there are exactly $3$ elements in $A \cap G_p$. In other words, every $G_p$ consists of $3$ people from $A$ and the person $p$. Also, for different people $p_1, p_2 \notin A$ we obtain distinct intersections $A \cap G_{p_1}, A \cap G_{p_2}$ — otherwise the groups $G_{p_1}, G_{p_2}$ would have $3$ people in common, which by our assumptions would mean that $G_{p_1} = G_{p_2}$, but this is not possible, since $p_1 \in G_{p_1}$ and $p_1 \notin G_{p_2}$.

Thus the number of people not in $A$ (equal to $2011 - m$) does not exceed the number of $3$-element subsets of $A$:
$$
2011 \le m + \binom{m}{3} = \frac{1}{6}(6m + m(m-1)(m-2)) = \frac{1}{6}m(m^2 - 3m + 8).
$$
The right hand side is increasing for $m \ge 1$ and is equal to $1794$ for $m = 23$. Therefore $m \ge 24$, as desired.
