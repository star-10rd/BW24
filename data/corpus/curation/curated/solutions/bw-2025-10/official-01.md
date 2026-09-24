## Solution 1 To any nice number a_1 a_2 · · · a_9 we associate another nice number, b_1 b_2 · · · b_9 ,
called the sorting number, uniquely defined by ab_1 ab_2 · · · ab_9 = 123456789. This is well-defined
since nice numbers have the same digits as 123456789. Note that a nice number being wonderful is equivalent to the number being its own sorting number.

Let a_1 · · · a_9 be an arbitrary nice number with sorting number b_1 · · · b_9 . This means that for
every pair of digits i, j ∈ {1, . . . , 9}, we have bi = j ⇐⇒ aj = i. By symmetry it follows that
a_1 · · · a_9 is the sorting number of b_1 · · · b_9 .

Thus all nice numbers that are not wonderful can be grouped into pairs of numbers that
are each other’s sorting number. In particular, there is an even number of nice numbers that
are not wonderful. Since the number of nice numbers is even (there are 9! permutations of
123456789), we conclude that the number of wonderful numbers must also be even.

## Solution 2 We generalize to n-wonderful numbers of length n for n ∈ {1, . . . , 9}. Let T_n
denote the number of n-wonderful numbers. We see that T_1 = 1 and T_2 = 2, corresponding to
the numbers 1, 12 and 21.

Now consider an arbitrary n-wonderful number A = a_1 · · · an for 2 < n ≤ 9.

  1. If an = n, then a_1 · · · an−1 is an (n − 1)–wonderful number.

  2. If an = k < n, then we must have ak = n. By removing k and n from the number A and
     subtracting 1 from each digit greater than k, we obtain an (n − 2)-wonderful number.

In case (1), the n-wonderful number can be uniquely associated with the (n − 1)-wonderful
number.

In case (2), the corresponding reverse operation is: Take a wonderful number b_1 · · · bn−2 and
add 1 to all digits greater than or equal to k, then insert n in the kth position and insert k at
the end. As this can be done for each k ∈ {1, . . . , n − 1}, there are n − 1 different n-wonderful
numbers that map to the same (n − 2)-wonderful number.

We conclude that T_n = T_n−1 + (n − 1)T_n−2 . Therefore T_3 = 2 + 2 = 4, which is even, and it
follows from the recursion that T_n is even for every 2 ≤ n ≤ 9, and in particular for n = 9.
