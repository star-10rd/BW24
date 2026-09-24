Solution:
Let $ab = n$ and $cd = n+76$, where $a, b$ and $c, d$ are the numbers of squares in each direction for the partitioning of the rectangle into $n$ and $n+76$ squares, respectively. Then $\frac{a}{c} = \frac{b}{d}$, or $ad = bc$. Denote $u = \gcd(a, c)$ and $v = \gcd(b, d)$, then there exist positive integers $x$ and $y$ such that $\gcd(x, y) = 1$, $a = ux$, $c = uy$ and $b = vx$, $d = vy$. Hence we have
$$
cd - ab = uv(y^2 - x^2) = uv(y-x)(y+x) = 76 = 2^2 \cdot 19.
$$
Since $y-x$ and $y+x$ are positive integers of the same parity and $\gcd(x, y) = 1$, we have $y-x = 1$ and $y+x = 19$ as the only possibility, yielding $y = 10$, $x = 9$ and $uv = 4$. Finally we have $n = ab = x^2 uv = 324$.
