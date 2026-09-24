**Answer:** Betty has a winning strategy.

Betty follows this strategy: If Albert makes move b), then Betty makes move c) and vice versa. If Albert makes move a) from one bowl, Betty makes move a) from the other bowl. The only exception of this rule is if Betty can make a winning move, that is a move where she removes the last blue ball from the red bowl, or the last red ball from the blue bowl. In this case she makes her winning move.

First we prove that it is possible to follow this strategy. Let
$$
b = (\# \text{blue balls in the blue bowl}, \# \text{red balls in the blue bowl})
$$
$$
r = (\# \text{red balls in the red bowl}, \# \text{blue balls in the red bowl}).
$$
At the beginning $b = r = (100, 0)$. If $b = r$ and Albert takes a move b), then it must be possible for Betty to take a move c) and again leave a situation where $b = r$ to Albert. The same happens when Albert takes a move c). If $b = r$ and Albert takes a move a) from one bowl, then it is possible for Betty to take a move a) from the other bowl and again leave a situation where $b = r$. Hence by following this strategy Betty always leaves a situation to Albert where $b = r$ if she is not taking a winning move.

Now we prove that using this strategy Betty wins. Assume that at some point Albert wins, that is he takes a winning move. Since $r = b$ before the move, we must have $b = r = (1, s)$, $s \ge 1$, or $b = r = (2, t)$ before the move. But that means that either $b$ or $r$ was $(1, s)$, $s \ge 1$, or $(2, t)$ when Betty made her last move, but that is a contradiction because in this situation Betty would have taken a winning move, and the game would have stopped. Hence Betty wins.

Notice that there is one situation from which no legal move is possible, and that is
$b = r = (1, 0)$. When Betty follows the above strategy, this situation will never occur.
