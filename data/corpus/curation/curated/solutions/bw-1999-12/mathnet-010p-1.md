Solution:

Let $N$ be the midpoint of $B C$ and $M$ the midpoint of $A C$. Let $O$ be the circumcentre of $A B C$ and $I$ its incentre (see Figure 8). Since $\angle C M O=\angle C N O=90^\circ$, the points $C, N, O$ and $M$ are concyclic (regardless of whether $O$ lies inside the triangle $A B C$). We now have to show that the points $C, N, I$ and $M$ are also concyclic, i.e. $I$ lies on the same circle as $C, N, O$ and $M$. It will be sufficient to show that $\angle N C M+\angle N I M=180^\circ$ in the quadrilateral $C N I M$. Since
$$
|A B|=\frac{|A C|+|B C|}{2}=|A M|+|B N|
$$
we can choose a point $D$ on the side $A B$ such that $|A D|=|A M|$ and $|B D|=|B N|$. Then triangle $A I M$ is congruent to triangle $A I D$, and similarly triangle $B I N$ is congruent to triangle $B I D$. Therefore
$$
\begin{aligned}
\angle N C M+\angle N I M & =\angle N C M+\left(360^\circ-2 \angle A I D-2 \angle B I D\right)= \\
& =\angle B C A+360^\circ-2 \angle A I B= \\
& =\angle B C A+360^\circ-2 \cdot\left(180^\circ-\frac{\angle B A C}{2}-\frac{\angle A B C}{2}\right)= \\
& =\angle B C A+\angle A B C+\angle C A B=180^\circ .
\end{aligned}
$$

![](attached_image_1.png)
Figure 8


Alternative solution. Let $O$ be the circumcentre of $A B C$ and $I$ its incentre, and let $G, H$ and $K$ be the points where the incircle touches the sides $B C, A C$ and $A B$ of the triangle, respectively. Also, let $N$ be the midpoint of $B C$ and $M$ the midpoint of $A C$ (see Figure 9). Since $\angle C M O=\angle C N O=90^\circ$, points $M$ and $N$ lie on the circle with diameter $O C$. We will show that point $I$ also lies on that circle. Indeed, we have
$$
|A H|+|B G|=|A K|+|B K|=|A B|=\frac{|A C|+|B C|}{2}=|A M|+|B N|,
$$
implying $|M H|=|N G|$. Since $M H$ and $N G$ are the perpendicular projections of $O I$ to the lines $A C$ and $B C$, respectively, then $I O$ must be either parallel or perpendicular to the bisector $C I$ of angle $A C B$. (To formally prove this, consider unit vectors $\overrightarrow{e_{1}}$ and $\overrightarrow{e_{2}}$ defined by the rays $C A$ and $C B$, and show that the condition $|M H|=|N G|$ is equivalent to $\left(\overrightarrow{e_{1}} \pm \overrightarrow{e_{2}}\right) \cdot \overrightarrow{I O}=0$.)
If $I O$ is perpendicular to $C I$, then $\angle C I O=90^\circ$ and we are done. If $I O$ is parallel to $C I$, then the circumcentre $O$ of triangle $A B C$ lies on the bisector $C I$ of angle $A C B$, whence $|A C|=|B C|$ and the condition $2|A B|=|A C|+|B C|$ implies that $A B C$ is an equilateral triangle. Hence in this case points $O$ and $I$ coincide and the claim of the problem holds trivially.

![](attached_image_2.png)
Figure 9
