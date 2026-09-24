The largest possible value is $\frac{1}{4}$, it is obtained (for example) when $a = b = \frac{1}{2}$ and $c = 0$.
First rewrite the expression:
$$
\begin{aligned}
a^2b + ab^2 + b^2c + bc^2 + a^2c + ac^2 &= ab(1-c) + bc(1-a) + ac(1-b) \\
&= ab + bc + ac - 3abc \\
&= ab(1-3c) + c(1-c) .
\end{aligned}
$$
Assume that $a \ge b \ge c$, then $c \le \frac{1}{3}$ and therefore $(1-3c) \ge 0$. If $c$ is fixed then $a+b$ also is fixed and as the value of the expression is maximal when $ab$ is maximal then $a = b = \frac{1-c}{2}$.
Then the expression can be rewritten as:
$$
\begin{aligned}
ab(1-3c) + c(1-c) &= \left(\frac{1-c}{2}\right)^2 (1-3c) + c(1-c) \\
&= \frac{1-c}{4}(1+3c^2) \\
&= \frac{1}{4}\left(1-3c\left((c-\frac{1}{2})^2 + \frac{1}{12}\right)\right) \\
&\le \frac{1}{4}.
\end{aligned}
$$
