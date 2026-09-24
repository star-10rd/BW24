The first step is to prove, using induction, the formula
$$
a_n = \frac{2^{2^n}}{3^{2^n}(b_1+b_2+\cdots+b_n)}.
$$
The base case $n = 0$ is trivial. Assume the formula is valid for $a_{n-1}$, that is,
$$
a_{n-1} = \frac{2^{2^{n-1}}}{3^{2^{n-1}}(b_1+b_2+\cdots+b_{n-1})}.
$$
If now $a_{n-1} < \sqrt{3}$, then $b_n = 0$, and so
$$
a_n = a_{n-1}^2 = \frac{2^{2^n}}{3^{2^n}(b_1+b_2+\cdots+b_{n-1})} = \frac{2^{2^n}}{3^{2^n}(b_1+b_2+\cdots+b_{n-1}+b_n)},
$$
whereas if $a_{n-1} \ge \sqrt{3}$, then $b_n = \frac{1}{2^n}$, and so
$$
a_n = \frac{a_{n-1}^2}{3} = \frac{2^{2^n}}{3^{2^n}(b_1+b_2+\cdots+b_{n-1})+1} = \frac{2^{2^n}}{3^{2^n}(b_1+b_2+\cdots+b_{n-1}+b_n)}.
$$
This completes the induction.
Next, we inductively establish the inequality $a_n \ge 1$. The base case $n = 0$ is again trivial. Suppose $a_{n-1} \ge 1$. If $a_{n-1} < \sqrt{3}$, then
$$
a_n = a_{n-1}^2 \ge 1^2 = 1,
$$
whereas if $a_{n-1} \ge \sqrt{3}$, then
$$
a_n = \frac{a_{n-1}^2}{3} \ge \frac{(\sqrt{3})^2}{3} = 1,
$$
and the induction is complete.
From
$$
1 \le a_n = \frac{2^{2^n}}{3^{2^n}(b_1+b_2+\cdots+b_n)} = \left( \frac{2}{3^{b_1+b_2+\cdots+b_n}} \right)^{2^n},
$$
we may then draw the conclusion
$$
3^{b_1+b_2+\cdots+b_n} \le 2.
$$
