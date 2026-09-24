of part (b). For convenience we work with $\{0,1, \ldots, n-1\}$ rather than $\{1,2, \ldots, n\}$; this does not change the problem. We show that one can always find an unbalanced subset containing more than $\frac{2 n}{3}$ elements.

Let $\operatorname{ord}_{2}(i)$ denote the number of factors 2 occurring in the prime factorisation of $i$. We set

$$
T_{j}=\left\{i \in\{1,2, \ldots, n-1\} \mid \operatorname{ord}_{2}(i)=j\right\}
$$

Then we choose

$$
S=\{0,1,2, \ldots, n-1\} \backslash\left(T_{1} \cup T_{3} \cup \cdots \cup T_{l}\right), \quad \text { where } l= \begin{cases}k-1 & \text { if } k \text { even } \\ k-2 & \text { if } k \text { odd. }\end{cases}
$$

Observe that $\left|T_{j}\right|=\frac{n}{2^{j+1}}$, so

$$
|S|=n-\left(\frac{n}{4}+\frac{n}{16}+\cdots+\frac{n}{2^{l+1}}\right)=n-n \cdot \frac{\frac{1}{4}-\frac{1}{2^{l+3}}}{1-\frac{1}{4}}>n-\frac{n}{3}=\frac{2 n}{3} .
$$

We show that $S$ is not balanced. Take $a=0 \in S$, and consider a $0 \neq b \in S$. If $b$ is odd, then $\frac{0+b}{2}$ is not integral. If $b$ is even, then $b \in T_{2} \cup T_{4} \cup \cdots$, so $\frac{b}{2} \in T_{1} \cup T_{3} \cup \cdots$, hence $\frac{b}{2} \notin S$. Thus $S$ is not balanced.
