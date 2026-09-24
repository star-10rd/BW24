Let $k(m)$ be the residue of $m$ when divided by $10^{k}$. There is a carry at the digit representing $10^{k}$ exactly when $k(2017)+k(n \cdot 2017)>10^{k}$. Thus the number of 10-, 100-, 1000- and 10000-carries are, respectively,

$$
\left\lfloor\frac{7 \cdot 10^{2017}}{10}\right\rfloor,\left\lfloor\frac{17 \cdot 10^{2017}}{100}\right\rfloor,\left\lfloor\frac{17 \cdot 10^{2017}}{1000}\right\rfloor,\left\lfloor\frac{2017 \cdot 10^{2017}}{10000}\right\rfloor
$$

and similarly for the rest of the carries. Thus

$$
\begin{aligned}
\sum_{n=1}^{10^{2017}-1} a(n) & =7 \cdot 10^{2016}+17 \cdot 10^{2015}+\ldots+2017+201+20+2 \\
& =(2+0+1+7) \cdot 10^{2016}+(2+0+1+7) \cdot 10^{2015}+\ldots+(2+0+1+7)=10 \cdot \frac{10^{2017}-1}{9}
\end{aligned}
$$
