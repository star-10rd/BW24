Solution:

Rewriting $a^{2^{n}} + 2^{2^{n}} = a^{2^{n}} - 2^{2^{n}} + 2 \cdot 2^{2^{n}}$ and making repeated use of the identity
$$
a^{2^{n}} - 2^{2^{n}} = \left(a^{2^{n-1}} - 2^{2^{n-1}}\right) \cdot \left(a^{2^{n-1}} + 2^{2^{n-1}}\right)
$$
we get
$$
\begin{gathered}
a^{2^{n}} + 2^{2^{n}} = \left(a^{2^{n-1}} + 2^{2^{n-1}}\right) \cdot \left(a^{2^{n-2}} + 2^{2^{n-2}}\right) \cdot \ldots \cdot \left(a^{2^{m}} + 2^{2^{m}}\right) \cdot \ldots \\
\ldots \cdot \left(a^{2} + 2^{2}\right) \cdot (a+2) \cdot (a-2) + 2 \cdot 2^{2^{n}}
\end{gathered}
$$
For $n > m$, assume that $a^{2^{n}} + 2^{2^{n}}$ and $a^{2^{m}} + 2^{2^{m}}$ have a common divisor $d > 1$. Then an odd integer $d$ divides $2 \cdot 2^{2^{n}}$, a contradiction.
