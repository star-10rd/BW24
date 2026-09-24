Answer: $\frac{1}{3}$ and $3$.

Denote the lengths $A_0B_0, B_0C_0, C_0A_0$ by $x, y, z$ in non-increasing order. Similarly, denote the lengths $A_1B_1, B_1C_1, C_1A_1$ by $x', y', z'$ in non-increasing order, and the lengths $A_3B_3, B_3C_3, C_3A_3$ by $x'', y'', z''$ in non-increasing order. (As permuting the points does not change the distances, we do not need a separate vector for $A_2B_2, B_2C_2, C_2A_2$.) Then we have $x + y + z = 1$, $y + z \ge x$, $y' + z' \ge x'$, $y'' + z'' \ge x''$. By construction, triples $(x, y, z)$ and $(x', y', z')$ have two values in common (but not necessarily at corresponding places), similarly $(x', y', z')$ and $(x'', y'', z'')$ have two values in common.

Using these observations, calculate:
$$
\begin{aligned}
x'' + y'' + z'' &\le 2(y'' + z'') \le 2(x' + y') \le 2(y' + y' + z') \\
&\le 2(x + x + y) \le 6x \le 3(x + y + z) = 3.
\end{aligned}
$$

We can achieve the value $3$ as follows. Let $A_0B_0 = \frac{1}{2}$ and $C_0 = A_0$. Let $A_1 = A_0$, $B_1 = B_0$ and $\overrightarrow{B_1C_1} = -\overrightarrow{B_0C_0}$. Let $A_2 = A_1$ and $B_2 = C_1$, $C_2 = B_1$. Finally, let $A_3 = A_2$, $B_3 = B_2$ and $\overrightarrow{B_3C_3} = -\overrightarrow{B_2C_2}$. By construction, $A_3B_3 = 1$, $B_3C_3 = \frac{1}{2}$ and $C_3A_3 = \frac{3}{2}$, so $A_3B_3 + B_3C_3 + C_3A_3 = 3$.

This establishes the upper bound. For the lower bound, note that all steps are reversible and the 3-step process itself is symmetric. By scaling, we can also make the initial configuration to satisfy the conditions of the problem. Hence all processes satisfying the conditions of the problem and achieving a final value $t$ are in one-to-one correspondence with processes satisfying the conditions of the problem and achieving the final value $\frac{1}{t}$. This shows that the lower bound is $\frac{1}{3}$.
