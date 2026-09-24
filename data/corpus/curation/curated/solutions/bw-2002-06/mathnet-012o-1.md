Solution:

First, consider any row that is not the row where the rook starts from. The rook has to visit all the squares of that row exactly once, and on its tour around the board, every time it visits this row, exactly two squares get visited. Hence, $m$ must be even; a similar argument for the columns shows that $n$ must also be even.

It remains to prove that for any even $m$ and $n$ such a tour is possible. We will show it by an inductionlike argument. Labelling the squares with pairs of integers $(i, j)$, where $1 \leqslant i \leqslant m$ and $1 \leqslant j \leqslant n$, we start moving from the square $(m / 2+1,1)$ and first cover all the squares of the top and bottom rows in the order shown in the figure below, except for the squares $(m / 2-1, n)$ and $(m / 2+1, n)$; note that we finish on the square $(m / 2-1,1)$.

![](attached_image_1.png)

The next square to visit will be $(m / 2-1, n-1)$ and now we will cover the rows numbered 2 and $n-1$, except for the two middle squares in row 2. Continuing in this way we can visit all the squares except for the two middle squares in every second row (note that here we need the assumption that $m$ and $n$ are even):

| 3 | 7 |   |   | 8 | 4 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 15 | 19 | 11 | 20 | 16 | 12 |
| 23 | 27 |   |   | 28 | 24 |
| 35 | 39 | 31 | 40 | 36 | 32 |
| 34 | 38 |   |   | 37 | 33 |
| 22 | 26 | 30 | 21 | 29 | 25 |
| 14 | 18 |   |   | 17 | 13 |
| 2 | 6 | 10 | 1 | 9 | 5 |

The rest of the squares can be visited easily:

| 3 | 7 | 47 | 48 | 8 | 4 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 15 | 19 | 11 | 20 | 16 | 12 |
| 23 | 27 | 43 | 44 | 28 | 24 |
| 35 | 39 | 31 | 40 | 36 | 32 |
| 34 | 38 | 42 | 41 | 37 | 33 |
| 22 | 26 | 30 | 21 | 29 | 25 |
| 14 | 18 | 46 | 45 | 17 | 13 |
| 2 | 6 | 10 | 1 | 9 | 5 |
