Solution:

We call two spies $A$ and $B$ neutral to each other if neither $A$ watches on $B$ nor $B$ watches on $A$.

Denote the spies $A_{1}, A_{2}, \ldots, A_{16}$. Let $a_{i}, b_{i}$ and $c_{i}$ denote the number of spies that watch on $A_{i}$, the number of that are watched by $A_{i}$ and the number of spies neutral to $A_{i}$, respectively. Clearly, we have
$$
\begin{aligned}
a_{i}+b_{i}+c_{i} & =15, \\
a_{i}+c_{i} & \leq 8, \\
b_{i}+c_{i} & \leq 8
\end{aligned}
$$
for any $i=1, \ldots, 16$ (if any of the last two inequalities does not hold then there exist 10 spies who cannot be numbered in the required manner). Combining the relations above we find $c_{i} \leq 1$. Hence, for any spy, the number of his neutral colleagues is 0 or 1.

Now suppose there is a group of 11 spies that cannot be numbered as required. Let $B$ be an arbitrary spy in this group. Number the other 10 spies as $C_{1}, C_{2}, \ldots, C_{10}$ so that $C_{1}$ watches on $C_{2}, \ldots, C_{10}$ watches on $C_{1}$. Suppose there is no spy neutral to $B$ among $C_{1}, \ldots, C_{10}$. Then, if $C_{1}$ watches on $B$ then $B$ cannot watch on $C_{2}$, as otherwise $C_{1}, B, C_{2}, \ldots, C_{10}$ would form an 11-cycle. So $C_{2}$ watches on $B$, etc. As some of the spies $C_{1}, C_{2}, \ldots, C_{10}$ must watch on $B$ we get all of them watching on $B$, a contradiction. Therefore, each of the 11 spies must have exactly one spy neutral to him among the other 10 - but this is impossible.
