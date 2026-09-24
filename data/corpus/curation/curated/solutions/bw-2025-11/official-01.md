## Solution The answer is ⌊n/2⌋.

Let’s number the points such that the order A_1 , . . . , A_n is the Baltic Way of length L. Consider
the tour A_1 , . . . , A_n cyclically as a circle, where Ai and Ai+1 are adjacent and A_n and A_1 are
adjacent, and the indices increase when going clockwise.

Now consider some other Baltic Way with the order A_i1 , . . . , Ain . If i1 < i2 , going clockwise
around the circle from A_i1 to A_i2 we get by the triangle inequality that

                               |A_i1 A_i2 | ≤ |A_i1 A_i1 +1 | + · · · + |A_i2 −1 A_i2 |

and by going counterclockwise around the circle we get that

                     |A_i1 A_i2 | ≤ |A_i1 A_i1 −1 | + · · · + |A_1 A_n | + · · · + |A_i2 +1 A_i2 |.

If i1 > i2 , we get that when going clockwise

                      |A_i1 A_i2 | ≤ |A_i1 A_i1 +1 | + · · · + |A_n A_1 | + · · · + |A_i2 −1 A_i2 |

and when going counterclockwise

                               |A_i1 A_i2 | ≤ |A_i1 A_i1 −1 | + · · · + |A_i2 +1 A_i2 |.

Adding the first two inequalities together gives 2|A_i1 A_i2 | ≤ L and adding the last two inequalities together also gives 2|A_i1 A_i2 | ≤ L. Therefore 2|A_i1 A_i2 | ≤ L is always true. This works for
all pairs of adjacent points (A_ik , A_ik +1 ): we always have 2|A_ik A_ik +1 | ≤ L. Adding together the
inequalities of all pairs of points gives 2K ≤ nL.

Now, take all pairs of adjacent points (A_ik , A_ik+1 ) and (Ain , A_i1 ) on the tour of length K.
Adding together the inequalities always going clockwise around the circle gives K ≤ aL, where
a is an integer, since we’ve ended at the same point we started at. Similarly, adding together
all inequalities going around the circle counterclockwise gives K ≤ bL with b similarly being
an integer. Adding these two inequalities together gives 2K ≤ aL + bL.

We now added together the same inequalities in two different orders and got 2K ≤ nL and
2K ≤ aL + bL. Since the order of addition is irrelevant, we must have a + b = n. Since K ≤ aL
and K ≤ bL hold, then also K ≤ min(a, b)L holds. Since a and b are integers, we must have
min(a, b) ≤ ⌊n/2⌋ and therefore K ≤ ⌊n/2⌋ L and K/L ≤ ⌊n/2⌋.

                                                       22

Let’s now construct a set of points with two Baltic Ways that achieves the ratio K/L ≤ ⌊n/2⌋.

If n is even, we have n = 2k. Let A_1 = · · · = Ak = (0, 0) and Ak+1 = · · · = A_n = (0, 1).
Now, L = 0 + · · · + 0 + 1 + 0 + · · · + 0 + 1 = 2. Let (i1 , . . . , in ) = (1, k + 1, 2, k + 2, . . . , k, 2k)
and therefore K = 1 + · · · + 1 = n and we get that K/L = n/2.

If n is odd, we have n = 2k + 1. Let A_1 = · · · = Ak+1 = (0, 0) and Ak+2 = · · · = A_2k+1 = (0, 1).
Now, L = 0+· · ·+0+1+0+· · ·+0+1 = 2. Let (i1 , . . . , in ) = (1, k+1, 2, k+2, . . . , k+1, 2k, 2k+1)
and therefore K = 1 + · · · + 1 + 0 + 1 = 2k = n − 1 and we get that K/L = (n−1)/2
                                                                                         = ⌊n/2⌋.
