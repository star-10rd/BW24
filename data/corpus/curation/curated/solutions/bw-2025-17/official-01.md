## Solution

The answer is all even integers at least $8$.

The number of divisors of a brilliant number must be even. Also, because the number itself belongs to one of the two groups, the sum of all proper divisors must be at least as large as the number. Hence prime powers are not brilliant: for a prime $p$,

$$
1+p+\cdots+p^{k-1}=\frac{p^k-1}{p-1}\le p^k-1<p^k.
$$

We next rule out $4$ and $6$ divisors.

- If a brilliant number had $4$ divisors, it would be $pq$ for primes $p,q$. One proper divisor must join $pq$ in its group, so each group would have sum at least $pq+1$. Thus

  $$
  pq+p+q+1\ge2(pq+1),
  $$

  which is equivalent to $0\ge(p-1)(q-1)$, impossible.

- If a brilliant number had $6$ divisors, it would be $p^2q$ for primes $p,q$. Two distinct proper divisors must join $p^2q$ in its group, so each group has sum at least $p^2q+3$. Therefore

  $$
  p^2q+pq+q+p^2+p+1\ge2(p^2q+3),
  $$

  or

  $$
  2p^2-6\ge(p^2-p-1)(q+1).
  $$

  Since $q+1\ge3$, this implies

  $$
  2p^2-6\ge3(p^2-p-1),
  $$

  equivalently $p^2-3p+3\le0$, which is impossible because this quadratic is always positive.

Finally, we show that every even number $2n$ with $n\ge4$ occurs as the number of divisors of a brilliant number. Consider

$$
N=2^{n-1}\cdot3.
$$

Its $2n$ positive divisors are

$$
1,2,4,\ldots,2^{n-1}
$$

and

$$
3,3\cdot2,3\cdot4,\ldots,3\cdot2^{n-1}.
$$

Each group in the desired partition must contain $n$ divisors and have half the total divisor sum. Both the desired sum and the desired number of terms would be achieved by

$$
2\cdot1,2\cdot2,2\cdot4,\ldots,2\cdot2^{n-1},
$$

if all of these were divisors of $N$. The only one that is not a divisor is the last term $2^n$. Remove the two largest terms $2^{n-1}$ and $2^n$ and replace them with $3\cdot2^{n-1}$; the sum is unchanged and the number of terms decreases by $1$. To restore the number of terms, replace $4$ by $1$ and $3$. Thus one group has exactly $n$ divisors and half the total sum, and its complement gives the other group. Hence $N$ is brilliant and has $2n$ divisors.

Therefore the possible numbers of divisors are exactly the even integers at least $8$.
