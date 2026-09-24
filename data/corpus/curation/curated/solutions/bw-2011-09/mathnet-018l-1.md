There exist a valid colouring iff $n$ or $m$ is odd.

**Proof.** If, without loss of generality, the number of rows is odd, colour every second row black, as well as the boundary, and all other squares white. It is easy to check that this coloring is valid.

If both $n$ and $m$ are even, there is no valid coloring. To prove this, consider the following graph $G$: The vertices are the squares, and edges are drawn between two diagonally adjacent squares $A$ and $B$ iff the two other squares touching both $A$ and $B$ at a side have the same color.

This graph of a valid coloring has the following properties:
* The corner squares have degree 1.
* Squares at a side of the grid have degree 0 or 2.
* Squares in the middle have degree 0, 2 or 4.
* The "forbidden patterns" are equivalent to the statement that no two edges of the graph are intersecting.
* If you put a checkboard pattern on the grid, no edge connects squares of different colours.
* Hence, if $m$ and $n$ are even, the corner squares sharing a side of the grid are in different connected components of the graph.
* Since the sum of degrees in each connected component is even, the opposing corner-squares have to be in the same connected component.
* Hence, there is a path from each corner to the opposing one.

But those two paths can not exist without intersecting, thus some forbidden pattern exists always, i.e. there is no valid colouring.
