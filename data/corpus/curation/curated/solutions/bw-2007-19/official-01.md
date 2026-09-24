There exist infinitely many nice numbers, so we can find a nice number with at least $10 k+1$ digits in its decimal representation. Let $c_{1}, c_{2}, \ldots, c_{10 k+1}$ be consecutive digits of this nice number.

By the definition of a nice number, the following two numbers are divisible by $r$ :

$$
\begin{aligned}
a & =10^{k-1} c_{1}+10^{k-2} c_{2}+\cdots+10 c_{k-1}+c_{k} \\
b & =10^{k-1} c_{2}+10^{k-2} c_{3}+\cdots+10 c_{k}+c_{k+1}
\end{aligned}
$$

It follows that the number

$$
10 a-b=10^{k} c_{1}-c_{k+1}
$$

is divisible by $r$ as well. If we denote $d_{i}=c_{i k+1}(i=0,1, \ldots, 10)$, then by similar calculations we obtain the divisibilities

$$
r \mid 10^{k} d_{i}-d_{i+1} \quad \text { for } i=0,1, \ldots, 9
$$

Observe that $d_{0}, d_{1}, \ldots, d_{10}$ is a sequence of 11 digits, so some of them must be equal. Consequently, there exist indices $0 \leq i<j \leq 10$ such that the digits $d_{i}, d_{i+1}, \ldots, d_{j-1}$ are pairwise different and $d_{i}=d_{j}$. Therefore using (3) we see that the number

$$
\begin{aligned}
\left(10^{k} d_{i}\right. & \left.-d_{i+1}\right)+\left(10^{k} d_{i+1}-d_{i+2}\right)+\cdots+\left(10^{k} d_{j-1}-d_{j}\right) \\
& =\left(10^{k} d_{i}-d_{i+1}\right)+\left(10^{k} d_{i+1}-d_{i+2}\right)+\cdots+\left(10^{k} d_{j-1}-d_{i}\right) \\
& =\left(10^{k}-1\right)\left(d_{i}+d_{i+1}+\cdots+d_{j-1}\right)
\end{aligned}
$$

is divisible by $r$. But the factor $d_{i}+d_{i+1}+\cdots+d_{j-1}$ is a sum of distinct digits, so it does not exceed $0+1+2+\cdots+9=45$. Hence this factor is relatively prime to $r$. This proves that the $k$-digit number $10^{k}-1$ is divisible by $r$, and it is therefore a nice number.
