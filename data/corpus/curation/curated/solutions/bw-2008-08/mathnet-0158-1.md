Solution:
We first prove that $\max A$ has to be at least $1040$.
As $1001 = 13 \cdot 77$ and $13 \nmid 77$, the set $A$ must contain a multiple of $13$ that is greater than $13 \cdot 77$. Consider the following cases:

- $13 \cdot 78 \in A$. But $13 \cdot 78 = 13^{2} \cdot 6$, hence $A$ must also contain some greater multiple of $13$.
- $13 \cdot 79 \in A$. As $79$ is a prime, $A$ must contain another multiple of $79$, which is greater than $1040$ as $14 \cdot 79 > 1040$ and $12 \cdot 79 < 1001$.
- $13 \cdot k \in A$ for $k \geq 80$. As $13 \cdot k \geq 13 \cdot 80 = 1040$, we are done.

Now take $A = \{1001, 1008, 1012, 1035, 1040\}$. The prime factorizations are $1001 = 7 \cdot 11 \cdot 13$, $1008 = 7 \cdot 2^{4} \cdot 3^{2}$, $1012 = 2^{2} \cdot 11 \cdot 23$, $1035 = 5 \cdot 3^{2} \cdot 23$, $1040 = 2^{4} \cdot 5 \cdot 13$. The sum of exponents of each prime occurring in these representations is even. Thus the product of elements of $A$ is a perfect square.
