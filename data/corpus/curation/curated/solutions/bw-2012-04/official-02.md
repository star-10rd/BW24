Observe first that for any integer $c>2$ the equations $x=x-0$ and $x^{2}=c x-1$ have two common distinct positive solutions whose product equals 1 . Let those solutions be $x_{1}$ and $x_{2}$.

Define a sequence $\left(f_{n}\right)$ by $f_{0}=0, f_{1}=1$, and $f_{n+2}=c f_{n+1}-f_{n}, n \geq 0$. Suppose that $x_{1}$ and $x_{2}$ are also common solutions of the equations $x^{n}=f_{n} x-f_{n-1}$ and $x^{n+1}=f_{n+1} x-f_{n}$, then the following equalities hold for $x=x_{1}$ and $x=x_{2}$ :

$$
\begin{aligned}
& x^{n+2}-f_{n+2} x+f_{n+1}=x^{n+2}-\left(c f_{n+1}-f_{n}\right) x+\left(c f_{n}-f_{n-1}\right) \\
= & x^{n+2}-c\left(f_{n+1} x-f_{n}\right)+\left(f_{n} x-f_{n-1}\right)=x^{n+2}-c x^{n+1}+x^{n}=x^{n}\left(x^{2}-c x+1\right)=0,
\end{aligned}
$$

which shows that $x_{1}$ and $x_{2}$ are solutions of $x^{n+2}=f_{n+2} x-f_{n+1}$ as well.

Now note that for different integers $c$, all corresponding members of the sequences $\left(f_{n}\right)$ are different. At first note that these sequences $\left(f_{n}\right)$ are strictly increasing: by inductive argument we have

$$
f_{n+2}-f_{n+1}=(c-1) f_{n+1}-f_{n}>f_{n+1}-f_{n}>0 .
$$

This also shows that all members are positive.

Now, let us have integers $c$ and $c^{\prime}$ with $c^{\prime} \geq c+1>3$ and let the corresponding sequences be $\left(f_{n}\right)$ and $\left(f_{n}^{\prime}\right)$. Then again by induction

$f_{n+2}^{\prime} \geq(c+1) f_{n+1}^{\prime}-f_{n}^{\prime}=c f_{n+1}^{\prime}+\left(f_{n+1}^{\prime}-f_{n}^{\prime}\right)>c f_{n+1}^{\prime}>c f_{n+1}>c f_{n+1}-f_{n}=f_{n+2}$.

We have shown that for all integers $c>2$, the respective pairs $\left(f_{2012},-f_{2011}\right)$ are different, as desired.
