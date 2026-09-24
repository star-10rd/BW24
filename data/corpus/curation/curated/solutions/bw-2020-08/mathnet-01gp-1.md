Answer: The maximal number of guests is $n^4 - n^3$.
The possible menus are represented by quadruples
$$
(a, b, c, d), \quad 1 \le a, b, c, d \le n.
$$
Let us count those menus satisfying
$$
a + b + c + d \not\equiv 0 \pmod{n}.
$$
The numbers $a, b, c$ may be chosen arbitrarily ($n$ choices for each), and then $d$ is required to satisfy only $d \not\equiv -a - b - c$. Hence there are
$$
n^3(n - 1) = n^4 - n^3
$$
such menus.
If there are $n^4 - n^3$ guests, and they have chosen precisely the $n^4 - n^3$ menus satisfying $a+b+c+d \not\equiv 0 \pmod{n}$, we claim that the condition of the problem is fulfilled. So suppose there is a collection of $n$ people whose orders coincide in three aspects, but differ in the fourth. With no loss of generality, we may assume they have ordered exactly the same food, but $n$ different wines. This means they all have the same value of $a, b$ and $c$, but their values of $d$ are distinct. A contradiction arises since, given $a, b$ and $c$, there are only $n-1$ values available for $d$.
We now show that for $n^4 - n^3 + 1$ guests (or more), it is impossible to obtain the situation stipulated in the problem. The $n^3$ sets
$$
M_{a,b,c} = \{(a, b, c, d) \mid 1 \le a, b, c, d \le n\}, \quad 1 \le a, b, c \le n,
$$
form a partition of the set of possible menus, totalling $n^4$. When the number of guests is at least $n^4 - n^3 + 1$, there are at most $n^3 - 1$ unselected menus. Therefore, there exists a set $M_{a,b,c}$ which contains no unselected menus. That is, all the $n$ menus in $M_{a,b,c}$ have been selected, and the condition of the problem is violated.
