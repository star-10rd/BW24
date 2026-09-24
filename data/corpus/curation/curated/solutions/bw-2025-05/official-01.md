## Solution For convenience, let’s denote m = x_1 and M = x_n . It follows that for every integer
i such that 1 ≤ i ≤ n we have

                                 M^2 − x_i^2 ≥ 0      and     x_i − m ≥ 0.

By multiplying these inequalities we get (M^2 − x_i^2 )(x_i − m) ≥ 0 which simplifies to

                                   M^2 x_i − M^2 m − x_i^3 + mx_i^2 ≥ 0
                                  M^2 x_i + mx_i^2 ≥ M^2 m + x_i^3    (1)

Similarly, from M − x_i ≥ 0 and x_i^2 − m^2 ≥ 0 we get (M − x_i )(x_i^2 − m^2 ) ≥ 0 which is equivalent
to
                             M x_i^2 + m^2 x_i ≥ M m^2 + x_i^3     (2)
By adding inequalities (1) and (2) we get

                      M^2 x_i + mx_i^2 + M x_i^2 + m^2 x_i ≥ M^2 m + x_i^3 + M m^2 + x_i^3
                       (M^2 + m^2 )x_i + (M + m)x_i^2 ≥ (M + m)M m + 2x_i^3

Remember that the inequality above holds for every integer i such that 1 ≤ i ≤ n, so by adding
these inequalities for each index i we get

(M^2 +m^2 )(x_1 +x2 +· · ·+x_n )+(M +m)(x_1^2 +x_2^2 +· · ·+x_n^2 ) ≥ (M +m)M mn+2(x_1^3 +x_2^3 +· · ·+x_n^3 )

Note that if we multiply both sides of the given condition by 2(x_1 + x2 + · · · + x_n ) we get

   2(x_1^3 + x_2^3 + · · · + x_n^3 ) = (x_1^2 + x_n^2 )(x_1 + x2 + · · · + x_n ) = (m^2 + M^2 )(x_1 + x2 + · · · + x_n )

Using this fact and the inequality we got, we deduce that

                          (M + m)(x_1^2 + x_2^2 + · · · + x_n^2 ) ≥ (M + m)M mn
                              x_1^2 + x_2^2 + · · · + x_n^2 ≥ M mn = nx_1 x_n
