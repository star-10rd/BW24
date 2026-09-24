For every $i = 1, 2, \dots, n$ let $a_i = b_i \cdot 2^{c_i}$ where $b_i$ is odd.
Note that the $b_i$'s are pairwise distinct. Indeed, if $b_i = b_j$ for some $i < j$ then one of the numbers $a_i, a_j$ divides the other one, so $\text{lcm}(a_i, a_j) = \max(a_i, a_j) \le 2n$ which is a contradiction.
Also, it is clear that each $b_i$ belongs to $\{1, 3, 5, \dots, 2n-1\}$. Since there are exactly $n$ $b_i$'s and the set $\{1, 3, 5, \dots, 2n-1\}$ has exactly $n$ elements, we have
$$
\{b_1, b_2, \dots, b_n\} = \{1, 3, 5, \dots, 2n-1\}.
$$
Now, for every $i$ let $d_i$ be the greatest $d$ such that $b_i \cdot 2^d \le 2n$. Note that $b_i \cdot 2^{d_i} \in \{n+1, n+2, \dots, 2n\}$ as otherwise $b_i \cdot 2^{d_i+1} \le 2n$, contradicting maximality of $d_i$.
Note that the numbers $b_i \cdot 2^{d_i}$ are pairwise distinct (because $\mathbb{Z}$ is a unique factorization domain). Again, we have $n$ pairwise distinct numbers $b_1 \cdot 2^{d_1}, b_2 \cdot 2^{d_2}, \dots, b_n \cdot 2^{d_n}$ belonging to the $n$-element set $\{n+1, n+2, \dots, 2n\}$, hence
$$
\{b_1 \cdot 2^{d_1}, b_2 \cdot 2^{d_2}, \dots, b_n \cdot 2^{d_n}\} = \{n+1, n+2, \dots, 2n\}.
$$
Reindexing $a_i$'s if necessary, we can assume that $b_i \cdot 2^{d_i} = n + i$ for every $i$. Clearly, $c_i \le d_i$, so $a_i = b_i \cdot 2^{c_i}$ for every $b_i \cdot 2^{d_i} = n + i$. As a consequence,
$$
a_1 a_2 \dots a_n \mid (n+1)(n+2)\dots(2n-1)(2n),
$$

as desired. $\square$
