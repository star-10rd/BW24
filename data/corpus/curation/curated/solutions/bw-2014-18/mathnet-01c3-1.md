$$
p^{3n} - p^{3n-2}.
$$
We have $p^n - p^{n-1}$ choices for $a_1$ such that $p \nmid a_1$. In this case, for any of the $p^n \cdot p^n$ choices of $a_3$ and $a_4$, there is a unique choice of $a_2$. Namely
$$
a_2 \equiv a_1^{-1}(-1 - a_3a_4) \mod p^n.
$$
This gives $p^{2n}(p^n - p^{n-1})$ quadruples.

If $p \mid a_1$ then obviously we have $p \nmid a_3$, since otherwise the condition
$$
p^n \mid (a_1a_2 + a_3a_4 + 1)
$$
is violated. Now if $p \mid a_1$, $p \nmid a_3$, for any choice of $a_2$ there is a unique choice of $a_4$, namely
$$
a_4 \equiv a_3^{-1}(-1 - a_1a_2) \mod p^n.
$$
Thus for these $p^{n-1}$ choices of $a_1$ and $p^n - p^{n-1}$ choices of $a_3$, we have for each of the $p^n$ choices of $a_2$ a unique $a_4$. That is $p^{n-1}(p^n - p^{n-1})p^n$ quadruples in this case.

All in all the total number of quadruples is
$$
p^{2n}(p^n - p^{n-1}) + p^{n-1}(p^n - p^{n-1})p^n = p^{3n} - p^{3n-2}.
$$
