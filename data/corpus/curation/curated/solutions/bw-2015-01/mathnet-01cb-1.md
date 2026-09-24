We label the vertices (and the corresponding real numbers) as follows.
![](attached_image_1.png)

For $n = 2$, the only requirement is obviously $a_1 = -a_2 - a_3$.

For $n = 3$, we see that
$$
a_2 + a_4 + a_5 = 0 = a_2 + a_3 + a_5,
$$
which shows that $a_3 = a_4$ and similarly $a_1 = a_5$ and $a_2 = a_6$. Now the only requirement is the stated equalities and $a_1 = -a_2 - a_3$.

For $n = 4$, observe that $a_1 = a_7 = a_{10}$ since they all equal $a_5$. Since also $a_1 + a_7 + a_{10} = 0$, they all equal zero. By considering the top triangle, we get $x = a_2 = -a_3$ and this uniquely determines the rest. It is easily checked that, for any real $x$, this is actually a solution:
![](attached_image_2.png)

For $n > 4$ we can apply the same argument as above for any collection of 10 vertices. Any vertex not on the sides of the big triangle has to equal zero, since it is the centre of such a collection of 10 vertices. Any vertex $a$ on the sides of the big triangle forms some parallelogram similar to $a_4, a_2, a_5, a_8$, where the point opposite $a$ is in the interior of the big triangle. Since such opposite numbers are equal, all $a_i$ have to be zero in this case. $\square$
