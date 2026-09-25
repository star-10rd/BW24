The function $f$ is either $f(x) = 0$ or $f(x) = x^3 + c$ with an arbitrary $c \in \mathbb{R}$.

Proof: Obviously $f(x) = 0$ is a solution, so let us assume that a real number $a \neq 0$ belongs to the range of $f$. Let us first assume $a > 0$. Taking $x = -f(y)$ in the given equation we get
$$
f(-f(y)) = f(0) - f(y)^3 = (-f(y))^3 + c, \quad c = f(0). \quad (1)
$$
The function
$$
g(x) = f(x + a) - f(x) = (x + a)^3 - x^3 = 3a\left(x + \frac{a}{2}\right)^2 + \frac{a^3}{4}
$$
takes every value $z \ge a^3/4$. For every such $z = g(x)$, equation (1) then gives
$$
\begin{aligned}
f(z) &= f(g(x)) = f(-f(x) + f(x + a)) \\
&= f(-f(x)) + (-f(x) + f(x + a))^3 - (-f(x))^3 \\
&= g(x)^3 + c = z^3 + c. \qquad (2)
\end{aligned}
$$
Thus $f$ takes every value not less than $(a^3/4)^3 + c$, which implies that $f$ is unlimited from above. For every $x$ we can then choose a $y$ such that $x + f(y) \ge a^3/4$ so that from (2) we get
$$
f(x) = f(x + f(y)) - (x + f(y))^3 + x^3 = x^3 + c.
$$
This function evidently satisfies the given equation for an arbitrary $c \in \mathbb{R}$.

If $a < 0$, we can set $f(x) = -h(-x)$. It is easily verified that if $f$ satisfies the given equation, so does $h$. Furthermore $h$ takes the value $-a > 0$, so $h$ is given by $h(x) = x^3 + c$ for some $c \in \mathbb{R}$. Hence we get $f(x) = x^3 - c$. Since these functions form the same class as those which were found above, this completes the proof.
