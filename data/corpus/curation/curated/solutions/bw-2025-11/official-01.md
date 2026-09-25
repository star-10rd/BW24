## Solution

The answer is

$$
\left\lfloor\frac n2\right\rfloor.
$$

Number the points so that $A_1,\ldots,A_n$ is the Baltic Way of length $L$. Regard this tour cyclically as a circle: $A_i$ and $A_{i+1}$ are adjacent, $A_n$ and $A_1$ are adjacent, and the indices increase clockwise.

Now consider another Baltic Way $A_{i_1},\ldots,A_{i_n}$. For an adjacent pair $A_{i_1},A_{i_2}$ of this second tour there are two paths between the points along the first tour.

If $i_1<i_2$, then going clockwise and using the triangle inequality gives

$$
|A_{i_1}A_{i_2}|
\le
|A_{i_1}A_{i_1+1}|+\cdots+|A_{i_2-1}A_{i_2}|,
$$

while going counterclockwise gives

$$
|A_{i_1}A_{i_2}|
\le
|A_{i_1}A_{i_1-1}|+\cdots+|A_1A_n|+\cdots+|A_{i_2+1}A_{i_2}|.
$$

If $i_1>i_2$, then going clockwise gives

$$
|A_{i_1}A_{i_2}|
\le
|A_{i_1}A_{i_1+1}|+\cdots+|A_nA_1|+\cdots+|A_{i_2-1}A_{i_2}|,
$$

and going counterclockwise gives

$$
|A_{i_1}A_{i_2}|
\le
|A_{i_1}A_{i_1-1}|+\cdots+|A_{i_2+1}A_{i_2}|.
$$

In either case, adding the clockwise and counterclockwise bounds gives

$$
2|A_{i_1}A_{i_2}|\le L.
$$

This applies to every adjacent pair of the second tour, so summing over its $n$ edges gives

$$
2K\le nL.
$$

We now use the two directed collections of inequalities more carefully. For every adjacent pair of the $K$-tour, choose the clockwise path along the $L$-tour and add the corresponding triangle inequalities. Because the combined directed walk ends where it starts, each edge of the $L$-tour is counted the same integer number $a$ of times, and hence

$$
K\le aL.
$$

Doing the same counterclockwise gives

$$
K\le bL
$$

for another integer $b$. Taken together, the clockwise and counterclockwise paths for every edge of the $K$-tour use each edge of the $L$-tour exactly $n$ times in total, so

$$
a+b=n.
$$

Therefore

$$
K\le \min(a,b)L
\le
\left\lfloor\frac n2\right\rfloor L,
$$

and thus

$$
\frac KL\le\left\lfloor\frac n2\right\rfloor.
$$

It remains to show that equality can occur.

If $n=2k$ is even, take

$$
A_1=\cdots=A_k=(0,0),
\qquad
A_{k+1}=\cdots=A_n=(0,1).
$$

For the tour in index order,

$$
L=2.
$$

Choose the order

$$
(i_1,\ldots,i_n)=(1,k+1,2,k+2,\ldots,k,2k).
$$

Every edge of this tour has length $1$, so $K=n$ and

$$
\frac KL=\frac n2.
$$

If $n=2k+1$ is odd, take

$$
A_1=\cdots=A_{k+1}=(0,0),
\qquad
A_{k+2}=\cdots=A_{2k+1}=(0,1).
$$

Again $L=2$. Choose

$$
(i_1,\ldots,i_n)
=(1,k+2,2,k+3,\ldots,k,2k+1,k+1).
$$

This tour has $2k=n-1$ edges of length $1$ and one edge of length $0$, so $K=n-1$. Hence

$$
\frac KL
=
\frac{n-1}{2}
=
\left\lfloor\frac n2\right\rfloor.
$$
