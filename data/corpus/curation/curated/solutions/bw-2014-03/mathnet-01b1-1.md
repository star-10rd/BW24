Apply a lot of AM-GM inequalities:
$$
\begin{align*}
\frac{1}{\sqrt{a^3+b}} + \frac{1}{\sqrt{b^3+c}} + \frac{1}{\sqrt{c^3+a}} &\le \frac{1}{\sqrt{2a\sqrt{ab}}} + \frac{1}{\sqrt{2b\sqrt{bc}}} + \frac{1}{\sqrt{2c\sqrt{ca}}} \\
&= \frac{1}{\sqrt{2}} \left( \frac{\sqrt{a\sqrt{ab}}}{a\sqrt{ab}} + \frac{\sqrt{b\sqrt{bc}}}{b\sqrt{bc}} + \frac{\sqrt{c\sqrt{ca}}}{c\sqrt{ca}} \right) \\
&\le \frac{1}{2\sqrt{2}} \left( \frac{a+\sqrt{ab}}{a\sqrt{ab}} + \frac{b+\sqrt{bc}}{b\sqrt{bc}} + \frac{c+\sqrt{ca}}{c\sqrt{ca}} \right) \\
&= \frac{1}{2\sqrt{2}} \left( 3 + \frac{1}{\sqrt{ab}} + \frac{1}{\sqrt{bc}} + \frac{1}{\sqrt{ca}} \right) \\
&= \frac{1}{2\sqrt{2}} \left( 3 + \frac{\sqrt{ab}}{ab} + \frac{\sqrt{bc}}{bc} + \frac{\sqrt{ca}}{ca} \right) \\
&\le \frac{1}{2\sqrt{2}} \left( 3 + \frac{a+b}{2ab} + \frac{b+c}{2bc} + \frac{c+a}{2ac} \right) = \frac{3}{\sqrt{2}}
\end{align*}
$$
