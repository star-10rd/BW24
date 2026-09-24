Solution:

Denote by $I$ and $D$ the sets of all positive integers with strictly increasing (respectively, decreasing) sequence of digits. Let $D_{0}, D_{1}, D_{2}$ and $D_{3}$ be the subsets of $D$ consisting of all numbers starting with $9$, not starting with $9$, ending in $0$ and not ending in $0$, respectively. Let $S(A)$ denote the sum of all numbers belonging to a set $A$.

All numbers in $I$ are obtained from the number $123456789$ by deleting some of its digits. Thus, for any $k=0,1, \ldots, 9$ there are $\binom{9}{k}$ $k$-digit numbers in $I$ (here we consider $0$ a $0$-digit number). Every $k$-digit number $a \in I$ can be associated with a unique number $b_{0} \in D_{0}$, $b_{1} \in D_{1}$ and $b_{3} \in D_{3}$ such that
$$
\begin{aligned}
& a + b_{0} = 999\ldots 9 = 10^{k+1} - 1 \\
& a + b_{1} = 99\ldots 9 = 10^{k} - 1 \\
& a + b_{3} = 111\ldots 10 = \frac{10}{9}(10^{k} - 1)
\end{aligned}
$$
Hence we have
$$
\begin{aligned}
& S(I) + S(D_{0}) = \sum_{k=0}^{9} \binom{9}{k} (10^{k+1} - 1) = 10 \cdot 11^{9} - 2^{9} \\
& S(I) + S(D_{1}) = \sum_{k=0}^{9} \binom{9}{k} (10^{k} - 1) = 11^{9} - 2^{9} \\
& S(I) + S(D_{3}) = \frac{10}{9}(11^{9} - 2^{9})
\end{aligned}
$$
Noting that $S(D_{0}) + S(D_{1}) = S(D_{2}) + S(D_{3}) = S(D)$ and $S(D_{2}) = 10 S(D_{3})$ we obtain the system of equations
$$
\left\{\begin{aligned}
2 S(I) + S(D) & = 11^{10} - 2^{10} \\
S(I) + \frac{1}{11} S(D) & = \frac{10}{9}(11^{9} - 2^{9})
\end{aligned}\right.
$$
which yields
$$
S(I) + S(D) = \frac{80}{81} \cdot 11^{10} - \frac{35}{81} \cdot 2^{10}.
$$
This sum contains all one-digit numbers twice, so the final answer is
$$
\frac{80}{81} \cdot 11^{10} - \frac{35}{81} \cdot 2^{10} - 45 = 25617208995
$$
