Let $f(0) = a$ and $f(1) = b$.
Then $f(f(0)) = f(a)$.
But $f(f(0)) = 0^2 - 0 + 1 = 1$. So $f(a) = 1$.
Also $f(f(1)) = f(b)$.
But $f(f(1)) = 1^2 - 1 + 1 = 1$. So $f(b) = 1$.
From (1), $f(f(a)) = f(1)$.
But $f(f(a)) = a^2 - a + 1$. So $a^2 - a + 1 = b$.
From (2), $f(f(b)) = f(1)$, giving $b^2 - b + 1 = b$. So $b = 1$.
Putting $b = 1$ in (3) gives $a = 0$ or $1$.
But $a = 0 \Rightarrow f(0) = 0 \Rightarrow f(f(0)) = 0$, contradicting (1).
So $a = 1$, i.e. $f(0) = 1$.
