Notice that among the constant polynomials the only solutions are $P(t) = q^m$ where $q$ is a prime and $m$ a positive integer. Assume that
$$
P(t) = a_k t^k + \cdots + a_0,
$$
where $a_k \neq 0$ and $a_0, a_1, \ldots, a_k$ are non-negative integers, is a polynomial that fulfills the conditions.

First consider the case $a_0 \neq 1$. Since $a_0$ is a non-negative integer different from $1$, there exists a prime $p$ such that $p$ divides $a_0$, and hence $p$ divides $P(p^n)$ for all $n$. Thus $P(p^n)$ is a power of $p$ for all positive integers $n$. If there exists a $k' < k$ such that $a_{k'} \neq 0$, then for sufficiently large $n$ we have
$$
(p^n)^k > a_{k-1}(p^n)^{k-1} + \cdots + a_0 > 0,
$$
and hence $P(p^n) \neq 0 \pmod{p^{nk}}$, but this contradicts $P(p^n) = p^m$ for some integer $m$ since obviously $m$ must be greater than $nk$. We conclude that in this case $P(t) = a_k t^k$, and it is easy to see that only $a_k = 1$ is a possibility.

Now consider the case $a_0 = 1$. Let $Q(t) = P(P(t))$. Now $Q$ must as well as $P$ satisfy the conditions. Since $Q(0) = P(P(0)) = P(1) > 1$ and $Q$ is not constant, we know from the previous that $Q(t) = t^k$, which contradicts that $Q(0) > 1$. Hence there are no solutions in this case.

Thus all polynomials that satisfy the conditions are $P(t) = t^m$ where $m$ is a positive integer, and $P(t) = q^m$ where $q$ is a prime and $m$ is a positive integer.
