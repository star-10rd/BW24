Answer: 24.
Let the number of $2 \times 5 \times 8$ bricks in the box be $x$, and the number of $2 \times 3 \times 7$ bricks $y$. We must figure out the sum $x + y$. The volume of the box is divisible by $7$, and so is the volume of any $2 \times 3 \times 7$ brick. The volume of a $2 \times 5 \times 8$ brick is not divisible by $7$, which means that $x$ must be divisible by $7$.

The volume of the box is $10 \cdot 11 \cdot 14$. The volume of the $2 \times 5 \times 8$ bricks in the box is $x \cdot 2 \cdot 5 \cdot 8 = 80x$. Since this volume cannot exceed the volume of the box, we must have
$$
x \le \frac{10 \cdot 11 \cdot 14}{80} = \frac{11 \cdot 7}{4} = \frac{77}{4} < 20.
$$
Since $x$ was divisible by $7$, and certainly nonnegative, we conclude that $x$ must be $0$, $7$ or $14$. Let us explore each of these possibilities separately.

If we had $x = 0$, then the volume of the $2 \times 3 \times 7$ bricks, which is $y \cdot 2 \cdot 3 \cdot 7$, would be equal to the volume of the box, which is $10 \cdot 11 \cdot 14$. However, this is not possible since the volume of the $2 \times 3 \times 7$ bricks is divisible by three whereas the volume of the box is not. Thus $x$ must be $7$ or $14$.

If we had $x = 7$, then equating the total volume of the bricks with the volume of the box would give
$$
7 \cdot 2 \cdot 5 \cdot 8 + y \cdot 2 \cdot 3 \cdot 7 = 10 \cdot 11 \cdot 14,
$$
so that
$$
y \cdot 2 \cdot 3 \cdot 7 = 10 \cdot 11 \cdot 14 - 7 \cdot 2 \cdot 5 \cdot 8 = 1540 - 560 = 980.
$$
However, again the left-hand side, the volume of the $2 \times 3 \times 7$ bricks, is divisible by three, whereas the right-hand side, $980$, is not. Thus we cannot have $x = 7$ either, and the only possibility is $x = 14$.

Since $x = 14$, equating the volumes of the bricks and the box gives
$$
14 \cdot 2 \cdot 5 \cdot 8 + y \cdot 2 \cdot 3 \cdot 7 = 10 \cdot 11 \cdot 14,
$$
which in turn leads to
$$
y \cdot 2 \cdot 3 \cdot 7 = 10 \cdot 11 \cdot 14 - 14 \cdot 2 \cdot 5 \cdot 8 = 1540 - 1120 = 420,
$$
so that
$$
y = \frac{420}{2 \cdot 3 \cdot 7} = \frac{420}{42} = 10.
$$
Thus the number of bricks in the box can only be $14 + 10 = 24$. Finally, for completeness, let us observe that $14$ bricks with dimensions $2 \times 5 \times 8$ can be used to fill a volume with dimensions $10 \times 8 \times 14$, and $10$ bricks with dimensions $2 \times 3 \times 7$ can be used to fill a volume with dimensions $10 \times 3 \times 14$, so that these $24$ bricks can indeed be packed in the box.
