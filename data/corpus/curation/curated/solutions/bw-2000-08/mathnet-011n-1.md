Solution:

Fredek returned at least $32$ times.

Assume Fredek returned $k$ times, i.e. he was saying goodbye $k+1$ times to his friends. There exists a friend of Fredek, call him $X_{13}$, about whom Fredek forgot $k$ times in a row, starting from the very first time—otherwise Fredek would have come back less than $k$ times.

Consider the remaining friends of Fredek: $X_{1}, X_{2}, \ldots, X_{12}$. Assume that Fredek forgot $x_{j}$ times about each friend $X_{j}$. Since Fredek forgot a different number of times about each of his friends, we can assume without loss of generality that $x_{j} \geqslant j-1$ for $j=1,2, \ldots, 12$. Since $X_{13}$ was forgotten by Fredek $k$ times, and since Fredek forgot about exactly three of his friends each time, we have

$$
\begin{aligned}
3(k+1) &= x_{1} + x_{2} + x_{3} + \ldots + x_{12} + k \geqslant \\
&\geqslant 0 + 1 + 2 + 3 + \ldots + 11 + k = \\
&= 66 + k.
\end{aligned}
$$

Therefore $2k \geqslant 63$, which gives $k \geqslant 32$.

It is possible that Fredek returned $32$ times, i.e. he was saying goodbye $33$ times to his friends. The following table shows this. The $i$-th column displays the three friends Fredek forgot while saying goodbye for the $i$-th time (i.e. before his $i$-th return). For simplicity we write $j$ in place of $X_{j}$.

![](attached_image_1.png)
![](attached_image_2.png)
