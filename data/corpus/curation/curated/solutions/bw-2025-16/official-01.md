## Solution We will need the following 3 lemmas.

**Lemma 1:** For any two positive integers p and q, it holds S(p + q) ≤ S(p) + S(q).
Proof: In fact, S(p + q) = S(p) + S(q) − 9{#carries when adding p and q}, which instantly
follows from the addition formula.

**Lemma 2:** For any positive integers p and q, it holds S(pq) ≤ S(p)S(q).
Proof: Let p = p_m 10^m + p_m−1 10^m−1 + · · · + p_0 , where 0 ≤ pi ≤ 9. Now

S(qp) = S(qp_m 10^m + qp_m−1 10^m−1 + · · · + qp_0 ) ≤ S(qp_m 10^m ) + S(qp_m−1 10^m ) + · · · + S(qp_0 ) =

 = S(qp_m ) + S(qp_m−1 ) + · · · + S(qp_0 ) ≤ S(q) + d(q) + . . . S(q) + · · · + S(q) + S(q) + S(q) =
                                           |        {z            }           |       {z       }
                                                     p_m                             p_0

                            S(q)(p_m + p_m−1 + · · · + p_0 ) = S(q)S(p)
**Lemma 3:** For any positive integer m, any multiple of 10^m − 1 has sum of digits at least 9m.
Proof: We will prove this result by induction. Obviously S(10^m −1) = 9m. Let p be a multiple
of 10^m − 1 and assume the inequality holds for all smaller multiples. Write p = 10^m p_1 + p_0 ,
where 0 ≤ p_0 < 10^m. Note that 10^m p_1 + p_0 ≡ p_1 + p_0 (mod 10^m − 1), so p_1 + p_0 is divisible by 10^m − 1
and since p_1 + p_0 < p, by induction it follows

                           S(p) = S(p_1 ) + S(p_0 ) ≥ S(p_1 + p_0 ) ≥ 9m

Going back to the original problem, note that ab^2 c^4 is a multiple of abc = 10^n − 1, so has sum
of digits at least 9n. Now, by AM-GM:
                                         p                      p              √
               S(a) + S(b^2 ) + S(c^4 ) ≥ 3 3 S(a)S(b^2 )S(c^4 ) ≥ 3 3 S(ab^2 c^4 ) ≥ ∛(243n)
