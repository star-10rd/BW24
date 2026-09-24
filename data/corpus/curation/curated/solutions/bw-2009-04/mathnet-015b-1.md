Setting $x_1 = x_2 = \dots = x_{n-1} = 1$ and $x_n = 2$ yields $(n-1) + 4 \geq (n-1)2$ and $n \leq 5$.
Now let $n \leq 5$. Then the inequality reads as
$$
x_n^2 - (x_1 + x_2 + \dots + x_{n-1})x_n + (x_1^2 + x_2^2 + \dots + x_{n-1}^2) \geq 0.
$$
By the Cauchy-Schwarz inequality or the inequality of arithmetic and quadratic means we have
$$
4(x_1^2 + x_2^2 + \dots + x_{n-1}^2) \geq (n-1)(x_1^2 + x_2^2 + \dots + x_{n-1}^2) \geq (x_1 + x_2 + \dots + x_{n-1})^2.
$$
Hence
$$
\begin{aligned}
x_n^2 - (x_1 + x_2 + \dots + x_{n-1})x_n + (x_1^2 + x_2^2 + \dots + x_{n-1}^2) &\geq \\
&\geq x_n^2 - (x_1 + x_2 + \dots + x_{n-1})x_n + \frac{1}{4}(x_1 + x_2 + \dots + x_{n-1})^2 = \\
&= (x_n - \frac{1}{2}(x_1 + x_2 + \dots + x_{n-1}))^2 \\
&\geq 0.
\end{aligned}
$$
