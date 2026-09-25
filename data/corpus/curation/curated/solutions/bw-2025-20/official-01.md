## Solution

The answer is $n=1$ and $n=2$.

First note that

$$
\gcd(x,n)=\gcd(x+kn,n)
$$

for all integers $x,k$ and positive $n$. Since $(a_1,\ldots,a_n)$ is a permutation of $1,\ldots,n$ and $(a_1,2a_2,\ldots,na_n)$ is a complete set of residues modulo $n$, the three sequences

$$
(\gcd(1,n),\ldots,\gcd(n,n)),
$$

$$
(\gcd(a_1,n),\ldots,\gcd(a_n,n)),
$$

and

$$
(\gcd(a_1,n),\gcd(2a_2,n),\ldots,\gcd(na_n,n))
$$

are permutations of one another.

Also,

$$
\gcd(k,n)\le\gcd(ka_k,n)
\qquad\text{and}\qquad
\gcd(a_k,n)\le\gcd(ka_k,n).
$$

Because the corresponding sequences have the same sum, equality must hold termwise:

$$
\gcd(k,n)=\gcd(ka_k,n)=\gcd(a_k,n)
$$

for every $1\le k\le n$.

For each divisor $x$ of $n$, let

$$
S_x=\{k:1\le k\le n,\ \gcd(k,n)=x\}.
$$

The maps $k\mapsto a_k$ and $k\mapsto ka_k\pmod n$ are bijections, and the equality above shows that they map each $S_x$ bijectively to itself.

Suppose first that $p^2\mid n$ for some prime $p$. Then

$$
\gcd(a_p,n)=p
\qquad\text{and}\qquad
\gcd(pa_p,n)=p.
$$

The first equality implies $p\mid a_p$. Hence $p^2\mid pa_p$, and because $p^2\mid n$ we get $p^2\mid\gcd(pa_p,n)$, a contradiction. Thus $n$ is squarefree.

Now suppose an odd prime $p$ divides $n$, and put $q=n/p$. Since $n$ is squarefree,

$$
S_q=\{q,2q,\ldots,(p-1)q\}.
$$

Let

$$
s=q\cdot2q\cdots(p-1)q.
$$

Because $k\mapsto a_k$ permutes $S_q$,

$$
s=a_q a_{2q}\cdots a_{(p-1)q}.
$$

Because $k\mapsto ka_k\pmod n$ also permutes $S_q$,

$$
s\equiv (qa_q)(2qa_{2q})\cdots((p-1)q a_{(p-1)q})\pmod n.
$$

Reducing modulo $p$ and using the preceding identity gives

$$
s\equiv s^2\pmod p.
$$

Since $p\nmid q$, also $p\nmid s$, so we may divide by $s$ modulo $p$:

$$
1\equiv s\equiv (p-1)!q^{p-1}\pmod p.
$$

By Wilson's theorem and Fermat's little theorem,

$$
1\equiv(-1)\cdot1\equiv-1\pmod p,
$$

so $p\mid2$, contradicting that $p$ is odd. Therefore the only prime that may divide $n$ is $2$.

Since $n$ is squarefree, this leaves only $n=1$ and $n=2$. The case $n=1$ is trivial. For $n=2$, take $(a_1,a_2)=(1,2)$; then $a_1\equiv1\pmod2$ and $2a_2=4\equiv0\pmod2$, so the required residues are distinct.
