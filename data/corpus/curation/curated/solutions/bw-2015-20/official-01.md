For an integer $m$ we consider the distance $d$ from $n$ to the nearest multiple of $m$. Then $m \mid n \pm d$, which means $n \equiv \pm d \bmod m$. So if, for some $m$, the distance from $n$ to the nearest multiple of $m$ is equal to the distance from $n^{3}$ to the nearest multiple of $m$, then $n \equiv \pm n^{3} \bmod m$.

On the other hand, if $n \equiv \pm n^{3} \bmod m$, then there exists a $0 \leq d \leq \frac{1}{2} m$ such that $n \equiv \pm d \bmod m$ and $n^{3} \equiv \pm d \bmod m$, so the distance from $n$ to the nearest multiple of $m$ is equal to the distance from $n^{3}$ to the nearest multiple of $m$.

We conclude that we need to count the number of positive integers $m$ such that $n \equiv \pm n^{3} \bmod m$, or, equivalently, $m \mid n^{3}-n$ or $m \mid n^{3}+n$. That is,

$$
\begin{aligned}
& A_{n}=\mid\left\{m \in \mathbf{Z}^{+}|m| n^{3}-n \text { or } m \mid n^{3}+n\right\} \mid \\
& =\left|\left\{m \in \mathbf{Z}^{+}|m| n^{3}-n\right\}\right|+\left|\left\{m \in \mathbf{Z}^{+}|m| n^{3}+n\right\}\right|-\mid\left\{m \in \mathbf{Z}^{+}|m| n^{3}-n \text { and } m \mid n^{3}+n\right\} \mid \\
& =\left|\left\{m \in \mathbf{Z}^{+}|m| n^{3}-n\right\}\right|+\left|\left\{m \in \mathbf{Z}^{+}|m| n^{3}+n\right\}\right|-\left|\left\{m \in \mathbf{Z}^{+}|m| \operatorname{gcd}\left(n^{3}-n, n^{3}+n\right)\right\}\right| \\
& =\tau\left(n^{3}-n\right)+\tau\left(n^{3}+n\right)-\tau\left(\operatorname{gcd}\left(n^{3}-n, n^{3}+n\right)\right),
\end{aligned}
$$

where $\tau(k)$ denotes the number of (positive) divisors of a positive integer $k$.

Recall that $\tau(k)$ is odd if and only if $k$ is a square. Furthermore, we have

$$
\operatorname{gcd}\left(n, n^{2} \pm 1\right)=1
$$

So if $n^{3} \pm n$ were a square, then both $n$ and $n^{2} \pm 1$ would be squares. But $n^{2} \pm 1$ is not a square, since $n \geq 2$ and the only consecutive squares are 0,1 . Hence neither $n^{3}-n$ nor $n^{3}+n$ is a square, so the first two terms $\tau\left(n^{3}-n\right)$ and $\tau\left(n^{3}+n\right)$ are both even. Hence $A_{n}$ is odd if and only if $\operatorname{gcd}\left(n^{3}-n, n^{3}+n\right)$ is a square.

We have

$$
\operatorname{gcd}\left(n^{2}-1, n^{2}+1\right)=\operatorname{gcd}\left(n^{2}-1,2\right)= \begin{cases}1 & \text { if } n \text { even } \\ 2 & \text { if } n \text { odd }\end{cases}
$$

Hence,

$$
\operatorname{gcd}\left(n^{3}-n, n^{3}+n\right)= \begin{cases}n & \text { if } n \text { even } \\ 2 n & \text { if } n \text { odd }\end{cases}
$$

Note that $2 n$ for $n$ odd is never a square, since it has exactly one factor of 2 . We conclude that $A_{n}$ is odd if and only if $n$ is an even square.
