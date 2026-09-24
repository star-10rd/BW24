From the equation $5F_x = 3F_y + 1$ we have
$$
3F_y + 1 = 5F_x > 3F_x + 1 \implies y > x
$$
On the other hand, if $y \ge x + 2$ and $x > 1$ then
$$
3F_y + 1 \ge 3F_{x+2} + 1 = 3(F_{x+1} + 3F_x) + 1 = 6F_x + 3F_{x-1} + 1 > 5F_x
$$
we have a contradiction. Therefore $y = x + 1$ and we have to solve the equation becomes
$3F_{x+1} + 1 = 5F_x$
We will show by induction that $3F_{x+1} + 1 < 5F_x$ for any $x \ge 7$.
Indeed, for $x = 7$ we have $F_7 = 13$, $F_8 = 21$. Therefore, $3F_8 + 1 = 3 \cdot 21 + 1 = 64 < 5F_7 = 65$.
For $x = 8$ we have $3F_9 + 1 = 103 < 5F_8 = 105$.
Assume $3F_{k+1} + 1 < 5F_k$ and $3F_{k+2} + 1 < 5F_{k+1}$ for some $k \ge 7$. We have then $3(F_{k+1} + F_{k+2}) + 2 < 5(F_k + F_{k+1})$. Thus
$$
3F_{k+3} + 1 < 3F_{k+3} + 2 < 5F_{k+2}
$$
For $x < 7$ we can check and see that $x \in \{3, 5, 6\}$.
