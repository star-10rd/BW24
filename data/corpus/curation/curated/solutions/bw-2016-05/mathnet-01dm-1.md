Let $p$ be a prime with residue $3$ modulo $4$ and $p > 3$. Then $p - 1 = u \cdot 2$ where $u > 1$ is odd. Choose $a_0 = 2$. The order of $2$ modulo $p$ (that is, the smallest positive integer $t$ such that $2^t \equiv 1 \pmod p$) is a divisor of $p-1 = u \cdot 2$, but not a divisor of $2$ since $2^2 \ne 1 \pmod p$. Hence the order of $2$ modulo $p$ is not a power of $2$. From the definition we see that $a_n = a_0^{2^{1+2+\cdots+n}}$. Since the order of $a_0 = 2$ modulo $p$ is not a power of $2$, we know that $a_n \ne 1 \pmod p$ for all $n=1,2,3,\dots$.

We prove the statement by contradiction. Assume there exists a positive integer $N$ such that $a_n \equiv a_N \pmod p$ for all $n \ge N$. Let $d > 1$ be the order of $a_N$ modulo $p$ (that is, the smallest positive integer $s$ such that $a_N^s \equiv 1 \pmod p$). Then $a_N \equiv a_n \equiv a_{n+1} = a_n^{2^{n+1}} \equiv a_N^{2^{n+1}} \pmod p$, and hence $a_N^{2^{n+1}-1} \equiv 1 \pmod p$ for all $n \ge N$. Now $d$ divides $2^{n+1}-1$ for all $n \ge N$, but this is a contradiction since
$$
\begin{aligned}
\gcd(2^{n+1} - 1, 2^{n+2} - 1) &= \gcd(2^{n+1} - 1, 2^{n+2} - 1 - 2(2^{n+1} - 1)) \\
&= \gcd(2^{n+1} - 1, 1) = 1.
\end{aligned}
$$

Hence there does not exist such an $N$.

*Remark.* The following is an alternative solution to the problem, without using the concept of orders of integers. We choose $a_0 = 4$. From the definition we see that $a_n = 4^{2^{n(n+1)/2}}$ for $n = 1, 2, \dots$. Suppose that there exists an integer $N$ for which $a_n \equiv a_N \pmod p$ whenever $n \ge N$. Pick an integer $n \ge N$ such that $n \equiv 0 \pmod{2\varphi(\frac{p-1}{2})}$ (where $\varphi(\cdot)$ stands for Euler's function). Then $\frac{n(n+1)}{2} \equiv 0 \pmod{\varphi(\frac{p-1}{2})}$. Since $\frac{p-1}{2}$ is odd by assumption, Euler's theorem implies $2^{n(n+1)/2} \equiv 1 \pmod{\frac{p-1}{2}}$. Writing $2^{n(n+1)/2} = 1 + k \cdot \frac{p-1}{2}$ for some integer $k \ge 0$, we see that $a_n = 4^{1+k \cdot (p-1)/2} = 4 \cdot 2^{k(p-1)} \equiv 4 \pmod p$ by Fermat's little theorem. After this, pick another integer $n \ge N$, this time satisfying $n \equiv 1 \pmod{2\varphi(\frac{p-1}{2})}$. Then $\frac{n(n+1)}{2} \equiv 1 \pmod{\varphi(\frac{p-1}{2})}$. By Euler's theorem, we get $2^{n(n+1)/2} \equiv 2^1 \pmod{\frac{p-1}{2}}$. Again writing $2^{n(n+1)/2} = 2 + k \cdot \frac{p-1}{2}$ for some integer $k \ge 0$, we see that $a_n \equiv 4^2 \pmod p$. Since $a_n \pmod p$ was constant for $n \ge N$, we deduce $4^2 \equiv 4 \pmod p$, which gives the desired contradiction.
