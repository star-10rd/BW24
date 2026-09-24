Clearly for $C = 1$ we have the solution $(a_n)_{n=1}^{\infty} = (n + 2019)_{n=1}^{\infty}$. Let's prove that this is the only value for $C$ that works.
Assume $(a_n)_{n=1}^{\infty}$ is a solution and let $(b_n)_{n=1}^{\infty} = (a_n - n)_{n=1}^{\infty}$. We claim that for $n > |C| + 2021^2$:
(i) If $b_n < 2019$, then $b_n < b_{n+1} < 2019$.
(ii) If $b_n > 2019$, then $b_n > b_{n+1} > 2019$.
It is clear that these two claims implies that $b_n = 2019$ for all large $n$ and hence that $C = 1$.
Let us prove the claims:
(i) First of all, $b_n \le 2018$ implies that
$$
\begin{aligned}
a_{n+1}^2 &\le C + (n + 2021)(n + 2018) \\
&= (n + 2020)^2 - n + C + 2018 \cdot 2021 - 2020^2 \\
&< (n + 2020)^2
\end{aligned}
$$
and hence $a_{n+1} < n + 2020$ so that indeed $b_{n+1} < 2019$.

Moreover, we have
$$
\begin{align*}
a_{n+1}^2 &= C + (n + 2021)(n + b_n) \\
&= (n + 1 + b_n)^2 + (2019 - b_n)n + 2021b_n + C - (b_n + 1)^2 \\
&\ge (n + 1 + b_n)^2 + n + C - 2019^2 \\
&> (n + 1 + b_n)^2
\end{align*}
$$
and hence $a_{n+1} > n + 1 + b_n$ so that indeed $b_{n+1} > b_n$.
(ii) First of all, $b_n \ge 2020$ implies that
$$
a_{n+1}^2 \geq C + (n + 2021)(n + 2020) = (n + 2020)^2 + n + C + 2021 > (n + 2020)^2
$$
and hence $a_{n+1} > n + 2020$ so that indeed $b_{n+1} > 2019$.
Moreover, we have
$$
\begin{align*}
a_{n+1}^2 &= C + (n + 2021)(n + b_n) \\
&= (n + 1 + b_n)^2 + (2019 - b_n)n + 2021b_n + C - (b_n + 1)^2 \\
&\le (n + 1 + b_n)^2 - n + C \\
&< (n + 1 + b_n)^2
\end{align*}
$$
and hence $a_{n+1} < n + 1 + b_n$ so that indeed $b_{n+1} < b_n$.
