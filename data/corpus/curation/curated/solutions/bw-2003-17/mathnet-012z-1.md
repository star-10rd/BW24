Solution:

Let $d>1$ be a divisor of $n$. Suppose Mary's program outputs "composite" for $d$. That means it has found a divisor of $d$ greater than 1. Since $d>1$, the array contains at least 2 divisors of $d$, namely 1 and $d$. Thus Mary's program does not check divisibility of $d$ by $d$ (the first half gets complete before reaching $d$), which means that the divisor found lies strictly between 1 and $d$. Hence $d$ is composite indeed.

Suppose now $d$ is composite. Let $p$ be its smallest prime divisor; then $\frac{d}{p} \geq p$ or, equivalently, $d \geq p^{2}$. As $p$ is a divisor of $n$, it occurs in the array. Let $a_{1}, \ldots, a_{k}$ be all divisors of $n$ smaller than $p$. Then $p a_{1}, \ldots, p a_{k}$ are less than $p^{2}$ and hence less than $d$.

As $a_{1}, \ldots, a_{k}$ are all relatively prime with $p$, all the numbers $p a_{1}, \ldots, p a_{k}$ divide $n$. The numbers $a_{1}, \ldots, a_{k}, p a_{1}, \ldots, p a_{k}$ are pairwise different by construction. Thus there are at least $2k+1$ divisors of $n$ not greater than $d$. So Mary's program checks divisibility of $d$ by at least $k+1$ smallest divisors of $n$, among which it finds $p$, and outputs "composite".
