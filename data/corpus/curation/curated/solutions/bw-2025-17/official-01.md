## Solution The answer is all even numbers starting from 8.

Obviously, the number of divisors of a brilliant number must be even. Moreover, as the number
itself must belong to one group, the sum of all proper divisors must be at least as large as the
number. Hence primes and prime powers are not brilliant as the divisors of a number p^k are
1, p, . . . , p^{k−1} , p^k and
                                                   p^k − 1
                            1 + p + . . . + p^{k−1} =        ≤ p^k − 1 < p^k .
                                                   p−1
   Next we show that there are no brilliant numbers with 4 or 6 positive divisors.

   • If a brilliant number had 4 divisors, it would be representable as pq for some primes p
     and q. As one proper divisor should join pq in one group, the sum of members of either
     group would be at least pq + 1. Hence pq + q + p + 1 ≥ 2(pq + 1) = 2pq + 2, or equivalently,
     0 ≥ pq − p − q + 1 = (p − 1)(q − 1), which is impossible.

   • If a brilliant number had 6 divisors, it would be representable as p^2 q for some primes p
     and q. As two distinct proper divisors should join p^2 q in one group, the sum of members of
     either group would be at least p^2 q+3. Hence p^2 q+pq+q+p^2 +p+1 ≥ 2(p^2 q+3) = 2p^2 q+6.
     This inequality is equivalent to

                                      2p^2 − 6 ≥ (p^2 − p − 1)(q + 1).

      As q + 1 ≥ 3, this implies the inequality 2p^2 − 6 ≥ 3(p^2 − p − 1) which is equivalent to
      p^2 − 3p + 3 ≤ 0. As the discriminant of the quadratic equation p^2 − 3p + 3 = 0 is negative
      and the leading coefficient is positive, the inequality cannot be satisfied.

Finally we show that all numbers in the form 2^{n−1} · 3, where n ≥ 4, are brilliant. Such number
has 2^n positive divisors:
                                         1, 2, 4, . . . , 2^{n−1} ,
                                 3 · 1, 3 · 2, 3 · 4, . . . , 3 · 2^{n−1} .
In an expected partition into two groups, either group must contain n divisors and the sum of
members of each group must equal the arithmetic mean of the two row sums above. Note that
both the desired number of members and the desired sum of members could be achieved by
numbers
                                 2 · 1, 2 · 2, 2 · 4, . . . , 2 · 2^{n−1} ,
if all they were among the divisors of 2^{n−1} · 3. The only one that is not a divisor of 2^{n−1} · 3 is the
last number 2 · 2^{n−1} , because the others are equal to 2, 4, . . . , 2^{n−1} , respectively. Now remove
the two largest numbers, i.e., 2^{n−1} and 2^n , and add 3·2^{n−1} . Then only divisors of 2^{n−1} ·3 remain
and also the sum of members is maintained, but the number of members decreases by 1. To
achieve the right number of members, replace 4 with 1 and 3. This proves that every number
of the form 2^n, where n ≥ 4, is equal to the number of positive divisors of a brilliant number.
