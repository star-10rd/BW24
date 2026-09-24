An equilateral triangle can be partitioned into one piece, that is a partition with the triangle itself as the only piece.
We also note that the cases $n = 6$ and $n = 8$ are possible as figure 5 shows

![](attached_image_1.png)
Figure 5: The cases $n = 6$ and $n = 8$

Assume that the original triangle can be partitioned into $n$ equilateral triangles. Partition the equilateral triangle into four parts as depicted in figure 6.
Then partition one of the resulting equilateral triangles into $n$ parts. We have therefore partitioned the equilateral triangle into $n + 3$ parts.
As the equilateral triangle can be partitioned into 1 part, it follows that the triangle can be partitioned into $n$ equilateral triangles if $n = 3k + 1$ for some $k$. Similarly, the constructions for $n = 6$ and $n = 8$ show that the triangle can be partitioned into $n = 6 + 3k$ parts and $n = 8 + 3k$ parts for any $k$.

![](attached_image_2.png)
Figure 6: Partition of an equilateral triangle into four equilateral triangles

We have therefore shown that the equilateral triangle can be partitioned into $n$ equilateral triangles for all $n$ except $n = 2, 3, 5$. We proceed to show that the equilateral triangle can not be partitioned into $n$ equilateral triangles if $n \in \{2, 3, 5\}$.
Consider the cases:
(i) Assume that $n = 2$. By the pigeonhole principle, one triangle shares two vertices with the original triangle, and will therefore be the entire triangle. This is absurd, so no partition for $n = 2$ is possible.
(ii) Assume that $n = 3$. As in the case above, no triangle shares two vertices with the original triangle. So each triangle shares exactly one vertex with the original triangle. In each of the 3 smaller triangles, let $a_i$, $i = 1, 2, 3$ be the side opposing the vertex common with the original triangle. The side $a_1$ lies inside the triangle, so it must be a side of two smaller triangles. However, the only internal segments of the other triangles are $a_2$ and $a_3$, but $a_1$ can only coincide with either $a_2$ or $a_3$. We conclude that no partition is possible for $n = 3$.
(iii) Assume that $n = 5$. As above, no triangle shares two vertices with the original triangle. Consider the three triangles that share a vertex with the original triangle, and the sides $a_i$ as above. As this is a partition, we know the $a_i$'s intersect either on the sides of the large triangle or outside it. We get four cases depending on how they intersect.
* If all three pairs intersect outside of the original triangle, the remaining shape is a convex hexagon.
* If two pairs intersect outside of the original triangle, and one pair on a side of the triangle, we get a convex pentagon.
* If two pairs intersect on the sides of the triangle, and one pair on the side of the triangle, we get an isosceles trapezoid.
* If all pairs intersect on the sides of the triangle, we get an equilateral triangle
We are to split the remaining convex shape, a hexagon, a pentagon, an isosceles trapezoid, or a triangle, into two triangles. The only convex shape split up into two equilateral triangles is the rhombus with one angle of 60°. We conclude that no partition is possible for $n = 5$.
We have shown that the equilateral triangle can be partitioned into $n$ parts for all positive integers except $n \in \{2, 3, 5\}$.
