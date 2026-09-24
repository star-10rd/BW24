Let $S$ be the given group of $30$ people. Consider all subsets $A \subset S$ such that no member of $A$ received a hat from a member of $A$. Among such subsets, let $T$ be a subset of maximal cardinality. The assertion of the problem is that $|T| \ge 10$.

Let $U \subset S$ consist of all people that have received a hat from a person belonging to $T$. Now consider any member $x \in S \setminus (T \cup U)$. Since $x \notin U$, no member of $T$ sent his hat to $x$. It follows that no member of $T$ sent a hat to a person from $T \cup \{x\}$. But the maximality of $T$ implies that some person from $T \cup \{x\}$ sent his hat to a person from the same subset. This means that $x$ sent his hat to a person from $T$. Consequently, all members of the subset $S \setminus (T \cup U)$ sent their hats to people in $T$. In particular, $S \setminus (T \cup U)$ has the property described in the beginning. The maximality of $T$ gives $|S \setminus (T \cup U)| \le |T|$. Finally, we obviously have $|U| \le |T|$, so
$$
|T| \ge |S \setminus (T \cup U)| = |S| - |T| - |U| \ge |S| - 2|T|,
$$
or $|T| \ge \frac{1}{3}|S| = 10$, as desired.
