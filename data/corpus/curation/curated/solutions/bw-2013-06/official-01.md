Evidently the age of the children is immaterial, so we may suppose

$$
1 \leq x_{1} \leq x_{2} \leq \ldots \leq x_{n}
$$

Let us now consider the following procedure. First the oldest child chooses its favourite present and keeps it, then the second oldest child chooses its favourite remaining present, and so it goes on until either the presents are distributed in the expected way or some unlucky child is forced to take a present it does not like.
Let us assume, for the sake of a contradiction, that the latter happens, say to the $k$-th oldest child, where $1 \leq k \leq n$. Since the oldest child likes at least one of the items Santa Claus has, we must have $k \geq 2$. Moreover, at the moment the $k$-th child is to make its decision, only $k-1$ items are gone so far, which means that $x_{k} \leq k-1$.
For this reason, we have

$$
\frac{1}{x_{1}}+\ldots+\frac{1}{x_{k}} \geq \underbrace{\frac{1}{k-1}+\ldots+\frac{1}{k-1}}_{k}=\frac{k}{k-1}>1
$$

contrary to our assumption. This proves that the procedure considered above always leads to a distribution of the presents to the children of the desired kind, whereby the problem is solved.
