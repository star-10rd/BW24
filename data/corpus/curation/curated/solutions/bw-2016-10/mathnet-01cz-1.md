We prove
$$
m_n^2 \ge n \qquad (4)
$$
for all $n$. The claim then follows from $44^2 = 1936 < 2016$. To prove (4), first notice that the inequality certainly holds for $n = 0$.
Assume (4) is true for $n$. There is a $k$ such that $a_{n,k} = m_n$. Also $a_{n,k+1} \le m_n$ (or if $k = 2016$, $a_{n,1} \le m_n$). Now (assuming $k < 2016$)
$$
a_{n+1,k}^2 = \left( m_n + \frac{1}{2a_{n,k+1}} \right)^2 = m_n^2 + \frac{m_n}{a_{n,k+1}} + \frac{1}{4a_{n,k+1}^2} > n+1.
$$
Since $m_{n+1}^2 \ge a_{n+1,k}^2$, we are done.
