Let $f(x)=x(3-x)^{2}$. It is easy to check that if $x<0$ then $f(x)<x$. In particular $f(f(x))<f(x)<x$ in this case, so that the pair $(x, f(x))$ cannot be a solution. Similarly, $f(x)>x$ if $x>4$, so the pair $(x, f(x))$ cannot be a solution in this case either.

Suppose that $(x, y) \in \mathbb{R}^{2}$ is a solution. According to the previous remark $x \in[0,4]$, and similarly, $y \in[0,4]$. Hence we may write $x=2+2 r$ and $y=2+2 s$ with $r, s \in[-1,1]$. After substitution and simplification, the equation $x=y(3-y)^{2}$ transforms into the equation $r=4 s^{3}-3 s$. Recall the trigonometric identities for threefold angles. If $s=\cos (\alpha)$ for some $\alpha \in \mathbb{R}$, then $r=4 \cos ^{3}(\alpha)-$ $3 \cos (\alpha)=\cos (3 \alpha)$. In the same way $s=4 r^{3}-3 r=\cos (9 \alpha)$.

We can deduce that $9 \alpha=2 \pi m+\alpha$ or $9 \alpha=2 \pi l-\alpha$ for some integers $m$ and $l$. In the former case we have $8 \alpha=2 \pi m$, so that $m \in\{0,1,2,3,4\}$, and the corresponding possible pairs of solutions can be found in Figure 1. In the former case we have $10 \alpha=2 \pi l$, so that $l \in\{0,1,2,3,4,5\}$, where $l=0$ and $l=5$ result in angles that we have already considered in the first case. We consider the other options in Figure 2 taking into account the well-known identities $\cos (\pi / 5)=(1+\sqrt{5}) / 4$ and $\cos (3 \pi / 5)=(1-\sqrt{5}) / 4$.




| $m$ | $8 \alpha$ | $\alpha$ | $r$ | $s$ | $x$ | $y$ | $x+y$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 1 | 1 | 4 | 4 | 8 |
| 1 | $2 \pi$ | $\pi / 4$ | $\sqrt{2} / 2$ | $-\sqrt{2} / 2$ | $2+\sqrt{2}$ | $2-\sqrt{2}$ | 4 |
| 2 | $4 \pi$ | $\pi / 2$ | 0 | 0 | 2 | 2 | 4 |
| 3 | $6 \pi$ | $3 \pi / 4$ | $-\sqrt{2} / 2$ | $\sqrt{2} / 2$ | $2-\sqrt{2}$ | $2+\sqrt{2}$ | 4 |
| 4 | $8 \pi$ | $\pi$ | -1 | -1 | 0 | 0 | 0 |

Figure 1: Pairs of solutions and their sums

| $l$ | $10 \alpha$ | $\alpha$ | $r$ | $s$ | $x$ | $y$ | $x+y$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | $2 \pi$ | $\pi / 5$ | $(1+\sqrt{5}) / 4$ | $(1-\sqrt{5}) / 4$ | $(5+\sqrt{5}) / 2$ | $(5-\sqrt{5}) / 2$ | 5 |
| 2 | $4 \pi$ | $2 \pi / 5$ | $(-1+\sqrt{5}) / 4$ | $(-1-\sqrt{5}) / 4$ | $(3+\sqrt{5}) / 2$ | $(3-\sqrt{5}) / 2$ | 3 |
| 3 | $6 \pi$ | $3 \pi / 5$ | $(1-\sqrt{5}) / 4$ | $(1+\sqrt{5}) / 4$ | $(5-\sqrt{5}) / 2$ | $(5+\sqrt{5}) / 2$ | 5 |
| 4 | $8 \pi$ | $4 \pi / 5$ | $(-1-\sqrt{5}) / 4$ | $(-1+\sqrt{5}) / 4$ | $(3-\sqrt{5}) / 2$ | $(3+\sqrt{5}) / 2$ | 3 |

Figure 2: Pairs of solutions and their sums
