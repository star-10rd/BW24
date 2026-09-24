Choose $\alpha = (1 + \sqrt{5})/2$, so that $\alpha^2 = \alpha + 1$ holds. We prove by induction on the sum $m+n$ that if $m > \alpha n$, then Aino has a winning strategy in GCD($m, n$), otherwise if $\alpha n \ge m > n$, then Väinö has.

1) If $n \mid m$, then Aino can remove all of the stones from the pile with $m$ stones, thus winning. This includes the initial step of the induction.

2) Assume $n < m \le \alpha n$. Note that $\alpha$ is irrational, so $n < m < \alpha n$. The rules of the game actually force Aino to remove stones from the larger pile. As $m < 2n$, there is no choice: she has to take exactly $n$ stones. The play continues with $n$ and $m-n$ stones in the piles, Väinö having the turn. We have $0 < m-n < n$ and
$$
\frac{n}{m-n} > \frac{n}{\alpha n - n} = \frac{1}{\alpha - 1} = \frac{\alpha^2 - \alpha}{\alpha - 1} = \alpha.
$$
By induction, Aino has a winning strategy in the game GCD($n, m-n$), but now the turns have switched. Hence, Väinö has a winning strategy that mimicks this winning strategy of Aino's.

3) Finally assume $m > \alpha n$, but $n \nmid m$. Write $\beta = m/n - \lfloor m/n \rfloor$ and $k = \lfloor m/n \rfloor$. Then $m = kn + \beta n$ with $0 < \beta < 1$, as $n \nmid m$. If $1 + \beta < \alpha$ (note that $\beta \in \mathbb{Q}$ and $\alpha \notin \mathbb{Q}$), then $k \ge 2$, as $m > \alpha n$. Therefore, Aino may take $(k-1)n$ stones out of the pile of $m$ stones, leaving there $m-(k-1)n = (1+\beta)n$ stones. By induction hypothesis, Väinö has a winning strategy in the game GCD((1+\beta)n, n), which will now be copied by Aino in order to win the game. Otherwise, if $1+\beta > \alpha$, then Aino may take $kn$ stones, leaving $\beta n$ stones in the heap. Again, Väinö's winning strategy in the game GCD($n, \beta n$) is copied by Aino. It suffices to check that
$$
\frac{1}{\beta} < \frac{1}{\alpha - 1} = \alpha.
$$
