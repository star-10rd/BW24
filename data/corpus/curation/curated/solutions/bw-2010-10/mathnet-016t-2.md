Call two triangles *neighbours* if they have a common side. Let the dissections of convex $n$-gons together with appropriate colourings be called *n-colourings*.

Observe that all triangles of an arbitrary $n$-colouring can be listed, starting with an arbitrary triangle and always continuing the list by a triangle that is a neighbour to some triangle already in the list. Indeed, suppose that some triangle $\Delta$ is missing from the list. Choose a point $A$ inside a triangle in the list, as well as a point $D$ inside $\Delta$. By convexity, the line segment $AD$ is entirely inside the polygon. As the vertices of the triangles are vertices of the polygon, $AD$ crosses the sides of the triangles only outside their vertices. Hence any consecutive triangles that $AD$ passes through are neighbours. The first triangle that ray $AD$ visits and that is not in the list is one that the list can be continued with.

Consider such a list of all triangles that starts with a white triangle. Each triangle has at most three neighbours and each black triangle has at least one neighbour occurring in the list before it. Thus at most two neighbours of any black triangle are following it in the list. Each white triangle except for the first one is a neighbour of some triangle preceding it in the list, and according to the construction, that triangle is black. Hence among all triangles except for the first one, there are at most twice as many white triangles as there are black triangles. Altogether, this means $w \le 2b+1$ where $b$ and $w$ are the numbers of black and white triangles in the construction, respectively. Observe that this formula holds also if there are no white triangles.

Hence there are at most $3b + 1$ triangles altogether, i.e., $n - 2 \le 3b + 1$. In integers, this implies $b \ge \lfloor \frac{n}{3} \rfloor - 1$ which is equivalent to $b \ge \lfloor \frac{n-1}{3} \rfloor$.

This number of black triangles can be achieved as follows. Number all vertices of the polygon by 0 through $n-1$.

If $n = 3k, k \in \mathbb{Z}^+$, then draw diagonals $(0, 3i - 1)$, $(3i - 1, 3i + 1)$, $(3i + 1, 0)$ for all $i = 1, \dots, k - 1$. Colour black every triangle whose vertices are $0, 3i - 1$ and $3i + 1$ for some $i = 1, \dots, k - 1$.

If $n = 3k - 1$ or $n = 3k - 2$ then take a described $3k$-colouring and cut out 1 or 2 white triangles, respectively (e.g., triangles with vertices 0, 1, 2 and 0, $n-1$, $n-2$).
