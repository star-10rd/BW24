Solution:
Substituting $x_{i}=x$ easily yields that $2 a+b=2$. Now take $n=4$, $x_{1}=x_{3}=x$ and $x_{2}=x_{4}=1$. This gives $2 x \geq x^{2 a}+x^{b}$. But the inequality between the arithmetic and geometric mean yields $x^{2 a}+x^{b} \geq 2 \sqrt{x^{2 a} x^{b}}=2 x$. Here equality must hold, and this implies that $x^{2 a}=x^{b}$, which gives $2 a=b=1$.

On the other hand, if $b=1$ and $a=\frac{1}{2}$, we let $y_{i}=\sqrt{x_{i} x_{i+1}}$ for $1 \leq i \leq n$, with $x_{n+1}=x_{1}$. The inequality then takes the form
$$
y_{1}^{2}+\cdots+y_{n}^{2} \geq y_{1} y_{2}+y_{2} y_{3}+\cdots+y_{n} y_{1} \text{.}
$$
But the inequality between the arithmetic and geometric mean yields
$$
\frac{1}{2}\left(y_{i}^{2}+y_{i+1}^{2}\right) \geq y_{i} y_{i+1}, \quad 1 \leq i \leq n,
$$
where $y_{n+1}=y_{1}$. Adding these $n$ inequalities yields the inequality (1).

The inequality (1) can also be obtained from the Cauchy-Schwarz inequality, which implies that $\sum_{i=1}^{n} y_{i}^{2} \sum_{i=1}^{n} y_{i+1}^{2} \geq\left(\sum_{i=1}^{n} y_{i} y_{i+1}\right)^{2}$, which is exactly the stated inequality.
