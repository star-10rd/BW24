## Solution

We start with a lemma.

**Lemma 1.** If all interior angles of an $n$-gon are $120^\circ$ or $240^\circ$, then $n$ is even.

**Proof.** If $a$ angles are $120^\circ$ and $b$ angles are $240^\circ$, then

$$
180^\circ(n-2)=120^\circ a+240^\circ b,
$$

so

$$
3(n-2)=2a+4b.
$$

The right-hand side is even, hence $n$ is even.

Introduce six unit vectors

$$
\begin{aligned}
\mathbf a&=(1,0),&
\mathbf b&=\left(\frac12,\frac{\sqrt3}{2}\right),&
\mathbf c&=\left(-\frac12,\frac{\sqrt3}{2}\right),\\
\mathbf d&=(-1,0),&
\mathbf e&=\left(-\frac12,-\frac{\sqrt3}{2}\right),&
\mathbf f&=\left(\frac12,-\frac{\sqrt3}{2}\right).
\end{aligned}
$$

Each vector is obtained from the preceding one by a $60^\circ$ counterclockwise rotation. Since the consecutive side lengths $n,n-1,\ldots,2,1$ are fixed, a Baltic polyiamond can be encoded by the directions of its side vectors.

For example, one possible $12$-gon is encoded by

$$
A B C D E D E F A F A B,
$$

with side vectors

$$
12\mathbf a,11\mathbf b,10\mathbf c,9\mathbf d,8\mathbf e,7\mathbf d,
6\mathbf e,5\mathbf f,4\mathbf a,3\mathbf f,2\mathbf a,\mathbf b,
$$

whose sum is $(0,0)$.

Call the vertex where the side of length $n$ meets the side of length $1$ the *origin*. Without loss of generality, rotate the polyiamond so that its longest side has direction $A$.

**Lemma 2.** An encoding of a Baltic polyiamond starting with $A$ consists of pairs

$$
AB,\ AF,\ CB,\ CD,\ ED,\ EF
$$

in some order.

**Proof.** A side in direction $A$, $C$, or $E$ can be followed only by a direction immediately preceding or following it in the cyclic list $A,B,C,D,E,F$. For example, $A$ can be followed by $F$ or $B$; following it by $E$ or $C$ would create an acute interior angle, while following it by $A$ or $D$ does not give the permitted turn. The same argument applies to $C$ and $E$. Hence side directions alternate between $\{A,C,E\}$ and $\{B,D,F\}$, giving precisely the six listed pairs.

**Lemma 3.** Colour the triangular lattice with colours $0,1,2$ modulo $3$ as follows: if a lattice point is written as $r\mathbf a+s\mathbf b$ with integers $r,s$, give it colour $r-s\pmod3$. If the origin has colour $0$, then after every two sides of a Baltic polyiamond the colour increases by $1$ modulo $3$.

**Proof.** By Lemma 2 it is enough, using the $120^\circ$ rotational symmetry of the colouring, to check the pairs $AB$ and $AF$.

For $AB$, the displacement along consecutive sides of lengths $2k$ and $2k-1$ is

$$
2k\mathbf a+(2k-1)\mathbf b=2k(\mathbf a+\mathbf b)-\mathbf b.
$$

The vector $2k(\mathbf a+\mathbf b)$ changes the colour by $2k(1-1)=0$, while $-\mathbf b$ changes it by $1$ modulo $3$.

Similarly,

$$
2k\mathbf a+(2k-1)\mathbf f=2k(\mathbf a+\mathbf f)-\mathbf f,
$$

and the first term preserves the colour while $-\mathbf f$ increases it by $1$ modulo $3$.

Thus every pair of sides increases the colour by $1$ modulo $3$. After all $n$ sides the polygon returns to its origin, so the number $n/2$ of side pairs is divisible by $3$. Therefore $6\mid n$.
