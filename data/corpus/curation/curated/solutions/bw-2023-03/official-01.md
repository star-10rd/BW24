The set of equations given in the problem statement is Flensburgian precisely when $n$ is even.

To see that it is not Flensburgian when $n \geq 3$ is odd, notice that if $(a, b, c)$ satisfies the set of equations then so does $(-a,-b,-c)$. Hence, if there exists a single solution to the set of equation where all the variables are different then the set of equations cannot be Flensburgian. This is in fact the case, e.g., consider $(a, b, c)=$ $\left(\frac{1}{2}, \frac{2^{n-1}-1}{2^{n}},\left(\frac{2^{n-1}-1}{2^{2 n}}\right)^{\frac{1}{n+1}}\right)$.

The rest of the solution is dedicated to prove that the set of equations is indeed Flensburgian when $n$ is even.

The first equation yields $b=a-a^{n} \leq a$, since $a^{n} \geq 0$ when $n$ is even. The inequality is strict whenever $a \neq 0$ and the case $a=0$ implies $b=0$, i.e. $a=b$, which we can disregard. Substituting the relation $b=a-a^{n}$ into the second equation yields

$$
\begin{aligned}
& 0=c^{n+1}+\left(a-a^{n}\right)^{2}-a\left(a-a^{n}\right)=c^{n+1}+a^{2 n}-a^{n+1}, \text { i.e. } \\
& c^{n+1}=a^{n+1}-a^{2 n}<a^{n+1}
\end{aligned}
$$

since we can disregard $a=0$ and $2 n$ is even. Since $n+1$ is odd, the polynomial $x^{n+1}$ is strictly increasing, implying that $c<a$. Hence, when $n$ is even, all solutions of the set of equations where $a, b, c$ are pairwise different satisfy $a>b$ and $a>c$.
