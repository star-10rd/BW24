![](figure-7.png)

Figure 7

![](figure-8.png)

Figure 8

If $a \geq 2 n-1$, Alice can win, for example by painting all the cells in the leftmost column and the topmost row green, ensuring that there will be a green path (Fig. 7).
If $2 n-1>a \geq 2 b$, Alice can also win. Indeed, note that $n>b$, so Alice can make sure to color (at least) the bottommost $b$ cells in the leftmost column and the rightmost $b$ cells in the topmost row green. There are now $b+1$ disjoint paths from some green square in the leftmost column to some green square in the topmost row (Fig. 8), so there is no way for Bob to block all of the paths.
If however $a<\min (2 b, 2 n-1)$, Bob wins. Indeed, note that $\min (2 b, 2 n-1)$ is the number of all descending diagonals of length at most $b$. Hence after Alice has made her move, there must still be some of these diagonals with no green cells in it. Bob can color all cells in it blue and win.
Hence Alice wins iff $a \geq \min (2 b, 2 n-1)$.
