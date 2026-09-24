Solution:

First we show that $n = 2^{s}$ for some integer $s \geq 0$. Indeed, if $n = m p$ where $p$ is an odd prime, then $a^{n} + 1 = a^{m p} + 1 = \left(a^{m} + 1\right)\left(a^{m(p-1)} - a^{m(p-2)} + \cdots - a + 1\right)$, a contradiction.

Now we use induction on $s$ to prove that $d\left(a^{2^{s}} - 1\right) \geq 2^{s}$. The case $s = 0$ is obvious. As $a^{2^{s}} - 1 = \left(a^{2^{s-1}} - 1\right)\left(a^{2^{s-1}} + 1\right)$, then for any divisor $q$ of $a^{2^{s-1}} - 1$, both $q$ and $q\left(a^{2^{s-1}} + 1\right)$ are divisors of $a^{2^{s}} - 1$. Since the divisors of the form $q\left(a^{2^{s-1}} + 1\right)$ are all larger than $a^{2^{s-1}} - 1$ we have $d\left(a^{2^{s}} - 1\right) \geq 2 \cdot d\left(a^{2^{s-1}} - 1\right) = 2^{s}$.
