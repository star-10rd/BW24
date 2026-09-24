For every $\varepsilon=\left(\varepsilon_{1}, \ldots, \varepsilon_{n}\right) \in\{ \pm 1\}^{2017}$ let

$$
P_{\varepsilon}\left(X_{1}, \ldots, X_{2017}\right)=\varepsilon_{1} X_{1}+\cdots+\varepsilon_{2017} X_{2017}
$$

and $\beta_{\varepsilon}=\varepsilon_{1} \cdots \varepsilon_{2017}$. Consider

$$
\begin{aligned}
g\left(X_{1}, \ldots, X_{k}\right) & :=\sum_{\varepsilon}\left(\beta_{\varepsilon} P_{\varepsilon}\left(X_{1}, \ldots, X_{2017}\right)\right)^{2017} \\
& =\sum_{\varepsilon_{1}, \ldots, \varepsilon_{2017}} \varepsilon_{1} \cdots \varepsilon_{2017}\left(\varepsilon_{1} X_{1}+\cdots+\varepsilon_{2017} X_{2017}\right)^{2017}
\end{aligned}
$$

If we choose $X_{1}=0$, then every combination $\left(\varepsilon_{2} X_{2}+\cdots+\varepsilon_{2017} X_{2017}\right)^{2017}$ occurs exactly twice and with opposite signs in the above sum. Hence, $g\left(0, X_{2}, \ldots, X_{2017}\right) \equiv 0$. The analogous statements are true for all other variables. Consequently, $g$ is divisible by $X_{1} \ldots X_{2017}$, and thereby of the form $c X_{1} \ldots X_{2017}$ for some real constant $c$. If $c \neq 0$, then both sides can be divided by $c$, and we obtain a representation with $n=2^{2017}$ linear forms.

With $X_{1}=\cdots=X_{2017}=1$ we get

$$
\begin{aligned}
c & =\sum_{\varepsilon} \varepsilon_{1} \cdot \ldots \cdot \varepsilon_{2017}\left(\varepsilon_{1}+\ldots+\varepsilon_{2017}\right)^{2017} \\
& =\sum_{\varepsilon} \sum_{\substack{k_{1}, \ldots, k_{2017} \\
k_{1}+\ldots+k_{2017}=2017}}\left(\begin{array}{c}
2017 \\
k_{1}, \ldots, k_{2017}
\end{array}\right) \varepsilon_{1}^{k_{1}+1} \cdot \ldots \cdot \varepsilon_{2017}^{k_{2017}+1}
\end{aligned}
$$

The part of the sum with $k_{1}$ even is zero since

$$
\sum_{\substack{k_{1} \text { even,.,.,k } \\
k_{1}+\ldots+k_{2017}=2017}}\left(\begin{array}{c}
2017 \\
k_{1}, \ldots, k_{2017}
\end{array}\right)\left(\sum_{\varepsilon, \varepsilon_{1}=1} \varepsilon_{2}^{k_{2}+1} \cdot \ldots \cdot \varepsilon_{2017}^{k_{2017}+1}+\sum_{\varepsilon, \varepsilon_{1}=-1}(-1)^{k_{1}+1} \cdot \ldots \cdot \varepsilon_{2017}^{k_{2017}+1}\right)=0
$$

Now we may consider the part of the sum with $k_{1}$ odd. Similarly the part of this new sum with $k_{2}$ even equals 0 . Doing this for all the variables we get

$$
c=\sum_{\varepsilon=1} \sum_{\substack{k_{1} \text { odd, }, \ldots, k_{2017} \text { odd } \\
k_{1}+\ldots+k_{2017}=2017}}\left(\begin{array}{c}
2017 \\
k_{1}, \ldots, k_{2017}
\end{array}\right)=2^{2017}\left(\begin{array}{c}
2017 \\
1, \ldots, 1
\end{array}\right)=2^{2017} \cdot 2017 ! \neq 0
$$

forms.

Finally, we can even merge the two forms with opposite choices of the signs to obtain a representation with $2^{2016}$ linear
