Answer: for all odd $n$.

First assume a stack contains two cards that form a magic pair; say cards number $i$ and $i+1$. Among the cards in this stack and the stack with card number $i+2$ (they might be identical), there are two magic pairs - a contradiction. Hence no stack contains a magic pair.

Each card forms a magic pair with exactly two other cards. Hence if $n$ is even, each stack must contain at least $\left\lceil\frac{n-1}{2}\right\rceil=\frac{n}{2}$ cards, since there are $n-1$ other stacks. But then we need at least $n \frac{n}{2}>\frac{n(n-1)}{2}$ cards - a contradiction.

In the odd case we distribute the cards like this: Let $a_{1}, a_{2}, \ldots, a_{n}$ be the $n$ stacks and let $n=2 m+1$. Card number 1 is put into stack $a_{1}$. If card number $k m+i$, for $i=1,2, \ldots, m$, is put into stack $a_{j}$, then card number $k m+i+1$ is put into stack number $a_{j+i}$, where the indices are calculated modulo $n$.

There are

$$
\frac{n(n-1)}{2}=\frac{(2 m+1)(2 m)}{2}=m(2 m+1)
$$

cards. If we look at all the card numbers of the form $k m+1$, there are exactly $n=2 m+1$ of these, and we claim that there is exactly one in each stack. Card number 1 is in stack $a_{1}$, and card number $k m+1$ is in stack

$$
a_{1+k(1+2+3+\cdots+m)}
$$

Since

$$
1+2+3+\cdots+m=\frac{m(m+1)}{2}
$$

and $\operatorname{gcd}\left(2 m+1, \frac{m(m+1)}{2}\right)=1$, all the indices

$$
1+k(1+2+3+\cdots+m), \quad k=0,1,2, \ldots, 2 m
$$

are different modulo $n=2 m+1$. In the same way we see that each stack contains exactly one of the $2 m+1$ cards with the numbers $k m+i$ for a given $i=2,3, \ldots, m$.

Now look at two different stacks $a_{v}$ and $a_{u}$. Then, without loss of generality, we may assume that $u=v+i$ for some $i=1,2, \ldots, m$ (again we consider the index modulo $n=2 m+1$ ). Since there is a card in stack $a_{v}$ with number $k m+i$, the card $k m+i+1$ is in stack $a_{v+i}=a_{u}$. Hence among the cards in any two stacks there is at least one magic pair. Since there is the same number of pairs of stacks as of magic pairs, there must be exactly one magic pair among the cards of any two stacks.
