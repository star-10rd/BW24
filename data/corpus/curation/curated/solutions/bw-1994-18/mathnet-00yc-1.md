Solution:

Suppose we have assigned the labels in the required manner. When a point has label $1$ then there can be no more occurrences of label $1$ on the two lines that intersect at that point. Therefore the number of intersection points labelled with $1$ has to be exactly $\frac{n}{2}$, and so $n$ must be even.

Now, let $n$ be an even number and denote the $n$ lines by $l_{1}, l_{2}, \ldots, l_{n}$. First write the lines $l_{i}$ in the following table:
$$
\begin{array}{llllll}
& & l_{3} & l_{4} & \ldots & l_{n / 2+1} \\
l_{1} & l_{2} & & & & \\
& & l_{n} & l_{n-1} & \ldots & l_{n / 2+2}
\end{array}
$$
and then rotate the picture $n-1$ times:
$$
\begin{array}{llllll}
& & l_{2} & l_{3} & \ldots & l_{n / 2} \\
l_{1} & l_{n} & l_{n-1} & l_{n-2} & \ldots & l_{n / 2+1} \\
& & & & & \\
& & l_{n} & l_{2} & \ldots & l_{n / 2-1} \\
l_{1} & l_{n-1} & & & & l_{n / 2}
\end{array}
$$
etc.

According to these tables, we can join the lines in pairs in $n-1$ different ways -- $l_{1}$ with the line next to it and every other line with the line directly above or under it. Now we can assign the label $i$ to all the intersection points of the pairs of lines shown in the $i$th table.
