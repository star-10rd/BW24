Solution:
Answer: 14.
Assume that there are integers $n, m$ such that $k = 19^{n} - 5^{m}$ is a positive integer smaller than $19^{1} - 5^{1} = 14$. For obvious reasons, $n$ and $m$ must be positive.

Case 1: Assume that $n$ is even. Then the last digit of $k$ is 6. Consequently, we have $19^{n} - 5^{m} = 6$. Considering this equation modulo 3 implies that $m$ must be even as well. With $n = 2 n'$, $m = 2 m'$, the above equation can be restated as $(19^{n'} + 5^{m'})(19^{n'} - 5^{m'}) = 6$ which evidently has no solution in positive integers.

Case 2: Assume that $n$ is odd. Then the last digit of $k$ is 4. Consequently, we have $19^{n} - 5^{m} = 4$. On the other hand, the remainder of $19^{n} - 5^{m}$ modulo 3 is never 1, a contradiction.
