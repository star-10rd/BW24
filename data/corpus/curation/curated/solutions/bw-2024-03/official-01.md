Note that by GM-HM we have

$$
\frac{x^{2}+6 x y+y^{2}}{x+y}=x+y+\frac{4 x y}{x+y}=x+y+2 \cdot \frac{2}{\frac{1}{x}+\frac{1}{y}} \leq x+y+2 \sqrt{x y}=(\sqrt{x}+\sqrt{y})^{2}
$$

which means that

$$
\sqrt{\frac{x^{2}+6 x y+y^{2}}{x+y}} \leq \sqrt{x}+\sqrt{y}
$$

Therefore after each move the sum of square roots of all numbers on the blackboard decreases or stays the same. This implies that

$$
\sqrt{c} \leq \sqrt{a_{1}}+\sqrt{a_{2}}+\ldots+\sqrt{a_{2024}}
$$

By QM-AM we have

$$
\sqrt{a_{1}}+\sqrt{a_{2}}+\ldots+\sqrt{a_{2024}} \leq 2024 \sqrt{\frac{a_{1}+a_{2}+\ldots+a_{2024}}{2024}}
$$

Hence $c \leq 2024\left(a_{1}+a_{2}+\ldots+a_{2024}\right)$.
It remains to show that the equality cannot hold. Suppose, for the sake of contradiction, that

$$
c=2024\left(a_{1}+a_{2}+\ldots+a_{2024}\right)
$$

For this to occur, all the inequalities used must be equalities. Note that the last equality holds if and only if $a_{1}=a_{2}=\cdots=a_{2024}$. Also to reach the equality we must have $x=y$ at each move, so that the sum of square roots of all numbers on the blackboard stays the same all the time. So the square root of the number occurring 2024 times on the blackboard in the beginning is $\frac{\sqrt{c}}{2024}$, and choosing two copies of any number $x$ with square root $\sqrt{x}$ yields a number with square root $2 \sqrt{x}$ after the move. Hence the square root of any number occurring on the blackboard during the process must be of the form $\frac{\sqrt{c}}{2024} \cdot 2^{k}$ for a natural number $k$. But the square root of the number in the blackboard in the end is $\sqrt{c}$ which is not of this form since 2024 is not a power of 2 . The contradiction shows that the equality cannot be achieved and we are done.
