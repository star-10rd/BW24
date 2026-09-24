Solution:

If a number $y$ occupies the place where $x$ should be at the end, we draw an arrow $x \rightarrow y$. Clearly at the beginning all numbers are arranged in several cycles: Loops $\bullet \bullet$, binary cycles $\bullet \rightleftarrows \bullet$ and "long" cycles $\bullet_{\nwarrow}^{\nearrow} \succeq \bullet$ (at least three numbers). Our aim is to obtain $2 n$ loops.

Clearly each binary cycle can be rearranged into two loops by one move. If there is a long cycle with a fragment $\cdots \rightarrow a \rightarrow b \rightarrow c \rightarrow \cdots$, interchange $a, b, c$ cyclically so that at least two loops, $a \oslash, b \oslash$, appear. By each of these moves, the number of loops increase by 2, so at most $n$ moves are needed.

On the other hand, by checking all possible ways the two or three numbers can be distributed among disjoint cycles, it is easy to see that each of the allowed moves increases the number of disjoint cycles by at most two. Hence if the initial situation is one single loop, at least $n$ moves are needed.
