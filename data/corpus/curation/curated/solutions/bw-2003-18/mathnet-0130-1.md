Solution:

A colouring with the required property can be defined as follows. For a non-zero integer $k$ let $k^{*}$ be the integer uniquely defined by $k = 5^{m} \cdot k^{*}$, where $m$ is a nonnegative integer and $5 \nmid k^{*}$. We also define $0^{*} = 0$. Two non-zero integers $k_{1}, k_{2}$ receive the same colour if and only if $k_{1}^{*} \equiv k_{2}^{*} \pmod{5}$; we assign $0$ any colour.

Assume $a, b, c, d$ have the same colour and that $3a - 2b = 2c - 3d$, which we rewrite as $3a - 2b - 2c + 3d = 0$. Dividing both sides by the largest power of $5$ which simultaneously divides $a, b, c, d$ (this makes sense since not all of $a, b, c, d$ are $0$), we obtain

$$
3 \cdot 5^{A} \cdot a^{*} - 2 \cdot 5^{B} \cdot b^{*} - 2 \cdot 5^{C} \cdot c^{*} + 3 \cdot 5^{D} \cdot d^{*} = 0,
$$

where $A, B, C, D$ are nonnegative integers at least one of which is equal to $0$. The above equality implies

$$
3\left(5^{A} \cdot a^{*} + 5^{B} \cdot b^{*} + 5^{C} \cdot c^{*} + 5^{D} \cdot d^{*}\right) \equiv 0 \pmod{5}.
$$

Assume $a, b, c, d$ are all non-zero. Then $a^{*} \equiv b^{*} \equiv c^{*} \equiv d^{*} \not\equiv 0 \pmod{5}$. This implies

$$
5^{A} + 5^{B} + 5^{C} + 5^{D} \equiv 0 \pmod{5}
$$

which is impossible since at least one of the numbers $A, B, C, D$ is equal to $0$. If one or more of $a, b, c, d$ are $0$, we simply omit the corresponding terms from (1), and the same conclusion holds.
