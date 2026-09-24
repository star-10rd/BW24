Solution:

Let us denote the number of ways to split some figure into dominos by a small picture of this figure with a sign \#. For example, $\# \boxplus = 2$.
Let $N_{n} = \#$ ( $n$ rows) and $\gamma_{n} = \#$ ( $n-2$ full rows and one row with two cells).
We are going to find a recurrence relation for the numbers $N_{n}$.
Observe that

![](attached_image_1.png)

We can generalize our observations by writing the equalities
$$
\begin{aligned}
N_{n} & = 2 \gamma_{n} + N_{n-2}, \\
2 \gamma_{n-2} & = N_{n-2} - N_{n-4}, \\
2 \gamma_{n} & = 2 \gamma_{n-2} + 2 N_{n-2} .
\end{aligned}
$$
If we sum up these equalities we obtain the desired recurrence
$$
N_{n} = 4 N_{n-2} - N_{n-4}
$$
It is easy to find that $N_{2} = 3$, $N_{4} = 11$. Now by the recurrence relation it is trivial to check that $N_{6k+2} \equiv 0 \pmod{3}$.
