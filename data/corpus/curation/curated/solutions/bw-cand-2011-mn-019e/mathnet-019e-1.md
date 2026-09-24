Let $a = p_1^{\alpha_1} \dots p_m^{\alpha_m}$, $b = p_1^{\beta_1} \dots p_m^{\beta_m}$ be the prime decompositions of these numbers (we assume that some $\alpha_k, \beta_k$ can be equal to $0$). Let us check that for each $k$ $\alpha_k \ge \beta_k$. Indeed, if the inequality does not hold for some $k$, say, $\alpha_1 < \beta_1$, then for $n = p_2^s \dots p_m^s$ we have
$$
1 \le \frac{d(na)}{d(nb)} = \frac{\alpha_1(s + \alpha_2) \dots (s + \alpha_m)}{\beta_1(s + \beta_2) \dots (s + \beta_m)}
$$
For big $s$ this fraction is close to $\frac{\alpha_1}{\beta_1} < 1$. A contradiction.
