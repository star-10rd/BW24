Solution:
In this solution we allow $L$ to be $\infty$ as well. We show that $L=1$ is the only possible value. Assume that $L>1$. Then there exists a number $N$ such that for any $n \geq N$ we have $\frac{\varphi(n)}{n}>1$ and thus $\varphi(n) \geq n+1 \geq N+1$. But then $\varphi$ cannot be bijective, since the numbers $1,2, \ldots, N-1$ cannot be bijectively mapped onto $1,2, \ldots, N$.

Now assume that $L<1$. Since $\varphi$ is bijective we clearly have $\varphi(n) \rightarrow \infty$ as $n \rightarrow \infty$. Then

$$
\lim _{n \rightarrow \infty} \frac{\varphi^{-1}(n)}{n}=\lim _{n \rightarrow \infty} \frac{\varphi^{-1}(\varphi(n))}{\varphi(n)}=\lim _{n \rightarrow \infty} \frac{n}{\varphi(n)}=\frac{1}{L}>1,
$$

i.e., $\lim _{n \rightarrow \infty} \frac{\varphi^{-1}(n)}{n}>1$, which is a contradiction since $\varphi^{-1}$ is also bijective. (When $L=0$ we interpret $\frac{1}{L}$ as $\infty$ ).
