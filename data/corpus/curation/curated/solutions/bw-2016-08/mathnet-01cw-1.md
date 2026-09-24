Examining $f(f(f(x)))$ we can write
$$
\begin{align*}
a^2 f(x) &\stackrel{(2)}{=} a f(f(x)) &\stackrel{(2)}{=} f(f(f(x))) \\
&\stackrel{(2)}{=} f(a f(x)) &\stackrel{(1)}{=} a^2 f(f(x)) &\stackrel{(2)}{=} a^3 f(x)
\end{align*}
$$
which implies $a \in \{0, 1\}$ or $f(x) = 0$.

If $a = 1$, then function $f(x) = x$ satisfies both conditions.

If $a = 0$, then function $f(x) = |x| - x$ satisfies both conditions. In general, every function which sends all negative numbers to non-negative numbers and all non-negative numbers to zero satisfies conditions. For example, function which sends $-1$ to $1$ and everything else to zero is suitable.

Therefore the only suitable values of $a$ are $a = 0$ and $a = 1$.
