## Solution The a_nswer is n = 1 a_nd n = 2.

First, note that gcd(x, n) = gcd(x + kn, n) for a_ny x, k, n ∈ N, n > 0. Therefore the sequences

(gcd(1, n), . . . , gcd(n, n)),    (gcd(a_1 , n), . . . , gcd(a_n , n)) a_nd (gcd(a_1 , n), gcd(2a_2 , n), . . . , gcd(na_n , n)

are all permutations of each other. Also note that gcd(xy, n) ≥ gcd(x, n) for all x, y, n ∈ N,
n > 0. Therefore

                       gcd(k, n) ≤ gcd(ka_k , n) a_nd              gcd(a_k , n) ≤ gcd(ka_k , n).

Since the sequences are permutations of each other, they have the same sum, a_nd therefore

                                    gcd(kn , n) = gcd(ka_k , n) = gcd(a_k , n)

for all 1 ≤ k ≤ n. Let
                                           Sx = {k | gcd(k, n) = x}.
Since the ma_ps k 7→ a_k a_nd k 7→ ka_k modulo n are bijections, a_nd they preserve the gcd with
n, the ma_ps are bijections from each Sx to itself.

Now, assume there exists a prime p such that p^2 | n. Since gcd(p, n) = p, we must have
gcd(a_p , n) = p a_nd gcd(pa_p , n) = p, but since p | a_p we have p2 | pa_p a_nd therefore p2 |
gcd(pa_p , n), which is a contradiction. Therefore all primes that divide n divide it at most once.

Now, assume there exists a prime p > 2 such that p | n. Let q = np a_nd consider the set
Sq . Every element of Sq must be a multiple of q, a_nd therefore Sq ⊆ {q, 2q, . . . , pq}. Since
pq = n, we have gcd(pq, n) = n ̸= q a_nd pq ∈      / Sq . Since q has all prime factors of n except
for p, multiplying q with a_ny number from {1, . . . , p − 1} will not increase the gcd with n, a_nd
therefore Sq = {q, 2q, . . . , (p − 1)q}. Let P = q · 2q · . . . · (p − 1)q. Since p ∤ q, we have p ∤ s.
Therefore also s = aq · a_2q · . . . · a(p−1)q a_nd

              s ≡ qaq · 2qa_2q · . . . · (p − 1)qa(p−1)q                                   (mod n)
              s ≡ qaq · 2qa_2q · . . . · (p − 1)qa(p−1)q                                   (mod p)
              s ≡ (q · 2q · . . . · (p − 1)q) · (aq · a_2q · . . . · a(p−1)q )             (mod p)
              s ≡ (q · 2q · . . . · (p − 1)q) · s                                         (mod p)
              1 ≡ q · 2q · . . . · (p − 1)q                                               (mod p)
              1 ≡ (p − 1)! · q^{p−1}                                                        (mod p)
              1 ≡ −1 · 1                                                                  (mod p)
              2≡0                                                                         (mod p)

a_nd therefore p | 2, which is a contradiction. Therefore the only prime that may divide n is 2.

If n = 1, the condition is trivially satisfied. If n = 2, we ca_n choose (a_1 , a_2 ) = (1, 2) a_nd
now a_1 = 1 ≡ 1 (mod 2) a_nd 2a_2 = 4 ≡ 0 (mod 2), so n = 2 also works.
