Solution:
$x_{1997}=23913$.

Note that if $x_{n}=a n+b$ with $0 \leqslant b<n$, then
$$
x_{n+1}=x_{n}+a+2=a(n+1)+b+2.
$$
Hence if $x_{N}=A N$ for some positive integers $A$ and $N$, then for $i=0,1, \ldots, N$ we have $x_{N+i}=A(N+i)+2 i$, and $x_{2 N}=(A+1) \cdot 2 N$.

Since for $N=1$ the condition $x_{N}=A N$ holds with $A=1$, then for $N=2^{k}$ (where $k$ is any non-negative integer) it also holds with $A=k+1$.

Now for $N=2^{10}=1024$ we have $A=11$ and $x_{N+i}=A(N+i)+2 i$, which for $i=973$ makes $x_{1997}=11 \cdot 1997+2 \cdot 973=23913$.
