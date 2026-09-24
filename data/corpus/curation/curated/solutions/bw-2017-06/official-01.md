There are three types of cells on the board: corner cells, edge cells and centre cells. Colour the cells in three distinct colours as follows.

$$
\begin{array}{|c|c|c|c|}
\hline \mathrm{A} & \mathrm{B} & \mathrm{C} & \mathrm{A} \\
\hline \mathrm{B} & \mathrm{C} & \mathrm{A} & \mathrm{B} \\
\hline \mathrm{C} & \mathrm{A} & \mathrm{B} & \mathrm{C} \\
\hline \mathrm{A} & \mathrm{B} & \mathrm{C} & \mathrm{A} \\
\hline
\end{array}
$$

Suppose there are initially $a, b, c$ stones on cells of colours A, B, C, respectively. With each move, one of these numbers will increase by 1 , while the other two will decrease by 1 . Because there are fourteen moves altogether, the game must end with $a, b, c$ of the same parity as they originally had. There are $6,5,5$ cells of each colour on the board, so if the game should end with a single stone remaining, the game must begin with

$$
a=6, b=5, c=4 \quad \text { or } \quad a=6, b=4, c=5 \text {. }
$$

The empty slot should thus have colour B or C. This excludes the corner cells and two of the centre cells. However, by symmetry (changing the colouring), the two remaining centre cells will also be excluded. Hence the empty space at the beginning must be at an edge cell. That the game is indeed winnable in this case can be seen from the sequence of moves here:

![](figure-1.png)
