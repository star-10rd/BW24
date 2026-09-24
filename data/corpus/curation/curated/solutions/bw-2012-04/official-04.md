Note that the function $f:(1, \infty) \rightarrow \mathbb{R}, f(x)=x+x^{-1}$, is strictly increasing (it can be easily shown by derivative) and achieves all values of $(2, \infty)$. Hence let us have an arbitrary integer $c>2$ where $c=\lambda+\lambda^{-1}$ for some real $\lambda>1$.

Define

$$
a=\frac{\lambda^{2012}-\lambda^{-2012}}{\lambda-\lambda^{-1}}, \quad b=\frac{-\lambda^{2011}+\lambda^{-2011}}{\lambda-\lambda^{-1}} .
$$

Then it is easy to verify that $\lambda$ and $\lambda^{-1}$ are solutions of $x^{2012}=a x+b$.

Note that $a$ and $b$ are integers. Indeed: for any positive integer $k$, we have

$$
\lambda^{k}-\left(\lambda^{-1}\right)^{k}=\left(\lambda-\lambda^{-1}\right) \cdot\left(\lambda^{k-1}+\lambda^{k-2} \cdot \lambda^{-1}+\ldots+\lambda \cdot\left(\lambda^{-1}\right)^{k-2}+\left(\lambda^{-1}\right)^{k-1}\right),
$$

where the rightmost factor is a symmetric polynomial with integral coefficients in two variables and therefore can be expressed as a polynomial with integral coefficients in symmetric fundamental polynomials $\lambda+\lambda^{-1}$ and $\lambda \cdot \lambda^{-1}=1$, hence is an integer.

If there were only a finite number of integer pairs $(a, b)$ for which $x^{2012}-a x-b$ has two distinct roots whose product is 1 , the number of all such roots would also be finite. This would be a contradiction since by the construction above, there are infinitely many such numbers $\lambda$ for which $\lambda+\lambda^{-1} \in\{3,4, \ldots\}$ and that $\lambda, \lambda^{-1}$ are roots of some $x^{2012}-a x-b$ where $a, b$ are integers.
