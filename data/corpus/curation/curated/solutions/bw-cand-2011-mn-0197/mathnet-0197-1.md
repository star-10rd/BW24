Let $n$ be fixed. Consider the number that is obtained by increasing or decreasing one of its digits by $i$, i.e., the number $n \pm bi$ where $b = 10^k$ for some $k$. Then
$$
\begin{align*} 
\frac{n \pm bi}{S(n \pm bi)} > \frac{n}{S(n)} &\iff \frac{n \pm bi}{S(n) \pm i} > \frac{n}{S(n)} \\ 
&\iff \frac{n \pm bi}{n} > \frac{S(n) \pm i}{S(n)} \\ 
&\iff 1 \pm \frac{bi}{n} > 1 \pm \frac{i}{S(n)} \\ 
&\iff \pm \frac{bi}{n} > \pm \frac{i}{S(n)} \\ 
&\iff \pm b > \pm \frac{n}{S(n)}. 
\end{align*}
$$
The last inequality is equivalent to $\frac{n}{S(n)} < b$ in the case of plus and to $\frac{n}{S(n)} > b$ in the case of minus.
This shows that no number $n$ with the property described in the problem can contain digits 2 through 8. Otherwise, this digit could be both increased and decreased leading to contradictory conclusions since the ratio of the number and its sum of digits increases in both cases.
It remains to show that the numbers with the desired property can contain digits 0, 1, 9. For that, we prove that 1099 has the desired property. Let $n = \overline{d_3d_2d_1d_0}$ be an arbitrary 4-digit number. For arbitrary positive integer $x$, denote $R(x) = \frac{x}{S(x)}$.
If $d_0 < 9$ then the last digit can be increased. As $d_3 > 0$ implies
$$
R(\overline{d_3d_2d_19}) = \frac{1000d_3 + 100d_2 + 10d_1 + 9}{d_3 + d_2 + d_1 + 9} > 1,
$$
we obtain $R(\overline{d_3d_2d_19}) < R(n)$.
If $d_1 < 9$ then the tens digit can be increased. As
$$
R(\overline{d_3d_299}) = \frac{1000d_3 + 100d_2 + 99}{d_3 + d_2 + 9 + 9} > \frac{1000}{9 + 9 + 9 + 9} > \frac{1000}{100} = 10,
$$
If $d_3 > 1$ then the thousands digit can be decreased. As
$$
R(\overline{1d_299}) = \frac{1000 + 100d_2 + 99}{1 + d_2 + 9 + 9} < \frac{9000}{9} = 1000,
$$
we obtain $R(\overline{1d_299}) < R(\overline{d_3d_299})$.
Finally if $d_2 > 0$ then the hundreds digit can be decreased. As
$$
R(1099) = \frac{1099}{19} < 100,
$$
we obtain $R(1099) < R(\overline{1d_299})$. Consequently,
$$
R(1099) \le R(\overline{1d_299}) \le R(\overline{d_3d_299}) \le R(\overline{d_3d_2d_19}) \le R(n),
$$
whereby all equalities hold simultaneously only if $n = 1099$. This completes the proof.
