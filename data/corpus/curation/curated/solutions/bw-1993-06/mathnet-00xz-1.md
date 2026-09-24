Solution:

Let $h(x) = \frac{f(x)}{x}$. Then we have $g(x) = \frac{x^{2}}{f(x)} = \frac{x}{h(x)}$ and $g(f(x)) = \frac{f(x)}{h(f(x))} = x$ which yields $h(f(x)) = \frac{f(x)}{x} = h(x)$. Using induction we easily get $h\left(f^{(k)}(x)\right) = h(x)$ for any natural number $k$ where $f^{(k)}(x)$ denotes $\underbrace{f(f(\ldots f}_{k}(x) \ldots))$. Now
$$
f^{(k+1)}(x) = f\left(f^{(k)}(x)\right) = f^{(k)}(x) \cdot h\left(f^{(k)}(x)\right) = f^{(k)}(x) \cdot h(x)
$$
and $\frac{f^{(k+1)}(x)}{f^{(k)}(x)} = h(x)$ for any natural number $k$. Thus
$$
\frac{f^{(k)}(x)}{x} = \frac{f^{(k)}(x)}{f^{(k-1)}(x)} \cdots \cdot \frac{f(x)}{x} = (h(x))^{k}
$$
and $\frac{f^{(k)}(3)}{3} = (h(3))^{k} \in \left(\frac{2}{3}, \frac{4}{3}\right)$ for all $k$. This is only possible if $h(3) = 1$ and thus $f(3) = g(3) = 3$.
