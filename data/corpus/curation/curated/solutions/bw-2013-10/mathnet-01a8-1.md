Answer: The smallest possible number of moves is $n$ and the largest possible number of moves is $3n - 2$. If all the moves are done with lines parallel to one side of the triangle, then the game will end after $n$ moves. Let's show that the number of moves cannot be smaller. There will be a move that colors the corner triangle, we can assume that this move is done, coloring all the bottom line of the triangle (it can only increase the number of black squares). Move order is irrelevant, if we do this move as the first move then in remaining $(n-1)$ moves we have to color black $(n-1)^2$ triangle.

Now lets show that the game can last $3n - 2$ moves. If $n = 1$ then it is evident. Assume that we have proved it for $n = k$. For $n = k + 1$ we start the game with three moves A, B and C coloring two rightmost corners and the rightmost line. We have used 3 moves and reduced the field to the situation when $n = k$ (Fig. 4).
![](attached_image_2.png)
Figure 4

At last we show that there cannot be more than $3n-2$ moves. If all $n$ lines parallel to one side of the triangle is colored then the game ends. Therefore the number of moves made before the last move cannot be larger than $3(n-1)$ what gives the total number of moves not larger than $3n-2$.
