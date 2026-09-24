Suppose the square has side length $1$ and centre $C$. Denote the radii of the two disks by $x$ and $y$ and the distance between their centres by $d$. The centres of the circles are then restricted within two squares centred at $C$ of sides $1 - 2x$ and $1 - 2y$, respectively. The farthest they can be from each other is then the length of the diagonal of a square of side length $1 - x - y$. Since of course their minimal distance is $x + y$, we get the inequality
$$
x + y \le d \le \sqrt{2}(1 - x - y),
$$
which leads to
$$
0 \le x + y \le \frac{\sqrt{2}}{1 + \sqrt{2}} = 2 - \sqrt{2}.
$$
At the same time, we obviously have $0 \le x, y \le \frac{1}{2}$. Interpreting these constraints geometrically, it is clear that the area covered by the disks is maximized by $x = \frac{1}{2}$, $y = \frac{3}{2} - \sqrt{2}$ (or vice versa):
$$
\pi(x^2 + y^2) \le \pi\left(\left(\frac{1}{2}\right)^2 + \left(\frac{3}{2} - \sqrt{2}\right)^2\right) = \pi\left(\frac{9}{2} - 3\sqrt{2}\right).
$$
This maximum is attained when the larger circle is inscribed in the square, and the smaller one fits in one of the four small gaps left over.

In order to cover a larger portion of the square, let, as before, the larger circle remain where it is, but enlarge the smaller circle slightly, so that it still touches the square on two sides, until its centre lies on the larger circle. Its radius will then be $\frac{1}{2} - \frac{1}{4}\sqrt{2}$. More than half of its interior lies outside the larger circle (because this is convex), so we have now covered, in addition to the larger circle, a portion of the square that has area at least
$$
\frac{\pi}{2} \left( \frac{1}{2} - \frac{1}{4} \sqrt{2} \right)^2 = \pi \left( \frac{\sqrt{2}}{4} - \frac{1}{4} \right)^2 > \pi \left( \frac{3}{2} - \sqrt{2} \right)^2,
$$
which is the area that was covered before by the smaller circle. We conclude that it is possible.
