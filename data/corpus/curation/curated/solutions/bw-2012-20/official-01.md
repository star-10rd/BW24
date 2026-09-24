There are no solutions. The hardest part of the problem is to determine a modulus $m$ that would yield a contradiction. There should be few sixth and seventh powers modulo $m$, hence, a natural choice is $6 \cdot 7+1=43$. Luckily, it is a prime.

Now, just write out sixth powers $(0,1,4,11,16,21,35,41)$ and seventh powers $(0,1,6,7,36,37,42)$ modulo 43 , and see that they can't be combined to give 11. Indeed,

$$
\begin{aligned}
2 x^{6} \bmod 43 & \in\{0,2,8,22,27,32,39,42\}, \\
11-y^{7} \bmod 43 & \in\{4,5,10,11,12,17,18\},
\end{aligned}
$$

and these sets do not intersect.

Remark. To find the sixth and seventh powers modulo 43, we can note that 3 is a primitive root modulo 43. So the nonzero sixth powers are exactly the powers of $3^{6} \equiv 41 \equiv-2$ and the nonzero seventh powers are the powers of $3^{7} \equiv 37 \equiv-6$ $(\bmod 43)$.
