Solution:
Consider any subsets $A_{1}, \ldots, A_{s}$ satisfying the condition of the problem and let $A_{i} = \{a_{i1}, \ldots, a_{i,k_{i}}\}$ where $a_{i1} < \cdots < a_{i,k_{i}}$. Replacing each $A_{i}$ by $A_{i}' = \{a_{i1}, a_{i1}+1, \ldots, a_{i,k_{i}}-1, a_{i,k_{i}}\}$ (i.e., adding to it all "missing" numbers) yields a collection of different subsets $A_{1}', \ldots, A_{s}'$ which also satisfies the required condition.

Now, let $b_{i}$ and $c_{i}$ be the smallest and largest elements of the subset $A_{i}'$, respectively. Then $\min_{1 \leq i \leq s} c_{i} \geq \max_{1 \leq i \leq s} b_{i}$, as otherwise some subsets $A_{k}'$ and $A_{l}'$ would not intersect. Hence there exists an element $a \in \bigcap_{1 < i < s} A_{i}'$.

As the number of subsets of the set $\{1,2, \ldots, 2n+1\}$ containing $a$ and consisting of $k$ consecutive integers does not exceed $\min(k, 2n+2-k)$, we have $s \leq (n+1) + 2 \cdot (1+2+\cdots+n) = (n+1)^{2}$. This maximum will be reached if we take $a = n+1$.
