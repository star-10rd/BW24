The total number of edges is odd. Assume without loss of generality that the number of blue edges is odd, and the number of red edges is even. It is clear that the parity of the number of edges of each colour does not change by the operations.

Consider a graph with maximal number of blue edges that can be obtained by these operations. Suppose that not all of its edges are blue. Then it contains at least two red edges. Because of maximality, it is not possible to have a triangle with exactæy two red edges.

Case 1. It contains two red edges $A B$ and $B C$ sharing a common vertex. Then edge $A C$ is coloured in red, too. If there exists a vertex $D$ such that the edges $D A, D B, D C$ are not of the same colour, then wlog we can assume that $D A$ is red and $D B$ is blue, but then we have a triangle $A B D$ with exactly two red edges, a contradiction.

![](figure-1.png)

If some vertex $D$ is connected to $A, B$ and $C$ with blue edges, then perform the operation on the triangles $B C D, A B D$, $A C D$, and the number of blue edges increases, a contradiction.
![](figure-2.png)

Otherwise all the vertices are connected to $A, B$ and $C$ with red edges. Due to parity we have at least one blue edge. If $X$ and $Y$ are connected by a blue edge, then perform the operation on $A X Y$, and the number of blue edges increases, a contradiction.

Case 2. Every two red edges have no common vertex. Let $A B$ and $C D$ be red edges. Perform the operation in the triangles $A B D, B C D, A B D$. The number of blue edges increases.
![](figure-3.png)
