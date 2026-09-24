$k = 2n-1$ when $n \neq 2$ and $k = 4$ when $n = 2$.
$k = 2n - 1$ is possible by colouring diagonally as shown in the figure below and when $n = 2$, $k = 4$ is possible by colouring each cell in a unique colour.
![](attached_image_1.png)

We consider the graph, where each node represents a colour and two nodes are linked, if the colours they represent touch. This graph is connected and since each colour touches at most 2 colours every node has at most degree 2. This means that the graph is either one long chain or one big cycle.
![](attached_image_2.png)

We now look at the case when $n$ is odd. Consider the cell in the center of the table. From this cell we can get to any other cell by passing through at most $n-1$ cells. Therefore from the node representing this cell, we can get to any node through at most $n-1$ edges. But if the graph has $2n$ or more nodes, then for every node there is a node which is more than $n-1$ edges away. So we must have $k \le 2n-1$ for all odd $n$.

When $n$ is even we consider the 4 center cells. If they all have a different colour, then they form a 4-cycle in the graph, meaning the graph has only 4 nodes. If two of the center cells have the same colour, then from this colour you will be able to get to all other cells passing through at most $n-1$ cells. By same the arguments as in the odd case, we get $k \le \max(2n-1, 4)$ for even $n$.

So overall we have $k \le 2n-1$ for $n \ne 2$ and $k \le 4$ for $n = 2$ as desired.
