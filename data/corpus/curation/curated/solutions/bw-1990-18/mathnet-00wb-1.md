Solution:

Let $a_{k}$ denote the total number of rows and columns containing the number $k$ at least once. As $i \cdot (20 - i) < 101$ for any natural number $i$, we have $a_{k} \geq 21$ for all $k = 1, 2, \ldots, 101$. Hence $a_{1} + \cdots + a_{101} \geq 21 \cdot 101 = 2121$. On the other hand, assuming any row and any column contains no more than $10$ different numbers we have $a_{1} + \cdots + a_{101} \leq 202 \cdot 10 = 2020$, a contradiction.
