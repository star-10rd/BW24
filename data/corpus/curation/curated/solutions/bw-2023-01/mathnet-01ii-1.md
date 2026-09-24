The strictly increasing function $\mathbb{Z}^+ \to \mathbb{Z}^+$ with $f(n) = 2n-1$ for all $n \in \mathbb{Z}^+$ satisfies $f(1) = 1$ and solves the functional equation, since $1+3+\dots+(2n-1) = n^2$ and $(2n+1)+(2n+3)+\dots+(4n-1) = (2n)^2-n^2 = 3n^2$ for all $n \in \mathbb{Z}^+$.
We claim that no other function is suitable. Let $f:\mathbb{Z}^+ \to \mathbb{Z}^+$ be a function that meets all requirements of the problem.
Let $k \in \mathbb{Z}^+$. Note that the given functional equation for $k$ and $k+1$ implies
$$
3 \cdot \sum_{l=1}^{k} f(l) = \sum_{l=k+1}^{2k} f(l), \\
3 \cdot \sum_{l=1}^{k+1} f(l) = \sum_{l=k+2}^{2k+2} f(l);
$$
the difference of the two equations yields $3f(k+1) = -f(k+1) + f(2k+1) + f(2k+2)$. In other words, the equation
$$
4f(k+1) = f(2k+1) + f(2k+2) \quad (*)
$$
holds for all $k \in \mathbb{Z}^+$.
Equation (*) implies that the numbers $f(2k+1)$ and $f(2k+2)$ have the same parity for every $k \in \mathbb{Z}^+$. Since $f$ is strictly increasing, we can deduce that $f(2k+2) \ge f(2k+1)+2$. Shifting indices we also

obtain $4f(k+2) = f(2k+3) + f(2k+4)$ from equation (*). Note that $f(2k+3) \ge f(2k+2) + 1 \ge f(2k+1) + 3$. Similarly, since $f(2k+3)$ and $f(2k+4)$ must have the same parity, $f(2k+4) \ge f(2k+3) + 2 \ge f(2k+2) + 3$, so that
$$
\begin{aligned}
4f(k+2) &= f(2k+3) + f(2k+4) \\
&\ge (f(2k+1) + 3) + (f(2k+2) + 3) \\
&= 4f(k+1) + 6.
\end{aligned}
$$
We can conclude that
$$
f(k+2) \ge f(k+1) + 2 \text{ for all } k \in \mathbb{Z}^{+}. \qquad (**)
$$
Now we are ready to show that $f(n) = 2n - 1$ for all $n \in \mathbb{Z}^+$. More precisely, we use strong induction to show that $f(2k-1) = 4k-3$ and $f(2k) = 4k-1$ for all $k \in \mathbb{Z}^+$. The claim implies $f(n) = 2n-1$ for all $n \in \mathbb{Z}^+$.
For the start of the induction, note that we have $f(1) = 1$ by definition; the given condition for $n=1$ implies $f(2) = 3f(1) = 3$. Hence, the equations $f(2k-1) = 4k-3$ and $f(2k) = 4k-1$ are true for $k=1$.
For the induction step, let $k \ge 1$ and assume that $f(2l-1) = 4l-3$ and $f(2l) = 4l-1$ for all $l \in \{1, \dots, k\}$. We want to show that $f(2k+1) = 4k+1$ and $f(2k+2) = 4k+3$.
Since $k+1 \le 2k$ the induction hypothesis implies $f(k+1) = 2k+1$. Equation (*) implies $f(2k+1)+f(2k+2) = 8k+4$. By induction hypothesis $f(2k) = 4k-1$, so that by virtue of inequality ($**$) we have $f(2k+1) \ge 4k+1$ and $f(2k+2) \ge 4k+3$. Since the sum of the two function values is $8k+4$, we must have $f(2k+1) = 4k+1$ and $f(2k+2) = 4k+3$.
