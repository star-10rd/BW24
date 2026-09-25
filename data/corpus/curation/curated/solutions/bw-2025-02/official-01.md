## Solution 1

First, we note that the problem statement is true if there are infinitely many $m$ with either $\{a_m\}=0$ or $\lfloor a_m\rfloor=0$. Thus, after possibly reindexing, we may assume that $\{a_n\},\lfloor a_n\rfloor\ne0$ for all $n$. In this case, we may rewrite the condition as

$$
\frac{\lfloor a_{n+1}\rfloor}{\lfloor a_n\rfloor}
=
\frac{\{a_{n+1}\}}{\{a_n\}}
$$

for all $n$. By telescoping, this gives the identity

$$
\frac{\lfloor a_i\rfloor}{\lfloor a_j\rfloor}
=
\frac{\{a_i\}}{\{a_j\}}
$$

for each pair of indices $(i,j)$. Thus, if $\lfloor a_i\rfloor=\lfloor a_j\rfloor$, then $\{a_i\}=\{a_j\}$, and so especially $\{a_i\}\lfloor a_i\rfloor=\{a_j\}\lfloor a_j\rfloor$. Hence we are done if we can prove that some value appears infinitely many times among the $\lfloor a_n\rfloor$.

From the identity above, we also get

$$
\lfloor a_n\rfloor=\frac{\lfloor a_1\rfloor}{\{a_1\}}\{a_n\}
$$

for all $n$, which implies

$$
|a_n|<|\lfloor a_n\rfloor|+1
=\left|\frac{\lfloor a_1\rfloor}{\{a_1\}}\{a_n\}\right|+1
\le \left|\frac{\lfloor a_1\rfloor}{\{a_1\}}\right|+1.
$$

Hence the sequence is bounded, and so $\lfloor a_n\rfloor$ takes only finitely many values. By the pigeonhole principle, some value appears infinitely many times, and so we are done.

## Solution 2

Rewrite the given condition as

$$
\frac{\lfloor a_{n+1}\rfloor}{\{a_{n+1}\}}
=
\frac{\lfloor a_n\rfloor}{\{a_n\}}
=\rho.
$$

Consider an arbitrary real number $x$ satisfying $\frac{\lfloor x\rfloor}{\{x\}}=\rho$. There are two possible cases.

- If $\rho\ge0$, write $x=y+\varepsilon$, where $y$ is a nonnegative integer and $0\le\varepsilon<1$. Then

  $$
  \rho=\frac{\lfloor x\rfloor}{\{x\}}=\frac{y}{\varepsilon}
  \quad\Longrightarrow\quad y=\rho\varepsilon,
  $$

  so $|y|=|\rho|\varepsilon<|\rho|$.

- If $\rho<0$, write $x=-(y+\varepsilon)$, where $y$ is a nonnegative integer and $0\le\varepsilon<1$. Then

  $$
  \rho=\frac{\lfloor x\rfloor}{\{x\}}=\frac{-(y+1)}{1-\varepsilon}
  \quad\Longrightarrow\quad y=-\rho(1-\varepsilon)-1,
  $$

  so $|y|=|-\rho(1-\varepsilon)-1|<|\rho|+1$.

From these two observations it follows that the sequence $\lfloor a_1\rfloor,\lfloor a_2\rfloor,\ldots$ is bounded. Hence, by the pigeonhole principle, there are infinitely many positive integers $m$ such that $\lfloor a_m\rfloor=C$, where $C$ is constant. But $\lfloor a_m\rfloor$ uniquely determines $\{a_m\}$ because $\frac{\lfloor a_m\rfloor}{\{a_m\}}=\rho$. Therefore, for infinitely many positive integers $m$, we have $\{a_m\}\lfloor a_m\rfloor=\lambda$ for some constant $\lambda$.
