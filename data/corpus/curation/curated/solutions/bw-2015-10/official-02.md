of part (b). We define the sets

$$
A_{j}=\left\{2^{j-1}+1,2^{j-1}+2, \ldots, 2^{j}\right\}
$$

and set

$$
S=A_{k} \cup A_{k-2} \cup \cdots \cup A_{l} \cup\{1\}, \quad \text { where } l= \begin{cases}2 & \text { if } k \text { even }, \\ 1 & \text { if } k \text { odd. }\end{cases}
$$

Note that $A_{j} \subseteq\{1,2, \ldots, n\}$ whenever $j \leq k$, and that $\left|A_{j}\right|=2^{j-1}$. We find

$$
|S|=2^{k-1}+2^{k-3}+\cdots+2^{l-1}+1=\frac{2^{l-1}-2^{k+1}}{1-4}+1=-\frac{2^{l-1}}{3}+\frac{2 n}{3}+1>\frac{2 n}{3} .
$$

We show that $S$ is not balanced. Take $a=1 \in S$, and consider a $1 \neq b \in S$. Then $b \in A_{j}$ for some $j$. If $b$ is even, then $\frac{1+b}{2}$ is not integral. If $b$ is odd, then also $1+b \in A_{j}$, so $\frac{1+b}{2} \in A_{j-1}$ and does not lie in $S$. Thus $S$ is not balanced.
