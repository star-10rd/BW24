We show that it is possible only if $k = 7$.
The 15 smallest prime squares are:
4, 9, 25, 49, 121, 169, 289, 361, 529, 841, 961, 1369, 1681, 1849, 2209.
Since $2209 > 2010$ we see that $k \le 14$.
Now we note that $p^2 \equiv 1 \mod 8$ if $p$ is an odd prime. We also have that $2010 \equiv 2 \mod 8$. If all the primes are odd, then writing the original equation modulo 8 we get
$$
k \cdot 1 \equiv 2 \mod 8
$$
so either $k = 2$ or $k = 10$.
$k = 2$: As $2010 \equiv 0 \mod 3$ and $x^2 \equiv 0$ or $x^2 \equiv 1 \mod 3$ we conclude that $p_1 \equiv p_2 \equiv 0 \mod 3$. But that is impossible.
$k = 10$: The sum of first 10 odd prime squares is already greater than $2010$ ($961 + 841 + 529 + \cdots > 2010$) so this is impossible.
Now we consider the case when one of the primes is 2. Then the original equation modulo 8 takes the form
$$
4 + (k - 1) \cdot 1 \equiv 2 \mod 8
$$
so $k \equiv 7 \mod 8$ and therefore $k = 7$.
For $k = 7$ there are 4 possible solutions:
$$
4 + 9 + 49 + 169 + 289 + 529 + 961 = 2010,
$$
$$
4 + 9 + 25 + 121 + 361 + 529 + 961 = 2010,
$$
$$
4 + 9 + 25 + 49 + 121 + 841 + 961 = 2010,
$$
$$
4 + 9 + 49 + 121 + 169 + 289 + 1369 = 2010.
$$
Finding them should not be too hard. We are already assuming that 4 is included. Considerations modulo 3 show that 9 must also be included. The square 1681 together with the 6 smallest prime squares gives a sum already greater than 2010, so only prime squares up to $37^2 = 1369$ can
