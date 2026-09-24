Solution:

Fredek is right for all $n \neq 4$.

Suppose that any two guests of Fredek having the same number of acquaintances have neither a common acquaintance nor a common unknown. From the set $\mathcal{K}$ of Fredek's guests choose any two guests $A$ and $B$ having the same number of acquaintances (the existence of such two guests follows from the pigeonhole principle). It then follows from our assumption that $A$ and $B$ have both either $\frac{1}{2} n$ or $\frac{1}{2} n-1$ acquaintances in $\mathcal{K}$, depending on whether $A$ and $B$ are acquainted or not. This proves in particular that for any odd $n$ Fredek is right.

Assume now that $n$ is even, and $n \geqslant 6$. Choose from $\mathcal{K} \setminus \{A, B\}$ two guests $C, D$ with the same number of acquaintances in $\mathcal{K} \setminus \{A, B\}$. Since every guest in $\mathcal{K} \setminus \{A, B\}$ is acquaintance either with $A$ or with $B$ but not with both, $C$ and $D$ have the same number of acquaintances in $\mathcal{K}$, which implies that they both have either $\frac{1}{2} n$ or $\frac{1}{2} n-1$ acquaintances in $\mathcal{K}$.

Finally, choose from $\mathcal{K} \setminus \{A, B, C, D\}$ two guests $E, F$ with the same number of acquaintances in $\mathcal{K} \setminus \{A, B, C, D\}$ (this is possible as $n \geqslant 6$). Since every guest in $\mathcal{K} \setminus \{A, B, C, D\}$ has exactly two acquaintances in the set $\{A, B, C, D\}$, the guests $E$ and $F$ have the same number of acquaintances in $\mathcal{K}$, which means that they both have either $\frac{1}{2} n$ or $\frac{1}{2} n-1$ acquaintances in $\mathcal{K}$. Thus at least four people among $A, B, C, D, E, F$ have the same number of acquaintances in $\mathcal{K}$. Select any three of these four guests - then one of these three is either a common acquaintance or a common unknown for the other two.

For $n=4$ Fredek is not right. The diagram on Figure 6 gives the counterexample (where points indicate guests and lines show acquaintances).

![](attached_image_1.png)
Figure 6
