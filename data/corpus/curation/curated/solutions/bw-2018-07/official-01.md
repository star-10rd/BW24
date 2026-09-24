![](figure-1.png)

Answer: 4. Representatives of the equivalence classes are: all blue, all blue with one longitudinal red ring, all blue with one transversal red ring, all blue with one longitudinal and one transversal red ring.

First, show that these four classes are non equivalent. Consider any ring transversal or longitudinal and count the number of red edges going out from vertices of this ring in the same halftorus. This number can not be changed mod 2.

Now we show that each configuration can be transformed to one of these four classes. We suggest two independent reasoning.

Scanning of the square.

Cut the torus up in a square $16 \times 16$. In order to restore the initial torus we will identify the opposite sides of the square, but we will do it in the end of solution. Now we will work with the square. It is clear that during all recolorings each vertex of torus has even red degree. The same is true for the degrees of the inner vertices of the $16 \times 16$ square when we deal with it instead of the torus.

Scan all cells of this square one by one from left to right and from bottom to top. For convenience we may think that in each moment the scanned area is colored grey. First we take bottom left corner cell ( $a 1$ in chess notations) and color it grey. Then we consider the next cell ( $b 1$ in chess notations) color it grey and if the edge between the cells $a 1$ and $b 1$ is red, change the colors of the cell $b 1$ edges.

We obtain a grey area with no red edges in its interior. After that when we scan each new cell we append this cell to the grey figure and if it is necessary change the colors of edges of the new cell to make the color of all new edges in the grey area blue.

The latter is always possible because the new cell have either one common edge with the grey figure (as in the case " $a 1-b 1$ " above) or two common edges. For example let grey figure consist of the first row of the square and $a 2$ cell. When we append the cell $b 2$ to the grey figure two edges of its lower left corner vertex already belong to the grey figure, they are blue. Therefore the other two edges $a 2-b 2$ and $b 1-b 2$ have the same color and we can make them both blue (if they are not) by recoloring the edges of cell $b 2$.

So by doing that with all cells of the square we obtain $16 \times 16$ square with blue edges inside it. Now its time to recall that the sides of the square should be identified, and the red degree of each vertex of torus is even. It follows that the whole (identified) vertical sides of the square are either red or blue, and the same for horizontal sides.

Deformations of red loops (sketch).

To see that any configuration can be made into one of the above four configurations it is most clear to cut the torus up in a square with opposite edges identified.

Since the red degree of each vertex is even we can always find a loop consisting of red edges only. Now, suppose that one can make a (simple) red loop that does not cross the boundary of the square. We can change the color of this loop by changing one by one the colors of unit squares inside it. In the remaining configuration every vertex is still an endpoint of an even number of red edges and we can repeat the operation. So by doing that to every red loop we are left with a configuration where one can not make red loops that do not intersect the boundary. Second, any red loop left that passes through more than one boundary vertex can be deformed into a loop containing only one boundary vertex. Finally, any two loops crossing the same side of the square can be removed by changing colors of all unit squares between these loops. Thus, we are left with only the four possibilities mentioned.
