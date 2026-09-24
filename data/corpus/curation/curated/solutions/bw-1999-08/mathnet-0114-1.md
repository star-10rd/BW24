Solution:

It is possible to find the $1000$-th coin (i.e. the medium one among the $1999$ coins). First we exclude the lightest and heaviest coin—for this we use $1997$ weighings, putting the medium-weighted coin aside each time. Next we exclude the $2$-nd and $1998$-th coins using $1995$ weighings, etc. In total we need
$$
1997 + 1995 + 1993 + \ldots + 3 + 1 = 999 \cdot 999 < 1000000
$$
weighings to determine the $1000$-th coin in such a way.

It is not possible to determine the position by weight of any other coin, since we cannot distinguish between the $k$-th and $(2000-k)$-th coin. To prove this, label the coins in some order as $a_{1}, a_{2}, \ldots, a_{1999}$. If a procedure for finding the $k$-th coin exists then it should work as follows. First we choose some three coins $a_{i_{1}}, a_{j_{1}}, a_{k_{1}}$, find the medium-weighted one among them, then choose again some three coins $a_{i_{2}}, a_{j_{2}}, a_{k_{2}}$ (possibly using the information obtained from the previous weighing), etc. The results of these weighings can be written in a table like this:

| Coin 1      | Coin 2      | Coin 3      | Medium      |
| :---:       | :---:       | :---:       | :---:       |
| $a_{i_{1}}$ | $a_{j_{1}}$ | $a_{k_{1}}$ | $a_{m_{1}}$ |
| $a_{i_{2}}$ | $a_{j_{2}}$ | $a_{k_{2}}$ | $a_{m_{2}}$ |
| $\ldots$   | $\ldots$   | $\ldots$   | $\ldots$   |
| $a_{i_{n}}$ | $a_{j_{n}}$ | $a_{k_{n}}$ | $a_{m_{n}}$ |

Suppose we make a decision "$a_{k}$ is the $k$-th coin" based on this table. Now let us exchange labels of the lightest and the heaviest coins, of the $2$-nd and $1998$-th (by weight) coins, etc. It is easy to see that, after this relabeling, each step in the procedure above gives the same result as before—but if $a_{k}$ was previously the $k$-th coin by weight, then now it is the $(2000-k)$-th coin, so the procedure yields a wrong coin which gives us the contradiction.
