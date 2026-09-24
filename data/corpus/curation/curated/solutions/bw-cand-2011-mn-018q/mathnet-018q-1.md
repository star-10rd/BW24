Partition the set of denominations $D = \{1, 2, \dots, k\}$ occurring in red's hand into three blocks: $A$, those appearing on both blue and green cards (in red's hand); $B$, those appearing on blue cards only; $C$, those appearing on green cards only. Set $|A| = a$, $|B| = b$, $|C| = c$. Thus $a + b + c = k$ and $2a + b + c$ is the size of each hand. This implies that the number of denominations not in $\{1, 2, \dots, k\}$ but involved in the deal is $a$; call this set $E$. The green cards with denominations in $B \cup E$ must occur in blue's hand. This accounts for $|B \cup E| = a + b$ cards in blue's hand and so the rest of her hand must consist of $a+c$ red cards. Thus the deal is determined by a choice of the sets $A$ and $B$ ($C$ is then determined), the set $E$, and a choice of $a+c$ red cards (from the $k+a$ available) for blue's hand. These choices are counted by the sum over nonnegative $a$ and $b$ of the product
$$
\binom{k}{a} [\text{choose } A] \times \binom{k-a}{b} [\text{choose } B] \times \binom{n-k}{a} [\text{choose } E] \times \binom{k+a}{a+c} [\text{choose red cards for blue's hand}].
$$
This sum can be written
$$
\sum_{a \ge 0} \binom{k}{a} \binom{n-k}{n-k-a} \sum_{b \ge 0} \binom{k-a}{b} \binom{k+a}{k-b}.
$$
The inner sum equals $\binom{2k}{k}$, independent of $a$ (we have $k-a$ candies and $k+a$ toffees and want to choose $k$ sweeties), and then the first sum equals $\binom{n}{n-k}$.
