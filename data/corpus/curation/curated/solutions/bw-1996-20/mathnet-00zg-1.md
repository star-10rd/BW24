Solution:

Let $\mathbb{N}$ denote the set of positive integers. There is a bijective function $f: \mathbb{N} \rightarrow \mathbb{N} \times \mathbb{N}$. Let $a_{0}=1$, and for $k \geq 1$, let $a_{k}$ be the least integer of the form $m+t n$ for some integer $t \geq 0$ where $f(k)=(m, n)$, such that $a_{k} \geq 2 a_{k-1}$. Let $A=\left\{a_{0}, a_{1}, \ldots\right\}$ and let $B=\mathbb{N} \backslash A$. We now show that $A$ and $B$ satisfy the given conditions.

(i) For any non-negative integers $i<j<k$, we have $a_{k} \geq a_{j+1} \geq 2 a_{j}$, and hence $a_{k}-a_{j} \geq a_{j}>a_{j}-a_{i}$. Thus $a_{i}, a_{j}$ and $a_{k}$ do not form an arithmetic progression, since this would mean that $a_{k}-a_{j}=a_{j}-a_{i}$. Hence no three numbers in $A$ form an arithmetic progression.

(ii) Consider an infinite arithmetic progression $m, m+n, m+2 n, \ldots$, with $m, n \in \mathbb{N}$. Then $m+n t=a_{k}$ for some integer $t \geq 0$, where $k=f^{-1}(m, n)$. Thus $a_{k}$ belongs to the arithmetic progression, but $a_{k} \notin B$. Hence $B$ does not contain any infinite non-constant arithmetic progression.
