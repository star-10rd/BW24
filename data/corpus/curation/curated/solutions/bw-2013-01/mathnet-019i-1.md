The product is
$$
\prod_{i=1}^{n} (a_i + b_{p(i)}),
$$
for some permutation $p$ of $1, \dots, n$, where $a_i = (i-1)n$ and $b_i = i-1$. Assume that $i + p(i) \neq n+1$ for some $i$ and let the least such $i$ be chosen. Since $j + p(j) = n+1$ for $j < i$ then $k = p(i) < n+1-i$ and $l = p^{-1}(n+1-i) > i$. Replacing $p$ with $((n+1-i)k)p$ replaces the factor $(a_i + b_k)(a_l + b_{n+1-i})$ with $(a_i + b_{n+1-i})(a_l + b_k)$ thus increasing this factor by
$$
(a_i + b_{n+1-i})(a_l + b_k) - (a_i + b_k)(a_l + b_{n+1-i}) = (a_i - a_l)(b_k - b_{n+1-i}) > 0.
$$
For any $p$ such that $i + p(i) \neq n + 1$ for some $i$ the product may thus be increased by choosing another $p$. (If zero is one of the chosen numbers any choice which avoids the zero will increase the product.) We therefore get the maximum by choosing $p(i) = n + 1 - i$, that is, taking the product along the diagonal from the upper right to the lower left corners of the table. This product is
$$
\prod_{1}^{n} i(n-1) = (n-1)^n n! .
$$
