Solution:

Note that $n$ must be congruent to $1$ or $5$ modulo $6$, and proceed by induction on $\lfloor n / 6 \rfloor$. It can easily be checked that the assertion holds for $n \in \{1,5\}$. Let $n > 6$, and put $t = k^{2} + k + 1$. The claim follows by:
$$
\begin{aligned}
(k+1)^{n} - k^{n} - 1 &= (t + k)(k+1)^{n-2} - (t - (k+1)) k^{n-2} - 1 \\
&\equiv k(k+1)^{n-2} + (k+1) k^{n-2} - 1 \\
&\equiv (t-1)\left((k+1)^{n-3} + k^{n-3}\right) - 1 \\
&\equiv - (k+1)^{n-3} - k^{n-3} - 1 \\
&\equiv - (t + k)(k+1)^{n-5} - (t - (k+1)) k^{n-5} - 1 \\
&\equiv -k(k+1)^{n-5} + (k+1) k^{n-5} - 1 \\
&\equiv - (t-1)\left((k+1)^{n-6} - k^{n-6}\right) - 1 \\
&\equiv (k+1)^{n-6} - k^{n-6} - 1 \pmod{t}.
\end{aligned}
$$
