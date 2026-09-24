Solution:

Answer: yes.
The key to the proof is noting that if we add two positive integers and the result is an integer consisting only of digits $9$ then the process of addition must have gone without any carries. Therefore it is enough to prove that there exists an integer $k$ such that $3993 k$ is of the form $999\ldots 9$.

Consider the first $3994$ positive integers consisting only of digits $9$:
$$
9,99,999, \ldots, \underbrace{999 \ldots 9}_{3994} .
$$
By the pigeonhole principle some two of these give the same remainder upon division by $3993$, so their difference
$$
\underbrace{99 \ldots 9}_{n} \underbrace{00 \ldots 0}_{r}=\underbrace{99 \ldots 9}_{n} \cdot 10^{r}
$$
is divisible by $3993$. Since $10$ and $3993$ are coprime we get an integer consisting only of digits $9$ and divisible by $3993$.
