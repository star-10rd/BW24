Solution:

The key idea is to deal with the case $n=3$. Put $a=p^{n / 3}$, $b=q^{n / 3}$, and $c=r^{n / 3}$, so $a b c=(p q r)^{n / 3}=1$ and
$$
\frac{1}{p^{n}+q^{n}+1}+\frac{1}{q^{n}+r^{n}+1}+\frac{1}{r^{n}+p^{n}+1}=\frac{1}{a^{3}+b^{3}+1}+\frac{1}{b^{3}+c^{3}+1}+\frac{1}{c^{3}+a^{3}+1} .
$$
Now
$$
\frac{1}{a^{3}+b^{3}+1}=\frac{1}{(a+b)\left(a^{2}-a b+b^{2}\right)+1}=\frac{1}{(a+b)\left((a-b)^{2}+a b\right)+1} \leq \frac{1}{(a+b) a b+1} .
$$
Since $a b=c^{-1}$,
$$
\frac{1}{a^{3}+b^{3}+1} \leq \frac{1}{(a+b) a b+1}=\frac{c}{a+b+c}
$$
Similarly we obtain
$$
\frac{1}{b^{3}+c^{3}+1} \leq \frac{a}{a+b+c} \quad \text{and} \quad \frac{1}{c^{3}+a^{3}+1} \leq \frac{b}{a+b+c}
$$
Hence
$$
\frac{1}{a^{3}+b^{3}+1}+\frac{1}{b^{3}+c^{3}+1}+\frac{1}{c^{3}+a^{3}+1} \leq \frac{c}{a+b+c}+\frac{a}{a+b+c}+\frac{b}{a+b+c}=1,
$$
which was to be shown.
