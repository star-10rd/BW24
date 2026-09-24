For $x>0$ we have $P(x)>0$ (because at least one coefficient is non-zero). From the given condition we have $(P(1))^{2} \geq 1$. Further, let's denote $P(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+$ $\cdots+a_{0}$. Then

$$
\begin{aligned}
P(x) P\left(\frac{1}{x}\right) & =\left(a_{n} x^{n}+\cdots+a_{0}\right)\left(a_{n} x^{-n}+\cdots+a_{0}\right) \\
& =\sum_{i=0}^{n} a_{i}^{2}+\sum_{i=1}^{n} \sum_{j=0}^{i-1}\left(a_{i-j} a_{j}\right)\left(x^{i}+x^{-i}\right) \\
& \geq \sum_{i=0}^{n} a_{i}^{2}+2 \sum_{i>j} a_{i} a_{j} \\
& =(P(1))^{2} \geq 1 .
\end{aligned}
$$
