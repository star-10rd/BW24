Answer: equality holds if $a=b$ or the angle opposite to $c$ is equal to $90^{\circ}$. Denote the angles opposite to the sides $a, b, c$ by $A, B, C$, respectively. By the law of sines we have $a=2 R \sin A, b=2 R \sin B, c=2 R \sin C$. Hence, the given inequality is equivalent to each of the following:

$$
\begin{aligned}
& R \geqslant \frac{4 R^{2}\left(\sin ^{2} A+\sin ^{2} B\right)}{2 \sqrt{8 R^{2}\left(\sin ^{2} A+\sin ^{2} B\right)-4 R^{2} \sin ^{2} C}}, \\
& 2\left(\sin ^{2} A+\sin ^{2} B\right)-\sin ^{2} C \geqslant\left(\sin ^{2} A+\sin ^{2} B\right)^{2} \\
& \left(\sin ^{2} A+\sin ^{2} B\right)\left(2-\sin ^{2} A-\sin ^{2} B\right) \geqslant \sin ^{2} C \\
& \left(\sin ^{2} A+\sin ^{2} B\right)\left(\cos ^{2} A+\cos ^{2} B\right) \geqslant \sin ^{2} C
\end{aligned}
$$

The last inequality follows from the Cauchy-Schwarz inequality:

$$
\begin{aligned}
& \left(\sin ^{2} A+\sin ^{2} B\right)\left(\cos ^{2} B+\cos ^{2} A\right) \geqslant \\
& \quad \geqslant(\sin A \cdot \cos B+\sin B \cdot \cos A)^{2}=\sin ^{2} C .
\end{aligned}
$$

Equality requires that $\sin A=\lambda \cos B$ and $\sin B=\lambda \cos A$ for a certain real number $\lambda$, implying that $\lambda$ is positive and $A, B$ are acute angles. From these two equations we conclude that $\sin 2 A=\sin 2 B$. This means that either $2 A=2 B$ or $2 A+2 B=\pi$; in other words, $a=b$ or $C=90^{\circ}$. In each of these two cases the inequality indeed turns into equality.

![](figure-2.png)

Figure 2

Alternative solution. Let $A, B, C$ be the respective vertices of the triangle, $O$ be its circumcentre and $M$ be the midpoint of $A B$ (see Figure 2). The length $m_{c}=|C M|$ of the median drawn from $C$ is expressed by the well-
known formula

$$
4 m_{c}^{2}=2 a^{2}+2 b^{2}-c^{2} .
$$

Hence the inequality of the problem can be rewritten as $4 R m_{c} \geqslant a^{2}+b^{2}$, or $8 R m_{c} \geqslant 4 m_{c}^{2}+c^{2}$. The last inequality is equivalent to

$$
\left|m_{c}-R\right| \leqslant \sqrt{R^{2}-(c / 2)^{2}},
$$

or ||$M C|-| O C|| \leqslant|O M|$, which is the triangle inequality for triangle COM .

Equality holds if and only if the points $C, O, M$ are collinear. This happens if and only if $a=b$ or $\angle C=90^{\circ}$.

Remark. Yet another solution can be obtained by setting $R=\frac{a b c}{4 S}$ (where $S$ denotes the area of the triangle) and expressing $S$ by Heron's formula. After squaring both sides, cross-multiplying and cancelling a lot, the inequality reduces to $\left(a^{2}-b^{2}\right)^{2}\left(a^{2}+b^{2}-c^{2}\right)^{2} \geqslant 0$, with equality if $a=b$ or $a^{2}+b^{2}=c^{2}$.

![](figure-3.png)

Figure 3
