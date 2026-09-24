$\lfloor \frac{n-1}{3} \rfloor$.

Let $f(n)$ denote the minimum number of black triangles in an $n$-gon. It is clear that $f(3) = 0$ and that $f(n)$ is at least 1 for $n = 4, 5, 6$. It is easy to see that for $n = 4, 5, 6$ there is a coloring with only one black triangle, so $f(n) = 1$ for $n = 4, 5, 6$.

First we prove by induction that $f(n) \le \lfloor \frac{n-1}{3} \rfloor$. The case for $n = 3, 4, 5$ has already been established. Given an $(n+3)$-gon, draw a diagonal that splits it into an $n$-gon and a 5-gon. Color the $n$-gon with at most $\lfloor \frac{n-1}{3} \rfloor$ black triangles. We can then color the 5-gon compatibly with only one black triangle so $f(n+3) \le \lfloor \frac{n-1}{3} \rfloor + 1 = \lfloor \frac{n+3-1}{3} \rfloor$.

Now we prove by induction that $f(n) \ge \lfloor \frac{n-1}{3} \rfloor$. The case for $n = 3, 4, 5$ has already been established. Given an $(n+3)$-gon, we color it with $f(n+3)$ black triangles and pick one of the black triangles. It separates three polygons from the $(n+3)$-gon, say an $(a+1)$-gon, $(b+1)$-gon and a $(c+1)$-gon such that $n+3 = a+b+c$. We write $r_m$ for the remainder of the integer $m$ when divided by 3. Then

$$
\begin{aligned}
f(n+3) &\ge f(a+1) + f(b+1) + f(c+1) + 1 \\
&\ge \lfloor \frac{a}{3} \rfloor + \lfloor \frac{b}{3} \rfloor + \lfloor \frac{c}{3} \rfloor + 1 \\
&= \frac{a-r_a}{3} + \frac{b-r_b}{3} + \frac{c-r_c}{3} + 1 \\
&= \frac{n+3-1-r_n}{3} + \frac{4+r_n-(r_a+r_b+r_c)}{3} \\
&= \lfloor \frac{n+3-1}{3} \rfloor + \frac{4+r_n-(r_a+r_b+r_c)}{3}.
\end{aligned}
$$

Since $0 \le r_n, r_a, r_b, r_c \le 2$, we have that $4+r_n-(r_a+r_b+r_c) \ge 4+0-6 = -2$. But since this number is divisible by 3, it is in fact $\ge 0$. This completes the induction.
