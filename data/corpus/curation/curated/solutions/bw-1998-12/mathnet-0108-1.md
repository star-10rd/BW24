Solution:

![](attached_image_1.png)
Figure 3

Let $O$ be the circumcentre of triangle $ABC$ (i.e., the midpoint of $BC$) and let $AD$ meet the circumcircle again at $E$ (see Figure 3). Then $\angle BOE = 2 \angle BAE = \angle CDE$, showing that $|DE| = |OE|$. Triangles $ADC$ and $BDE$ are similar; hence
$$
\frac{|AD|}{|BD|} = \frac{|CD|}{|DE|}, \quad \frac{|AD|}{|CD|} = \frac{|BD|}{|DE|}
$$
and finally
$$
\frac{|AD|}{|BD|} + \frac{|AD|}{|CD|} = \frac{|CD|}{|DE|} + \frac{|BD|}{|DE|} = \frac{|BC|}{|DE|} = \frac{|BC|}{|OE|} = 2
$$
which is equivalent to the equality we have to prove.


Alternative solution. Let $\angle BAD = \alpha$ and $\angle CAD = \beta$. By the conditions of the problem, $\alpha + \beta = 90^\circ$ (hence $\sin \beta = \cos \alpha$), $\angle BDA = 2\alpha$ and $\angle CDA = 2\beta$. By the law of sines,
$$
\frac{|AD|}{|BD|} = \frac{\sin 3\alpha}{\sin \alpha} = 3 - 4 \sin^2 \alpha
$$
and
$$
\frac{|AD|}{|CD|} = \frac{\sin 3\beta}{\sin \beta} = 3 - 4 \sin^2 \beta = 3 - 4 \cos^2 \alpha.
$$
Adding these two equalities we get the claimed one.
