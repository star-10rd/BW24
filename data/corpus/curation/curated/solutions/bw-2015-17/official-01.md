Since $n$ must be odd, write $n=2^{d} u+1$, where $u, d \in \mathbf{N}$ and $u$ is odd. Now

$$
n^{n-1}-1=\left(n^{2^{d}}-1\right)(\underbrace{n^{2^{d} \cdot(u-1)}+\cdots+n^{2^{d} \cdot 1}+1}_{u}),
$$

and hence $2^{2015} \|\left(n^{n-1}-1\right)$ iff $2^{2015} \|\left(n^{2^{d}}-1\right)$. (The notation $p^{k} \| m$ denotes that $p^{k} \mid m$ and $p^{k+1} \nmid m$.)

We factorise once more:

$$
\begin{aligned}
n^{2^{d}}-1 & =(n-1)(n+1) \underbrace{\left(n^{2}+1\right) \cdots\left(n^{2^{d-1}}+1\right)}_{d-1} \\
& =2^{d} u \cdot 2\left(2^{d-1} u+1\right) \underbrace{\left(n^{2}+1\right) \cdots\left(n^{2^{d-1}}+1\right)}_{d-1} .
\end{aligned}
$$

If $k \geq 1$, then $2 \| n^{2^{k}}+1$, and so from the above

$$
2^{2 d} \| 2^{d} u \cdot 2 \cdot \underbrace{\left(n^{2}+1\right) \cdots\left(n^{2^{d-1}}+1\right)}_{d-1} \quad \text { and } \quad 2^{2015-2 d} \|\left(2^{d-1} u+1\right)
$$

It is easy to see that this is the case exactly when $d=1$ and $u=2^{2013} v-1$, where $v$ is odd.

Hence the required numbers are those of the form

$$
n=2\left(2^{2013} v-1\right)+1=2^{2014} v-1
$$

for $v$ a positive odd number.
