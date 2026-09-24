If $k \in \mathbb{Z}$ is even then for $f : \mathbb{Z} \to \mathbb{Z}$, $f(x) = x + \frac{k}{2}$ we get:
$$
f(f(n)) = \left(n + \frac{k}{2}\right) + \frac{k}{2} = n + k
$$
For $k$ even it is therefore possible to find function $f : \mathbb{Z} \to \mathbb{Z}$ with the property that $f(f(n)) = n + k$ for all $n \in \mathbb{Z}$. It can therefore be assumed that $k$ is odd, in particular $k$ is non-zero.
For all $n \in \mathbb{Z}$ we get following:
$$
f(n) - n = (f(n) + k) - (n + k) = f(f(f(n))) - (n + k) = f(n + k) - (n + k)
$$
Using induction it can be shown that $f(n + m \cdot k) - (n + m \cdot k) = f(n) - n$ for all $m \in \mathbb{N}$. If $p, q \in \mathbb{Z}$, and $p \equiv q(\text{mod } |k|)$ then there is a natural number $m$ such that $p = q + m \cdot k$ or $q = p + m \cdot k$. In either case $f(m) - m = f(n) - n$,
equivalently $f(m) - f(n) = m - n$. As $m \equiv n \pmod{|k|}$, $f(m) - f(n) = m - n \equiv 0 \pmod{|k|}$, that is $f(m) \equiv f(n) \pmod{|k|}$.
If $m \in \mathbb{Z}$, $f(f(m-k)) = (m-k)+k = m$ so $m$ is in the image of $f$. As $m$ is arbitrary this means that $f$ is surjective. If $m, n \in \mathbb{Z}$ and $f(m) = f(n)$, we get:
$$
m = (m + k) - k = f(f(m)) - k = f(f(n)) - k = (n + k) - k = n,
$$
that is $f$ is injective. As $f$ is both injective and surjective it is bijective. Assume $m, n \in \mathbb{Z}$ and $f(m) \equiv f(n) \pmod{|k|}$. Then
$$
m \equiv m + k \equiv f(f(m)) \equiv f(f(n)) \equiv n + k \equiv n \pmod{|k|}
$$
Let $h : \{0, 1, \dots, |k| - 1\} \to \{0, 1, \dots, |k| - 1\} : x \mapsto (f(x) \pmod{|k|})$. From last equation we infer that $h$ is injective. As
$$
h(h(n)) = f(f(n) \pmod{|k|}) \pmod{|k|} = f(f(n)) \pmod{|k|} = (n + k) \pmod{|k|} = n
$$
for all $n \in \{0, 1, \dots, |k| - 1\}$. That is $h$ is an involution and we see that $h$ is bijective. Assume $h$ has a fixed point $n_0$. As $n_0 = h(n_0) = f(n_0) \pmod{|k|}$ we conclude that $f(n_0) - n_0 = m \cdot |k|$ where $m \in \mathbb{Z}$.
It has already been shown that $f(n_0 + m \cdot |k|) - (n_0 + m \cdot |k|) = f(n_0) - n_0 = m \cdot |k|$ so:
$$
\begin{aligned}
k &= f(f(n_0)) - n_0 \\
  &= (f(f(n_0)) - f(n_0)) + (f(n_0) - n_0) \\
  &= (f(n_0 + m \cdot |k|) - (n_0 + m \cdot |k|)) + m \cdot |k| \\
  &= m \cdot |k| + m \cdot |k| \\
  &= 2 \cdot m |k|
\end{aligned}
$$
This implies $|k| = 2|m||k|$. As $k \neq 0$ we get $2|m| = 1$ which is impossible as 1 is odd. The assumption that $n_0$ is a fixed point of $h$ must therefore be false.
Given $n \in \mathbb{Z}$ $h(n) \neq n$ and $h(h(n)) = n$ so the sets $\{n, h(n)\}$ and $\{h(n), h(h(n))\}$ are equal and each contains two distinct elements. Now
$$
\{0, 1, \dots, |k| - 1\} = \bigcup \{\{n, h(n)\} | n \in \{0, 1, \dots, |k| - 1\}\}.
$$
As each subset of $A := \{\{n, h(n)\} | n \in \{0, 1, \dots, |k| - 1\}\}$ contains two elements it follows that the union $\bigcup A = \{0, 1, \dots, |k| - 1\}$ contains an even number of elements. The cardinality of $\{0, 1, \dots, |k| - 1\}$ is $|k|$ which is odd and we get a contradiction. This shows that if $k$ is odd there is no function $f : \mathbb{Z} \to \mathbb{Z}$ such that $f(f(n)) = n + k$ for all $n \in \mathbb{Z}$.
Function $f : \mathbb{Z} \to \mathbb{Z}$ satisfying $f(f(n)) = n + k$ for all $n \in \mathbb{Z}$ can therefore be found if and only if $k$ is even. $\square$
