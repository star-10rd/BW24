$$
\{x_1, \dots, x_6\} = \left\{ \frac{2 \cdot 2013}{5}, \frac{2 \cdot 2013}{5}, \frac{2 \cdot 2013}{5}, \frac{3 \cdot 2013}{5}, \frac{3 \cdot 2013}{5}, \frac{3 \cdot 2013}{5} \right\}
$$
The function
$$
(x-a)^2 + (x-b)^2 + (x-c)^2
$$
attains its minimum when $x = \frac{a+b+c}{3}$. Let's call the vertices of the cube adjacent, if they are connected with an edge. If $S$ is minimal then numbers $x_1, \dots, x_6$ are such that any of them is the arithmetic mean of the numbers written on adjacent vertices (otherwise, $S$ can be made smaller). This gives us $6$ equalities:
$$
\begin{cases} x_1 = \frac{x_4+x_5}{3} \\ x_2 = \frac{x_4+x_6}{3} \\ x_3 = \frac{x_5+x_6}{3} \\ x_4 = \frac{x_1+x_2+2013}{3} \\ x_5 = \frac{x_1+x_3+2013}{3} \\ x_6 = \frac{x_2+x_3+2013}{3} \end{cases}
$$
Here $x_1, x_2, x_3$ are written on vertices that are adjacent to the vertex that contains $0$. By solving this system we get the answer.

$$
\begin{align*}
S &= (x_1^2 + x_2^2 + x_3^2 + (x_4 - x_1)^2 + (x_4 - x_2)^2 + (x_5 - x_1)^2 + (x_5 - x_3)^2 + \\
& \qquad (x_6 - x_2)^2 + (x_6 - x_3)^2 + (2013 - x_4)^2 + (2013 - x_5)^2 + (2013 - x_6)^2 = \\
&= \left(\frac{1}{2}x_1^2 + (x_4 - x_1)^2 + \frac{1}{2}(2013 - x_4)^2\right) + \left(\frac{1}{2}x_1^2 + (x_5 - x_1)^2 + \frac{1}{2}(2013 - x_5)^2\right) + \\
&\quad + \left(\frac{1}{2}x_2^2 + (x_4 - x_2)^2 + \frac{1}{2}(2013 - x_4)^2\right) + \left(\frac{1}{2}x_2^2 + (x_6 - x_2)^2 + \frac{1}{2}(2013 - x_6)^2\right) + \\
&\quad + \left(\frac{1}{2}x_3^2 + (x_5 - x_3)^2 + \frac{1}{2}(2013 - x_5)^2\right) + \left(\frac{1}{2}x_3^2 + (x_6 - x_3)^2 + \frac{1}{2}(2013 - x_6)^2\right)
\end{align*}
$$
Consider the expression
$$
\begin{align*}
S_1 &= \left( \frac{1}{2}x_1^2 + (x_4 - x_1)^2 + \frac{1}{2}(2013 - x_4)^2 \right) = \\
&= \left(\frac{x_1}{2}\right)^2 + \left(\frac{x_1}{2}\right)^2 + (x_4 - x_1)^2 + \left(\frac{2013 - x_4}{2}\right)^2 + \left(\frac{2013 - x_4}{2}\right)^2
\end{align*}
$$
and note that
$$
\left(\frac{x_1}{2}\right) + \left(\frac{x_1}{2}\right) + (x_4 - x_1) + \left(\frac{2013 - x_4}{2}\right) + \left(\frac{2013 - x_4}{2}\right) = 2013
$$
If the sum of $5$ numbers is fixed, then the sum of their squares is minimal if all of them are equal. It follows
that:
$$
\frac{x_1}{2} = x_4 - x_1 = \frac{2013 - x_4}{2}
$$
from where we get $x_1 = 2 \cdot 2013/5$ and $x_4 = 3 \cdot 2013/5$. Values for $x_2, x_3, x_5, x_6$ can be obtained similarly.
