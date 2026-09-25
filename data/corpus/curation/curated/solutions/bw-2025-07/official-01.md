## Solution

We prove that the answer is

$$
K=\frac{n^2}{4}.
$$

For the construction, consider the $2\times2\times2$ case and then divide each of these large prisms into $\frac{n^2}{4}$ smaller prisms.

Let $n=2k$. Consider all $1\times2k\times2k$ prisms; there are $6k$ of them. Call them *plates*. Each plate can contain needles of only one orientation.

Assume that it is possible to choose $k^2+1$ needles of each orientation. We will show that each needle orientation must then be contained in at least $2k+1$ plates, contradicting the fact that there are only $6k$ plates altogether.

Fix one needle orientation. Each needle of this orientation can be contained in only two orientations of plates, call them $c_1$ and $c_2$. Each needle corresponds to a unique pair consisting of one plate of orientation $c_1$ and one of orientation $c_2$. If $p_1$ plates of orientation $c_1$ contain needles of the fixed orientation, and similarly $p_2$ plates of orientation $c_2$ do, then there are at most $p_1p_2$ such needles. Therefore

$$
(p_1+p_2)^2\ge4p_1p_2\ge4(k^2+1)>4k^2,
$$

so $p_1+p_2>2k$, hence $p_1+p_2\ge2k+1$. Doing this for each of the three needle orientations would require at least $3(2k+1)>6k$ plates, a contradiction. Thus $K\le k^2=n^2/4$, and the construction gives equality.
