## Solution

We use three lemmas.

**Lemma 1.** For positive integers $p,q$,

$$
S(p+q)\le S(p)+S(q).
$$

**Proof.** In fact,

$$
S(p+q)=S(p)+S(q)-9\cdot(\text{number of carries when adding }p\text{ and }q),
$$

which follows directly from decimal addition.

**Lemma 2.** For positive integers $p,q$,

$$
S(pq)\le S(p)S(q).
$$

**Proof.** Write

$$
p=p_m10^m+p_{m-1}10^{m-1}+\cdots+p_0,
\qquad 0\le p_i\le9.
$$

Using Lemma 1 repeatedly,

$$
\begin{aligned}
S(qp)
&\le S(qp_m10^m)+S(qp_{m-1}10^{m-1})+\cdots+S(qp_0)\\
&=S(qp_m)+S(qp_{m-1})+\cdots+S(qp_0)\\
&\le p_mS(q)+p_{m-1}S(q)+\cdots+p_0S(q)\\
&=S(p)S(q).
\end{aligned}
$$

**Lemma 3.** For every positive integer $m$, every positive multiple of $10^m-1$ has digit sum at least $9m$.

**Proof.** We induct on the multiple. Certainly $S(10^m-1)=9m$. Let $p$ be a larger multiple and write

$$
p=10^mp_1+p_0,
\qquad 0\le p_0<10^m.
$$

Since $10^m\equiv1\pmod{10^m-1}$, the integer $p_1+p_0$ is also divisible by $10^m-1$, and it is smaller than $p$. Hence

$$
S(p)=S(p_1)+S(p_0)\ge S(p_1+p_0)\ge9m.
$$

Returning to the problem, $ab^2c^4$ is a multiple of $abc=10^n-1$, so Lemma 3 gives

$$
S(ab^2c^4)\ge9n.
$$

By AM-GM and Lemma 2,

$$
\begin{aligned}
S(a)+S(b^2)+S(c^4)
&\ge3\sqrt[3]{S(a)S(b^2)S(c^4)}\\
&\ge3\sqrt[3]{S(ab^2c^4)}\\
&\ge3\sqrt[3]{9n}
=\sqrt[3]{243n}.
\end{aligned}
$$
