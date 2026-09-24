We start by rewriting the expression as follows:
$$
\cos(56^\circ) \cdot \cos(2 \cdot 56^\circ) \cdot \dots \cdot \cos(2^{23} \cdot 56^\circ) = \frac{\sin(56^\circ) \cdot \cos(56^\circ) \cdot \cos(2 \cdot 56^\circ) \cdot \dots \cdot \cos(2^{23} \cdot 56^\circ)}{\sin(56^\circ)}
$$
Now, by applying the addition formula $\sin(x) \cos(x) = \sin(2x)/2$, we obtain
$$
\frac{\sin(56^\circ) \cdot \cos(56^\circ) \cdot \cos(2 \cdot 56^\circ) \cdot \dots \cdot \cos(2^{23} \cdot 56^\circ)}{\sin(56^\circ)} = \\
= \frac{\sin(2 \cdot 56^\circ) \cdot \cos(2 \cdot 56^\circ) \cdot \dots \cdot \cos(2^{23} \cdot 56^\circ)}{2 \cdot \sin(56^\circ)}
$$
We observe that we can do the same trick again. In this way, by applying the addition formula 23 times, we get
$$
\cos(56^\circ) \cdot \cos(2 \cdot 56^\circ) \cdot \dots \cdot \cos(2^{23} \cdot 56^\circ) = \frac{\sin(2^{24} \cdot 56^\circ)}{2^{23} \cdot \sin(56^\circ)}
$$
The last step is to prove that $\sin(2^{24} \cdot 56^\circ) = \sin 56^\circ$. If we can show that
$$
2^{24} \cdot 56 = 360 \cdot k + 56
$$
for some integer $k$, then the desired equality follows by the periodicity of sin. We have
$$
k = \frac{2^{24} \cdot 56 - 56}{360} = 7 \cdot \frac{2^{24} - 1}{45},
$$
and since $\phi(45) = 24$, the Euler-Fermat theorem implies that $k$ is indeed an integer, as claimed.
