Solution:

Let $N = q \cdot K + r$, $0 \leq r < K$, and let us number the cards $1, 2, \ldots, N$, starting from the one at the bottom of the deck. First we find out how the cards $1, 2, \ldots, K$ are moving in the deck.

If $i \leq r$ then the card $i$ is moving along the cycle
$$
\begin{aligned}
& i \rightarrow K + i \rightarrow 2K + i \rightarrow \cdots \rightarrow qK + i \rightarrow (r + 1 - i) \rightarrow \\
& K + (r + 1 - i) \rightarrow \cdots \rightarrow qK + (r + 1 - i),
\end{aligned}
$$
because $N - K < qK + i \leq N$ and $N - K < qK + (r + 1 - i) \leq N$. The length of this cycle is $2q + 2$. In the special case of $i = r + i - 1$, it actually consists of two smaller cycles of length $q + 1$.

If $r < i \leq K$ then the card $i$ is moving along the cycle
$$
\begin{aligned}
i \rightarrow K + i \rightarrow 2K + i \rightarrow & \cdots \rightarrow (q - 1)K + i \rightarrow \\
& K + r + 1 - i \rightarrow K + (K + r + 1 - i) \rightarrow \\
& 2K + (K + r + 1 - i) \rightarrow \cdots \rightarrow (q - 1)K + (K + r + 1 - i),
\end{aligned}
$$
because $N - K < (q - 1)K + i \leq N$ and $N - K < (q - 1)K + (K + r + 1 - i) \leq N$. The length of this cycle is $2q$. In the special case of $i = K + r + 1 - i$, it actually consists of two smaller cycles of length $q$.

Since these cycles cover all the numbers $1, \ldots, N$, we can say that every card returns to its initial position after either $2q + 2$ or $2q$ operations. Therefore, all the cards are simultaneously at their initial position after at most $\operatorname{lcm}(2q + 2, 2q) = 2\operatorname{lcm}(q + 1, q) = 2q(q + 1)$ operations. Finally,
$$
2q(q + 1) \leq (2q)^2 = 4q^2 \leq 4\left(\frac{N}{K}\right)^2
$$
which concludes the proof.
