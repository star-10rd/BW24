Let $\prod_{i=1}^{n}(x - \alpha_i)$ be the factorisation of $p(x)$. Then, $\alpha_i \le 1$, $i = 1 \ldots n$, whence $p(1) \ge 0$. By the AG theorem,
$$
3^n = p(2) = \prod_{i=1}^{n}(2 - \alpha_i) = \prod_{i=1}^{n}(1 + (1 - \alpha_i)) = \sum_{k=0}^{n} \sum_{1 \le i_1 < \dots < i_k \le n} \prod_{j=1}^{k}(1 - \alpha_{i_j}) \\ \ge \sum_{k=0}^{n} \binom{n}{k} \left(\prod_{i=1}^{n}(1 - \alpha_i)\right)^{\frac{k}{n}} = \sum_{k=0}^{n} \binom{n}{k} p(1)^{\frac{k}{n}} = \left(1 + p(1)^{\frac{1}{n}}\right)^n,
$$
so $p(1) \le (3-1)^n = 2^n$.

Let $\alpha_2 = \dots = \alpha_n = \alpha$. For any $\alpha$ in the interval $-1 \le \alpha \le 1$, the equation
$$
p(2) = (2 - \alpha_1)(2 - \alpha)^{n-1} = 3^n
$$
has a unique solution with respect to $\alpha_1$. This $\alpha_1$ is a continuous function of $\alpha$. Since $2 - \alpha \le 3$, we have $2 - \alpha_1 \ge 3$, or $\alpha_1 \le -1 \le 1$. In particular, $\alpha_1 = -1$ for $\alpha = -1$. When $\alpha$ goes continuously from $-1$ to $1$, the value of $p(1) = (1 - \alpha_1)(1 - \alpha)^{n-1}$ goes continuously from $2^n$ to $0$. Thus, $p(1)$ can have any value in the interval $0 \le p(1) \le 2^n$, and these are the possible values.
