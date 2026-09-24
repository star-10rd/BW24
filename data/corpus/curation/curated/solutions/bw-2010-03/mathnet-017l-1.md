The proof is by induction on $n$.

We establish first the base case $n = 2$. Suppose that $x_1 > 1$, $x_2 > 1$, $|x_1 - x_2| < 1$ and moreover $x_1 \le x_2$. Then
$$
\frac{x_1}{x_2} + \frac{x_2}{x_1} \le 1 + \frac{x_2}{x_1} < 1 + \frac{x_1+1}{x_1} = 2 + \frac{1}{x_1} < 2+1=2 \cdot 2-1.
$$

Now we proceed to the inductive step, and assume that the numbers $x_1, x_2, \dots, x_n, x_{n+1} > 1$ are given such that $|x_i - x_{i+1}| < 1$ for $i = 1, 2, \dots, n-1, n$. Let
$$
S = \frac{x_1}{x_2} + \frac{x_2}{x_3} + \dots + \frac{x_{n-1}}{x_n} + \frac{x_n}{x_1}, \quad S' = \frac{x_1}{x_2} + \frac{x_2}{x_3} + \dots + \frac{x_{n-1}}{x_n} + \frac{x_n}{x_{n+1}} + \frac{x_{n+1}}{x_1}.
$$
The inductive assumption is that $S < 2n - 1$ and the goal is that $S' < 2n + 1$. From the above relations involving $S$ and $S'$ we see that it suffices to prove the inequality
$$
\frac{x_n}{x_{n+1}} + \frac{x_{n+1} - x_n}{x_1} \le 2.
$$
We consider two cases. If $x_n \le x_{n+1}$, then using the conditions $x_1 > 1$ and $x_{n+1} - x_n < 1$ we obtain
$$
\frac{x_n}{x_{n+1}} + \frac{x_{n+1} - x_n}{x_1} \le 1 + \frac{x_{n+1} - x_n}{x_1} < 1 + \frac{1}{x_1} < 2,
$$
and if $x_n > x_{n+1}$, then using the conditions $x_n < x_{n+1} + 1$ and $x_{n+1} > 1$ we get
$$
\frac{x_n}{x_{n+1}} + \frac{x_{n+1} - x_n}{x_1} < \frac{x_n}{x_{n+1}} < \frac{x_{n+1} + 1}{x_{n+1}} = 1 + \frac{1}{x_{n+1}} < 1 + 1 = 2.
$$
The induction is now complete.
