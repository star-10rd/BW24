Answer: $f(x) = 0$.

Substituting $x = y = 0$ to the original equality gives $f(f(0)) + f(0) = f(0)$, implying
$$
f(f(0)) = 0. \tag{1}
$$
Taking $x = \frac{f(0)}{2}$ and $y = f(0)$ in the original equality gives
$$
f(f(f(0))) + f\left(-\frac{f(0)}{2}\right) = f\left(\frac{f(0)}{2} \cdot f(f(y)) - \frac{f(0)}{2}\right).
$$
Applying (1) here leads to $f(0) + f\left(-\frac{f(0)}{2}\right) = f\left(-\frac{f(0)}{2}\right)$ which implies
$$
f(0) = 0. \tag{2}
$$
Furthermore, substitute $y = 0$ into the original equation. We obtain $f(f(0)) + f(x) = f(xf(0) - x)$, which in the light of (2) reduces to
$$
f(x) = f(-x) \tag{3}
$$
for all $x$. Finally, substitute $x = 0$ into the original equation. In the light of (2) and (3), we obtain $f(f(y)) + f(y) = 0$, i.e.,
$$
f(f(y)) = -f(y) \tag{4}
$$
for all real numbers $y$. Now, for all $y$,
$$
\begin{align*}
f(y) &= -f(f(y)) && \text{(by (4))} \\
&= f(f(f(y))) && \text{(by (4))} \\
&= f(-f(y)) && \text{(by (4))} \\
&= f(f(y)) && \text{(by (3))} \\
&= -f(y), && \text{(by (4))}
\end{align*}
$$
implying $f(y) = 0$.
