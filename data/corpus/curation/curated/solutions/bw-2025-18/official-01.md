## Solution Answer is                       (
                                          1, if x is odd or x = 2,
                                 f(x) =
                                          1 or 2, otherwise.
Let P (a, b) be the assertion. Throughout the solution we will be using that lcm(a, b) | n =⇒
a | n and also lcm(n, 1) = n.

From P (1, 1) we get
                                           
                           lcm f(2), f(1) | lcm(1 + f(1), 1) = 1 + f(1),
                                            f(1) | 1 + f(1),
                                       f(1) | 1 =⇒ f(1) = 1.

From P (a, 1) it follows that f(a + 1) | a + 1, so f(n) | n for all n ∈ ℤ_{>0} . However, from P (1, a)
we deduce that                                                   
                                    f(a + 1) | lcm 1 + f(a), a .
                                                                               
On the other hand from P (1, a) it follows that f(a + 1) | lcm 1 + f(a), a . As f(a + 1) | a + 1,
gcd f(a + 1), a = 1, so f(a + 1) | 1 + f(a). In particular f(a + 1) ≤ 1 + f(a) ≤ 2 + f(a − 1) ≤
· · · ≤ a − 1 + f(2) = a.

Also note that the only time the function increases, it increases by 1. Therefore if at any
point f(a) = n, then all of the values ≤ n are achieved with x ≤ a.

We will prove that the only values the function can have is 1 and 2. Assume the contrary,
that there exists a ∈ ℤ_{>0} such that f(a) = 3 and choose the smallest such a. We know that
a ≥ 6 as f(a + 1) ≤ a and f(a) | a Then f(a − 1) ≥ 2 but f(a − 1) < 3 as we chose the smallest
a. So f(a − 1) = 2. But as f(a) | a, we know that a | 3 and (a − 1) | 2, therefore (a − 3) | 6. But
then gcd(a − 4, 6) = 1, also f(a − 4) | (a − 4) and f(a − 4) < 3. So the only possible
                                                                                           option is
f(a−4) = 1. Considering P (4, a−4) we get f(a) = 3 | lcm 4+f(a−4), f(a−4) = lcm(5, 1) = 5
– contradiction.

Therefore f can never have value 3 and so can never have any value ≥ 3. So f(a) = 1 or
f(a) = 2 for each a. f(a) | a guarantees that f(a) = 1 for odd a. There are no restrictions
for even a and in fact it is easy to check that whatever f(a) is with even a, that satisfies the
original equations.
