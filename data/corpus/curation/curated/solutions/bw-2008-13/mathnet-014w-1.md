Solution:

Certainly, the 56 three-element subsets of the set $\{1,2, \ldots, 8\}$ would do. Now we prove that 56 is the maximum. Assume we have a maximal configuration. Let $Y$ be the family of the three-element subsets, which were chosen by the participating countries and $N$ be the family of the three-element subsets, which were not chosen by the participating countries. Then $|Y|+|N|=\binom{9}{3}=84$.

Consider an $x \in Y$. There are $\binom{6}{3}=20$ three-element subsets disjoint to $x$, which can be partitioned into 10 pairs of complementary subsets. At least one of the two sets of those pairs of complementary sets have to belong to $N$, otherwise these two together with $x$ have the whole sets as union, i.e., three countries would have voted for all problems. Therefore, to any $x \in Y$ there are associated at least 10 sets of $N$.

On the other hand, a set $y \in N$ can be associated not more than to 20 sets, since there are exactly 20 disjoint sets to $y$. Together we have $10 \cdot |Y| \leq 20 \cdot |N|$ and
$$
|Y|=\frac{2}{3}|Y|+\frac{1}{3}|Y| \leq \frac{2}{3}|Y|+\frac{2}{3}|N|=\frac{2}{3}(|Y|+|N|)=\frac{2}{3} \cdot 84=56.
$$
