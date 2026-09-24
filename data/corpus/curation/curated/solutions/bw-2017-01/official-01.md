From the inequality $\frac{a_{n-1}+a_{n+1}}{2} \geq a_{n}$ we get $a_{n+1}-a_{n} \geq a_{n}-a_{n-1}$. Inductively this yields that $a_{l+1}-a_{l} \geq a_{k+1}-a_{k}$ for any positive integers $l>k$, which rewrites as

$$
a_{l+1}+a_{k} \geq a_{l}+a_{k+1}
$$

Now fix $n$ and define $b_{m}=a_{m}+a_{n+1-m}$ for $m=0, \ldots n+1$. For $m<\frac{n}{2}$, we can apply the above for $(l, k)=(n-m, m)$ yielding

$$
b_{m}=a_{n+1-m}+a_{m} \geq a_{n-m}+a_{m+1}=b_{m+1}
$$

Also by symmetry $b_{m}=b_{n+1-m}$. Thus

$$
b_{0}=\max _{m=0, \ldots, n+1} b_{m} \geq \max _{m=1, \ldots, n} b_{m} \geq \frac{b_{1}+\cdots+b_{n}}{n}
$$

substituting back yields the desired inequality.
