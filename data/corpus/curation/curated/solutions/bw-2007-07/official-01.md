The regular triangle with side length $n$ can be divided into $n^{2}$ regular triangles with side length 1 having sides parallel with the original triangle. It is clear that every squiggle must cover exactly six of these smaller triangles. Thus we get that $6 \mid n^{2}$, which implies that $6 \mid n$.

Assume now that $n$ is divisible by 6 , but not with 12 , i.e. $n=12 k+6$ for some non-negative integer $k$. Colour the large triangle in a "triangular chessboard" fashion with black triangles on the boundary so that no adjacent triangles have the same colour. Then each squiggle covers either two or four black triangles. The total number of black triangles is then

$$
n+(n-1)+\cdots+1=\frac{(12 k+7)(12 k+6)}{2}=(12 k+7)(6 k+3)
$$

which is an odd number and hence a covering is impossible to achieve.

It remains to prove that when $12 \mid n$ the required division is possible. It is enough to give an example for $n=12$, since triangles with side length $12 m$ can be composed of these for any integer $m$. A suitable construction is shown in the figure below.

![](figure-1.png)
