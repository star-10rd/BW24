First, easy induction shows that $\sum_{i=1}^{k-1} x_i x_{i+1} \ge (\sum_{i=1}^k x_i) - 1$.

Base case $k=2$: $x_1x_2 - (x_1+x_2-1) = (x_1-1)(x_2-1) \ge 0$. Assuming the inequality holds for a certain $k$ and adding the obvious $x_kx_{k+1} \ge x_{k+1}$, we get the claim for $k+1$.

Given the conditions of the problem, this shows that (for a given $n$) the quadratic form in question takes values $\ge n-1$; and the minimum $n-1$ is attained e.g. for $k=n$ and all $x_i=1$.

Now to the upper bound. The fine point is that $k$ is variable. So, let $x_1, \dots, x_k$ be a $k$-string of positive integers with $\sum x_i = n$, and with $k \ge 4$; and let $V$ be the generated value $V = \sum_{i=1}^{k-1} x_i x_{i+1}$. If $x_2 \le x_3$, we merge $x_1$ with $x_2$; and if $x_2 > x_3$, we merge $x_3$ with $x_4$, thus creating the following $(k-1)$-string (with entries summing to $n$):
$(x_1+x_2), x_3, \dots, x_k, \text{ resp. } x_1, x_2, (x_3+x_4), x_5, \dots, x_k \quad (\text{if } k=4, x_5=0)$.
If $\tilde{V}$ is the new value of the quantity under consideration then, in the first case $\tilde{V} - V = x_1x_3 - x_1x_2 \ge 0$; and in the second case
$$
\tilde{V} - V = x_2x_4 - x_3x_4 + x_3x_5 \ge 0
$$
After several steps $k$ comes down to $3$ and we arrive at a $3$-string $z_1, z_2, z_3$ (with $z_1 + z_2 + z_3 = n$) producing the value
$$
W = z_1z_2 + z_2z_3 = z_2(z_1 + z_3) \ge V
$$
The product of two integers with a given sum $n$ has a maximum
$$
M_n = \lfloor n/2 \rfloor \cdot \lceil n/2 \rceil = \lfloor (n^2 + 1)/4 \rfloor
$$
To show that all integer values between $n-1$ and $M_n$ are attained, we focus on strings $x_1, \dots, x_k$ ending in $x_k=1$. We claim that these alone are enough to generate all those values. Induction again. Base $n=2$: obvious. Fix $n>2$ and assume that positive-integer strings with sum $n-1$, ending in a $1$, yield all values from $n-2$ to $M_{n-1}$. At the end of each of these strings (next to the terminal $1$) we attach another $1$; the value of the quadratic form grows by $1$. So we already have strings with sum $n$ and with last entry $1$, producing all values from $n-1$ to $M_{n-1}+1$.

Now, if $n$ is even, $n=2m$, the triples (3-strings) $m-1, m, 1$ and $m, m-1, 1$ produce the values $M_n = m^2$ and $M_n-1 = m^2-1$; and the quadruples (4-strings) $j, m-2, m+1-j, 1$ with $j=1, \dots, m$ give values from $m^2-2$ down to $m^2-m-1$ (which is below $M_{n-1}$). If $n$ is odd, $n=2m+1$, the value $M_n = m^2+m$ comes from the triples $m, m, 1$; and now the quadruples $j, m-1, m+1-j, 1$ with $j=1, \dots, m$ yield the values from $m^2+m-1$ down to $m^2$ (below $M_{n-1}$). In each case, as $j$ ranges from $1$ to $m$, the generated values of the quadratic form sweep (with slight excess) the entire missing interval. Induction is completed and the claim results.

The answer follows: the values of $\sum_{i=1}^{k-1} x_i x_{i+1}$ are all integers from $n-1$ to $M_n$ (inclusive).
