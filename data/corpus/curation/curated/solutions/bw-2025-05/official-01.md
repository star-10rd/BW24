## Solution

For convenience, set $m=x_1$ and $M=x_n$. For every $1\le i\le n$ we have

$$
M^2-x_i^2\ge0
\qquad\text{and}\qquad
x_i-m\ge0.
$$

Multiplying these inequalities gives

$$
(M^2-x_i^2)(x_i-m)\ge0,
$$

or equivalently

$$
M^2x_i+mx_i^2\ge M^2m+x_i^3.\tag{1}
$$

Similarly, from $M-x_i\ge0$ and $x_i^2-m^2\ge0$ we get

$$
(M-x_i)(x_i^2-m^2)\ge0,
$$

which is equivalent to

$$
Mx_i^2+m^2x_i\ge Mm^2+x_i^3.\tag{2}
$$

Adding (1) and (2),

$$
(M^2+m^2)x_i+(M+m)x_i^2\ge(M+m)Mm+2x_i^3.
$$

Summing this inequality for $i=1,\ldots,n$ gives

$$
\begin{aligned}
&(M^2+m^2)(x_1+\cdots+x_n)+(M+m)(x_1^2+\cdots+x_n^2)\\
&\qquad\ge (M+m)Mmn+2(x_1^3+\cdots+x_n^3).
\end{aligned}
$$

Multiplying the given condition by $2(x_1+\cdots+x_n)$ yields

$$
2(x_1^3+\cdots+x_n^3)
=(x_1^2+x_n^2)(x_1+\cdots+x_n)
=(m^2+M^2)(x_1+\cdots+x_n).
$$

Using this identity in the preceding inequality, we obtain

$$
(M+m)(x_1^2+\cdots+x_n^2)\ge(M+m)Mmn.
$$

Since $M+m>0$,

$$
x_1^2+x_2^2+\cdots+x_n^2\ge Mmn=nx_1x_n,
$$

as required.
