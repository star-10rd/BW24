Answer: Maker has a winning strategy if $m>1$ and $n>1$ are both odd, or if $m=1$.

Let us refer to the positions of the blocks in the wall by coordinates $(x, y)$ where $x \in\{0,1, \ldots, m-1\}$ refers to the column and $y \in\{0,1, \ldots, n-1\}$ to the height of the block. Consider the different cases according to the parity of the parameters. In addition, there are some exceptional trivial cases.

1) If $m=1$, then Maker trivially wins by the first move.
2) If $m>1$, but $n=1$, then Breaker obviously can break the only row.
3) Suppose $m$ is even. Then Breaker has a defensive strategy based on the horizontal reflection, i.e. if Maker places a block in $(x, y)$, then Breaker places a block in $(m-1-x, y)$. Note that this move is always available for Breaker, because $m$ is even. It is clear that this reflection strategy breaks all the green rows.
4) Suppose then $n$ is even but $m>1$ is odd. Then Breaker has the same defensive stra-tegy as above based on the horizontal reflection, with one modification: Whenever Maker places a block in the middle column, Breaker does too. Since $n$ is even, this middle column does not influence the rest of the construction. Hence this reflection strategy breaks all the green rows as above.
5) Suppose both $m$ and $n$ are odd, $m>1$ and $n>1$. Maker's strategy is the following: Maker starts with $(0,0)$. Maker pairs the positions $(2 i-1,0)$ and $(2 i, 0), i=1,2, \ldots, \frac{m-1}{2}$, so that if Breaker places a red block in one of the positions, Maker places a green block in the other position; otherwise Maker does not use the bottom row. Maker's reply to Breaker's $(x, y)$ with $y>0$ is $(x, y+1)$. This strategy builds a green row at the height 2 .
