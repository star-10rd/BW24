If $d$ is g.c.d. of all the numbers in set $B$, let $A=\{b / d: b \in B\}$. Then for each $a, b \in A(a>b)$ we have

$$
\frac{a-b}{d(a, b)} \in A
$$

Observe that g.c.d of the set $A$ equals 1 , therefore we can find a finite subset $A_{1} \in A$ for which the $\operatorname{gcd} A_{1}=1$. We may think that the sum of elements of $A_{1}$ is minimal possible. Choose numbers $a, b \in A_{1}(a>b)$ and replace $a$ in the set $A_{1}$ with $\frac{a-b}{d(a, b)}$. The g.c.d. of the obtained set equals 1 . But the sum of numbers decreases by this operations that contradicts minimality of $A_{1}$.

Thus, $A_{1}=\{1\}$. Therefore all the numbers in the set $A$ have residue 1 modulo $d$. Take an arbitrary $a=k d+1 \in A$ and $b=1$. Then $k \in A$ by $(*)$ and hence $k=d s+1$. But $(k, k d+1)=1$, therefore $\frac{k d+1-d s-1}{d}=k-s=(d-1) s+1 \in A$, so $s$ is divisible by $d$. But $s \in A$, therefore $s-1$ is also divisible by $d$, hence $d=1$ (that means that $B=A$ ). Thus we have checked that if $a=k d+1=k+1 \in A$ then $a-1=k \in A$. Then all non-negative integers belong to $A$ because it is infinite.
