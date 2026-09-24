Solution:
Denote the left-hand side of the equation by $L$, and the right-hand side by $R$. Then
$$
\begin{aligned}
L & = \sum_{k=1}^{1996} (-1)^{k+1} \left( \frac{1997}{k+1} - 1 \right) = 1997 \cdot \sum_{k=1}^{1996} (-1)^{k+1} \cdot \frac{1}{k+1} = 1997 \cdot \sum_{k=1}^{1996} (-1)^k \cdot \frac{1}{k} + 1996, \\
R & = \sum_{k=1}^{998} \left( \frac{2k+1996}{998+k} - \frac{1997}{998+k} \right) = 1996 - 1997 \cdot \sum_{k=1}^{998} \frac{1}{k+998} .
\end{aligned}
$$
We must verify that $\sum_{k=1}^{1996} (-1)^{k-1} \cdot \frac{1}{k} = \sum_{k=1}^{998} \frac{1}{k+998}$. But this follows from the calculation
$$
\sum_{k=1}^{1996} (-1)^{k-1} \cdot \frac{1}{k} = \sum_{k=1}^{1996} \frac{1}{k} - 2 \cdot \sum_{k=1}^{998} \frac{1}{2k} = \sum_{k=1}^{998} \frac{1}{k+998}
$$
