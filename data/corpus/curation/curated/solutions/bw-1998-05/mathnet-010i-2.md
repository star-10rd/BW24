Solution:
The case $b=0$ is handled as in the first solution. Assume that $b \neq 0$. We prove the statement by induction on $n$, postulating, in addition, that $N$ (the integer we are looking for) must be an $n$-digit number.

For $n=1$ we take the one-digit number $b$. Assume the claim is true for a certain $n \geqslant 1$, with $N \equiv 0\left(\bmod 2^{n}\right)$ having exactly $n$ digits, all $a$ or $b$; thus $N<10^{n}$. Define
$$
N^{*}= \begin{cases}10^{n} b+N & \text{ if } N \equiv 0\left(\bmod 2^{n+1}\right) \\ 10^{n} a+N & \text{ if } N \equiv 2^{n}\left(\bmod 2^{n+1}\right) .\end{cases}
$$
Clearly, $N^{*}$ is an $(n+1)$-digit number, satisfying
$$
N^{*} \equiv \begin{cases}0+0\left(\bmod 2^{n+1}\right) & \text{ in the first case } \\ 2^{n}+2^{n}\left(\bmod 2^{n+1}\right) & \text{ in the second case. }\end{cases}
$$
In both cases $N^{*}$ is divisible by $2^{n+1}$, and we have the induction claim. The result follows.
