Let $x_n = \frac{a_n}{5^n}$. Then $x_0 = a$ and $5^n x_n = a_n = 5a_{n-1} + 4 = 5^n x_{n-1} + 4$. So $x_n = x_{n-1} + \frac{4}{5^n}$. By induction,
$$
x_n = x_0 + \left( \frac{4}{5} + \frac{4}{5^2} + \dots + \frac{4}{5^n} \right) = a + \frac{4}{5} \left( 1 + \frac{1}{5} + \dots + \frac{1}{5^{n-1}} \right) = a + \frac{4}{5} \cdot \frac{1 - \frac{1}{5^n}}{1 - \frac{1}{5}} = a + 1 - \frac{1}{5^n}.
$$
So $a_n = 5^n x_n = 5^n(a + 1) - 1$. Now 2013 and $5^n$ are relatively prime. So there is a $b$, $0 < b < 2013$, also relatively prime to 2013, such that $5^{54} = 2013c + b$. To have 2013 as a factor of $a_{54}$, it suffices to find an integer $y$ such that $(a+1)b - 1 = 2013y$. But this is a linear Diophantine equation in $a+1$ and $y$; it has an infinite family of solutions, among them such that $a+1 \ge 2$.
