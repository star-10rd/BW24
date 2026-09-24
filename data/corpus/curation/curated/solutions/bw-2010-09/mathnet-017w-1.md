Let $r$ be the number of the remaining exceptional moves in the current position (at the beginning of the game $r=10$ and $r$ decreases during the game). The winning strategy of the second player is the following. After his move the number of matches in the pile must have the form $6n + r$, where $n > r$, or $7n$, where $n \le r$ (observe that $6n + r = 7n$ for $n = r$).

At the beginning of the game the initial number of matches $1000 = 6 \cdot 165 + 10$ agrees with this strategy.

What happens during two consecutive moves?

Consider the case $n > r$ first. If the first player takes $k = 1, 2, \dots, 5$ matches (and hence $r$ is not changing during his move) then the second player takes $6 - k$ matches. So players take $6$ matches together and the pile contains now $6(n-1) + r$ matches.
