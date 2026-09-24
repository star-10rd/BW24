Answer: $25 \mathrm{~kg}$.

Each week, the accumulation of laundry increases the total amount by $K=10$, after which the washing decreases it by at least one third, because, by the pigeon-hole principle, the bin with the most laundry must contain at least a third of the total. Hence the amount of laundry post-wash after the $n$th week is bounded above by the sequence $a_{n+1}=\frac{2}{3}\left(a_{n}+K\right)$ with $a_{0}=0$, which is clearly bounded above by $2 K$. The total amount of laundry is less than $2 K$ post-wash and $3 K$ pre-wash.

Now suppose pre-wash state $(a, b, c)$ precedes post-wash state $(a, b, 0)$, which precedes pre-wash state $\left(a^{\prime}, b^{\prime}, c^{\prime}\right)$. The relations $a \leq c$ and $a^{\prime} \leq a+K$ lead to

$$
3 K>a+b+c \geq 2 a \geq 2\left(a^{\prime}-K\right)
$$

and similarly for $b^{\prime}$, whence $a^{\prime}, b^{\prime}<\frac{5}{2} K$. Since also $c^{\prime} \leq K$, a pre-wash bin, and a fortiori a post-wash bin, always contains less than $\frac{5}{2} K$.

Consider now the following scenario. For a start, we keep packing the three bins equally full before washing. Initialising at $(0,0,0)$, the first week will end at $\left(\frac{1}{3} K, \frac{1}{3} K, \frac{1}{3} K\right)$ pre-wash and $\left(\frac{1}{3} K, \frac{1}{3} K, 0\right)$ post-wash, the second week at $\left(\frac{5}{9} K, \frac{5}{9} K, \frac{5}{9} K\right)$ pre-wash and $\left(\frac{5}{9} K, \frac{5}{9} K, 0\right)$ post-wash, \&c. Following this scheme, we can get arbitrarily close to the state $(K, K, 0)$ after washing. Supposing this accomplished, placing $\frac{1}{2} K \mathrm{~kg}$ of laundry in each of the non-empty bins leaves us in a state close to $\left(\frac{3}{2} K, \frac{3}{2} K, 0\right)$ pre-wash and $\left(\frac{3}{2} K, 0,0\right)$ post-wash. Finally, the next week's worth of laundry is directed solely to the single non-empty bin. It may thus contain any amount of laundry below $\frac{5}{2} K \mathrm{~kg}$.
