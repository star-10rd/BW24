Solution:

Suppose we have the opposite inequality $a_{i-1}+a_{i+1} \geq 2 a_{i}$ for all $i=2, \ldots, 8$. Let $a_{k}=\max_{1 \leq i \leq 9} a_{i}$. Then we have $a_{k-1}=a_{k+1}=a_{k}$, $a_{k-2}=a_{k-1}=a_{k}$, etc. Finally we get $a_{1}=a_{k}$, a contradiction.

Suppose now $a_{i-1}+a_{i+1} \geq 1.9 a_{i}$, i.e., $a_{i+1} \geq 1.9 a_{i}-a_{i-1}$ for all $i=2, \ldots, 8$, and let $a_{k}=\max_{1 \leq i \leq 9} a_{i}$. We can multiply all numbers $a_{1}, \ldots, a_{9}$ by the same positive constant without changing the situation in any way, so we assume $a_{k}=1$. Then we have $a_{k-1}+a_{k+1} \geq 1.9$ and hence $0.9 \leq a_{k-1}, a_{k+1} \leq 1$. Moreover, at least one of the numbers $a_{k-1}, a_{k+1}$ must be greater than or equal to $0.95$ - let us assume $a_{k+1} \geq 0.95$. Now, we consider two sub-cases:

a. $k \geq 5$. Then we have
$$
\begin{aligned}
1 &\geq a_{k+1} \geq 0.95 > 0 \\
1 &\geq a_{k+2} \geq 1.9 a_{k+1}-a_{k} \geq 1.9 \cdot 0.95-1=0.805 > 0 \\
a_{k+3} &\geq 1.9 a_{k+2}-a_{k+1} \geq 1.9 \cdot 0.805-1=0.5295 > 0 \\
a_{k+4} &\geq 1.9 a_{k+3}-a_{k+2} \geq 1.9 \cdot 0.5295-1=0.00605 > 0
\end{aligned}
$$
So in any case we have $a_{9}>0$, a contradiction.

b. $k \leq 4$. In this case we obtain
$$
\begin{aligned}
1 &\geq a_{k-1} \geq 0.9 > 0 \\
a_{k-2} &\geq 1.9 a_{k-1}-a_{k} \geq 1.9 \cdot 0.9-1=0.71 > 0 \\
a_{k-3} &\geq 1.9 a_{k-2}-a_{k-1} \geq 1.9 \cdot 0.71-1=0.349 > 0
\end{aligned}
$$
and hence $a_{1}>0$, contrary to the condition of the problem.
