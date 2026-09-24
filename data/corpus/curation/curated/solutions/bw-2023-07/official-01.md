Let us define the coordinates system with unit length of one meter, point of origin in the starting point and vertical-horizontal axes. W.l.o.g. assume that the first move was east and the path had length of $n$. Then each odd move changed $x$ coordinate of the robot by 1 and each even move changed $y$ coordinate by 1 .

At the end of the day both coordinates were equal to zero again, so there had to be even number of odd and even number of even moves. That implies that only $n$ divisible by 4 can fulfill the conditions.

For $n=4$ we have a square path. For $n=8$ we had 4 changes of $x$ coordinate and 4 changes of $y$, so the whole path was inside some $2 \times 2$ square. Unfortunately that's not possible without reaching some point twice.

Now, we will prove that all $n>8$ divisible by 4 are good. For $n=12$ there is a path in shape of "+" with first 4 moves like $(\rightarrow, \uparrow, \rightarrow, \uparrow)$. Now we can change the middle $(\uparrow, \rightarrow)$ sequence by $(\downarrow, \rightarrow, \uparrow, \rightarrow, \uparrow, \leftarrow)$. Thanks to this change the robot explored new territory south-east from the one before explored. We got +4 of length of the path. There we can do it again and again, reaching any length of $4 k+8$ for all $k \in \mathbb{Z}^{+}$.
