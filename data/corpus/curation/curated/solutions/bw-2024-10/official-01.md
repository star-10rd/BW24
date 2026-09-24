(a) We color the grid with 5 colors so that the color of a square is determined by the expression $2 x+y$ modulo 5 , where $(x, y)$ are the coordinates of the square (we assume that the side length of the square is 1 ; see Fig. 9). Without loss of generality, let the color of the target square be 0 , and let the frog be there facing in the positive $y$-direction. Before the move that brought the frog to this position, it must have been either on a square of color 1 , facing in the positive $x$ direction, or on a square of color 2 , facing in the negative $x$-direction. In either case, one move earlier, the frog must have been either on a square of color 3 , facing in the negative $y$-direction, or on a square of color 0 , facing in the positive $y$-direction. If at some point the frog was on a square of color 3 , facing in the negative $y$-direction, then before the move that brought it there, it must have been either on a square of color 1 , facing in the positive $x$-direction, or on a square of color 2 , facing in the negative $x$-direction. This exhausts all possible cases, showing that throughout the entire process, the frog could only be in one of the following four positions:

- On a square of color 0 , facing in the positive $y$-direction;
- On a square of color 1 , facing in the positive $x$-direction;
- On a square of color 2 , facing in the negative $x$-direction;
- On a square of color 3 , facing in the negative $y$-direction.

Based on this, we examine all possibilities:

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  | 0 | 2 | 4 | 1 | 3 | 0 | 2 | 4 | 1 | 3 | 0 |  |
|  | 4 | 1 | 3 | 0 | 2 | 4 | 1 | 3 | 0 | 2 | 4 |  |
|  | 3 | 0 | 2 | 4 | 1 | 3 | 0 | 2 | 4 | 1 | 3 |  |
|  | 2 | 4 | 1 | 3 | 0 | 2 | 4 | 1 | 3 | 0 | 2 |  |
|  | 1 | 3 | 0 | 2 | 4 | 1 | 3 | 0 | 2 | 4 | 1 |  |
|  | 0 | 2 | 4 | 1 | 3 | 0 | 2 | 4 | 1 | 3 | 0 |  |
|  | 4 | 1 | 3 | 0 | 2 | 4 | 1 | 3 | 0 | 2 | 4 |  |
|  | 3 | 0 | 2 | 4 | 1 | 3 | 0 | 2 | 4 | 1 | 3 |  |
|  | 2 | 4 | 1 | 3 | 0 | 2 | 4 | 1 | 3 | 0 | 2 |  |
|  | 1 | 3 | 0 | 2 | 4 | 1 | 3 | 0 | 2 | 4 | 1 |  |
|  | 0 | 2 | 4 | 1 | 3 | 0 | 2 | 4 | 1 | 3 | 0 |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |

Figure 9
![](figure-10.png)

Figure 10

- If the positive $y$-direction corresponds to north, then the color of the initial square is 1 , and the frog must have been facing in the positive $x$-direction, that is, east.
- If the positive $y$-direction corresponds to east, then the color of the initial square is 3 , and the frog must have been facing in the negative $y$-direction, that is, west.
- If the positive $y$-direction corresponds to west, then the color of the initial square is 2 , and the frog must have been facing in the negative $x$-direction, that is, south.
- If the positive $y$-direction corresponds to south, then the color of the initial square is 4 , from which the frog could not reach the target square at all.
This demonstrates that if the frog reaches the target square, it cannot have been facing north at the initial square.
(b) Let the frog at some point face east. Then it can make the following moves: east 2 squares, north 2 squares, west 1 square, north 2 squares, west 1 square, north 1 square (Fig. 10). This way, the frog has moved a total of 5 squares north, and after these moves, it is again facing east. Therefore, by repeating this sequence of moves 405 times, the frog can reach a point 2025 squares north of the initial square. By omitting the last move, the frog reaches exactly the square that is 2024 squares north of the initial square.

Remark: Similarly to the solution of part (b), one can show that the frog can reach the desired square also after making its first move to the south or to the west.

Let $A B C D$ be a cyclic quadrilateral with circumcentre $O$ and with $A C$ perpendicular to $B D$. Points $X$ and $Y$ lie on the circumcircle of the triangle $B O D$ such that $\angle A X O=\angle C Y O=90^{\circ}$. Let $M$ be the midpoint of $A C$. Prove that $B D$ is tangent to the circumcircle of the triangle $M X Y$.
