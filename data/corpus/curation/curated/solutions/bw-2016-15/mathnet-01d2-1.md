Denote the graph by $G$, let $n = 1060$. Let $P_n$ denote a path on $n$ vertices. We perform the following algorithm on $G$ and construct a blue path $P$.

Let $v_1$ be an arbitrary vertex of $G$, let $P = (v_1)$, $U = V \setminus \{v_1\}$, and $W = \emptyset$. We investigate all edges from $v_1$ to $U$ searching for a blue edge. If such an edge is found (say from $v_1$ to $v_2$), we extend the blue path as $P = (v_1, v_2)$ and remove $v_2$ from $U$. We continue extending the blue path $P$ this way for as long as possible.

Since there is no blue $P_n$, we must reach the point of the process in which $P$ cannot be extended, that is, there is a blue path from $v_1$ to $v_k$ ($k < n$) and there is no blue edge from $v_k$ to $U$. This time, $v_k$ is moved to $W$ and we try to continue extending the path from $v_{k-1}$, reaching another critical point in which another vertex will be moved to $W$, etc.

If $P$ is reduced to a single vertex $v_1$ and no blue edge to $U$ is found, we move $v_1$ to $W$ and simply restart the process from another vertex from $U$, again arbitrarily chosen.

During this algorithm there is never a blue edge between $U$ and $W$. Moreover, in each step of the process, the size of $U$ decreases by $1$ or the size of $W$ increases by $1$.

Finally, since there is no blue $P_n$, the number of vertices of the blue path $P$ is always smaller than $n$. Hence, at some point of the process both $U$ and $W$ must have size at least $(2016 - n)/2$. After removing some vertices from $U$ or $W$, if needed, both sets have sizes precisely $(2016 - 1062)/2 = 477$.
