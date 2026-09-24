**Answer:** All functions given by $f(n) = an$, $a \in \mathbb{N}$.

Suppose that $f$ is a function that satisfies the conditions of the problem. We claim that $f(n) = f(n-1) + f(1)$ for all integers $n > 1$. Indeed, for any integer $m > n$, we have $m \mid f(n) + f(m-n)$ and $m \mid f(n-1) + f(1) + f(m-n)$ by conditions of the problem. Hence the difference $f(n) - (f(n-1) + f(1))$ is also divisible by $m$. As $m$ was arbitrary, this implies that $f(n) - (f(n-1) + f(1))$ is divisible by an infinite number of different integers, i.e., is equal to $0$. This completes the proof of the claim.

Easy induction now gives that necessarily $f(n) = n f(1)$. It remains to verify that all functions of the form $f(n) = a n$ satisfy the conditions of the problem, which is straightforward.
