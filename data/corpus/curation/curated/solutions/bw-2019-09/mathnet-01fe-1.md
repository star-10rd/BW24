Lemma. Let $A$ be a set of $a$ consecutive integers and let $B$ be a set of $b$ consecutive integers.
There are exactly $\binom{a+b-1}{a}$ nonincreasing functions $f: A \to B$.
Proof. Let (wlog) $A = \{1, \dots, a\}$, $B = \{1, \dots, b\}$. A function $f: A \to B$ is nonincreasing if and only if the function $g: A \to C = \{1, \dots, a+b-1\}$ given by $g(x) = f(x) + (a-x)$ is strictly decreasing. Any such function $g$ is uniquely identified with the set of its values $g(A)$; and the latter has size $a$. So there are as many functions $f$ in question as there are $a$-element subsets of $C$; the lemma is ready.

Now we count the functions of the two types under consideration. A function $f$ that has a fixed-point $c \in \{1, \dots, n\}$ maps $\{1, \dots, c-1\}$ (nonincreasingly) into $\{c, \dots, n\}$, and it maps $\{c+1, \dots, n\}$ (nonincreasingly) into $\{1, \dots, c\}$; and there are no further restrictions. So, on the left side of $c$, we have (by the lemma with $a=c-1, b=n-c+1$) $\binom{n-1}{c-1}$ choices; and right to $c$ (again by the lemma, with $a=n-c, b=c$) we have also $\binom{n-1}{c-1}$ choices. The number of nonincreasing functions with a fixed-point is therefore equal to
$$
F_n = \sum_{c=1}^{n} \binom{n-1}{c-1} \binom{n-1}{c-1}.
$$
If $f$ has no fixed-point then there exists $c \in \{1, \dots, n-1\}$ such that $f(x) > x$ for $x \le c$ and $f(x) < x$ for $x > c$. A similar reasoning applies: $f$ maps $\{1, \dots, c\}$ into $\{c+1, \dots, n\}$ and it maps $\{c+1, \dots, n\}$ into $\{1, \dots, c\}$ (arbitrarily nonincreasingly). On the left piece (lemma with $a=c, b=n-c$) there are $\binom{n-1}{c}$ choices; on the right piece (lemma, $a=n-c, b=c$) $\binom{n-1}{c-1}$ choices. So the number of nonincreasing functions without a fixed-point equals
$$
G_n = \sum_{c=1}^{n-1} \binom{n-1}{c} \binom{n-1}{c-1}.
$$
Consider the polynomial $P_n(x) = (1+x)^{n-1}$. We recognize $F_n$ and $G_n$ as the coefficients of $x^{n-1}$ and $x^n$ in the product $P_n(x)P_n(x) = (1+x)^{2n-2}$. Thus $F_n = \binom{2n-2}{n-1}$ and $G_n = \binom{2n-2}{n}$, with the difference $F_n - G_n = \binom{2n-2}{n-1} - \binom{2n-2}{n}$. (This gets us another characterization of Catalan numbers.)
