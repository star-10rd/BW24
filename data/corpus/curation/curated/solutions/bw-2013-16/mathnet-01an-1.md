Consider a delightful number *n*. Then there exists an integer *x*, $1 < x < n$ satisfying
$$
\sum_{i=1}^{x-1} i = \sum_{i=x+1}^{n} i = \sum_{i=1}^{n} i - \sum_{i=1}^{x} i
$$
$\Leftrightarrow$
$$
x^2 = x + 2 \cdot \frac{(x-1)x}{2} = x + 2 \sum_{i=1}^{x-1} i = \sum_{i=1}^{x-1} i + \sum_{i=1}^{x} i = \sum_{i=1}^{n} i = \frac{n(n+1)}{2}.
$$
Now *n* and *n* + 1 are relatively prime so one of them is divisible by 2 and the other one must then be a perfect, odd square, as $x^2$ is on the LHS. Now consider the inequality
$$
(2013^{2013})^2 < n < (2013^{2013})^2 + 4 \cdot 2013^{2013} = (2013^{2013} + 2)^2 - 4.
$$
The only perfect square in this interval is clearly $(2013^{2013} + 1)^2$ which is even. Therefore neither *n* nor *n* + 1 can be an odd, perfect square. Hence no delightful number *N* satisfy the condition.
