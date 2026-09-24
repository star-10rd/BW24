Solution:

One quadrilateral produces two regions. Suppose we have drawn $k$ quadrilaterals $Q_{1}, \ldots, Q_{k}$ and produced $a_{k}$ regions. We draw another quadrilateral $Q_{k+1}$ and try to evaluate the number of regions $a_{k+1}$ now produced. Our task is to make $a_{k+1}$ as large as possible. Note that in a maximal configuration, no vertex of any $Q_{i}$ can be located on the edge of another quadrilateral as otherwise we could move this vertex a little bit to produce an extra region.

Because of this fact and the convexity of the $Q_{j}$'s, any one of the four sides of $Q_{k+1}$ meets at most two sides of any $Q_{j}$. So the sides of $Q_{k+1}$ are divided into at most $2k+1$ segments, each of which potentially grows the number of regions by one (being part of the common boundary of two parts, one of which is counted in $a_{k}$).

But if a side of $Q_{k+1}$ intersects the boundary of each $Q_{j}$, $1 \leqslant j \leqslant k$ twice, then its endpoints (vertices of $Q_{k+1}$) are in the region outside of all the $Q_{j}$'s, and the segments meeting at such a vertex are on the boundary of a single new part (recall that it makes no sense to put vertices on edges of another quadrilaterals). This means that $a_{k+1} - a_{k} \leqslant 4(2k+1) - 4 = 8k$. By considering squares inscribed in a circle one easily sees that the situation where $a_{k+1} - a_{k} = 8k$ can be reached.

It remains to determine the expression for the maximal $a_{k}$. Since the difference $a_{k+1} - a_{k}$ is linear in $k$, $a_{k}$ is a quadratic polynomial in $k$, and $a_{0} = 2$. So $a_{k} = Ak^{2} + Bk + 2$. We have $8k = a_{k+1} - a_{k} = A(2k+1) + B$ for all $k$. This implies $A = 4$, $B = -4$, and $a_{n} = 4n^{2} - 4n + 2$.
