## Solution 1

To any nice number $a_1a_2\cdots a_9$ associate another nice number $b_1b_2\cdots b_9$, called its *sorting number*, uniquely defined by

$$
a_{b_1}a_{b_2}\cdots a_{b_9}=123456789.
$$

This is well-defined because every nice number has exactly the digits $1,2,\ldots,9$. A nice number is wonderful exactly when it is its own sorting number.

Let $a_1\cdots a_9$ have sorting number $b_1\cdots b_9$. For every $i,j\in\{1,\ldots,9\}$,

$$
b_i=j\iff a_j=i.
$$

By symmetry, $a_1\cdots a_9$ is therefore the sorting number of $b_1\cdots b_9$.

Thus all nice numbers that are not wonderful can be paired with their distinct sorting numbers. Hence the number of non-wonderful nice numbers is even. The total number of nice numbers is $9!$, also even, so the number of wonderful numbers is even.

## Solution 2

Generalize to $n$-wonderful numbers of length $n$, for $1\le n\le9$, and let $T_n$ denote their number. We have $T_1=1$ and $T_2=2$, corresponding to $1$, $12$, and $21$ in the two respective lengths.

Consider an $n$-wonderful number $A=a_1\cdots a_n$ with $2<n\le9$.

1. If $a_n=n$, then $a_1\cdots a_{n-1}$ is an $(n-1)$-wonderful number.
2. If $a_n=k<n$, then $a_k=n$. Remove $k$ and $n$ from $A$ and subtract $1$ from every remaining digit greater than $k$. This gives an $(n-2)$-wonderful number.

Case 1 gives a bijection with $(n-1)$-wonderful numbers. In Case 2, the reverse construction is: take an $(n-2)$-wonderful number, add $1$ to every digit at least $k$, insert $n$ in position $k$, and append $k$. This is possible for each $k\in\{1,\ldots,n-1\}$.

Therefore

$$
T_n=T_{n-1}+(n-1)T_{n-2}.
$$

Since $T_3=2+2=4$, the recurrence shows that $T_n$ is even for every $2\le n\le9$, in particular for $n=9$.
