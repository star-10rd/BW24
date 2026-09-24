We will first show that any such triangle can be transformed to a *special* triangle whose corners are at $(0,0)$, $(0,1)$ and $(n,0)$. Since every transformation preserves the triangle's area, triangles with the same area will have the same value for $n$.

Define *y-span* of a triangle to be the difference between the largest and the smallest $y$ value of its vertices. First we show that a triangle with a $y$-span greater than one can be transformed to a triangle with a strictly lower $y$-span.

If none of the vertices have the same $y$ coordinate, move vertex with minimal $y$ upwards, as in figure 5, reducing the $y$-span. The point is moved by a vector equal to the difference of the opposite side, so it ends up at an integer point, and it cannot pass the top of the old triangle.

![](attached_image_1.png)
Figure 6: Prepare for y-span reduction

If two vertices have the same $y$ coordinate, use figure 6 to move one of these between the others (which is possible since the $y$-span was at least two), and then do the previous transformation to reduce the $y$-span.

When the triangle has been transformed to an $y$-span of $1$, use figure 7 to move one vertex to the $y$ axis, and do two steps to make the opposite side vertical. It may be that the figure have to be flipped, but the next step removes this as a different case then the illustrated one.

![](attached_image_2.png)
Figure 7: Move vertex to y axis and normalize

Finally, use figure 8 to transform the triangle to the origin. Since the reverse of a legal transform is also a legal transform, any triangle can be transformed to any other triangle with the same area, via the special triangle.

![](attached_image_3.png)
Figure 8: Move triangle to the origin
