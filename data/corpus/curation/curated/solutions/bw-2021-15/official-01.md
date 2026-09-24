It exists if $n=4 k$ or $n=4 k+1$ where $k$ is a positive integer.

Let us consider $n$-gon $P_{1} P_{2} \ldots P_{n}$. Tangent points of the inscribed circle divide each of its sides in two segments. Lengths of these segments that has a common vertex $P_{i}$ are equal. Denote the length of tangent segments that originate at point $P_{i}$ by $A_{i}$. It means that side lengths of the $n$-gon can be expressed as $P_{i} P_{i+1}=A_{i}+A_{i+1}$ for all $i=1,2, \ldots, n$ where we consider points cyclically $\left(P_{n+1}=P_{1}\right.$ and $A_{n+1}=A_{1}$ ).

We can show that the converse is true as well. That is, if we can find $n$ positive real numbers $A_{i}$, $i=1,2, \ldots, n$ such that the sequence $\left(A_{1}+A_{2}, A_{2}+A_{3}, \ldots, A_{n}+A_{1}\right)$ is a permutation of $(1,2, \ldots, n)$ then there is a circumscribed polygon $P_{1} P_{2} \ldots P_{n}$ with side lengths $1,2, \ldots, n$.

To show this we start with a circle of arbitrary radius $R$ and construct points $P_{1}, P_{2}, \ldots, P_{n}$ outside this circle so that the length of the tangent segments from $P_{i}$ to the circle are of length $A_{i}$ and the "right" tangent segment from $P_{i}$ touches the circle at the same point as the "left" tangent segment from $P_{i-1}$.

Now we almost have the $n$-gon except that possibly the "right" tangent point of $P_{1}$ does not match the "left" touching point of $P_{n}$. This can be easily fixed by adjusting the radius $R$ of the circle, using continuity.

Now we solve the problem by considering 4 cases:

(i) First let's consider the case when $n=4 k$. In this case such circumscribed $n$-gon exists. The $4 k$ segments $A_{i}$ can be of lengths

$$
\begin{array}{r}
A_{1}=\frac{1}{2}, A_{2}=\frac{1}{2}, A_{3}=\frac{3}{2}, A_{4}=\frac{3}{2}, \ldots, A_{2 k-1}=\frac{2 k-1}{2}, A_{2 k}=\frac{2 k-1}{2}, \\
A_{2 k+1}=\frac{2 k+1}{2}, A_{2 k+2}=\frac{6 k-1}{2}, A_{2 k+3}=\frac{2 k-1}{2}, A_{2 k+4}=\frac{6 k-3}{2}, \ldots, \\
A_{4 k-1}=\frac{3}{2}, A_{4 k}=\frac{4 k+1}{2} .
\end{array}
$$

One can see that the values of the sums of the consecutive elements $A_{1}+A_{2}, A_{2}+A_{3}, \ldots, A_{4 k-1}+$ $A_{4 k}, A_{4 k}+A_{4 k+1}$ are exactly $1,2, \ldots, 2 k, 4 k, 4 k-1, \ldots, 2 k+1$, respectively.

(ii) In the case $n=4 k+1$ the construction is similar, we can choose $4 k+1$ segments of length

$$
\begin{aligned}
& A_{1}=\frac{1}{2}, \quad A_{2}=\frac{1}{2}, \quad A_{3}=\frac{5}{2}, \quad A_{4}=\frac{5}{2}, \ldots, \\
& A_{2 k+1}=\frac{4 k+1}{2}, \quad A_{2 k+2}=\frac{4 k+1}{2}, \quad A_{2 k+3}=\frac{4 k-1}{2}, \\
& A_{2 k+4}=\frac{4 k-3}{2}, \quad A_{2 k+5}=\frac{4 k-5}{2}, \quad \ldots, A_{4 k+1}=\frac{3}{2}
\end{aligned}
$$

In this case the values of the sums of consecutive elements $A_{1}+A_{2}, A_{2}+A_{3}, \ldots, A_{4 k-1}+A_{4 k}$, $A_{4 k}+A_{4 k+1}$ are $1,3,5, \ldots, 4 k+1,4 k, 4 k-2, \ldots, 2$, respectively.

(iii) In case when $n=4 k+2$ such a polygon does not exist. To prove this we note that in case if the number of the sides of the circumscribed polygon is even then the sum of the odd numbered sides is equal to the sum of the even numbered sides. It is evident as two segments of equal length that originate from the same vertex contribute to different sums. But the total sum of the side lengths is an odd number what means that it is impossible to split the sides on two parts with equal sum of lengths.

(iv) In case $n=4 k+3$ such a polygon also does not exist. In this case we can express $A_{1}$ as

$$
\begin{aligned}
A_{1} & =\left(A_{1}+A_{2}+\ldots+A_{n}\right)-\left(A_{2}+A_{3}\right)-\left(A_{4}+A_{5}\right)-\ldots-\left(A_{4 k+2}+A_{4 k+3}\right)= \\
& =\frac{P_{1} P_{2}+P_{2} P_{3}+\cdots+P_{4 k+3} P_{1}}{2}-P_{2} P_{3}-P_{4} P_{5}-\ldots-P_{4 k+2} P_{4 k+3}
\end{aligned}
$$

As the sum of the length of the sides is an even number then we conclude that $A_{1}$ is a positive integer. The same is true for all $A_{2}, A_{3}, \ldots$ as well. But now we have a contradiction as the side of length 1 cannot be split in two parts, each of which has positive integer length.
