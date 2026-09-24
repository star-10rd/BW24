Solution:

We will show that whenever we have positive integers $a_{1}, \ldots, a_{k}$ such that $n^{2} \mid a_{i+1}+\cdots+a_{i+n}$ for every $n \leq k$ and $i \leq k-n$, then it is possible to choose $a_{k+1}$ such that $n^{2} \mid a_{i+1}+\cdots+a_{i+n}$ for every $n \leq k+1$ and $i \leq k+1-n$. This directly implies the positive answer to the problem because we can start constructing the sequence from any single positive integer.

To obtain the necessary property, it is sufficient for $a_{k+1}$ to satisfy
$$
a_{k+1} \equiv-\left(a_{k-n+2}+\cdots+a_{k}\right) \quad\left(\bmod n^{2}\right)
$$
for every $n \leq k+1$. This is a system of $k+1$ congruences.

Note first that, for any prime $p$ and positive integer $l$ such that $p^{l} \leq k+1$, if the congruence with module $p^{2 l}$ is satisfied then also the congruence with module $p^{2(l-1)}$ is satisfied. To see this, group the last $p^{l}$ elements of $a_{1}, \ldots, a_{k+1}$ into $p$ groups of $p^{l-1}$ consecutive elements. By choice of $a_{1}, \ldots, a_{k}$, the sums computed for the first $p-1$ groups are all divisible by $p^{2(l-1)}$. By assumption, the sum of the elements in all $p$ groups is divisible by $p^{2 l}$. Hence the sum of the remaining $p^{l-1}$ elements, that is $a_{k-p^{l-1}+2}+\cdots+a_{k+1}$, is divisible by $p^{2(l-1)}$.

Secondly, note that, for any relatively prime positive integers $c, d$ such that $c d \leq k+1$, if the congruences both with module $c^{2}$ and module $d^{2}$ hold then also the congruence with module $(c d)^{2}$ holds. To see this, group the last $c d$ elements of $a_{1}, \ldots, a_{k+1}$ into $d$ groups of $c$ consecutive elements, as well as into $c$ groups of $d$ consecutive elements. Using the choice of $a_{1}, \ldots, a_{k}$ and the assumption together, we get that the sum of the last $c d$ elements of $a_{1}, \ldots, a_{k+1}$ is divisible by both $c^{2}$ and $d^{2}$. Hence this sum is divisible by $(c d)^{2}$.

The two observations let us reject all congruences except for the ones with module being the square of a prime power $p^{l}$ such that $p^{l+1}>k+1$. The resulting system has pairwise relatively prime modules and hence possesses a solution by the Chinese Remainder Theorem.
