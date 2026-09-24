**Answer:** $\frac{\sqrt{3}}{2}$.

Let $A_1BC_1$ be a triangle with $A_1B = b$, $BC_1 = c$ and $\angle A_1BC_1 = 120^\circ$, and $C_2DA_2$ be another triangle with $C_2D = d$, $DA_2 = a$ and $\angle C_2DA_2 = 60^\circ$. By the law of cosines and the assumption $a^2 + d^2 - ad = b^2 + c^2 + bc$, we have $A_1C_1 = A_2C_2$. Thus the two triangles can be put together to form a quadrilateral $ABCD$ with $AB = b$, $BC = c$, $CD = d$, $DA = a$ and $\angle ABC = 120^\circ$, $\angle CDA = 60^\circ$. Then $\angle DAB + \angle BCD = 360^\circ - (\angle ABC + \angle CDA) = 180^\circ$.

Suppose $\angle DAB > 90^\circ$; then $\angle BCD < 90^\circ$ whence $a^2 + b^2 < BD^2 < c^2 + d^2$, contradicting the assumption $a^2 + b^2 = c^2 + d^2$. By symmetry, $\angle DAB < 90^\circ$ also leads to contradiction. Hence $\angle DAB = \angle BCD = 90^\circ$. Now calculate the area of $ABCD$ in two ways; on one hand, it equals $\frac{1}{2}ad \sin 60^\circ + \frac{1}{2}bc \sin 120^\circ$ or $\frac{\sqrt{3}}{4}(ad + bc)$; on the other hand, it equals $\frac{1}{2}ab + \frac{1}{2}cd$ or $\frac{1}{2}(ab + cd)$. Consequently,
$$
\frac{ab + cd}{ad + bc} = \frac{\frac{\sqrt{3}}{4}}{\frac{1}{2}} = \frac{\sqrt{3}}{2}.
$$

Setting $T^2 = a^2 + b^2 = c^2 + d^2$, where $T > 0$, we can write
$$
a = T \sin \alpha, \quad b = T \cos \alpha, \quad c = T \sin \beta, \quad d = T \cos \beta
$$
for some $\alpha, \beta \in (0, \pi/2)$. With this notation, the first equality gives
$$
\sin^2 \alpha + \cos^2 \beta - \sin \alpha \cos \beta = \sin^2 \beta + \cos^2 \alpha + \cos \alpha \sin \beta.
$$
Hence, $\cos(2\beta) - \cos(2\alpha) = \sin(\alpha + \beta)$. Since $\cos(2\beta) - \cos(2\alpha) = 2\sin(\alpha - \beta)\sin(\alpha + \beta)$ and $\sin(\alpha + \beta) \neq 0$, this yields $\sin(\alpha - \beta) = 1/2$. Thus, in view of $\alpha - \beta \in (-\pi/2, \pi/2)$ we deduce that $\cos(\alpha - \beta) = \sqrt{1 - \sin^2(\alpha - \beta)} = \sqrt{3}/2$.

Now, observing that $ab + cd = \frac{T^2}{2}(\sin(2\alpha) + \sin(2\beta)) = T^2 \sin(\alpha + \beta) \cos(\alpha - \beta)$ and $ad + bc = T^2 \sin(\alpha + \beta)$, we obtain $(ab + cd)/(ad + bc) = \cos(\alpha - \beta) = \sqrt{3}/2$.
