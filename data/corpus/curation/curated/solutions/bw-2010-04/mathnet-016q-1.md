Taking $x = 0$ in the given equality leads to $-2010P(67) = 0$, implying $P(67) = 0$. Whenever $i$ is an integer such that $1 \le i < 30$ and $P(i \cdot 67) = 0$, taking $x = i \cdot 67$ leads to $(i \cdot 67 - 2010)P((i+1) \cdot 67) = 0$; as $i \cdot 67 < 2010$ for $i < 30$, this implies $P((i+1) \cdot 67) = 0$. Thus, by induction, $P(i \cdot 67) = 0$ for all $i = 1, 2, \dots, 30$. Hence
$$
P(x) = (x - 67)(x - 2 \cdot 67)\dots(x - 30 \cdot 67)Q(x)
$$
where $Q(x)$ is another polynomial.
Substituting this expression for $P$ in the original equality, one obtains
$$
(x - 2010) \cdot x(x - 67) \dots (x - 29 \cdot 67)Q(x + 67) = x(x - 67)(x - 2 \cdot 67) \dots (x - 30 \cdot 67)Q(x)
$$
which is equivalent to
$$
(4) \qquad x(x - 67)(x - 2 \cdot 67)\dots(x - 30 \cdot 67)(Q(x + 67) - Q(x)) = 0.
$$
By conditions of the problem, this holds for every integer $x$. Hence there are infinitely many roots of polynomial $Q(x+67) - Q(x)$, implying that $Q(x+67) - Q(x) \equiv 0$. Let $c = Q(0)$; then $Q(i \cdot 67) = c$ for every integer $i$ by easy induction. Thus polynomial $Q(x) - c$ has infinitely many roots whence $Q(x) \equiv c$.
Consequently, $P(x) = c(x - 67)(x - 2 \cdot 67)\dots(x - 30 \cdot 67)$ for some real number $c$. As equation (4) shows, all such polynomials fit.
