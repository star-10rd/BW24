## Solution

We begin by noticing that $f(0)\ge0$, since

$$
f(0)+f(0)\ge f(0+0)\quad\Longrightarrow\quad f(0)\ge0.
$$

We will use the following lemma.

**Lemma.** For all $n\in\mathbb Z_{>0}$ and $x\in\mathbb Q$, we have $nf(x)\ge f(nx)$.

**Proof.** We use induction on $n$. The case $n=1$ is immediate. Assuming $nf(x)\ge f(nx)$, we get

$$
\begin{aligned}
(n+1)f(x)&=nf(x)+f(x)\\
&\ge f(nx)+f(x)\\
&\ge f(nx+x)\\
&=f((n+1)x),
\end{aligned}
$$

which completes the induction.

Next, we prove that for all rational $x<0$ and $y>0$,

$$
\frac{f(x)}x\le\frac{f(y)}y.
$$

Write $x=-a/b$ and $y=c/d$, where $a,b,c,d$ are positive integers. Then

$$
\begin{aligned}
f(ac)+f(-ac)&\ge f(0)\ge0,\\
f\!\left(\frac cd\,ad\right)+f\!\left(-\frac ab\,bc\right)&\ge0,\\
ad\,f(y)+bc\,f(x)&\ge0.
\end{aligned}
$$

Dividing by $ac>0$ gives

$$
\frac1y f(y)-\frac1x f(x)\ge0,
$$

hence $\frac{f(x)}x\le\frac{f(y)}y$.

Now let

$$
S=\left\{\frac{f(x)}x:x<0\right\},
\qquad
T=\left\{\frac{f(y)}y:y>0\right\}.
$$

Since every $p\in S$ and $q\in T$ satisfy $p\le q$, there exists a real number $\alpha$ such that $p\le\alpha\le q$ for all $p\in S$ and $q\in T$. Choose such an $\alpha$.

If $x<0$, then $f(x)/x\le\alpha$ is equivalent to $f(x)\ge\alpha x$. If $x=0$, we have $f(0)\ge0=\alpha\cdot0$. If $x>0$, then $f(x)/x\ge\alpha$ is equivalent to $f(x)\ge\alpha x$. Therefore $f(x)\ge\alpha x$ for all $x\in\mathbb Q$.
