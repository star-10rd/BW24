Solution:
We will prove by induction on the degree of $P(x)$ that all polynomials can be represented as a sum of cubes. This is clear for constant polynomials.

Now we proceed to the inductive step. It is sufficient to show that if $P(x)$ is a polynomial of degree $n$, then there exist polynomials $Q_{1}(x), Q_{2}(x), \ldots, Q_{r}(x)$ such that the polynomial
$$
P(x)-\left(Q_{1}(x)\right)^{3}-\left(Q_{2}(x)\right)^{3}-\cdots-\left(Q_{r}(x)\right)^{3}
$$
has degree at most $n-1$.

Assume that the coefficient of $x^{n}$ in $P(x)$ is equal to $c$. We consider three cases:

If $n=3k$, we put $r=1$, $Q_{1}(x)=\sqrt[3]{c}\, x^{k}$;

if $n=3k+1$ we put $r=3$,
$$
Q_{1}(x)=\sqrt[3]{\frac{c}{6}}\, x^{k}(x-1), \quad Q_{2}(x)=\sqrt[3]{\frac{c}{6}}\, x^{k}(x+1), \quad Q_{3}(x)=-\sqrt[3]{\frac{c}{3}}\, x^{k+1}
$$
and if $n=3k+2$ we put $r=2$ and
$$
Q_{1}(x)=\sqrt[3]{\frac{c}{3}}\, x^{k}(x+1), \quad Q_{2}(x)=-\sqrt[3]{\frac{c}{3}}\, x^{k+1}
$$
This completes the induction.
