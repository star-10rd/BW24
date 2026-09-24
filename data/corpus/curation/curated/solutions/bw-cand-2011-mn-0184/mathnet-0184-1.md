If $P_1(x) = P(x) - 1$ and if for any $2011$ numbers $x_k$ we have $\sum P_1(x_k) = 0$, then for the same numbers $\sum P(x_k) = 2011$. So it is sufficient to show that for any polynomial $P(x)$ of degree $2011$ there is an arithmetic sequence $(x_k)$ of $2011$ terms such that $\sum P(x_k) = 0$.

Now, being a polynomial of odd degree, $P$ has a zero, say $a$, such that $P$ changes sign at $a$. As the number of zeroes of $P$ is finite, there is a $b > 0$ such that $P$ has constant and opposite signs on intervals $[a - b, a)$ and $(a, a + b]$. There is no loss of generality in assuming $P(a + b) > 0$. Set $d = \frac{1}{2010}b$ and
$$
Q(x) = \sum_{k=0}^{2010} P(x + k d).
$$
Now $Q$ is continuous, $Q(a - b) < 0$ and $Q(a) > 0$. So there is a $c$ between $a - b$ and $a$ such that $Q(c) = 0$. The arithmetic sequence $c, c+d, \dots, c+2010d$ is a solution to the problem.
