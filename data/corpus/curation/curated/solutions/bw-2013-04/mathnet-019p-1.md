The inequality is symmetric, so we may assume $x \le y \le z$. Then we have
$$
x^3 \le y^3 \le z^3 \quad \text{and} \quad \frac{1}{y^2 + z^2} \le \frac{1}{x^2 + z^2} \le \frac{1}{x^2 + y^2}.
$$
Therefore, by the rearrangement inequality we have:
$$
\begin{align*}
\frac{x^3}{y^2 + z^2} + \frac{y^3}{x^2 + z^2} + \frac{z^3}{x^2 + y^2} &\ge \frac{y^3}{y^2 + z^2} + \frac{z^3}{x^2 + z^2} + \frac{x^3}{x^2 + y^2} \\
\frac{x^3}{y^2 + z^2} + \frac{y^3}{x^2 + z^2} + \frac{z^3}{x^2 + y^2} &\ge \frac{z^3}{y^2 + z^2} + \frac{x^3}{x^2 + z^2} + \frac{y^3}{x^2 + y^2} \\
\frac{x^3}{y^2 + z^2} + \frac{y^3}{x^2 + z^2} + \frac{z^3}{x^2 + y^2} &\ge \frac{1}{2} \left( \frac{y^3 + z^3}{y^2 + z^2} + \frac{x^3 + z^3}{x^2 + z^2} + \frac{z^3 + y^3}{x^2 + y^2} \right)
\end{align*}
$$
What's more, by the rearrangement inequality we have:
$$
\begin{align*}
x^3 + y^3 &\ge x y^2 + x^2 y \\
2x^3 + 2y^3 &\ge (x^2 + y^2)(x + y) \\
\frac{x^3 + y^3}{x^2 + y^2} &\ge \frac{x + y}{2}
\end{align*}
$$
Applying it to the previous inequality we obtain:
$$
\frac{x^3}{y^2 + z^2} + \frac{y^3}{x^2 + z^2} + \frac{z^3}{x^2 + y^2} \geq \frac{1}{2} \left( \frac{y+z}{2} + \frac{x+z}{2} + \frac{x+y}{2} \right)
$$
Which is thesis.
