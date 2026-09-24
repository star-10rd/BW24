**Solution 1.** Let $X$ be a point on $BC$ such that $LX \perp AB$, as seen in figure 18. It is enough to prove that
$$
\frac{DP}{PL} = \frac{DK}{KX}
$$
because then $PK \parallel LX$ and $LX \perp AB$.
Applying Menelaos for triangle *BDL* and transversal *MPC* we get
$$
\frac{DP}{PL} \cdot \frac{LM}{MB} \cdot \frac{BC}{CD} = 1,
$$
and Menelaus for triangle *BLC* and transversal *AMD* gives
$$
\frac{BM}{ML} \cdot \frac{LA}{AC} \cdot \frac{CD}{DB} = 1.
$$
Multiplying these two equalities yields
$$
\frac{DP \cdot BC \cdot AL}{PL \cdot BD \cdot AC} = 1.
$$
Note, however, that $AL = AD = AC \sin \gamma$, $BD = AB \cos \beta$, and, by the sine rule, $\frac{AB}{BC} = \frac{\sin \gamma}{\sin \alpha}$, where $\alpha = \angle BAC$, $\beta = \angle CBA$ and $\gamma = \angle ACB$. Therefore
$$
\frac{DP}{PL} = \frac{BD \cdot AC}{BC \cdot AL} = \frac{AB \cos \beta \cdot AC}{BC \cdot AC \sin \gamma} = \frac{\sin \gamma \cos \beta}{\sin \alpha \sin \gamma} = \frac{\cos \beta}{\sin \alpha}.
$$
On the other hand, since $DK = KL$, $\angle KLX = \pi - \alpha$, and $\angle LXX = \frac{\pi}{2} - \beta$, we have by the sine rule
![](attached_image_1.png)

Therefore
$$
\frac{DP}{PL} = \frac{\cos \beta}{\sin \alpha} = \frac{DK}{KX}
$$
