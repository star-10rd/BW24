Answer: no.

Let the points be denoted by $1,2, \ldots, 2001$ such that $i, j$ are neighbors if $|i-j|=1$ or $\{i, j\}=\{1,2001\}$. We say that $k$ points form a monochromatic segment of length $k$ if the points are consecutive on the circle and if
they all have the same color. For a coloring $F$ let $d(F)$ be the maximum length of a monochromatic segment. Note that $d\left(F_{n}\right)>1$ for all $n$ since 2001 is odd. If $d\left(F_{1}\right)=2001$ then all points have the same color, hence $F_{1}=F_{2}=F_{3}=\ldots$ and we can choose $n_{0}=1$. Thus, let $1<d\left(F_{1}\right)<2001$. Below we shall prove the following implications:

If $3<d\left(F_{n}\right)<2001$, then $d\left(F_{n+1}\right)=d\left(F_{n}\right)-2 ;$

If $d\left(F_{n}\right)=3$, then $d\left(F_{n+1}\right)=2$;

If $d\left(F_{n}\right)=2$, then $d\left(F_{n+1}\right)=d\left(F_{n}\right)$ and $F_{n+2}=F_{n}$;

From (1) and (2) it follows that $d\left(F_{1000}\right) \leqslant 2$, hence by (3) we have $F_{1000}=F_{1002}$. Moreover, if $F_{1}$ is the coloring where 1 is colored red and all other points are colored green, then $d\left(F_{1}\right)=2000$ and thus $d\left(F_{1}\right)>d\left(F_{2}\right)>\ldots>d\left(F_{1000}\right)=2$ which shows that, for all $n<1000, F_{n} \neq F_{n+2}$ and thus 1000 cannot be replaced by 999 .

It remains to prove (1)-(3). Let $(i+1, \ldots, i+k)$ be a longest monochromatic segment for $F_{n}$ (considering the labels of the points modulo 2001). Then $(i+2, \ldots, i+k-1)$ is a monochromatic segment for $F_{n+1}$ and thus $d\left(F_{n+1}\right) \geqslant d\left(F_{n}\right)-2$. Moreover, if $(i+1, \ldots, i+k)$ is a longest monochromatic segment for $F_{n+1}$ where $k \geqslant 3$, then $(i, \ldots, i+k+1)$ is a monochromatic segment for $F_{n}$. From this and $F_{n+1}>1$ the implications (1) and (2) clearly follow. For proof of (3) note that if $d\left(F_{n}\right) \leqslant 2$ then $F_{n+1}$ is obtained from $F_{n}$ by changing the colour of all points.

![](figure-1.png)

Figure 1
