Solution:

It is clear that there exists a smallest positive integer $k$ such that
$$
10^{k} > (k+1) \cdot 9^{2005}.
$$
We will show that there exists a positive integer $N$ such that $a_{n}$ consists of less than $k+1$ decimal digits for all $n \geq N$. Let $a_{i}$ be a positive integer which consists of exactly $j+1$ digits, that is,
$$
10^{j} \leq a_{i} < 10^{j+1}.
$$
We need to prove two statements:
- $a_{i+1}$ has less than $k+1$ digits if $j < k$; and
- $a_{i} > a_{i+1}$ if $j \geq k$.

To prove the first statement, notice that
$$
a_{i+1} \leq (j+1) \cdot 9^{2005} < (k+1) \cdot 9^{2005} < 10^{k}
$$
and hence $a_{i+1}$ consists of less than $k+1$ digits.

To prove the second statement, notice that $a_{i}$ consists of $j+1$ digits, none of which exceeds $9$. Hence $a_{i+1} \leq (j+1) \cdot 9^{2005}$ and because $j \geq k$, we get $a_{i} \geq 10^{j} > (j+1) \cdot 9^{2005} \geq a_{i+1}$, which proves the second statement.

It is now easy to derive the result from this statement. Assume that $a_{0}$ consists of $k+1$ or more digits (otherwise we are done, because then it follows inductively that all terms of the sequence consist of less than $k+1$ digits, by the first statement). Then the sequence starts with a strictly decreasing segment $a_{0} > a_{1} > a_{2} > \cdots$ by the second statement, so for some index $N$ the number $a_{N}$ has less than $k+1$ digits. Then, by the first statement, each number $a_{n}$ with $n \geq N$ consists of at most $k$ digits. By the Pigeonhole Principle, there are two different indices $n, m \geq N$ such that $a_{n} = a_{m}$.
