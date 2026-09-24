Answer: $f(2020)=f(4) \cdot f(5) \cdot f(101)=1 \cdot 1 \cdot 101=101$.

To prove our claim we show that $f$ is multiplicative, that is, $f(r s)=f(r) f(s)$ for coprime numbers $r, s \in \mathbb{N}$, and that

(i) $f(4)=1$,

(ii) $f(5)=1$,

(iii) $f(101)=101$.

The multiplicative property follows from the Chinese Remainder Theorem.

(i) Integers $x, y$ and $z$ satisfy $x^{2}+y^{2}+z^{2} \equiv 0 \bmod 4$ if and only if they are all even. In this case $x y z \equiv 0 \bmod 4$. Hence 0 is the only fan of 4 .

(ii) Integers $x, y$ and $z$ satisfy $x^{2}+y^{2}+z^{2} \equiv 0 \bmod 5$ if and only if at least one of them is divisible by 5 . In this case $x y z \equiv 0 \bmod 5$. Hence 5 is the only fan of 5 .

(iii) We have $9^{2}+4^{2}+2^{2}=81+16+4=101$. Hence $(9 x)^{2}+(4 x)^{2}+(2 x)^{2}$ is divisible by 101 for every integer $x$. Hence the residue of $9 x \cdot 4 x \cdot 2 x=72 x^{3}$ upon division by 101 is a fan of 101 for every $x \in \mathbb{Z}$. If we substitute $x=t^{67}$, then $x^{3}=t^{201} \equiv t \bmod 101$. Since 72 is coprime to 101 , the number $72 x^{3} \equiv 72 t$ can take any residue modulo 101 .

Note: In general for $p \not \equiv 1(\bmod 3)$, we have $f(p)=p$ as soon as we have at least one non-zero fan.
