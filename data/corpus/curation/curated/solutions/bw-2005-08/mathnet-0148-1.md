Solution:

Consider a diagonal of the square grid. For any grid vertex $A$ on this diagonal denote by $C$ the farthest endpoint of this diagonal. Let the square with the diagonal $A C$ be red. Thus, we have defined the set of 48 red squares (24 for each diagonal). It is clear that if we draw all these squares, all the lines in the grid will turn red.

In order to show that 48 is the minimum, consider all grid segments of length 1 that have exactly one endpoint on the border of the grid. Every horizontal and every vertical line that cuts the grid into two parts determines two such segments. So we have $4 \cdot 24=96$ segments. It is evident that every red square can contain at most two of these segments.
