Solution:

Consider a point $F$ on $BC$ such that $|CF| = |BD|$ (see Figure 14).
Since $\angle ACF = 60^{\circ}$, triangle $ACF$ is equilateral. Therefore $|AF| = |AC| = |CE|$ and $\angle AFB = \angle ECD = 120^{\circ}$. Moreover, $|BF| = |CD|$. This implies that triangles $AFB$ and $ECD$ are congruent, and $|AB| = |DE|$.

![](attached_image_1.png)
Figure 14

Alternative solution. The cosine law in triangle $ABC$ implies
$$
\begin{aligned}
|AB|^2 & = |AC|^2 + |BC|^2 - 2 \cdot |AC| \cdot |BC| \cdot \cos \angle ACB = \\
& = |AC|^2 + |BC|^2 - |AC| \cdot |BC| = \\
& = |AC|^2 + (|BD| + |DC|)^2 - |AC| \cdot (|BD| + |DC|) = \\
& = |AC|^2 + (|AC| + |DC|)^2 - |AC| \cdot (|AC| + |DC|) = \\
& = |AC|^2 + |DC|^2 + |AC| \cdot |DC|
\end{aligned}
$$
On the other hand, the cosine law in triangle $CDE$ gives
$$
\begin{aligned}
|DE|^2 & = |DC|^2 + |CE|^2 - 2 \cdot |DC| \cdot |CE| \cdot \cos \angle DCE = \\
& = |DC|^2 + |CE|^2 + |DC| \cdot |EC| = \\
& = |DC|^2 + |AC|^2 + |DC| \cdot |AC| .
\end{aligned}
$$
Hence $|AB| = |DE|$.
