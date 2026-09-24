If $N=3$, the number of Baltic triangles is 1 which is $\frac{N}{3}$.
To show that there always exist at least $\frac{N}{3}$ Baltic triangles, we prove that every point is a vertex of at least one Baltic triangle. This implies the desired result because every Baltic triangle consists of exactly 3 points.
First we prove a useful lemma: Given $n \geq 2$ points in the plane, either all are collinear or there exists a line passing through exactly 2 points.
Proof: Take a line $l$ going through at least 2 points, and a point $Q$ not on the line $l$ such that the distance from $Q$ to $l$ is minimal over all such pairs. Denote $Q^{\prime}$ as the projection of $Q$ to $l$. If $l$ contains at least 3 points, two of them must be on the same side of $Q^{\prime}$ (or coincide with $Q^{\prime}$ ). Say those points are $X$ and $Y$, with $X$ lying between $Y$ and $Q^{\prime}$ (Fig. 18). But then the distance from $X$ to the line $Q Y$ is smaller than $Q Q^{\prime}$ and this contradicts minimality.
![](figure-18.png)

Figure 18
Now assume $N \geq 4$ and apply an inversion of the plane with center $O$ where $O$ is any point in the given set. Consider the $N-1$ other points after the inversion. By our lemma, there exists a line going through exactly 2 of them, because if they were all collinear, all points would have been concyclic before the inversion, contradicting the assumption about the existence of a Baltic triangle. Denote these points as $P$ and $Q$. The line $P Q$ cannot go through $O$, because this would mean that these 3 points were collinear before the inversion. But then before the inversion, no other point lied on the circumcircle of triangle $O P Q$, meaning that $O, P, Q$ formed a Baltic triangle.
So every single point in the given set is a vertex of at least one Baltic triangle and we are done.
Remark: The lemma proved in the solution is known as the Sylvester-Gallai theorem.
