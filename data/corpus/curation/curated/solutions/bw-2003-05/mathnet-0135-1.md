Solution:

First we prove inductively that for $n \geq 1$, $a_{n}=2^{2^{n-2}}$. We have $a_{1}=2^{2^{-1}}$, $a_{2}=2^{2^{0}}$ and
$$
a_{n+1}=2^{2^{n-2}} \cdot\left(2^{2^{n-3}}\right)^{2}=2^{2^{n-2}} \cdot 2^{2^{n-2}}=2^{2^{n-1}} .
$$
Since $1+a_{1}=1+\sqrt{2}$, we must prove, that
$$
\left(1+a_{2}\right)\left(1+a_{3}\right) \cdots\left(1+a_{n}\right)<2 a_{2} a_{3} \cdots a_{n} .
$$
The right-hand side is equal to
$$
2^{1+2^{0}+2^{1}+\cdots+2^{n-2}}=2^{2^{n-1}}
$$
and the left-hand side
$$
\begin{aligned}
\left(1+2^{2^{0}}\right) & \left(1+2^{2^{1}}\right) \cdots\left(1+2^{2^{n-2}}\right) \\
& =1+2^{2^{0}}+2^{2^{1}}+2^{2^{0}+2^{1}}+2^{2^{2}}+\cdots+2^{2^{0}+2^{1}+\cdots+2^{n-2}} \\
& =1+2+2^{2}+2^{3}+\cdots+2^{2^{n-1}-1} \\
& =2^{2^{n-1}}-1 .
\end{aligned}
$$
The proof is complete.
