Solution:
Consider the equation
$$
\left(\frac{7}{9}\right)^{x}+\left(\frac{1}{9}\right)^{x}=1.
$$
It has a root $\frac{1}{2}<\alpha<1$, because $\sqrt{\frac{7}{9}}+\sqrt{\frac{1}{9}}=\frac{\sqrt{7}+1}{3}>1$ and $\frac{7}{9}+\frac{1}{9}<1$. We will prove that $a_{n} \leqslant M \cdot n^{\alpha}$ for some $M>0$—since $\frac{n^{\alpha}}{n}$ will be arbitrarily small for large enough $n$, the claim follows from this immediately. We choose $M$ so that the inequality $a_{n} \leqslant M \cdot n^{\alpha}$ holds for $1 \leqslant n \leqslant 8$; since for $n \geqslant 9$ we have $1<\left[7 n / 9\right]<n$ and $1 \leqslant\left[n / 9\right]<n$, it follows by induction that
$$
\begin{aligned}
a_{n} & =a_{[7 n / 9]}+a_{[n / 9]} \leqslant M \cdot\left[\frac{7 n}{9}\right]^{\alpha}+M \cdot\left[\frac{n}{9}\right]^{\alpha} \\& \leqslant M \cdot\left(\frac{7 n}{9}\right)^{\alpha}+M \cdot\left(\frac{n}{9}\right)^{\alpha}=M \cdot n^{\alpha} \cdot\left(\left(\frac{7}{9}\right)^{\alpha}+\left(\frac{1}{9}\right)^{\alpha}\right)=M \cdot n^{\alpha}.
\end{aligned}
$$
