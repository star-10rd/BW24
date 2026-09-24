We denote $v_p(n)$ for the largest power of $p$ dividing $n$.
We start with a lemma.
**Lemma.** For any prime $q$ and modulus $m'$ not divisible by $q$, there exists infinitely many powers $q^n$ of $q$ such that $v_p(q^n!) \equiv 1 \pmod{m'}$.
*Proof.* Define $a_k = v_q(q^k!)$. We then have $a_{k+1} = q a_k + 1$. This sequence is eventually periodic modulo $m'$. It must actually be periodic starting from $0$, as $a_i \equiv a_{i+T} \pmod{m'}$ implies $q a_{i-1} \equiv q a_{i+T-1} \pmod{m'}$ and therefore $a_{i-1} \equiv a_{i+T-1} \pmod{m'}$, since $q \nmid m'$. Thus, for infinitely many $n$ we have $a_n \equiv a_1 = 1 \pmod{m'}$.

We now turn to solving the problem. Write $m = p^t m'$, where $p \nmid m'$. The sequence $v_p(p!), v_p(p^2!), v_p(p^3!), \dots$ is eventually constant modulo $p^t$. Denote this constant by $C$. Since $p \nmid C$, by the Chinese remainder theorem there exists a positive integer $s$ such that $C s \equiv c \pmod{p^t}$ and $s \equiv c \pmod{m'}$. Now, choose
$$
n = p^{b_1} + p^{b_2} + \dots + p^{b_s},
$$
where $b_i$ are distinct positive integers such that $v_p(p_i^b!) \equiv 1 \pmod{m'}$ (possible by the lemma) and large enough such that $v_p(p_i^b!) \equiv C \pmod{p^t}$. We have
$$
v_p(n!) = v_p(p_1^b!) + \dots + v_p(p_s^b!) \equiv C s \equiv c \pmod{p^t}
$$
and
$$
v_p(n!) = v_p(p_1^b!) + \dots + v_p(p_s^b!) \equiv s \equiv c \pmod{m'},
$$
which proves $v_p(n!) \equiv c \pmod{m}$. Since there are infinitely many possible choices $n$, we are done.
