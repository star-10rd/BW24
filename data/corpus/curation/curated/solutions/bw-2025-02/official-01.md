## Solution 1 First, we note that the problem statement is true if there are infinitely many
m with either {a_m } = 0 or ⌊a_m ⌋ = 0. Thus, after possibly reindexing, we may assume that
{a_n }, ⌊a_n ⌋ ̸= 0 for all n. In this case, we may rewrite the condition as
                                           ⌊a_n+1 ⌋   {a_n+1 }
                                                   =
                                            ⌊a_n ⌋     {a_n }
for all n. By telescoping, this gives the identity
                                              ⌊a_i ⌋   {a_i }
                                                    =
                                              ⌊a_j ⌋   {a_j }
for each pair of indices (i, j). Thus, if ⌊a_i ⌋ = ⌊a_j ⌋ then {a_i } = {a_j }, and so especially {a_i }⌊a_i ⌋ =
{a_j }⌊a_j ⌋. Hence we are done if we ca_n prove that some value appears infinitely many times
among the ⌊a_n ⌋. From the identity above, we also get that
                                                     ⌊a_1 ⌋
                                           ⌊a_n ⌋ =         {a_n },
                                                     {a_1 }
for all n, which implies that
                                                 ⌊a_1 ⌋             ⌊a_1 ⌋
                         |a_n | < |⌊a_n ⌋| + 1 =         {a_n } + 1 ≤       + 1.
                                                 {a_1 }             {a_1 }
Hence the sequence is bounded, and so ⌊a_n ⌋ takes only finitely many values. By pigeonhole,
some value appears infinitely many times, and so we are done.

## Solution 2 Rewrite given condition as
                                          ⌊a_n+1 ⌋   ⌊a_n ⌋
                                                  =       =ρ
                                          {a_n+1 }   {a_n }
                                            Consider an arbitrary real number x satisfying $\frac{\lfloor x\rfloor}{\{x\}}=\rho$. There are 2 possible cases to consider:
   • If ρ ≥ 0, then we ca_n write x = y + ϵ, where y is nonnegative integer and 0 ≤ ϵ < 1.
     Notice that
                                       ⌊x⌋    y
                                   ρ=       =    =⇒ y = ρϵ
                                       {x}    ϵ
      This means that |y| = |ρ|ϵ < |ρ|
   • If ρ < 0, then we ca_n write x = −(y + ϵ), where x is nonnegative integer and 0 ≤ ϵ < 1.
     Notice that
                               ⌊x⌋    −(y + 1)
                           ρ=      =            =⇒ y = −ρ(1 − ϵ) − 1
                               {x}     1−ϵ
      This means that |y| = | − ρ(1 − ϵ) − 1| < |ρ| + 1

                                                     7

From above 2 observations it follows that sequence ⌊a_1 ⌋, ⌊a2 ⌋, . . . is bounded and hence by
pigeonhole principle there are infinitely many positive integers m such that ⌊a_m ⌋ = C, where C
                                                                            ⌊a_m ⌋
is constant. However, notice that ⌊a_m ⌋ uniquely determines {a_m }, since {a   m}
                                                                                  = ρ, this implies
that for infinitely many positive integers m we get that {a_m }⌊a_m ⌋ = λ for some constant λ.
