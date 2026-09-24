We show by induction that for every integer $k \geq 1$ there exist an $n=n_{k}$, real numbers $\lambda_{1}, \ldots, \lambda_{n_{k}}$ and linear forms $P_{k, 1}, \ldots, P_{k, n_{k}}$ in $k$ variables such that

$$
x_{1} \ldots x_{k}=\lambda_{1} P_{k, 1}\left(x_{1}, \ldots, x_{k}\right)^{k}+\cdots+\lambda_{n_{k}} P_{k, n_{k}}\left(x_{1}, \ldots, x_{k}\right)^{k} .
$$

For $k=1$ we can choose $n=n_{1}=1$ and $P_{1,1}\left(x_{1}\right)=x_{1}$. Now for the induction step, we observe that

$$
x_{1} \ldots x_{k} y=\lambda_{1} P_{k, 1}\left(x_{1}, \ldots, x_{k}\right)^{k} y+\cdots+\lambda_{k} P_{k, n_{k}}\left(x_{1}, \ldots, x_{k}\right)^{k} y
$$

Thus it suffices to write $X^{k} Y$ as a linear combination of $(k+1)$-th powers of linear forms in $X$ and $Y$. The set-up

$$
X^{k} Y=\sum_{i=1}^{m} \alpha_{i}\left(X+\beta_{i} Y\right)^{k+1}
$$

leads to the equations $\sum_{i} \alpha_{i} \beta_{i}=\frac{1}{k+1}$ and $\sum_{i} \alpha_{i} \beta_{i}^{d}=0$ for $d=0,2,3, \ldots, k+1$. Choosing $m=k+2$ and distinct values for the $\beta_{i}$ 's, this becomes a system of $k+2$ linear equations in the $k+2$ variables $\alpha_{i}$. If the system had no solution, then the lefthand sides of the equations would be linearly dependent. On the other hand, given $c_{j}, j=0,1, \ldots, k+1$ with $\sum_{j} c_{j} \beta_{i}^{j}=0$ for all $i$, the polynomial $P(x)=\sum_{j} c_{j} x^{j}$ has degree at most $k+1$ and the $k+2$ distinct zeros $b_{1}, \ldots, b_{k+2}$ and, hence, is the zero polynomial. Consequently, the system has a solution, and we can choose $n_{k+1}=(k+2) n_{k}$ and the induction is complete.

The above gives us

$$
\begin{aligned}
x_{1} \ldots x_{2017} & =\lambda_{1} P_{2017,1}\left(x_{1}, \ldots, x_{2017}\right)^{2017}+\cdots+\lambda_{n_{2017}} P_{2017, n_{2017}}\left(x_{1}, \ldots, x_{2017}\right)^{2017} \\
& =\left(\lambda_{1}^{1 / 2017} P_{2017,1}\left(x_{1}, \ldots, x_{2017}\right)\right)^{2017}+\cdots+\left(\lambda_{n_{2017}}^{1 / 2017} P_{2017, n_{2017}}\left(x_{1}, \ldots, x_{2017}\right)\right)^{2017},
\end{aligned}
$$

as wanted.

Remark: Of course, the consistency of the system of linear equations also follows by the fact that the determinant of the coefficient matrix does not vanish as it is of Vandermonde's type.
