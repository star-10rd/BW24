Let us prove that conversely, the condition
$$
a_1^{2023} + a_2^{2022} + \dots + a_{2023} \le 1 + \frac{1}{2023}
$$
implies that
$$
S := a_1 + a_2^2 + \dots + a_{2023}^{2023} < 2023.
$$
This is trivial if all $a_i$ are less than $1$. So suppose that there is an $i$ with $a_i \ge 1$, clearly it is unique and $a_i < 1 + \frac{1}{2023}$. Then we have
$$
\begin{aligned}
a_i^i &< \left(1 + \frac{1}{2023}\right)^{2023} = 1 + \sum_{k=1}^{2023} \frac{1}{k!} \cdot \frac{2023}{2023} \cdot \frac{2022}{2023} \dots \cdot \frac{2023-k+1}{2023} \\
&< 1 + \sum_{k=1}^{2023} \frac{1}{k!} \le 1 + \sum_{k=0}^{2022} \frac{1}{2^k} < 3,
\end{aligned}
$$
$$
\sum_{\substack{k=1, \\ k \ne i}}^{1011} a_k^k \le 1011 \quad \text{and} \quad \sum_{\substack{k=1012, \\ k \ne i}}^{2023} a_k^k \le \sum_{\substack{k=1012, \\ k \ne i}}^{2023} a_k^{2024-k} < \frac{1}{2023}.
$$
Hence we have
$$
S = a_i^i + \sum_{\substack{k=1, \\ k \ne i}}^{1011} a_k^k + \sum_{\substack{k=1012, \\ k \ne i}}^{2023} a_k^k < 3 + 1011 + \frac{1}{2023} < 2023.
$$
