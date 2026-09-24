We first prove the lemma that if $x_{1}>\cdots>x_{2 n}$ then the grouping

$$
\left\{\left\{x_{1}, x_{2}\right\}, \ldots,\left\{x_{2 n-1}, x_{2 n}\right\}\right\}
$$

gives the largest sum of products of pairs of these numbers.

Let $a$ be the largest and $b$ the second largest among the numbers $x_{i}$. Consider a grouping of these numbers into pairs such that $a$ is paired with some $c$, and $b$ is paired with some $d$, where $c \neq b$. Then $a \neq d$ (otherwise $a$ would be together with $b$ ). Furthermore, $b>c$ since otherwise the choice of $b$ implies $a=c$ or $b=c$ which are both excluded. Now

$$
\begin{aligned}
a b+c d & =a c+a(b-c)+b d-(b-c) d \\
& =a c+b d+(a-d)(b-c)>a c+b d
\end{aligned}
$$

that is, replacing the pairs $\{a, c\}$ and $\{b, d\}$ by the pairs $\{a, b\}$ and $\{c, d\}$ makes the sum larger. If the two largest numbers are paired already, we can do the same to the remaining numbers. So whenever the grouping is different from (1), the sum of the products of pairs can be made larger.

Now it suffices to prove that $a_{n}=\frac{1}{1} \cdot \frac{1}{2}+\cdots+\frac{1}{2 n-1} \cdot \frac{1}{2 n}<1$. We have

$$
\begin{aligned}
a_{n} & =\frac{1}{1 \cdot 2}+\frac{1}{3 \cdot 4}+\cdots+\frac{1}{(2 n-1) \cdot(2 n)} \\
& =\frac{2-1}{1 \cdot 2}+\frac{4-3}{3 \cdot 4}+\cdots+\frac{2 n-(2 n-1)}{(2 n-1) \cdot(2 n)} \\
& =\left(\frac{1}{1}-\frac{1}{2}\right)+\left(\frac{1}{3}-\frac{1}{4}\right)+\cdots+\left(\frac{1}{2 n-1}-\frac{1}{2 n}\right) \\
& \leq\left(\frac{1}{1}-\frac{1}{2}\right)+\left(\frac{1}{2}-\frac{1}{3}\right)+\left(\frac{1}{3}-\frac{1}{4}\right)+\cdots+\left(\frac{1}{2 n-1}+\frac{1}{2 n}\right) \\
& =1-\frac{1}{2 n} \\
& <1 .
\end{aligned}
$$
