Solution:

Consider all positive integers with $2n$ digits satisfying conditions $(i)$ and $(ii)$ of the problem. Let the number of such integers beginning with $1,2,3,4$ and $5$ be $a_{n}, b_{n}, c_{n}, d_{n}$ and $e_{n}$, respectively. Then, for $n=1$ we have $a_{1}=1$ (integer $12$), $b_{1}=2$ (integers $21$ and $23$), $c_{1}=2$ (integers $32$ and $34$), $d_{1}=2$ (integers $43$ and $45$) and $e_{1}=1$ (integer $54$). Observe that $c_{1}=a_{1}+e_{1}$.

Suppose now that $n>1$, i.e., the integers have at least four digits. If an integer begins with the digit $1$ then the second digit is $2$ while the third can be $1$ or $3$. This gives the relation
$$
a_{n}=a_{n-1}+c_{n-1}.
$$
Similarly, if the first digit is $5$, then the second is $4$ while the third can be $3$ or $5$. This implies
$$
e_{n}=c_{n-1}+e_{n-1}.
$$
If the integer begins with $23$ then the third digit is $2$ or $4$. If the integer begins with $21$ then the third digit is $2$. From this we can conclude that
$$
b_{n}=2b_{n-1}+d_{n-1}.
$$
In the same manner we can show that
$$
d_{n}=b_{n-1}+2d_{n-1}.
$$
If the integer begins with $32$ then the third digit must be $1$ or $3$, and if it begins with $34$ the third digit is $3$ or $5$. Hence
$$
c_{n}=a_{n-1}+2c_{n-1}+e_{n-1}.
$$
From (1), (2) and (5) it follows that $c_{n}=a_{n}+e_{n}$, which is true for all $n \geq 1$. On the other hand, adding the relations (1)-(5) results in
$$
a_{n}+b_{n}+c_{n}+d_{n}+e_{n}=2a_{n-1}+3b_{n-1}+4c_{n-1}+3d_{n-1}+2e_{n-1}
$$
and, since $c_{n-1}=a_{n-1}+e_{n-1}$,
$$
a_{n}+b_{n}+c_{n}+d_{n}+e_{n}=3\left(a_{n-1}+b_{n-1}+c_{n-1}+d_{n-1}+e_{n-1}\right)
$$
Thus the number of integers satisfying conditions $(i)$ and $(ii)$ increases three times when we increase the number of digits by $2$. Since the number of such integers with two digits is $8$, and $1994=2+2\cdot 996$, the number of integers satisfying all three conditions is $8\cdot 3^{996}$.
