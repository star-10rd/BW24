We argue by contradiction. Choose $N$ so large that no $n \ge N$ obeys this property. Now we partition all integers $\ge N$ into maximal blocks of consecutive numbers which are either all balanced or not. We delete the first block from the following considerations, now starting from $N' > N$. Clearly, by assumption, there cannot meet two blocks with length $\ge 2$. It is also impossible that there meet two blocks of length 1 (remember that we deleted the first block). Thus all balanced or all unbalanced blocks have length 1. All other blocks have length 3, at least.

**Case 1:** All unbalanced blocks have length 1.
We take an unbalanced number $u > 2N' + 3$ with $u \equiv 1 \pmod 4$ (for instance $u = p^2$ for an odd prime $p$). Since all balanced blocks have length $\ge 3$, $u-3$, $u-1$, and $u+1$ must be balanced. This implies that $(u-3)/2$ is unbalanced, $(u-1)/2$ is balanced, and $(u+1)/2$ is again unbalanced. Thus $\{(u-1)/2\}$ is an balanced block of length 1 — contradiction.

**Case 2:** All balanced blocks have length 1.
Now we take a balanced number $b > 2N' + 3$ with $b \equiv 1 \pmod 4$ (for instance $b = p^2q^2$ for distinct odd primes $p, q$). By similar arguments, $(b-3)/2$ is balanced, $(b-1)/2$ is unbalanced, and $(b+1)/2$ is again balanced. Now the balanced block $\{(b-1)/2\}$ gives the desired contradiction.
