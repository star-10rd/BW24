Solution:
For simplicity, take the length of the circle to be $2n(n-1)$ rather than $2\pi$. The vertices of the $(n-1)$-gon $A_{0} A_{1} \ldots A_{n-2}$ divide it into $n-1$ arcs of length $2n$. By the pigeonhole principle, some two of the vertices of the $n$-gon $B_{0} B_{1} \ldots B_{n-1}$ lie in the same arc. Assume w.l.o.g. that $B_{0}$ and $B_{1}$ lie in the arc $A_{0} A_{1}$, with $B_{0}$ closer to $A_{0}$ and $B_{1}$ closer to $A_{1}$, and that $|A_{0} B_{0}| \leqslant |B_{1} A_{1}|$.

Consider the circle as the segment $[0,2n(n-1)]$ of the real line, with both of its endpoints identified with the vertex $A_{0}$ and the numbers $2n, 4n, 6n, \ldots$ identified accordingly with the vertices $A_{1}, A_{2}, A_{3}, \ldots$

For $k=0,1, \ldots, n-1$, let $x_{k}$ be the "coordinate" of the vertex $B_{k}$ of the $n$-gon. Each arc $B_{k} B_{k+1}$ has length $2(n-1)$. By the choice of labelling, we have
$$
0 \leqslant x_{0} < x_{1} = x_{0} + 2(n-1) \leqslant 2n
$$
and, moreover, $x_{0} - 0 \leqslant 2n - x_{1}$. Hence $0 \leqslant x_{0} \leqslant 1$.

Clearly, $x_{k} = x_{0} + 2k(n-1)$ for $k=0,1, \ldots, n-1$. It is not hard to see that $(2k-1)n \leqslant x_{k} \leqslant 2kn$ if $1 \leqslant k \leqslant \frac{n}{2}$, and $(2k-2)n \leqslant x_{k} \leqslant (2k-1)n$ if $\frac{n}{2} < k \leqslant n-1$. These inequalities are verified immediately by inserting $x_{k} = x_{0} + 2k(n-1)$ and taking into account that $0 \leqslant x_{0} \leqslant 1$.

Summing up, we have:
1) if $1 \leqslant k \leqslant \frac{n}{2}$, then $B_{k}$ lies between $A_{k-1}$ and $A_{k}$, closer to $A_{k}$; recalling that $A_{k}$ has "coordinate" $2kn$, we see that the distance in question is equal to $2kn - x_{k} = 2k - x_{0}$;

2) if $\frac{n}{2} < k \leqslant n-1$, then $B_{k}$ lies between $A_{k-1}$ and $A_{k}$, closer to $A_{k-1}$; the distance in question is equal to $x_{k} - (2k-2)n = x_{0} - 2k + 2n$;

3) for $B_{0}$, the distance in question is $x_{0}$.

The sum of these distances evaluates to
$$
x_{0} + \sum_{k=1}^{n/2} (2k - x_{0}) + \sum_{k=n/2+1}^{n-1} (x_{0} - 2k + 2n)
$$
Note that here $x_{0}$ appears half of the times with a plus sign and half of the times with a minus sign. Thus, eventually, all terms $x_{0}$ cancel out, and the value of $S$ does not depend on anything but $n$.
