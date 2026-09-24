Solution:
Let $\{y_{1}, \ldots, y_{k}\} \subset \{x_{1}, \ldots, x_{n}\}$ be a subset of numbers with the maximal number of digits, and differing from one another only by their last digits: $y_{1}=\overline{y \alpha_{1}}, y_{2}=\overline{y \alpha_{2}}, \ldots, y_{k}=\overline{y \alpha_{k}}$ (here $\overline{y \alpha_{i}}$ denotes the number consisting of $y$ as its initial fragment and $\alpha_{i}$ as its last digit). Then we have
$$
\frac{1}{y_{1}}+\ldots+\frac{1}{y_{k}} \leqslant \frac{1}{\overline{y 0}}+\ldots+\frac{1}{\overline{y 9}}<10 \cdot \frac{1}{\overline{y 0}}=\frac{1}{y}
$$
Let's replace all numbers $y_{1}, y_{2}, \ldots, y_{k}$ by a single $y$ in the set $\{x_{1}, \ldots, x_{n}\}$. Then the obtained set of numbers still has the property mentioned in the statement of the problem, and the sum of their reciprocals does not decrease. Continuing to reduce the given set of numbers in the same way, we finally obtain
$$
\frac{1}{x_{1}}+\frac{1}{x_{2}}+\cdots+\frac{1}{x_{n}} \leqslant \frac{1}{1}+\frac{1}{2}+\ldots+\frac{1}{9}<3
$$
