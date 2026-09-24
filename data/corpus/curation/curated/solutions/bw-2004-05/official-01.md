For odd $n$ we have

$$
(k)_{n}=k+\frac{n-1}{2}-\left[k+\frac{n-1}{2}\right]_{n^{\prime}}
$$

where $[m]_{n}$ denotes the principal remainder of $m$ modulo $n$. Hence we get

$$
f(k)=6-[k+1]_{3}-[2 k+2]_{5}-[3 k+3]_{7}
$$

The condition that the principal remainders take the values $a, b$ and $c$, respectively, may be written

$$
\begin{aligned}
k+1 \equiv a & (\bmod 3) \\
2 k+2 \equiv b & (\bmod 5) \\
3 k+3 & \equiv c \quad(\bmod 7)
\end{aligned}
$$

or

$$
\begin{aligned}
& k \equiv a-1 \quad(\bmod 3) \\
& k \equiv-2 b-1 \quad(\bmod 5) \\
& k \equiv-2 c-1 \quad(\bmod 7)
\end{aligned}
$$

By the Chinese Remainder Theorem, these congruences have a solution for any set of $a, b, c$. Hence $f$ takes all the integer values between $6-2-4-6=-6$ and $6-0-0-0=$ 6. (In fact, this proof also shows that $f$ is periodic with period $3 \cdot 5 \cdot 7=105$.)
