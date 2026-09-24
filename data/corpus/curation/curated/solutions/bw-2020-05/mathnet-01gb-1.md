Answer: $x = y = z = 0$.

$y = 0 \implies z^2 = 0 \implies z = 0 \implies \frac{1}{4}x^4 = 0 \implies x = 0$. $x = y = z = 0$ is a solution, so assume that $y \neq 0$. Then $z = 0 \implies x^2y = 0 \implies x = 0 \implies \frac{1}{4}y^4 = 0$, which is a contradiction. Hence $z \neq 0$. Now we solve the quadratic (first) equation w.r.t. $x, y$, and $z$.
$$
\begin{aligned}
x &= \pm \frac{\sqrt{-4y^3z - 4yz^2}}{2y} \\
y &= \frac{-x^2 \pm \sqrt{x^4 - 4z^3}}{2z} \\
z &= \frac{-y^2 \pm \sqrt{y^4 - 4x^2y}}{2}
\end{aligned}
$$
The discriminants must be non-negative.
$$
\begin{aligned}
-4y^3z - 4yz^2 &\ge 0 \\
x^4 - 4z^3 &\ge 0 \\
y^4 - 4x^2y &\ge 0
\end{aligned}
$$
Adding the inequalities we get
$$
\begin{aligned}
y^4 - 4x^2y + x^4 - 4z^3 - 4y^3z - 4yz^2 &\ge 0 \\
\frac{1}{4}(x^4 + y^4) &\ge z^3 + z^2y + zy^3 + x^2y
\end{aligned}
$$
But equation 2 says that $\frac{1}{4}(x^4 + y^4) = z^3 + z^2y + zy^3 + x^2y$. This is only possible if all of the inequalities are in fact equalities, so we have
$$
\begin{aligned}
-4y^3z - 4yz^2 &= 0 \\
x^4 - 4z^3 &= 0 \\
y^4 - 4x^2y &= 0
\end{aligned}
$$
This means that $x = \pm \frac{\sqrt{0}}{2y} = 0 \implies y = \frac{-0^2 \pm \sqrt{0}}{2z} = 0$, which is a contradiction. Hence the only solution is $x = y = z = 0$.
