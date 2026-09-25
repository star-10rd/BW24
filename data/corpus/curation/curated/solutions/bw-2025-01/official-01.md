## Solution

We will prove that there exists a sequence with the desired property.

Note first that if $a_i-a_j=d$, then $a_j-a_i=-d$, so it is enough to prove that for each integer $d>0$ there exist exactly $2025$ pairs $(i,j)$ such that $a_i-a_j=d$.

We construct the sequence inductively; let $a_1$ be an arbitrary integer.

Suppose we have chosen $a_1,a_2,\ldots,a_n$ such that for all $d>0$ there are at most $2025$ pairs of indices $1\le i,j\le n$ with $a_i-a_j=d$, and let $\ell>0$ be the least integer for which there are strictly fewer than $2025$ pairs of indices $1\le i,j\le n$ with $a_i-a_j=\ell$. Then let $a_{n+1}\gg a_n$ and $a_{n+2}=a_{n+1}+\ell$ such that

$$
a_{n+2}-a_i>a_{n+1}-a_i>a_j-a_k
$$

for all $1\le i,j,k\le n$. This is clearly possible by taking $a_{n+1}$ large enough, and in doing so there is still no $d>0$ such that there are more than $2025$ pairs $1\le i,j\le n+2$ for which $a_i-a_j=d$.

By induction, we obtain a sequence $a_1,a_2,\ldots$ with the property that for each $d>0$ there are at most $2025$ pairs $(i,j)$ with $a_i-a_j=d$. Since we choose the minimal $\ell$ in each step, it is clear, however, that there will be exactly $2025$ such pairs for each $d>0$. By the introductory remark, the constructed sequence satisfies the desired property.

**Remark.** There is an alternative solution relying on the fact that $2025$ is a perfect square. In the inductive step of the construction, if we instead choose $\ell$ as simply the least positive integer not of the form $a_i-a_j$, and proceed as above, we obtain a sequence where each $d\ne0$ appears exactly once as $a_i-a_j$. Consider now the sequence

$$
a_1,\ldots,a_1,a_2,\ldots,a_2,a_3,\ldots,
$$

where each $a_i$ appears $45$ times. For any $d\ne0$, we may now choose any of the $45$ copies of $a_i$ and any of the $45$ copies of $a_j$ for $d=a_i-a_j$, giving a total of exactly $45^2=2025$ pairs $(i,j)$ satisfying $d=a_i-a_j$.
