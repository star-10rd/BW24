Let $A=\{a:(a, b) \in S\}$ and $B=\{b:(a, b) \in S\}$. The claim is equivalent to

$$
2 \sum_{a \in A} a=\sum_{b \in B} b
$$

Assume that for some $x, y, z \in\{1,2, \ldots, 1008\}$ both, $x^{2}+y^{2}$ and $x^{2}+z^{2}$, are multiples of 2017. By

$$
\left(x^{2}+y^{2}\right)-\left(x^{2}+z^{2}\right)=y^{2}-z^{2}=(y+z)(y-z) \equiv 0(\bmod 2017),
$$

$0<y+z<2017$ and the fact that 2017 is a prime number, it follows that $y=z$. Hence, $A$ and $B$ are disjoint, and there is a bijection $f: A \mapsto B$ such that for any $a \in A$ and $b \in B$ the pair $(a, b)$ is in $S$ if and only if $b=f(a)$.

We show that the mapping $g$ defined by $g(a)=f(a)-a$ for $a \in A$ is a bijection from $A$ to $A$. Then (2) follows by

$$
\sum_{a \in A} a=\sum_{a \in A} g(a)=\sum_{a \in A} f(a)-\sum_{a \in A} a=\sum_{b \in B} b-\sum_{a \in A} a
$$

Let $a \in A$, and let $h(a)=\min \{a+f(a), 2017-(a+f(a))\}$. Then $0<2 h(a)<2017$ and, by the definition of $g, 0<2 g(a)<$ 2017. Furthermore,

$$
g(a)^{2}+h(a)^{2} \equiv(a-f(a))^{2}+(a+f(a))^{2} \equiv 2\left(a^{2}+f(a)^{2}\right) \equiv 0(\bmod 2017) .
$$

If $a+f(a) \leq 1008$, then $g(a)=f(a)-a<f(a)+a=h(a)$. If $a+f(a)>1008$, then $g(a)=f(a)-a<(f(a)-a)+(2017-2 f(a))=$ $2017-(a+f(a))=h(a)$. Consequently, $g(a) \in A$ with $f(g(a))=h(a)$.

It remains to show that $g$ is injective. Assume that $g\left(a_{1}\right)=g\left(a_{2}\right)$ for some $a_{1}, a_{2} \in A$, i.e.,

$$
b_{1}-a_{1}=b_{2}-a_{2},
$$

where $b_{i}=f\left(a_{i}\right)$ for $i=1,2$. Clearly, we also have $h\left(a_{1}\right)=h\left(a_{2}\right)$ then. If $h\left(a_{1}\right)=a_{1}+b_{1}$ and $h\left(a_{2}\right)=a_{2}+b_{2}$, then subtracting (3) from $a_{1}+b_{1}=a_{2}+b_{2}$ gives $a_{1}=a_{2}$. Similarly, if $h_{1}\left(a_{1}\right)=2017-\left(a_{1}+b_{1}\right)$ and $h_{2}=2017-\left(a_{2}+b_{2}\right)$, then we obtain $a_{1}=a_{2}$. Finally, if $h\left(a_{1}\right)=a_{1}+b_{1}$ and $h_{2}=2017-\left(a_{2}+b_{2}\right)$, then $2\left(a_{1}+b_{2}\right)=2017$, a contradiction.

Remark: The proof as given above obviously works for any prime congruent to 1 modulo 4 in the place of 2017. With a little more effort, one can show that the statement is true for any positive odd $n$ (vacuously, if $n$ has a prime factor congruent to 3 modulo 4).
