Solution:

Let $b_{n}$ and $c_{n}$ denote the last digit of $n$ and $n^{n}$, respectively. Obviously, if $b_{n}=0,1,5,6$, then $c_{n}=0,1,5,6$ and $a_{n}=0,1,5,6$, respectively.
If $b_{n}=9$, then $n^{n} \equiv 1(\bmod 2)$ and consequently $a_{n}=9$. If $b_{n}=4$, then $n^{n} \equiv 0$ $(\bmod 2)$ and consequently $a_{n}=6$.
If $b_{n}=2,3,7$, or 8, then the last digits of $n^{m}$ run through the periods: $2-4-8-6$, $3-9-7-1$, $7-9-3-1$ or $8-4-2-6$, respectively. If $b_{n}=2$ or $b_{n}=8$, then $n^{n} \equiv 0$ $(\bmod 4)$ and $a_{n}=6$.
In the remaining cases $b_{n}=3$ or $b_{n}=7$, if $n \equiv \pm 1(\bmod 4)$, then so is $n^{n}$.
If $b_{n}=3$, then $n \equiv 3(\bmod 20)$ or $n \equiv 13(\bmod 20)$ and $n^{n} \equiv 7(\bmod 20)$ or $n^{n} \equiv 13$ $(\bmod 20)$, so $a_{n}=7$ or $a_{n}=3$, respectively.
If $b_{n}=7$, then $n \equiv 7(\bmod 20)$ or $n \equiv 17(\bmod 20)$ and $n^{n} \equiv 3(\bmod 20)$ or $n^{n} \equiv 17$ $(\bmod 20)$, so $a_{n}=3$ or $a_{n}=7$, respectively.
Finally, we conclude that the sequence $\left(a_{n}\right)$ has the following period of length 20:
$$
1-6-7-6-5-6-3-6-9-0-1-6-3-6-5-6-7-6-9-0
$$
