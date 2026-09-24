Answer: $n = \left(\frac{p+1}{2}\right)^2$.
Assume that $\sqrt{n^2 - pn} = m$ is a positive integer. Then $n^2 - pn - m^2 = 0$, and hence
$$
n = \frac{p \pm \sqrt{p^2 + 4m^2}}{2}.
$$
Now $p^2+4m^2 = k^2$ for some positive integer $k$, and $n = \frac{p+k}{2}$ since $k > p$. Thus $p^2 = (k+2m)(k-2m)$, and since $p$ is prime we get $p^2 = k + 2m$ and $k - 2m = 1$. Hence $k = \frac{p^2+1}{2}$ and
$$
n = \frac{p + \frac{p^2+1}{2}}{2} = \left(\frac{p+1}{2}\right)^2
$$
is the only possible value of $n$. In this case we have
$$
\sqrt{n^2 - pn} = \sqrt{\left(\frac{p+1}{2}\right)^4 - p\left(\frac{p+1}{2}\right)^2} = \frac{p+1}{2}\sqrt{\left(\frac{p^2+1}{2}\right)^2 - p} = \frac{p+1}{2} \cdot \frac{p-1}{2}.
$$
