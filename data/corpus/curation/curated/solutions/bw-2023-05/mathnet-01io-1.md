Let's prove that $\alpha = \frac{1}{2}$ works. Then the following inequality should hold for all positive real numbers $x$ and $y$:
$$
\begin{aligned}
\frac{x+y}{2} &\ge \frac{1}{2}\sqrt{xy} + \frac{1}{2}\sqrt{\frac{x^2+y^2}{2}} \\
\Leftrightarrow (x+y)^2 &\ge xy + \frac{x^2+y^2}{2} + 2\sqrt{xy \cdot \frac{x^2+y^2}{2}} \\
\Leftrightarrow (x+y)^2 &\ge 4\sqrt{xy \cdot \frac{x^2+y^2}{2}} \\
\Leftrightarrow (x+y)^4 &\ge 8xy(x^2+y^2) \\
\Leftrightarrow (x-y)^4 &\ge 0
\end{aligned}
$$
which is true, so we showed that $\alpha = \frac{1}{2}$ actually works.

Now it remains to show that $\alpha \ge \frac{1}{2}$. Let's consider $x = 1 + \varepsilon$ and $y = 1 - \varepsilon$ where $\varepsilon < 1$. Then the inequality becomes
$$1 \ge \alpha\sqrt{1-\varepsilon^2} + (1-\alpha)\sqrt{1+\varepsilon^2}, \text{ i.e.}$$ $$\alpha \ge \frac{\sqrt{1+\varepsilon^2}-1}{\sqrt{1+\varepsilon^2}-\sqrt{1-\varepsilon^2}}.$$
Notice that
$$
\begin{align*}
\frac{\sqrt{1+\varepsilon^2}-1}{\sqrt{1+\varepsilon^2}-\sqrt{1-\varepsilon^2}} &= \frac{(\sqrt{1+\varepsilon^2}-1)(\sqrt{1+\varepsilon^2}+1)(\sqrt{1+\varepsilon^2}+\sqrt{1-\varepsilon^2})}{(\sqrt{1+\varepsilon^2}-\sqrt{1-\varepsilon^2})(\sqrt{1+\varepsilon^2}+\sqrt{1-\varepsilon^2})(\sqrt{1+\varepsilon^2}+1)} \\
&= \frac{\varepsilon^2(\sqrt{1+\varepsilon^2}+\sqrt{1-\varepsilon^2})}{2\varepsilon^2(\sqrt{1+\varepsilon^2}+1)} = \frac{\sqrt{1+\varepsilon^2}+1-1+\sqrt{1-\varepsilon^2}}{2(\sqrt{1+\varepsilon^2}+1)} \\
&= \frac{1}{2} - \frac{1-\sqrt{1-\varepsilon^2}}{2(\sqrt{1+\varepsilon^2}+1)} = \frac{1}{2} - \frac{(1-\sqrt{1-\varepsilon^2})(1+\sqrt{1-\varepsilon^2})}{2(\sqrt{1+\varepsilon^2}+1)(1+\sqrt{1-\varepsilon^2})} \\
&= \frac{1}{2} - \frac{\varepsilon^2}{2(\sqrt{1+\varepsilon^2}+1)(1+\sqrt{1-\varepsilon^2})} \\
&> \frac{1}{2} - \frac{\varepsilon^2}{4(1+\sqrt{2})}.
\end{align*}
$$
As $\varepsilon$ can be arbitrarily small this expression can get arbitrarily close to $\frac{1}{2}$. This means that $\alpha < \frac{1}{2}$ cannot hold, as desired.
