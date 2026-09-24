Throughout the solution, we denote a corridor directly connecting caves $a$ and $b$ by $a b$.
First we show that Erik can reverse his moves. Indeed, consider three caves $a, b, c$ such that $a b$ and $b c$ are corridors, and assume that Erik stands in the corridor $a b$. He can then perform the moves $a b \rightarrow b c \rightarrow c a \rightarrow a b$ in succession (Fig. 1\} note that after each move, the edge he is about to walk to in the sequence has just appeared as a consequence of his last move). But this will take him back to where he started as well as make sure that the layout of the labyrinth has not changed. Hence after performing the first move, he can "undo" it by performing the remaining two moves in this sequence.
![](figure-1.png)

Figure 1
![](figure-2.png)

Figure 2

This means that it is enough to show that Erik can turn any layout into the star shape (i.e., a layout with one central cave that all the remaining caves are directly connected to), since if he can get from any layout to the star shape he can also get from the star shape to any layout. Let us prove this by induction on the number $n$ of caves.

For $n=3$, any allowed layout has the star shape, so let us assume $n \geq 4$. It is easy to see that there has to exist at least two caves, each of which being connected to only one other cave. These caves cannot be directly connected to each other (otherwise they could not be connected to other caves). Hence one of these two caves, say $v$, is such that Erik is not initially standing in the only corridor adjacent to it. By the induction hypothesis, Erik can then perform some sequence of moves that will transform the labyrinth excluding $v$ into the star shape with $n-1$ caves. Let the central cave of the star be $c$ and assume that Erik is standing in the corridor $c w$. We have to consider three cases for how $v$ is connected to other caves:

- The cave $v$ is directly connected to $c$. In this case we already have the star shape with $n$ caves, and so we are done.
- The cave $v$ is directly connected to $w$. In this case Erik can make the moves $c w \rightarrow w v \rightarrow v c$ (Fig. 2). Then the resulting layout has the star shape.
- The cave $v$ is directly connected to some other non-central cave $u$. In this case Erik can make the moves

$$
w c \rightarrow c u \rightarrow u w \rightarrow u v \rightarrow v w \rightarrow w c \rightarrow w u \rightarrow u c
$$

(Fig. 3). Then the resulting layout has the star shape.
In all cases, we have shown that we can turn the labyrinth into the star shape. So we are done by induction.
![](figure-3.png)

Figure 3
