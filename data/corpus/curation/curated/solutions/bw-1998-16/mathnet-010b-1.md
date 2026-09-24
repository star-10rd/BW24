Solution:

Answer: no.

Label the horizontal rows by integers from $1$ to $13$. Assume that the tiling is possible, and let $a_{i}$ be the number of vertical tiles with their outer squares in rows $i$ and $i+3$. Then $b_{i} = a_{i} + a_{i-1} + a_{i-2} + a_{i-3}$ is the number of vertical tiles intersecting row $i$ (here we assume $a_{j} = 0$ if $j \leqslant 0$). Since there are $13$ squares in each row, and each horizontal tile covers four (i.e. an even number) of these, then $b_{i}$ must be odd for all $1 \leqslant i \leqslant 13$ except for $b_{7}$, which must be even.

We now get that $a_{1} = b_{1}$ is odd, $a_{2}$ is even (since $b_{2} = a_{2} + a_{1}$ is odd), and similarly $a_{3}$ and $a_{4}$ are even. Since $b_{5} = a_{5} + a_{4} + a_{3} + a_{2}$ is odd, then $a_{5}$ must be odd. Continuing this way we find that $a_{6}$ is even, $a_{7}$ is odd (since $b_{7}$ is even), $a_{8}$ is odd, $a_{9}$ is odd and $a_{10}$ is even. Obviously $a_{i} = 0$ for $i > 10$, as no tile is allowed to extend beyond the edge of the board. But then $b_{13} = a_{10}$ must be both even and odd, a contradiction.


Alternative solution.

Colour the squares of the board black and white in the following pattern. In the first (top) row, let the two leftmost squares be black, the next two be white, the next two black, the next two white, and so on (at the right end there remains a single black square). In the second row, let the colouring be reciprocal to that of the first row (two white squares, two black squares, and so on). If the rows are labelled by $1$ through $13$, let all the odd-indexed rows be coloured as the first row, and all the even-indexed ones as the second row (see Figure 7).

Note that there are more black squares than white squares in the board. Each $4 \times 1$ tile, no matter how placed, covers two black squares and two white squares. Thus if a tiling leaves a single square uncovered, this square must be black. But the central square of the board is white. Hence such a tiling is impossible.

![](attached_image_1.png)
Figure 7


Another solution.

Colour the squares in four colours as follows: colour all squares in the $1$-st column green, all squares in the $2$-nd column black, all squares in the $3$-rd column white, all squares in the $4$-th column red, all squares in the $5$-th column green, all squares in the $6$-th column black etc., leaving only the central square uncoloured (see Figure 8). Altogether we have $3 \cdot 13 = 39$ black squares and $3 \cdot 13 - 1 = 38$ white squares. Since each $4 \times 1$ tile covers either one square of each colour or all four squares of the same colour, then the difference of the numbers of black and white squares must be divisible by $4$. Since $39 - 38 = 1$ is not divisible by $4$, the required tiling does not exist.

![](attached_image_2.png)
Figure 8
