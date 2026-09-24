Solution:

Use induction. For $n=1$ the inequality reads $t^{2} \geqslant (t-1)^{2} + (2 t-1)$ which is obviously true. To prove the induction step it suffices to show that
$$
t^{2}(t-1)^{2 n} + t^{2}(2 t-1)^{n} \geqslant (t-1)^{2 n+2} + (2 t-1)^{n+1}
$$
This easily follows from $t^{2} \geqslant (t-1)^{2}$ (which is true for $t \geqslant \frac{1}{2}$) and $t^{2} \geqslant 2 t-1$ (which is true for any real $t$).


Alternative solution. Note that
$$
t^{2 n} = \left(t^{2}\right)^{n} = \left((t-1)^{2} + (2 t-1)\right)^{n}.
$$
Applying the binomial formula to the right-hand side we obtain a sum containing both summands of the right-hand side of the given equality and other summands each of which is clearly non-negative.
