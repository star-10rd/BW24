1) Let $z_n$ be the number of ways to choose an independent set of vertices for a zig-zag triangulation of an $n$-gon. It is known that each triangulation has at least two vertices which are not the endpoints of any diagonal. Let $A$ be one of these vertices for the zig-zag triangulation (see figure above).
If the independent set does not contain $A$, then by removing the vertex $A$ we obtain a zig-zag triangulated $(n-1)$-gon. If the independent set contains $A$, then it does not contain its two neighbours, and by removing $A$ and its two neighbours we obtain a zig-zag triangulated $(n-3)$-gon.
Therefore $z_n$ satisfies the recurrence relation
$$
z_n = z_{n-1} + z_{n-3}.
$$

![](attached_image_1.png)
Figure 9: A zig-zag triangulation of a 10-gon.

2) We will consider a triangulation of $n$-gon as a graph: the vertices of $n$-gon are vertices of the graph, the sides and the diagonals are edges.

3) Now we will prove the problem statement $i(P) \ge z_n$ by induction on $n$. Base $n \le 6$ is trivial.
Let the statement hold for all convex triangulations on less than $n$ vertices. Consider a triangulated $n$-gon $P$ as a graph. The triangulation has at least two vertices of degree 2. Let $A$ be one of these vertices, $u, v$ be its neighbours.
As in part 1), consider independent sets that do not contain $A$. The number of these sets equals the number of independent sets in graph $P \setminus A$. By induction hypothesis it is at most $z_{n-1}$.
Now consider independent sets that contain $A$ (and do not contain $u$ and $v$). The number of these sets equals the number of independent sets in the graph $H = P \setminus \{A, u, v\}$ which has $n-3$ vertices. But generally speaking, graph $H$ is not a graph of a triangulation. Let us add some edges to $H$ in order to obtain graph $H^*$ of some triangulation. This operation of adding new diagonals creates new neighbours in the graph, and thus decreases the number of independent sets. Then $i(H) \ge i(H^*) \ge z_{n-3}$.
Thus,
$$
i(P) \ge i(P \setminus A) + i(H) \ge z_{n-1} + z_{n-3} = z_n.
$$
