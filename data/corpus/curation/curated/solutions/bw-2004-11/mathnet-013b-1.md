Solution:

Answer: Those $(m, n)$ for which at least one of $m, n$ is odd.

Let us erase a unit segment which is the common side of any two cells in which two zeroes appear. If the final table consists of zeroes only, all the unit segments (except those which belong to the boundary of the table) are erased. We must erase a total of
$$
m(n-1)+n(m-1)=2 m n-m-n
$$
such unit segments.

On the other hand, in order to obtain $0$ in a cell with initial $+1$ one must first obtain $-1$ in this cell, that is, the sign of the number in this cell must change an odd number of times (namely, $1$ or $3$). Hence, any cell with $-1$ (except the initial one) has an odd number of neighboring zeroes. So, any time we replace $-1$ by $0$ we erase an odd number of unit segments. That is, the total number of unit segments is congruent modulo $2$ to the initial number of $+1$'s in the table. Therefore $2 m n-m-n \equiv m n-1$ $(\bmod 2)$, implying that $(m-1)(n-1) \equiv 0(\bmod 2)$, so at least one of $m, n$ is odd.

It remains to show that if, for example, $n$ is odd, we can obtain a zero table. First, if $-1$ is in the $i'$th row, we may easily make the $i'$th row contain only zeroes, while its one or two neighboring rows contain only $-1$'s. Next, in any row containing only $-1$'s, we first change the $-1$ in the odd-numbered columns (that is, the columns $1,3, \ldots, n$) to zeroes, resulting in a row consisting of alternating $0$ and $-1$ (since the $-1$'s in the even-numbered columns have been changed two times), and we then easily obtain an entire row of zeroes. The effect of this on the next neighboring row is to create a new row of $-1$'s, while the original row is clearly unchanged. In this way we finally obtain a zero table.
