[The natural setting of the problem and its solution is of course an $n \times n$ grid. There is a numerical challenge in doing just the $n = 2011$ case, but the task is not overwhelming; doing the computations by hand might be an educating task for the electronics oriented generation.]

There are two kinds of isosceles triangles in the figure: those with the hypotenuse on a line consisting of the diagonals of the squares and those with the hypotenuse on a line consisting of the sides of the squares. The triangles of the first type can be divided into four categories according to the position. We count first the triangles with the right angle at the upper left corner. Each subsquare of size $k \times k$ contains exactly one triangle with leg $k$ of this kind. So we count the number of $k \times k$ subsquares. The number of $2011 \times 2011$ subsquares is 1, there are $4 \times 2010 \times 2010$ subsquares and $(k+1)^2 (2011-k) \times (2011-k)$ subsquares (since there are $(k+1)^2$ possible places for the upper left corner. So the number of $k \times k$ subsquares for $k = 1$ to $k = 2011$ equals
$$
\sum_{k=0}^{2010} (k+1)^2 = 1^2 + 2^2 + \dots + 2011^2 = \frac{1}{6} (2011 \cdot 2012 \cdot 4023)
$$
and the number of triangles of the first type is 4 times the previous number or
$$
2 \cdot 2011 \cdot 2012 \cdot 1341 = 10851726024
$$

The triangles of the second kind can similarly be divided into four categories according to the direction of the hypotenuse and the orientation of the right angle. We count those triangles for which the hypotenuse is vertical and the right angle is on the left. Consider a triangle with hypotenuse of length $k$. Its altitude from the vertex with the right angle is $\frac{k}{2}$. If $k$ is even, $k = 2j$, the vertex with a right angle can be on any of the $2012-j$ leftmost vertical lines while on any such line the hypotenuse has $2012-k$ possible positions. So the number of such triangles is
$$
\begin{aligned}
\sum_{j=1}^{1005} (2012-j)(2012-2j) &= 2 \sum_{j=1}^{1005} (2012-j)(1006-j) = 2 \sum_{j=1}^{1005} j(1006+j) \\
&= 1006^2 \cdot 1005 + \frac{1}{3}(1005 \cdot 1006 \cdot 2011) = 1006 \cdot (1005 \cdot 1006 + 335 \cdot 2011) = 1694823290.
\end{aligned}
$$
If, on the other hand, $k = 2j+1$, there are $2011-j$ vertical lines on which the hypotenuse can be, while on any such line the hypotenuse has $2012-k = 2011-2j$ possible positions. The number of possible triangles is then
$$
\begin{aligned}
& \sum_{j=0}^{1005} (2011-j)(2011-2j) \\
&= 1006 \cdot 2011^2 - 6033 \cdot \frac{1005 \cdot 1006}{2} + 2 \cdot \frac{1005 \cdot 1006 \cdot 2011}{6} = 1696340841.
\end{aligned}
$$
So the total number of triangles of the second type is $4 \cdot (1694823290 + 1696340841) = 24416382548$.
