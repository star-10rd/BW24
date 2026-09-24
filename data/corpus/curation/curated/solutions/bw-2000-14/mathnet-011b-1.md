Solution:

$2000$ is the only such integer.

Let $d(n)$ denote the number of positive divisors of $n$ and $p \triangleright n$ denote the exponent of the prime $p$ in the canonical representation of $n$. Let $\delta(n)=\frac{n}{d(n)}$. Using this notation, the problem reformulates as follows: Find all positive integers $n$ such that $\delta(n)=100$.

Lemma: Let $n$ be an integer and $m$ its proper divisor. Then $\delta(m) \leqslant \delta(n)$ and the equality holds if and only if $m$ is odd and $n=2m$.

Proof. Let $n=mp$ for a prime $p$. By the well-known formula
$$
d(n)=\prod_{p}(1+p \triangleright n)
$$
we have
$$
\frac{\delta(n)}{\delta(m)}=\frac{n}{m} \cdot \frac{d(m)}{d(n)}=p \cdot \frac{1+p \triangleright m}{1+p \triangleright n}=p \cdot \frac{p \triangleright n}{1+p \triangleright n} \geqslant 2 \cdot \frac{1}{2}=1,
$$
hence $\delta(m) \leqslant \delta(n)$. It is also clear that equality holds if and only if $p=2$ and $p \triangleright n=1$, i.e. $m$ is odd and $n=2m$.

For the general case $n=ms$ where $s>1$ is an arbitrary positive integer, represent $s$ as a product of primes. By elementary induction on the number of factors in the representation we prove $\delta(m) \leqslant \delta(n)$. The equality can hold only if all factors are equal to $2$ and the number $m$ as well as any intermediate result of multiplying it by these factors is odd, i.e. the representation of $s$ consists of a single prime $2$, which gives $n=2m$. This proves the lemma.

Now assume that $\delta(n)=100$ for some $n$, i.e. $n=100 \cdot d(n)=2^{2} \cdot 5^{2} \cdot d(n)$. In the following, we estimate the exponents of primes in the canonical representation of $n$, using the fact that $100$ is a divisor of $n$.

(1) Observe that $\delta\left(2^{7} \cdot 5^{2}\right)=\frac{2^{5} \cdot 100}{8 \cdot 3}=\frac{3200}{24}>100$. Hence $2 \triangleright n \leqslant 6$, since otherwise $2^{7} \cdot 5^{2}$ divides $n$ and, by the lemma, $\delta(n)>100$.

(2) Observe that $\delta\left(2^{2} \cdot 5^{4}\right)=\frac{5^{2} \cdot 100}{3 \cdot 5}=\frac{2500}{15}>100$. Hence $5 \triangleright n \leqslant 3$, since otherwise $2^{2} \cdot 5^{4}$ divides $n$ and, by the lemma, $\delta(n)>100$.

(3) Observe that $\delta\left(2^{2} \cdot 5^{2} \cdot 3^{4}\right)=\frac{3^{4} \cdot 100}{3 \cdot 3 \cdot 5}=\frac{8100}{45}>100$. Hence $3 \triangleright n \leqslant 3$, since otherwise $2^{2} \cdot 5^{2} \cdot 3^{4}$ divides $n$ and, by the lemma, $\delta(n)>100$.

(4) Take a prime $q>5$ and an integer $k \geqslant 4$. Then
$$
\begin{aligned}
\delta\left(2^{2} \cdot 5^{2} \cdot q^{k}\right) & =\frac{2^{2} \cdot 5^{2} \cdot q^{k}}{d\left(2^{2} \cdot 5^{2} \cdot q^{k}\right)}=\frac{2^{2} \cdot 5^{2} \cdot q^{k}}{d\left(2^{2} \cdot 5^{2} \cdot 3^{k}\right)}>\frac{2^{2} \cdot 5^{2} \cdot 3^{k}}{d\left(2^{2} \cdot 5^{2} \cdot 3^{k}\right)}= \\
& =\delta\left(2^{2} \cdot 5^{2} \cdot 3^{k}\right)>100 .
\end{aligned}
$$
Hence, similarly to the previous cases, we get $q \triangleright n \leqslant 3$.

(5) If a prime $q>7$ divides $n$, then $q$ divides $d(n)$. Thus $q$ divides $1+p \triangleright n$ for some prime $p$. But this is impossible because, as the previous cases showed, $p \triangleright n \leqslant 6$ for all $p$. So $n$ is not divisible by primes greater than $7$.

(6) If $7$ divides $n$, then $7$ divides $d(n)$ and hence divides $1+p \triangleright n$ for some prime $p$. By (1)-(4), this implies $p=2$ and $2 \triangleright n=6$. At the same time, if $2 \triangleright n=6$, then $7$ divides $d(n)$ and $n$. So $7$ divides $n$ if and only if $2 \triangleright n=6$. Since $\delta\left(2^{6} \cdot 5^{2} \cdot 7\right)=\frac{2^{4} \cdot 7 \cdot 100}{7 \cdot 3 \cdot 2}=\frac{11200}{42}>100$, both of these conditions cannot hold simultaneously. So $n$ is not divisible by $7$ and $2 \triangleright n \leqslant 5$.

(7) If $5 \triangleright n=3$, then $5$ divides $d(n)$ and hence divides $1+p \triangleright n$ for some prime $p$. By (1)-(4), this implies $p=2$ and $2 \triangleright n=4$. At the same time, if $2 \triangleright n=4$, then $5$ divides $d(n), 5^{3}$ divides $n$ and, by (2), $5 \triangleright n=3$. So $5 \triangleright n=3$ if and only if $2 \triangleright n=4$. Since $\delta\left(2^{4} \cdot 5^{3}\right)=\frac{2^{2} \cdot 5 \cdot 100}{5 \cdot 4}=100$, we find that $n=2^{4} \cdot 5^{3}=2000$ satisfies the required condition. On the other hand, if $2 \triangleright n=4$ and $5 \triangleright n=3$ for some $n \neq 2000$, then $n=2000s$ for some $s>1$ and, by the lemma, $\delta(n)>100$.

(8) The case $5 \triangleright n=2$ has remained. By (7), we have $2 \triangleright n \neq 4$, so $2 \triangleright n \in\{2,3,5\}$. The condition $5 \triangleright n=2$ implies that $3$ divides $d(n)$ and $n$, thus $3 \triangleright n \in\{1,2,3\}$. If $2 \triangleright n=3$, then $d(n)$ is divisible by $2$ but not by $4$. At the same time $2 \triangleright n=3$ implies $3+1=4$ divides $d(n)$, a contradiction. Thus $2 \triangleright n \in\{2,5\}$, and $3^{2}$ divides $d(n)$ and $n$, i.e. $3 \triangleright n \in\{2,3\}$. Now $3 \triangleright n=2$ would imply that $3^{3}$ divides $d(n)$ and $n$, a contradiction; on the other hand $3 \triangleright n=3$ would imply $3 \triangleright d(n)=2$ and hence $3 \triangleright n=2$, a contradiction.
