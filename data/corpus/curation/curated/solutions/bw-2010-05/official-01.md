Setting $x=0$ in the equation we get $f(0) f(y)=(2-y) f(0)$. If $f(0) \neq 0$, then $f(y)=2-y$ and it is easy to verify that this is a solution to the equation.

Now assume $f(0)=0$. Setting $y=0$ in the equation we get $f\left(x^{2}\right)=x f(x)$. Interchanging $x$ and $y$ and subtracting from the original equation we get

$$
x f(x)-y f(y)=y f(x)-x f(y)+(x-y) f(x+y)
$$

or equivalently

$$
(x-y)(f(x)+f(y))=(x-y) f(x+y) \text {. }
$$

For $x \neq y$ we therefore have $f(x+y)=f(x)+f(y)$. Since $f(0)=0$ this clearly also holds for $x=0$, and for $x=y \neq 0$ we have

$$
f(2 x)=f\left(\frac{x}{3}\right)+f\left(\frac{5 x}{3}\right)=f\left(\frac{x}{3}\right)+f\left(\frac{2 x}{3}\right)+f(x)=f(x)+f(x) .
$$

Setting $x=y$ in the original equation, using $f\left(x^{2}\right)=x f(x)$ and $f(2 x)=2 f(x)$ we get

$$
0=f(x)^{2}+x f(x)=f(x)(f(x)+x) .
$$

So for each $x$, either $f(x)=0$ or $f(x)=-x$. But then

$$
f(x)+f(y)=f(x+y)= \begin{cases}0 & \text { or } \\ -(x+y)\end{cases}
$$

and we conclude that $f(x)=-x$ if and only if $f(y)=-y$ when $x, y \neq 0$. We therefore have either $f(x)=-x$ for all $x$ or $f(x)=0$ for all $x$. It is easy to verify that both are solutions to the original equation.
