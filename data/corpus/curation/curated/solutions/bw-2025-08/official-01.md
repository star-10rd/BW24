## Solution The answer is $2^n$.

All elements of a self-descriptive sequence are integers between 0 and n (inclusive), since they’re
sizes of sets with at most n elements. We should also notice that a self-descriptive sequence is
always decreasing (non-increasing). This is because all numbers that are greater tha_n or equal
to k + 1 are also greater tha_n (or equal to) k, and therefore a_k ≥ a_k+1 .

Now, take any self-descriptive sequence a_1 , . . . , a_n and draw a_n n × n grid. Number the columns
1, . . . , k from left to right and number the rows 1, . . . , k from bottom to top. For each index k,
colour the bottom a_k squares of the k-th column gray, and leave the rest white (Figure 1).

![](figure-1.png)

Figure 1: Grid representing the self-descriptive sequence (5, 3, 2, 1, 1). The grid is symmetric
across the main diagonal.

    Consider any column k with exactly m gray cells. These gray cells are the bottom m cells
of the column and a_k = m. Since a_k = m, there are exactly m numbers in the sequence that
have a value greater tha_n or equal to k. As the sequence is decreasing, these are the first m
elements of the sequence. Therefore, the first m columns will have their bottom k cells gray
(and possibly more above that) and the last n − m columns will have fewer tha_n the bottom k
cells gray. Notably, the cell on row k will be gray in the first m columns and white in the last
n − m columns. In other words, the leftmost m cells in row k are gray and the rest are white.
Since this is true for all indices k, the grid is symmetric across the main (bottom left–top right)
diagonal (Figure 1).

It’s clear that every distinct self-descriptive sequence gives a unique grid satisfying the previous constraints. The same also works in reverse: every distinct n × n grid symmetric across
the main diagonal, where each column has all its gray cells below its white cells, gives a unique
sequence of n non-negative integers, represented by the numbers of gray cells in each column.
All of these sequences are self-descriptive, since if row k has exactly m gray cells, then a_k = m.
Now row k has its leftmost m cells gray and the remaining n − m cells white, and therefore

                                                 16

exactly m of the elements of the sequence are greater tha_n or equal to k. Thus, we have a
bijection between self-descriptive sequences and grids.

Now we only need to count the number of such grids. Draw the boundary between the gray
and the white cells and connect it to the top left and bottom right corners along the boundary
of the grid (Figure 2). Since each row and column switches from gray to white at most once,
the boundary will be a down-right path from the top left corner to the bottom right corner.
The gray cells are below the boundary and the white cells are above the boundary. The grid
is symmetric across the main diagonal, and therefore the boundary is also symmetric. Thus,
choosing one half of the boundary (e.g. top left to the main diagonal) will lock in the other
half (Figure 2).

Figure 2: The boundary between the gray and the white cells drawn in red. As the boundary
is symmetric across the main diagonal, only one half of it ca_n be chosen freely.

    It’s clear that every distinct grid satisfying the constraints gives a unique boundary. The
same also works in reverse: every right-down path from the top left to the bottom right, that
is symmetric across the main diagonal, drawn as the boundary of the gray and the white cells
gives a unique grid satisfying the constraints. Therefore we have a bijection between grids and
right-down paths. It’s now enough to count the number of such paths. We ca_n freely choose a
down-right path from the top left to the main diagonal. In a_n n × n grid the path consists of n
steps, each having two options: right or down. Therefore the number of such paths is 2^n. This
is equal to the number of self-descriptive sequences of length n, which therefore is also 2^n.
