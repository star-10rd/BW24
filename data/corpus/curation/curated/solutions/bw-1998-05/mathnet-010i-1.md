Solution:
If $b=0$, then $N=10^{n} a$ meets the demands. For the sequel, suppose $b \neq 0$.

Let $n$ be fixed. We prove that if $1 \leqslant k \leqslant n$, then we can find a positive integer $m_{k}<5^{k}$ such that the last $k$ digits of $m_{k} 2^{n}$ are all $a$ or $b$.

Clearly, for $k=1$ we can find $m_{1}$ with $1 \leqslant m_{1} \leqslant 4$ such that $m_{1} 2^{n}$ ends with the digit $b$. (This corresponds to solving the congruence $m_{1} 2^{n-1} \equiv \frac{b}{2}$ modulo 5.) If $n=1$, we are done. Hence let $n \geqslant 2$.

Assume that for a certain $k$ with $1 \leqslant k<n$ we have found the integer $m_{k}$. Let $c$ be the $(k+1)$-st digit from the right of $m_{k} 2^{n}$ (i.e., the coefficient of $10^{k}$ in its decimal representation). Consider the number $5^{k} 2^{n}$: it ends with precisely $k$ zeros, and the last non-zero digit is even; call it $d$. For any $r$, the corresponding digit of the number $m_{k} 2^{n}+r 5^{k} 2^{n}$ will be $c+r d$ modulo 10. By a suitable choice of $r \leqslant 4$ we can make this digit be either $a$ or $b$, according to whether $c$ is odd or even. (As before, this corresponds to solving one of the congruences $r \cdot \frac{d}{2} \equiv \frac{a-c}{2}$ or $r \cdot \frac{d}{2} \equiv \frac{b-c}{2}$ modulo 5.)

Now, let $m_{k+1}=m_{k}+r 5^{k}$. The last $k+1$ digits of $m_{k+1} 2^{n}$ are all $a$ or $b$. As $m_{k+1}<5^{k}+4 \cdot 5^{k}=5^{k+1}$, we see that $m_{k+1}$ has the required properties. This process can be continued until we obtain a number $m_{n}$ such that the last $n$ digits of $N=m_{n} 2^{n}$ are $a$ or $b$. Since $m_{n}<5^{n}$, the number $N$ has at most $n$ digits, all of which are $a$ or $b$.
