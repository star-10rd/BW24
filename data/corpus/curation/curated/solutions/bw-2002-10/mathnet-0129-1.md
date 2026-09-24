Solution:

If $N=11$, then the second player can simply remove numbers from the list, starting with the smallest number, until the sum of the remaining numbers is less than $212$. If the last number removed was not $24$ or $25$, then the sum of the remaining numbers is at least $212-23=189$. If the last number removed was $24$ or $25$, then only $24$'s and $25$'s remain, and there must be exactly $8$ of them since their sum must be less than $212$ and not less than $212-24=188$. Hence their sum $S$ satisfies $8 \cdot 24=192 \leqslant S \leqslant 8 \cdot 25=200$. In any case the second player wins.

On the other hand, if $N \leqslant 10$, then the first player can write $25$ two times and $23$ seven times. Then the sum of all numbers is $211$, but if at least one number is removed, then the sum of the remaining ones is at most $188$—so the second player cannot win.
