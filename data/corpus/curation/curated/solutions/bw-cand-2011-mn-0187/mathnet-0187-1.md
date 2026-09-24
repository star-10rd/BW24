If $|x_i| > 2$ then $|x_{i+1}| = |x_i| \cdot |3 - x_i^2| > |x_i|$ it follows that the sequence $(|x_i|)$ is strictly increasing therefore the sequence $(|x_i|)$ cannot be periodic. It is thus enough to consider the case when $|a| \le 2$.
Denote $x_i = 2 \sin \alpha$, where $-\frac{\pi}{2} \le \alpha \le \frac{\pi}{2}$. Then
$$
\begin{aligned}
x_{i+1} &= 6 \sin \alpha - 8 \sin^3 \alpha \\
&= 2 \sin \alpha (3 - 4 \sin^2 \alpha) \\
&= 2 \sin \alpha (3 \cos^2 \alpha - \sin^2 \alpha) \\
&= 4 \sin \alpha \cos^2 \alpha + 2 \sin \alpha (\cos^2 \alpha - \sin^2 \alpha) \\
&= 2 \sin(2\alpha) \cos \alpha + 2 \sin \alpha \cos(2\alpha) \\
&= 2 \sin(3\alpha).
\end{aligned}
$$
By an easy induction it follows that if $x_0 = 2 \sin \alpha$ then $x_n = 2 \sin(3^n \alpha)$. The equation $x_0 = x_{2011}$ now transforms to $\sin \alpha = \sin(3^{2011}\alpha)$, this equation has two sets of solutions:
$$
\{\alpha \mid 3^{2011}\alpha = \alpha + 2\pi n,\ n \in \mathbb{Z}\}
$$
and
$$
\{\alpha \mid 3^{2011}\alpha = \pi - \alpha + 2\pi m,\ m \in \mathbb{Z}\}.
$$
This can be transformed to
$$
\{\alpha \mid \alpha = \frac{2\pi n}{3^{2011} - 1},\ n \in \mathbb{Z}\}
$$
and
$$
\{\alpha \mid \alpha = \frac{\pi + 2\pi m}{3^{2011} + 1},\ m \in \mathbb{Z}\}.
$$
These sets of solutions do not intersect. Assume that for some $n$ and $m$
$$
\frac{2\pi n}{3^{2011} - 1} = \frac{\pi + 2\pi m}{3^{2011} + 1}
$$
then $2n(3^{2011} + 1) = (1 + 2m)(3^{2011} - 1)$ which is impossible because the left side is divisible by 4 while the right side of the equation is not $(3^{2011} - 1 \equiv 2 \pmod 4)$.
It remains to count the number of $n$ and $m$ for which the corresponding $\alpha$ is in the interval $[-\pi/2, \pi/2]$. This leads to inequalities
$$
-\frac{\pi}{2} \le \frac{2\pi n}{3^{2011} - 1} \le \frac{\pi}{2}, \quad n \in \mathbb{Z}
$$
and
$$
-\frac{\pi}{2} \leq \frac{\pi + 2\pi m}{3^{2011} + 1} \leq \frac{\pi}{2}, \quad m \in \mathbb{Z}
$$
which can be rewritten as
$$
-\frac{3^{2011}-1}{4} \leq n \leq \frac{3^{2011}-1}{4}, \quad n \in \mathbb{Z}
$$
and
$$
-\frac{3^{2011}+3}{4} \leq m \leq \frac{3^{2011}-1}{4}, \quad m \in \mathbb{Z}.
$$
The first inequality has $2\left\lfloor\frac{3^{2011}-1}{4}\right\rfloor + 1 = 2\frac{3^{2011}-3}{4} + 1$ solutions while the second one has $\left\lfloor\frac{3^{2011}+3}{4}\right\rfloor + \left\lfloor\frac{3^{2011}-1}{4}\right\rfloor + 1 = \frac{3^{2011}+1}{4} + \frac{3^{2011}-3}{4} + 1$. The total number of solutions is
$$
2\frac{3^{2011}-3}{4} + 1 + \frac{3^{2011}+1}{4} + \frac{3^{2011}-3}{4} + 1 = 3^{2011}.
$$
