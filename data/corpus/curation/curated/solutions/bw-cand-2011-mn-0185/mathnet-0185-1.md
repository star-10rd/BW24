Let us denote $f(0) = c$. Assume that $c \neq 0$. Taking $x = y = 0$ in the initial equation we get $c f(c) = 0$. Hence, $f(c) = 0$. Taking $y = c$ and $c - x$ instead of $x$ in the initial equation and dividing it by $c$ gives us the equality $f(x) = x - c$. Direct verification shows that no such function satisfies the given equality. Hence, $c = f(0) = 0$.

Assume that $f(y_0) = 0$ for some $y_0 \neq 0$. Initial equation with $y = y_0$ becomes $y_0 f(y_0 - x) = 0$. Thus, $f(x) = 0$ for any real $x$, and this function satisfies the condition of the problem.

Now assume that $f(y_0) = 0$ only for $y_0 = 0$. For any $y \in \mathbb{R}$ the equality $f(f(y)) = y$ holds. Indeed, it holds for $y = 0$, and taking $x = 0$ in the initial equation gives us $y f(y) = f(f(y)) f(y)$, which proves that $f(f(y)) = y$ for $y \neq 0$.

The initial equation can now be rewritten as follows:
$$
y(x + f(y - x)) = f(f(x + y) - x) f(y). \quad (1)
$$
We will prove that for any $x \in \mathbb{R}$ the following equality holds:
$$
f(x) - f(-x) = 2x. \quad (2)
$$
Assume that it does not hold for some $x = x_0$. Taking $x = x_0$, $y = f(x_0) - x_0$ in (1) gives us the equality
$$
(f(x_0) - x_0)(x_0 + f(f(x_0) - 2x_0)) = 0.
$$
If $f(x_0) \neq x_0$ then $f(f(x_0) - 2x_0) = -x_0 \implies f(x_0) - 2x_0 = f(f(f(x_0) - 2x_0)) = f(-x_0) \implies f(x_0) - f(-x_0) = 2x_0$ which is contrary to our assumption. Thus, $f(x_0) = x_0$. Similarly, taking $x = -x_0$, $y = f(-x_0) + x_0$ in (1) one can prove that $f(-x_0) = -x_0$. However, this implies $f(x_0) - f(-x_0) = x_0 - (-x_0) = 2x_0$ again, and we obtain a contradiction.

Now we take $x = -y$ in (1):
$$
y f(2y) = y^2 + f^2(y). \quad (3)
$$
Similarly,
$$
-y f(-2y) = y^2 + f^2(-y). \quad (4)
$$
We add (3) and (4) and use (2) twice:
$$
4y^2 = y(f(2y)-f(-2y)) = 2y^2 + f^2(y) + f^2(-y) = 2y^2 + f^2(y) + (f(y)-2y)^2 \implies (f(y)-y)^2 = 0
$$
Hence, we have proved that $f(y) = y$ for all $y \in \mathbb{R}$. This function satisfies the condition of the problem.
