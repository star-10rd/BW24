Answer: $x = \frac{1 \pm \sqrt{5}}{2}$.

We will first prove that if some $x$ satisfies the equation $x^2 = x + 1$, then for all $n \ge 2$ we must also have $x^n = f_{n-1}x + f_{n-2}$.

The proof proceeds by mathematical induction. The case $n = 2$ is given by the precondition; for $n = 3$ we get
$$
x^3 = x \cdot x^2 = x(x + 1) = x^2 + x = 2x + 1.
$$
For $n \ge 4$ we obtain:
$$
\begin{aligned}
x^n &= x^{n-2} \cdot x^2 = x^{n-2}(x+1) = x^{n-1} + x^{n-2} = \\
&= f_{n-2}x + f_{n-3} + f_{n-4} = \\
&= f_{n-1}x + f_{n-2}.
\end{aligned}
$$
Since the equation $x^2 = x + 1$ has solutions $x = \frac{1 \pm \sqrt{5}}{2}$, these values must also satisfy $x^{2010} = f_{2009}x + f_{2008}$. On the other hand, since the graph of the function $y = x^{2010}$ is “bowl-like” and the graph of the function $y = f_{2009}x + f_{2008}$ is a straight line, they can not have more than two intersection points. Hence, we have found all the solutions.
