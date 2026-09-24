Let $x$ be the variable. We want to find a real non-zero polynomial $q$ such that $p(x) \cdot q(x) = s(x^n)$ for some real polynomial $s$. If $p$ is the zero polynomial then $p \cdot q = 0$ for every polynomial $q$. It can therefore be assumed that $p \neq 0$.

Let $y = x^n$. Then $y^m$ is a real polynomial for each $m \in \mathbb{N}$. For each $m \in \mathbb{N}$ let $r_m(x)$ be the remainder of the polynomial division of $y^m = (x^n)^m$ by $p(x)$. Then each $r_m$ is of degree less than the $\deg(p)$, the degree of $p$. Consider the polynomials $r_0, r_1, \dots, r_{\deg(p)}$. We want to find coefficients $s_0, s_1, \dots, s_{\deg(p)}$ such that $s_0 \cdot r_0(x) + s_1 \cdot r_1(x) + \dots + s_{\deg(p)} \cdot r_{\deg(p)}(x) = 0$. By considering the coefficients this is equivalent to a system with $\deg(p)$ linear equations and $\deg(p) + 1$ unknowns, $(s_0, s_1, \dots, s_n$ are the unknowns). As there are more unknowns than equations it follows that there exists a solution $(s_0, s_1, \dots, s_n) \neq (0, 0, \dots, 0)$.

Take a solution $(s_0, s_1, \dots, s_n)$ to the system of linear equations and let $s(x) = s_0 + s_1 \cdot x + \dots + s_{\deg(p)} x^p$. This is non-zero polynomial. As $r_m(x)$ is the remainder of the polynomial division of $y^m$ by $p(x)$ it follows that $p(x)$ divides $y^m - r_m(x)$ for all $m \in \mathbb{N}$. Hence $p(x)$ divides
$$
\begin{aligned}
& s_0 \cdot (y^0 - r_0(x)) + s_1 \cdot (y^1 - r_1(x)) + \dots + s_{\deg(p)} \cdot (y^{\deg(p)} - r_{\deg(p)}(x)) \\
&= s(y) - (s_0 \cdot r_0(x) + s_1 \cdot r_1(x) + \dots + s_{\deg(p)} \cdot r_{\deg(p)}(x)) \\
&= s(y)
\end{aligned}
$$
It follows that $q(x) = s(y)/p(x)$ is a polynomial. As $s$ is non-zero it follows that $q$ is non-zero as well. We have therefore found a non-zero polynomial $q$ such that $p(x) \cdot q(x) = s(x^n)$ as desired. $\square$
