Letting $Q(x) = P(x) - 54$, we see that $Q$ has $k$ zeroes at $x_1, \dots, x_k$, while $Q(y_i) = 1959$ for $i = 1, \dots, n$. We notice that $1959 = 3 \cdot 653$, and an easy check shows that $653$ is a prime number. As
$$
Q(x) = \prod_{j=1}^{k} (x - x_j)S(x),
$$
and $S(x)$ is a polynomial with integer coefficients, we have
$$
Q(y_1) = \prod_{j=1}^{k} (y_1 - x_j)S(x_j) = 1959.
$$
Now all numbers $a_i = y_i - x_1$ have to be in the set $\{\pm1, \pm3, \pm653, \pm1959\}$. Clearly, $n$ can be at most 4, and if $n = 4$, then two of the $a_j$'s are $\pm1$, one has absolute value 3 and the fourth one has absolute value 653. Assuming $a_1 = 1, a_2 = -1, x_1$ has to be the average of $y_1$ and $y_2$. Let $|y_3 - x_1| = 3$. If $k \ge 2$, then $x_2 \ne x_1$, and the set of numbers $b_i = y_i - x_2$ has the same properties as the $a_i$'s. Then $x_2$ is the average of, say $y_2$ and $y_3$ or $y_3$ and $y_1$. In either case $|y_4 - x_2| \ne 653$. So if $k \ge 2$, then $n \le 3$. In a quite similar fashion one shows that $k \ge 3$ implies $n \le 2$.
The polynomial $P(x) = 653x^2(x^2 - 4) + 2013$ shows the $nk = 6$ indeed is possible.
