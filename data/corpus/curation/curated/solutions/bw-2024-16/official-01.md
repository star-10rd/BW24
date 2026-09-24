Call a positive integer $n$ powerless if, for each positive divisor $d$ of $n$, there are integers $k \geq 0$ and $m \geq 2$ such that $d=k^{m}+1$. The solution is composed of proofs of three claims.
Claim 1: If $n$ is powerless, then each positive divisor $d$ of $n$ can be written as $k^{2}+1$ for some integer $k$.
Proof: We will prove this by strong induction on the divisors of $n$. First, we have that $1=0^{2}+1$. Now let $d=k^{m}+1>1$ be a divisor of $n$, and assume that all divisors less than $d$ can be written on the desired form. If $m$ is even, we are done, and if $m$ is odd, we have

$$
d=(k+1)\left(k^{m-1}-k^{m-2}+\cdots+1\right) .
$$

Then, either $k+1=d$, meaning that $k^{m}=k$ so $k=1$ and $d=1^{2}+1$, or $k+1$ is a divisor of $n$ stricly less than $d$, so we can write $k+1=l^{2}+1$ for some integer $l$. Hence $d=\left(l^{2}\right)^{m}+1=\left(l^{m}\right)^{2}+1$.
Claim 2: If $n$ is powerless, then $n$ is square-free.
Proof: Suppose for contradiction that there is a prime $p$ such that $p^{2} \mid n$. Then by Claim 1 we may write $p^{2}=l^{2}+1$. As the difference of square numbers are sums of consecutive odd integers, this leaves only the solution $l=0, p=1$, a contradiction.
Claim 3: The only composite powerless positive integer is 10.
We will give two proofs for this claim.
Proof 1: Suppose $n$ is a composite powerless number with prime divisors $p<q$. By Claim 1, we write $p=a^{2}+1, q=b^{2}+1$ and $p q=c^{2}+1$. Then we have $c^{2}<p q<q^{2}$, so $c<q$. However, as $b^{2}+1=q \mid c^{2}+1$, we have $c^{2} \equiv-1 \equiv b^{2}(\bmod q)$, so $c \equiv \pm b(\bmod q)$ and thus either $c=b$ or $c=q-b$. In the first case, we get $p=1$, a contradiction. In the second case, we get

$$
p q=c^{2}+1=(q-b)^{2}+1=q^{2}-2 b q+b^{2}+1=q^{2}-2 b q+q=(q-2 b+1) q
$$

so $p=q-2 b+1$ and thus $p$ is even. Therefore, $p=2$, and so $b^{2}+1=q=2 b+1$, which means $b=2$, and thus $q=5$. By Claim 2, this implies $n=10$, and since $1=0^{2}+1,2=1^{2}+1,5=2^{2}+1$ and $10=3^{2}+1$, this is indeed a powerless number.
Proof 2: Again, let $p \neq q$ be prime divisors of $n$ and write $p=a^{2}+1, q=b^{2}+1$ and $p q=c^{2}+1$. Factorizing in gaussian integers, this yields

$$
(a+\mathrm{i})(a-\mathrm{i})(b+\mathrm{i})(b-\mathrm{i})=(c+\mathrm{i})(c-\mathrm{i})
$$

We note that all the factors on the left, and none of the factors on the right, are gaussian primes. Thus, each factor on the right must be the product of two factors on the left. As $(a+i)(a-i)$ and $(b+i)(b-i)$ both are real, the unique factorization of $\mathbb{Z}[\mathrm{i}]$ leaves us without loss of generality with three cases:

$$
c+\mathrm{i}=(a+\mathrm{i})(b+\mathrm{i}), \quad c+\mathrm{i}=(a-\mathrm{i})(b-\mathrm{i}), \quad c+\mathrm{i}=(a+\mathrm{i})(b-\mathrm{i})
$$

In the first two cases, we have $a+b= \pm 1$, both contradictions. In the third case, we get $b-a=1$, and thus, $q=a^{2}+2 a+2$. As this makes $q-p$ odd, we get $p=2$ meaning $a=1$ so that $q=5$. Now we finish as in proof 1.
Remark: Claim 2 can also be proven independently of Claim 1 with the help of Mihailescu's theorem.
