Solution:

a.
Note that the inequality
$$
\frac{a_{n+1} + n}{2} \geq \sqrt{a_{n+1} \cdot n}
$$
holds, which together with the second condition of the problem gives
$$
\sqrt{a_{n+1} \cdot n} \leq \sqrt{a_{n} \cdot (n+1)}
$$
This inequality simplifies to
$$
\frac{a_{n+1}}{a_{n}} \leq \frac{n+1}{n}
$$
Now, using the last inequality for the index $n$ replaced by $n, n+1, \ldots, 2n-1$ and multiplying the results, we obtain
$$
\frac{a_{2n}}{a_{n}} \leq \frac{2n}{n} = 2
$$
or $2a_{n} \geq a_{2n}$. Taking into account the first condition of the problem, we have
$$
3a_{n} = a_{n} + 2a_{n} \geq a_{n} + a_{2n} \geq 3n
$$
which implies $a_{n} \geq n$.

b.
The sequence defined by $a_{n} = n + 1$ satisfies all the conditions of the problem.
