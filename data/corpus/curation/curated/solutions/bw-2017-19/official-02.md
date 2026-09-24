Let $s(n)$ denote the digit sum of $n$. Then we claim the following.

Lemma. We have

$$
s(n+m)=s(n)+s(m)-9 a(n, m)
$$

where $a(n, m)$ denotes the total number of carries, which arises when adding $n$ and $m$.

Proof: We proceed by induction on the maximal number of digits $k$ of $n$ and $m$.

If both $n$ and $m$ are single digit numbers then we have just two cases. If $n+m<10$, then we have no carries and clearly $s(n+m)=n+m=s(n)+s(m)$. If on the other hand $n+m=10+k \geq 10$, then

$$
s(n+m)=1+k=1+(n+m-10)=s(n)+s(m)-9
$$

Assume that the claim holds for all pair with at most $k$ digits each. Let $n=n_{1}+a \cdot 10^{k+1}$ and $m=m_{1}+b \cdot 10^{k+1}$ where $n_{1}$ og $m_{1}$ are at most $k$ digit numbers. If there is no carry at the $k+1$ th digit, then $a(n, m)=a\left(n_{1}, m_{1}\right)$ and thus

$$
\begin{gathered}
s(n+m)=s\left(n_{1}+m_{1}\right)+a+b \\
=s\left(n_{1}\right)+a+s\left(m_{1}\right)+b-9 a\left(n_{1}, m_{1}\right)=s(n)+s(m)-9 a(n, m)
\end{gathered}
$$

If there is a carry then $a(n, m)=1+a\left(n_{1}, m_{1}\right)$ and thus

$$
s(n+m)=s\left(n_{1}+m_{1}\right)+a+b-9
$$

$$
=s\left(n_{1}\right)+a+s\left(m_{1}\right)+b-9\left(a\left(n_{1}, m_{1}\right)+1\right)=s(n)+s(m)-9 a(n, m)
$$

This finishes the induction and we are done.

Now observe that $s\left(2017 \cdot 10^{2017}\right)=2+1+7=10$. We now use (1) a total of $10^{2017}-1$ times which yields

$$
\begin{aligned}
10 & =s\left(2017 \cdot 10^{2017}\right)=s\left(2017 \cdot\left(10^{2017}-1\right)+2017\right) \\
& =s\left(2017 \cdot\left(10^{2017}-1\right)\right)+s(2017)-9 \cdot a\left(10^{2017}-1\right) \\
& \vdots \\
& =s(2017)+s(2017) \cdot\left(10^{2017}-1\right)-9 \cdot \sum_{n=1}^{10^{2017}-1} a(n) \\
& =10 \cdot 10^{2017}-9 \cdot \sum_{n=1}^{10^{2017}-1} a(n)
\end{aligned}
$$

Thus we arrive at

$$
\sum_{n=1}^{10^{2017}-1} a(n)=10 \cdot \frac{10^{2017}-1}{9}
$$
