## Solution We’ll begin by noticing that f (0) ≥ 0, since
                                      f (0) + f (0) ≥ f (0 + 0)
                                         f (0) ≥ f (0) − f (0)
                                               f (0) ≥ 0.
Next, let’s prove the following lemma:

**Lemma:** For all n ∈ Z+ and x ∈ ℚ we have n f(x) ≥ f(nx).
Proof: We’ll do induction on n. Since 1 · f (x) ≥ f (1 · x), the base case n = 1 is true. Assuming
that n f(x) ≥ f(nx) we get that
                                    (n + 1)f (x) = n f(x) + f (x)
                                                 ≥ f(nx) + f (x)
                                                 ≥ f (nx + x)
                                                 = f((n+1)x),
which completes the induction step.

Next, we want to prove that for all rationals x < 0 and y > 0 we have f(x)/x ≤ f(y)/y.
Let x = −a/b and y = c/d, where a, b, c, d are positive integers. Now
                                           f (ac) + f (−ac) ≥ f (ac − ac)
                               c                 a          
                             f       · ad + f − · bc ≥ f (0)
                                dc               ab         
                             f       · ad + f − · bc ≥ 0
                                 d                   b 
                                        c                    a
                             ad · f          + bc · f −          ≥0
                                        d                    b
                                     ad · f (y) + bc · f (x) ≥ 0
                                   ad              bc              0
                                        · f (y) +       · f (x) ≥
                                    ac             ac              ac
                                       d             b
                                          · f (y) + · f (x) ≥ 0
                                       c            a
                                       1            1
                                         · f (y) − · f (x) ≥ 0
                                       y            x
                                                          f (x)    f (y)
                                                                 ≤
                                                            x        y

and we get what we wanted.

Now, take the sets
                                                                       
                               f (x)                            f (y)
                      S=             :x<0       and T =               :y>0 .
                                 x                                y

                                                  9

Since for all p ∈ S and q ∈ T we have p ≤ q, there must exist a real number α such that
for all p ∈ S and q ∈ T we have p ≤ α ≤ q. Choose such a number α. Now, if x < 0, we
have f(x)/x ≤ α ⇐⇒ f (x) ≥ αx, if x = 0 we have f (0) ≥ 0 = α · 0 and if x > 0 we have
f(x)/x ≥ α ⇐⇒ f (x) ≥ αx. Therefore f (x) ≥ αx for all x ∈ ℚ.
