Consider a function
$$
f(x) = \begin{cases} 0, & x \in [0, 20] \\ x(x-1) \dots (x-20), & x \ge 20. \end{cases}
$$
Then for any nonnegative integer $a$ we have the equality $f(a) = a \cdot (a-1) \cdots (a-20)$ and we can write the given inequality as follows:
$$
f(a_1) + \cdots + f(a_{100}) \le 100 \cdot 99 \cdot 98 \cdots 79.
$$
The function $f$ is convex, therefore we have Jensen inequality:
$$
f\left(\frac{a_1 + \cdots + a_{100}}{100}\right) \le \frac{f(a_1) + \cdots + f(a_{100})}{100}.
$$
The right hand side does not exceed $99 \cdot 98 \cdots 79 = f(99)$. Hence $f(\frac{a_1 + \cdots + a_{100}}{100}) \le f(99)$. But $f(x)$ is a non decreasing function for $x \ge 0$, therefore, $\frac{a_1 + \cdots + a_{100}}{100} \le 99$ and $a_1 + \cdots + a_{100} \le 9900$.
