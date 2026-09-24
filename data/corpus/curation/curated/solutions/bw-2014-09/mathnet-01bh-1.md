For any $n$ it is possible to set $n$ marks on the board and get the desired property, if they are simply put on every field on row $\lfloor \frac{n}{2} \rfloor$. We now show that $n$ is also the minimum amount of marks needed.

If $n$ is odd there are $2n$ series of diagonal cells with length $> \frac{n}{2}$ and both end cells on the edge of the board, and since every mark on the board can at most lie on two of these diagonals, it is necessary to set at least $n$ marks to have a mark on every one of them.

If $n$ is even there are $2n-2$ series of diagonal cells with length $> \frac{n}{2}$ and both end cells on the edge of the board. We call one of these diagonals even if every coordinate $(x, y)$ on it satisfies $2 \mid x - y$ and odd else. It can easily be seen that this is well defined. Now by symmetry there are equally many odd and even diagonals, so there must be $n-1$ of each. Any mark set on the board can at most sit on two diagonals and these two have to be of the same kind. Thus we will need $\frac{n}{2}$ marks for the even diagonals, since there are $n-1$ of them, and $2 \nmid n-1$, and similarly we need $\frac{n}{2}$ marks for the odd diagonals.

So we need at least $n$ marks to get the desired property.
