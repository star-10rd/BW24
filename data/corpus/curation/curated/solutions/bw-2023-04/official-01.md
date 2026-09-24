Let $P(x, y)$ denote the assertion of the given functional equation.

Claim 1: $f(0)=0$.

Proof. Note that $P(0, y)$ and $P(x, 0)$ gives us the following:

$$
\begin{aligned}
f(y+f(0)) & =f(y)+f(0) \\
f(f(x))+x f(0) & =f(0)+f(x) .
\end{aligned}
$$

Consider the first expression. Plugging $y=-f(0)$ in it yields

$$
f(-f(0)+f(0))=f(-f(0))+f(0) \text {, i.e. } f(-f(0))=0 \text {. }
$$

If we denote $-f(0)=a$, then we have $f(a)=0$. Plugging $x=a$ in the second expression gives us:

$$
f(f(a))+a f(0)=f(0)+f(a) \text {, i.e. } a f(0)=0 \text {. }
$$

This either means that $a=0$, i.e. $f(0)=0$ or $f(0)=0$. In both cases the claim is proved.

Since $f(0)=0$, the expression $P(x, 0)$ becomes

$$
f(f(x))=f(x) .
$$

Claim 2: $f(1)=1$ or $f(x)=0$ for all real numbers $x$.

Proof. Consider $P(x, 1)$ :

$$
f(f(x)+1)+x f(1)=f(x+1)+f(x) .
$$

Replacing $x$ by $f(x)$ and using $(*)$ leads to:

$$
\begin{aligned}
f(f(f(x))+1)+f(x) f(1) & =f(f(x)+1)+f(f(x)) \\
f(f(x)+1)+f(x) f(1) & =f(f(x)+1)+f(x) \\
f(x) f(1) & =f(x) .
\end{aligned}
$$

Suppose that there does not exist such $b$ that $f(b) \neq 0$, then $f(x)=0$ for all real numbers $x$. Otherwise $f(b) f(1)=f(b)$ implies $f(1)=1$ as desired.

Claim 3: If $f(1)=1$ and $f(a)=0$, then $a=0$.

Proof. Suppose $f(a)=0$ for some real number $a$. Then $P(a, 1)$ gives us

$$
\begin{aligned}
f(f(a)+1)+a f(1) & =f(a+1)+f(a) \\
f(1)+a=f(a+1) & =a+1
\end{aligned}
$$

On the other hand $P(1, a)$ leads us to the following:

$$
\begin{aligned}
f(f(1)+a)+f(a) & =f(2 a)+f(1) \\
f(a+1) & =f(2 a)+1 \\
a+1 & =f(2 a)+1 \\
f(2 a) & =a .
\end{aligned}
$$

Taking $f$ from both sides in the last relation and using $(*)$ leads to:

$$
0=f(a)=f(f(2 a))=f(2 a)=a .
$$

This proves the claim.

To finish the problem, consider $P(x, x-f(x))$ :

$$
x f(x-f(x))=f((x-f(x)) \cdot(x+1)) .
$$

Setting $x=-1$ gives us

$$
-f(-1-f(-1))=f((-1-f(-1)) \cdot 0)=f(0)=0 .
$$

From Claim 3 for $f \not \equiv 0$ we obtain that $-1-f(-1)=0$ implies $f(-1)=-1$. Now looking at $P(-1, y)$ and replacing $y$ by $y+1$, we get that

$$
f(y-1)=f(y)-1 \text { implies } f(y+1)=f(y)+1 \text {. }
$$

On the other hand, $P(x, 1)$, the previous relation and $\left(^{*}\right)$ give us the following:

$$
\begin{aligned}
f(f(x)+1)+x & =f(x+1)+f(x) \\
f(f(x))+1+x & =f(x)+1+f(x) \\
f(x)+x & =2 f(x) \\
f(x) & =x .
\end{aligned}
$$

Thus, the only possible functions that satisfy the given relation are $f(x)=x$ and $f(x)=0$. It is easy to check that they indeed solve the functional equation.
