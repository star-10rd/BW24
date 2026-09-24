*Answer:* $(a, b) \in \{(1, b) \mid b \in \mathbb{Z}^+\} \cup \{(3, 2), (9, 1)\}$.

Let us consider the case where $k \ge 2$. Then $k \le 2(k-1)$ and note that $b+1 \le 2b$ as $b \ge 1$. Put $(k-1)b =: x$, then $k(b+1) \le 4(k-1)b = 4x$. So $10^x \le 36x$. It is obvious that the only solutions in nonnegative integers to this inequality are $x = 0$ and $x = 1$. Indeed, for $x \ge 2$, the left hand side grows faster. Therefore, either $k = 1$ or $k = 2$ and $b = 1$.
Now we have only two cases left.

**Case 1:** $b = 1$ and $k = 2$. We are left with the equation $S(a^2) = a$, for $10 \le a < 100$. Then $a^2 < 10^4$, so $a = S(a^2) \le 9 \cdot 4 = 36$.
Moreover, taking into account the fact that the sum of digits does not change the number modulo 9, $a^2 \equiv a \pmod{9}$, i.e., $a(a - 1) \equiv 0 \pmod{9}$, therefore $a \equiv 0 \pmod{9}$ or $a \equiv 1 \pmod{9}$. So now we are left only with numbers $a \in \{10, 18, 19, 27, 28, 36\}$, which we can easily check by substitution and see that there are no solutions.

**Case 2:** $k=1$. In the same way, by checking modulo 9, we get that $a^{b+1} \equiv a^b \pmod{9}$ implies $a^b(a-1) \equiv 0 \pmod{9}$. Therefore either $a=1$ or $a$ is divisible by 3. $a=1$ is an obvious solution with all $b \in \mathbb{Z}^+$.
Otherwise, $a \in \{3, 6, 9\}$. But then $a^{b+1} < 10^{b+1}$ and $S(a^{b+1}) \le 9(b+1)$. Therefore, $3^b \le a^b = S(a^{b+1}) \le 9(b+1)$. But from $3^b \le 9(b+1)$, we can conclude $b \le 3$. Indeed, for $b \ge 4$, the left hand side increases faster. So we are left with $a \in \{3, 6, 9\}$ and $b \le 3$. We check all these cases to determine that only $(a, b) = (3, 2)$ or $(a, b) = (9, 1)$ are solutions.
