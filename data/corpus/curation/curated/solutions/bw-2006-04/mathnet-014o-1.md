Solution:
If we set $a=b=c=2$, $d=e=f=0$, then the given expression is equal to $8$. We will show that this is the maximal value.

Applying the inequality between arithmetic and geometric mean we obtain
$$
\begin{aligned}
8 & =\left(\frac{(a+d)+(b+e)+(c+f)}{3}\right)^{3} \geq (a+d)(b+e)(c+f) \\
& =(a b c+b c d+c d e+d e f+e f a+f a b)+(a c e+b d f),
\end{aligned}
$$
so we see that $a b c+b c d+c d e+d e f+e f a+f a b \leq 8$ and the maximal value $8$ is achieved when $a+d=b+e=c+f$ (and then the common value is $2$ because $a+b+c+d+e+f=6$) and $a c e=b d f=0$, which can be written as $(a, b, c, d, e, f)=(a, b, c, 2-a, 2-b, 2-c)$ with $a c(2-b)=b(2-a)(2-c)=0$.

From this it follows that $(a, b, c)$ must have one of the forms $(0,0, t)$, $(0, t, 2)$, $(t, 2,2)$, $(2,2, t)$, $(2, t, 0)$ or $(t, 0,0)$. Therefore the maximum is achieved for the 6-tuples $(a, b, c, d, e, f)=(0,0, t, 2,2,2-t)$, where $0 \leq t \leq 2$, and its cyclic permutations.
