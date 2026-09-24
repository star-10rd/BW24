Let $x, y, z, t$ be positive numbers such that $a = x^4, b = y^4, c = z^4, d = t^4$.
By AM-GM inequality $x^4 + y^4 + z^4 + 1 \ge 4xyz$, $y^4 + z^4 + 1 + 1 \ge 4yz$ and $z^4 + 1 + 1 + 1 \ge 4z$.
Therefore we have the following estimation for the first fraction
$$
\frac{1}{\sqrt{x^4 + 2y^4 + 3z^4 + 10}} \le \frac{1}{\sqrt{4xyz + 4yz + 4z + 4}} = \frac{1}{2\sqrt{xyz + yz + z + 1}}.
$$
Transform analogous estimations for the other fractions:
$$
\begin{aligned}
\frac{1}{\sqrt{b + 2c + 3d + 10}} &\le \frac{1}{2\sqrt{yzt + zt + t + 1}} = \frac{1}{2\sqrt{t\sqrt{yz + z + 1 + xyz}}} = \frac{\sqrt{xyz}}{2\sqrt{xyz + yz + z + 1}}; \\
\frac{1}{\sqrt{c + 2d + 3a + 10}} &\le \frac{1}{2\sqrt{ztx + tx + x + 1}} = \frac{1}{2\sqrt{tx\sqrt{z + 1 + xyz + yz}}} = \frac{\sqrt{yz}}{2\sqrt{xyz + yz + z + 1}}; \\
\frac{1}{\sqrt{d + 2a + 3b + 10}} &\le \frac{1}{2\sqrt{txy + xy + y + 1}} = \frac{1}{2\sqrt{txy\sqrt{1 + xyz + yz + z}}} = \frac{\sqrt{z}}{2\sqrt{xyz + yz + z + 1}}.
\end{aligned}
$$
Thus, the sum does not exceed
$$
\frac{1 + \sqrt{xyz} + \sqrt{yz} + \sqrt{z}}{2\sqrt{xyz + yz + z + 1}}.
$$
It remains to apply inequality $\sqrt{\alpha} + \sqrt{\beta} + \sqrt{\gamma} + \sqrt{\delta} \le 2\sqrt{\alpha + \beta + \gamma + \delta}$, which can be easily proven by taking squares or derived from inequality between arithmetical and quadratic means.
