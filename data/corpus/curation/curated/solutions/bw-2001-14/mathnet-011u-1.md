Solution:

Let the numbers be $x_1 \leqslant x_2 \leqslant \ldots \leqslant x_{2n-1} \leqslant x_{2n}$. We will show that the choice $s_1 = x_1 + x_3 + x_5 + \cdots + x_{2n-1}$ and $s_2 = x_2 + x_4 + \cdots + x_{2n}$ solves the problem. Indeed, the inequality $\frac{s_1}{s_2} \leqslant 1$ is obvious and we have
$$
\begin{aligned}
\frac{s_1}{s_2} & = \frac{x_1 + x_3 + x_5 + \ldots + x_{2n-1}}{x_2 + x_4 + x_6 + \ldots + x_{2n}} = \frac{\left(x_3 + x_5 + \ldots + x_{2n-1}\right) + x_1}{\left(x_2 + x_4 + \ldots + x_{2n-2}\right) + x_{2n}} 
\\
& \geqslant \frac{\left(x_3 + x_5 + \ldots + x_{2n-1}\right) + 1}{\left(x_2 + x_4 + \ldots + x_{2n-2}\right) + 2} 
\\
& \geqslant \frac{\left(x_2 + x_4 + \ldots + x_{2n-2}\right) + 1}{\left(x_2 + x_4 + \ldots + x_{2n-2}\right) + 2} = 1 - \frac{1}{\left(x_2 + x_4 + \ldots + x_{2n-2}\right) + 2} 
\\
& \geqslant 1 - \frac{1}{(n-1) + 2} = \frac{n}{n+1}.
\end{aligned}
$$
