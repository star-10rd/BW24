Solution:
We can assume that $a$ is the least among $a, b, c, d$ (or one of the least, if some of them are equal), there are $n > 0$ negative numbers among $a, b, c, d$, and the sum of the positive ones is $x$.
Then we obtain
$$
-2 = a + b + c + d \geqslant n a + x.
$$
Squaring we get
$$
4 = a^{2} + b^{2} + c^{2} + d^{2}
$$
which implies
$$
4 \leqslant n \cdot a^{2} + x^{2}
$$
as the square of the sum of positive numbers is not less than the sum of their squares.
Combining inequalities (1) and (2) we obtain
$$
\begin{aligned}
n a^{2} + (n a + 2)^{2} & \geqslant 4, \\
n a^{2} + n^{2} a^{2} + 4 n a & \geqslant 0, \\
a^{2} + n a^{2} + 4 a & \geqslant 0.
\end{aligned}
$$
As $n \leqslant 3$ (if all the numbers are negative, the second condition of the problem cannot be satisfied), we obtain from the last inequality that
$$
\begin{aligned}
& 4 a^{2} + 4 a \geqslant 0, \\
& a(a + 1) \geqslant 0.
\end{aligned}
$$
As $a < 0$ it follows that $a \leqslant -1$.

Alternative solution.
Assume that $a, b, c, d > -1$. Denoting $A = a + 1, B = b + 1, C = c + 1, D = d + 1$ we have $A, B, C, D > 0$. Then the first equation gives
$$
A + B + C + D = 2.
$$
We also have
$$
ab = (A - 1)(B - 1) = AB - A - B + 1.
$$
Adding 5 similar terms to the last one we get from the second equation
$$
AB + AC + AD + BC + BD + CD - 3(A + B + C + D) + 6 = 0.
$$
In view of (3) this implies
$$
AB + AC + AD + BC + BD + CD = 0,
$$
a contradiction as all the unknowns $A, B, C, D$ were supposed to be positive.

Another solution.
Assume that the conditions of the problem hold:
$$
\begin{aligned}
a + b + c + d & = -2 \\
ab + ac + ad + bc + bd + cd & = 0.
\end{aligned}
$$
Suppose that
$$
a, b, c, d > -1.
$$
If all of $a, b, c, d$ were negative, then (5) could not be satisfied, so at most three of them are negative. If two or less of them were negative, then (6) would imply that the sum of negative numbers, and hence also the sum $a + b + c + d$, is greater than $2 \cdot (-1) = -2$, which contradicts (4). So exactly three of $a, b, c, d$ are negative and one is nonnegative. Let $d$ be the nonnegative one. Then $d = -2 - (a + b + c) < -2 - (-1 - 1 - 1) = 1$. Obviously $|a|, |b|, |c|, |d| < 1$. Squaring (4) and subtracting 2 times (5), we get
$$
a^{2} + b^{2} + c^{2} + d^{2} = 4,
$$
but
$$
a^{2} + b^{2} + c^{2} + d^{2} = |a|^{2} + |b|^{2} + |c|^{2} + |d|^{2} < 4,
$$
a contradiction.
