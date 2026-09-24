![](figure-1.png)

Figure 1

Let $a_{(i, j)}$ be the number written in the cell in the row $i$ and column $j$. To prove that it is not possible to get 2012 written in each cell, we choose a factor $c_{(i, j)}$ for each cell, such that

$$
S=\sum_{1 \leq i, j \leq 5} c_{(i, j)} \cdot a_{(i, j)}
$$

increases by the same number each time a cell is chosen. If we choose the factors $c_{(i, j)}$ as shown in Figure 1, then $S$ increases by 22 each time a cell is chosen. Hence $S$ is divisible by 22 at all times. The sum of all the $c_{(i, j)}$ is 138 , hence if 2012 is written in each cell, then

$$
S=138 \cdot 2012=2^{3} \cdot 3 \cdot 23 \cdot 503
$$

which cannot be reached, since it is not divisible by 22 .
