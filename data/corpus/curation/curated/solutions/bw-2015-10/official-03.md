of part (b). Let us introduce the concept of lonely element as an $a \in S$ for which there does not exist a $b \in S$, distinct from $a$, such that $\frac{a+b}{2} \in S$.

We will construct an unbalanced set $S$ with $|S|>\frac{2 n}{3}$ for all $k$. For $n=4$ we can use $S=\{1,2,4\}$ (all elements are lonely), and for $n=8$ we can use $S=\{1,2,3,5,6,7\}$ (2 and 6 are lonely).

We now construct an unbalanced set $S \subseteq\{1,2, \ldots, 4 n\}$, given an unbalanced set $T \subseteq\{1,2, \ldots, n\}$ with $|T|>\frac{2 n}{3}$. Take

$$
S=\{i \in\{1,2, \ldots, 4 n\} \mid i \equiv 1 \bmod 2\} \cup\{4 t-2 \mid t \in T\}
$$

Then

$$
|S|=2 n+|T|>2 n+\frac{2 n}{3}=\frac{8 n}{3}=\frac{2 \cdot 4 n}{3} .
$$


Supposing $a \in T$ is lonely, we will show that $4 a-2 \in S$ is lonely. Indeed, suppose $4 a-2 \neq b \in S$ with

$$
\frac{4 a-2+b}{2}=2 a-1+\frac{b}{2} \in S .
$$

Then $b$ must be even, so $b=4 t-2$ for some $a \neq t \in T$. But then

$$
\frac{4 a-2+4 t-2}{2}=4 \frac{a+t}{2}-2
$$

again an even element. However, as $a$ is lonely we know that $\frac{a+t}{2} \notin T$, and hence $4 \frac{a+t}{2}-2 \notin S$. We conclude that $4 a-2$ is lonely in $S$.

Thus $S$ is an unbalanced set, and by induction we can find an unbalanced set of size exceeding $\frac{2 n}{3}$ for all $k>1$.
