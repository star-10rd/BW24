At first we note that the given condition is equivalent to $a$, $b$, $c$, $d$ dividing $a^2 + b^2 + c^2 + d^2$.
It is possible that three of the given numbers are primes, for example for $a = 2$, $b = 3$, $c = 13$ and $d = 26$. In this case $2^2 + 3^2 + 13^2 + 26^2 = 13 \cdot 66$ which is divisible by all four given numbers. Furthermore we will show that it is impossible that all four of them are primes.
Let us assume that $a$, $b$, $c$ and $d$ are primes. As the sum $a^2 + b^2 + c^2 + d^2$ is divisible by each of them then it is divisible also by their product $abcd$. If one of the primes is equal to $2$, then we obtain a contradiction: the sum of four squares is odd, but its divisor $abcd$ is even. Therefore all four primes are odd, and $a^2+b^2+c^2+d^2=0 \pmod 4$. Hence $a^2+b^2+c^2+d^2$ is divisible by $4abcd$ which leads to a contradiction as it is easy to see that $a^2+b^2+c^2+d^2 < 4abcd$. Indeed, this is equivalent to
$$
\frac{a}{bcd} + \frac{b}{acd} + \frac{c}{abd} + \frac{d}{abc} < 4
$$
which is true as none of the numbers exceed the product of three other and equality can hold only for the largest of the four.
