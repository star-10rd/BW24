## Solution

The solutions are precisely the functions satisfying

$$
f(x)=
\begin{cases}
1,&\text{if }x\text{ is odd or }x=2,\\
1\text{ or }2,&\text{otherwise.}
\end{cases}
$$

Let $P(a,b)$ denote the assertion of the original divisibility condition. We repeatedly use that $\operatorname{lcm}(r,s)\mid n$ implies $r\mid n$, and that $\operatorname{lcm}(n,1)=n$.

From $P(1,1)$,

$$
\operatorname{lcm}(f(2),f(1))\mid\operatorname{lcm}(1+f(1),1)=1+f(1).
$$

Since $f(2)=1$, this gives $f(1)\mid1+f(1)$, hence $f(1)=1$.

From $P(a,1)$ we get

$$
f(a+1)\mid a+1,
$$

so $f(n)\mid n$ for all positive integers $n$.

From $P(1,a)$,

$$
f(a+1)\mid\operatorname{lcm}(1+f(a),a).
$$

Because $f(a+1)\mid a+1$, we have $\gcd(f(a+1),a)=1$, and therefore

$$
f(a+1)\mid1+f(a).
$$

In particular,

$$
f(a+1)\le1+f(a)\le2+f(a-1)\le\cdots\le a-1+f(2)=a.
$$

Thus whenever the function increases, it increases by at most $1$. Consequently, if a value $m$ is ever attained, all positive values below $m$ have already been attained at smaller arguments.

We show that the function never takes the value $3$. Suppose, to the contrary, that $f(a)=3$ for the least such $a$. Then $a\ge6$. Since $f(a)\le1+f(a-1)$ and $f(a-1)<3$, we have $f(a-1)=2$.

Now $f(a)\mid a$ gives $3\mid a$, while $f(a-1)\mid a-1$ gives $2\mid a-1$. Hence $a\equiv3\pmod6$, so $\gcd(a-4,6)=1$. Also $f(a-4)\mid a-4$ and, by minimality of $a$, $f(a-4)<3$. Therefore $f(a-4)=1$.

Applying $P(4,a-4)$ gives

$$
f(a)=3\mid\operatorname{lcm}(4+f(a-4),f(a-4))
=\operatorname{lcm}(5,1)=5,
$$

which is impossible. Hence $f$ never takes the value $3$, and therefore it never takes any value at least $3$.

Thus $f(a)\in\{1,2\}$ for every $a$. Since $f(a)\mid a$, every odd $a$ must satisfy $f(a)=1$, and $f(2)=1$ is given. Conversely, assigning either $1$ or $2$ independently at every even argument other than $2$, while taking value $1$ at every odd argument and at $2$, satisfies the original condition.
