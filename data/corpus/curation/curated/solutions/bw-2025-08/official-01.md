## Solution

The answer is $2^n$.

All elements of a self-descriptive sequence are integers between $0$ and $n$, inclusive, since they are sizes of sets with at most $n$ elements. A self-descriptive sequence is also non-increasing: all numbers that are at least $k+1$ are also at least $k$, so $a_k\ge a_{k+1}$.

Take any self-descriptive sequence $a_1,\ldots,a_n$ and draw an $n\times n$ grid. Number the columns $1,\ldots,n$ from left to right and the rows $1,\ldots,n$ from bottom to top. In column $k$, colour the bottom $a_k$ cells gray and leave the rest white (Figure 1).

![](figure-1.png)

*Figure 1. Grid representing the self-descriptive sequence $(5,3,2,1,1)$. The grid is symmetric across the main diagonal.*

Consider any column $k$ with exactly $m$ gray cells. Then $a_k=m$. Since $a_k=m$, exactly $m$ terms of the sequence are at least $k$. As the sequence is non-increasing, these are the first $m$ terms. Thus the first $m$ columns have their bottom $k$ cells gray, while the remaining $n-m$ columns do not. Equivalently, row $k$ has exactly its leftmost $m$ cells gray. Since this holds for every $k$, the grid is symmetric across the main diagonal.

Every self-descriptive sequence gives a unique grid with these properties. Conversely, every $n\times n$ grid symmetric across the main diagonal in which each column has all its gray cells below its white cells gives a unique sequence by taking $a_k$ to be the number of gray cells in column $k$. Such a sequence is self-descriptive, because if row $k$ has exactly $m$ gray cells, then exactly $m$ terms of the sequence are at least $k$. Hence self-descriptive sequences are in bijection with these grids.

Now draw the boundary between the gray and white cells and connect it to the top-left and bottom-right corners along the boundary of the grid (Figure 2). Since each row and column switches from gray to white at most once, this boundary is a down-right path from the top-left corner to the bottom-right corner. The grid is symmetric across the main diagonal, so the boundary is also symmetric. Thus choosing one half of the boundary determines the other half.

![](figure-2.png)

*Figure 2. The boundary between the gray and white cells. By symmetry, only one half can be chosen freely.*

Conversely, every right-down path from the top-left to the bottom-right that is symmetric across the main diagonal determines one of the admissible grids. It remains to count such paths. We may freely choose the half of the path from the top-left corner to the main diagonal. In an $n\times n$ grid this half consists of $n$ steps, each either right or down. Hence there are $2^n$ such paths, and therefore $2^n$ self-descriptive sequences of length $n$.
