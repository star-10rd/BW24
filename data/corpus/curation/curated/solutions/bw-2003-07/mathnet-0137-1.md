Solution:
If $X=\{100,101,102, \ldots, 9999,10000\}$, then for any two selected $a$ and $b$, $a \neq b$, $a \cdot b \geq 100 \cdot 101 > 10000$, so $a \cdot b \notin X$. So $X$ may have 9901 elements.

Suppose that $x_{1} < x_{2} < \cdots < x_{k}$ are all elements of $X$ that are less than $100$. If there are none of them, no more than $9901$ numbers can be in the set $X$. Otherwise, if $x_{1} = 1$ no other number can be in the set $X$, so suppose $x_{1} > 1$ and consider the pairs
$$
\begin{gathered}
200 - x_{1},\ (200 - x_{1}) \cdot x_{1} \\
200 - x_{2},\ (200 - x_{2}) \cdot x_{2} \\
\vdots \\
200 - x_{k},\ (200 - x_{k}) \cdot x_{k}
\end{gathered}
$$
Clearly $x_{1} < x_{2} < \cdots < x_{k} < 100 < 200 - x_{k} < 200 - x_{k-1} < \cdots < 200 - x_{2} < 200 - x_{1} < 200 < (200 - x_{1}) \cdot x_{1} < (200 - x_{2}) \cdot x_{2} < \cdots < (200 - x_{k}) \cdot x_{k}$. So all numbers in these pairs are different and greater than $100$. So at most one from each pair is in the set $X$. Therefore, there are at least $k$ numbers greater than $100$ and $99 - k$ numbers less than $100$ that are not in the set $X$, together at least $99$ numbers out of $10000$ not being in the set $X$.
