## Solution

The answer is $N=99$.

We solve the more general problem with $n\ge5$ integers on the blackboard.

Since Anna can reach a state with one integer on the board, there must be a valid first move. Hence a terminal state obtained from the same initial position can contain at most $n-1$ numbers, so

$$
N\le n-1.
$$

For the reverse inequality, let $q,p_1,\ldots,p_{n-2}$ be distinct primes and put on the board

$$
qp_1,
\ p_1,
\ p_1p_2,
\ p_2p_3,
\ldots,
\ p_{n-3}p_{n-2},
\ p_{n-2}p_1.
$$

On the one hand, Anna can make the moves

$$
(p_1,p_1p_2)\mapsto p_2,
\quad
(p_2,p_2p_3)\mapsto p_3,
\quad\ldots\quad,
(p_{n-2},p_{n-2}p_1)\mapsto p_1,
\quad
(p_1,qp_1)\mapsto q,
$$

after which only $q$ remains on the board.

On the other hand, Anna can instead begin with

$$
(p_1,qp_1)\mapsto q.
$$

The remaining numbers are

$$
q,
\ p_1p_2,
\ldots,
\ p_{n-3}p_{n-2},
\ p_{n-2}p_1,
$$

and none of them divides another. Thus the game ends with $n-1$ numbers. Therefore the maximum in the general problem is $n-1$, and for $n=100$ we get

$$
N=99.
$$

**Remark.** There are other constructions. For example, let $q,p_1,\ldots,p_{n-2}$ again be distinct primes and start with

$$
qp_1,
\ qp_2,
\ldots,
\ qp_{n-2},
\ q^{n-3},
\ q^{n-3}p_1p_2\cdots p_{n-2}.
$$

One possible sequence of moves is

$$
(qp_1,q^{n-3}p_1p_2\cdots p_{n-2})
\mapsto
q^{n-4}p_2\cdots p_{n-2},
$$

$$
(qp_2,q^{n-4}p_2\cdots p_{n-2})
\mapsto
q^{n-5}p_3\cdots p_{n-2},
$$

continuing in this way until

$$
(qp_{n-3},qp_{n-3}p_{n-2})\mapsto p_{n-2},
$$

then

$$
(p_{n-2},qp_{n-2})\mapsto q,
\qquad
(q,q^{n-3})\mapsto q^{n-4}.
$$

Only $q^{n-4}$ remains.

On the other hand, Anna can make the single move

$$
(q^{n-3},q^{n-3}p_1p_2\cdots p_{n-2})
\mapsto
p_1p_2\cdots p_{n-2}.
$$

The numbers then left on the board are

$$
qp_1,
\ qp_2,
\ldots,
\ qp_{n-2},
\ p_1p_2\cdots p_{n-2},
$$

none of which divides another.
