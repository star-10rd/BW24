Solution:

The first player has a winning strategy.

Divide all the squares of the board except one in pairs so that the squares of each pair are accessible from each other by one move of the knight (see Figure 10 where the squares of each pair are marked with the same number, and the remaining square is marked by $X$). The winning strategy for the first player will be to place the knight on the square $X$ in the beginning and further make each move from a square to the other square paired with it.

| $X$ | 12 | 8 | 3 | 11 |
| :---: | :---: | :---: | :---: | :---: |
| 5 | 3 | 11 | 1 | 7 |
| 12 | 8 | 6 | 10 | 4 |
| 2 | 5 | 9 | 7 | 1 |
| 9 | 6 | 2 | 4 | 10 |
Figure 10


Alternative solution.

If the first player places the knight on the square marked by 1 on Figure 11, then the second player will have two possible moves which are symmetric to each other relative to a diagonal of the board. Suppose w.l.o.g. that he makes a move to the square marked by 2, then the first player can make his move to the square marked by 3. At this point, the second player can only make a move to the square marked by 4, and the first player can make his next move to the square marked by 5; then the second player can only make a move to the square marked by 6, etc., until the first player will make a move to the square marked by 9. Now the second player will again have two possible moves, but since these two squares are symmetric relative to a diagonal of the board (and the set of squares already used is symmetric to that diagonal as well) we can assume w.l.o.g. that he makes a move to the square marked by 10. Now the first player can make his moves until the end of the game so that the second player will have no choice for his subsequent moves (these moves will be to the squares marked by 11 through 25, in this order). We see that the first player will be the one to make the last move, and hence the winner.

| 7 |   |   |   | 1 |
| :--- | :--- | :--- | :--- | :--- |
|   |   | 8 |   |   |
|   | 6 |   | 2 |   |
|   |   | 4 | 9 |   |
| 5 |   |   |   | 3 |
Figure 11

| 7 | 12 | 23 | 18 | 1 |
| :---: | :---: | :---: | :---: | :---: |
| 22 | 17 | 8 | 13 | 24 |
| 11 | 6 | 25 | 2 | 19 |
| 16 | 21 | 4 | 9 | 14 |
| 5 | 10 | 15 | 20 | 3 |
Figure 12
