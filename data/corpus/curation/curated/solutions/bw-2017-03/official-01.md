Answer: the minimal value for $m$ is 1009 .

Construction: Define $x_{i}=F_{2 i-1}$. This works since $F_{2 k}=F_{1}+F_{3}+\ldots+F_{2 k-1}$, for all $k$, which can easily be proved by induction. Minimality: Again by induction we get that $F_{k+2}=1+F_{1}+F_{2}+\ldots+F_{k}$, for all $k$, which means that

$$
F_{k+2}>F_{1}+F_{2}+\ldots+F_{k} .
$$

Consider the numbers that have been used for the representing the first $k$ Fibonacci numbers. Then the sum of these $x_{i}$ 's is less than $F_{k+2}$ due to $(*)$. Thus, at least one additional number is required to deal with $F_{k+2}$. This establishes the lower bound $m \leq 1009$.
