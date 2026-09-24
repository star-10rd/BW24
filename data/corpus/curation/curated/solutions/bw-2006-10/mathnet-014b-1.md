Solution:

In the statement of the problem there are two kinds of numbers: "horizontal" (that has been counted for pluses) and "vertical" (for minuses). We will show that the sum of numbers of each type reaches its maximum on the same configuration.

We restrict our attention to the horizontal numbers only. Consider an arbitrary row. Let it contains $p$ pluses and $m$ minuses, $m+p \leq 17$. Then the sum that has been counted for pluses in this row is equal to $m p$. Let us redistribute this sum between all signs in the row. More precisely, let us write the number $m p /(m+p)$ in every nonempty cell in the row. Now the whole "horizontal" sum equals to the sum of all 306 written numbers.

Now let us find the maximal possible contribution of each sign in this sum. That is, we ask about maximum of the expression $f(m, p)=m p /(m+p)$ where $m+p \leq 17$. Remark that $f(m, p)$ is an increasing function of $m$. Therefore if $m+p<17$ then increasing of $m$ will also increase the value of $f(m, p)$. Now if $m+p=17$ then $f(m, p)=m(17-m) / 17$ and, obviously, it has maximum $72 / 17$ when $m=8$ or $m=9$.

So all the 306 summands in the horizontal sum will be maximal if we find a configuration in which every non-empty row contains 9 pluses and 8 minuses. The similar statement holds for the vertical sum. In order to obtain the desired configuration take a square $18 \times 18$ and draw pluses on 9 generalized diagonals and minuses on 8 other generalized diagonals (the 18th generalized diagonal remains empty).
