Solution:

Answer: $2 \cdot \left\lfloor \dfrac{n+1}{3} \right\rfloor$.

Label the squares by pairs of integers $(x, y)$, $x, y = 1, \ldots, n$, and consider a sequence of moves that takes the knight from square $(1,1)$ to square $(n, n)$.

The total increment of $x+y$ is $2(n-1)$, and the maximal increment in each move is $3$. Furthermore, the parity of $x+y$ shifts in each move, and $1+1$ and $n+n$ are both even. Hence, the number of moves is even and larger than or equal to $\dfrac{2 \cdot (n-1)}{3}$. If $N = 2m$ is the least integer that satisfies these conditions, then $m$ is the least integer that satisfies $m \geqslant \dfrac{n-1}{3}$, i.e. $m = \left\lfloor \dfrac{n+1}{3} \right\rfloor$.

![](attached_image_1.png)
$n=4$
![](attached_image_2.png)
$n=5$
![](attached_image_3.png)
$n=6$
Figure 1

For $n=4$, $n=5$ and $n=6$ the sequences of moves are easily found that take the knight from square $(1,1)$ to square $(n, n)$ in $2$, $4$ and $4$ moves, respectively (see Figure 1). In particular, the knight may get from square $(k, k)$ to square $(k+3, k+3)$ in $2$ moves. Hence, by simple induction, for any $n$ the knight can get from square $(1,1)$ to square $(n, n)$ in a number of moves equal to twice the integer part of $\dfrac{n+1}{3}$, which is the minimal possible number of moves.
