Solution:

Inverting the relation gives
$$
\frac{q}{p} = \frac{1}{\sqrt{n+1} + \sqrt{n-1}} = \frac{\sqrt{n+1} - \sqrt{n-1}}{(\sqrt{n+1} + \sqrt{n-1})(\sqrt{n+1} - \sqrt{n-1})} = \frac{\sqrt{n+1} - \sqrt{n-1}}{2}.
$$
Hence we get the system of equations
$$
\left\{
\begin{array}{l}
\sqrt{n+1} + \sqrt{n-1} = \frac{p}{q} \\
\sqrt{n+1} - \sqrt{n-1} = \frac{2q}{p}
\end{array}
\right.
$$
Adding these equations and dividing by $2$ gives $\sqrt{n+1} = \frac{2q^2 + p^2}{2pq}$. This implies $4n p^2 q^2 = 4q^4 + p^4$.

Suppose now that $n$, $p$ and $q$ are all positive integers with $p$ and $q$ relatively prime. The relation $4n p^2 q^2 = 4q^4 + p^4$ shows that $p^4$, and hence $p$, is divisible by $2$. Letting $p = 2P$ we obtain $4n P^2 q^2 = q^4 + 4P^4$ which shows that $q$ must also be divisible by $2$. This contradicts the assumption that $p$ and $q$ are relatively prime.
