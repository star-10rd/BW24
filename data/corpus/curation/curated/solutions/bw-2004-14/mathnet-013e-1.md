Solution:

Answer: The first player has a winning strategy when $n \equiv 0,1,2 \pmod{4}$; otherwise the second player has a winning strategy.

Let $n=4k+r$, where $0 \leq r \leq 3$. We will prove the above answer by induction on $k$; clearly it holds for $k=1$. We are also going to need the following useful fact:

If at some point there are exactly two piles with $4s+1$ and $4t+1$ nuts, $s+t \leq k$, then the second player to move from that point wins.

This holds vacuously when $k=1$.

Now assume that we know the answer when the starting pile consists of at most $4k-1$ nuts, and that the useful fact holds for $s+t \leq k$. We will prove the answer is correct for $4k, 4k+1, 4k+2$ and $4k+3$, and that the useful fact holds for $s+t \leq k+1$. For the sake of bookkeeping, we will refer to the first player as $A$ and the second player as $B$.

If the pile consists of $4k, 4k+1$ or $4k+2$ nuts, $A$ simply makes one pile consisting of $4k-1$ nuts, and another consisting of $1, 2$ or $3$ nuts, respectively. This makes $A$ the second player in a game starting with $4k-1 \equiv 3 \pmod{4}$ nuts, so $A$ wins.

Now assume the pile contains $4k+3$ nuts. $A$ can split the pile in two ways: Either as $(4p+1, 4q+2)$ or $(4p, 4q+3)$. In the former case, if either $p$ or $q$ is $0$, $B$ wins by the above paragraph. Otherwise, $B$ removes one nut from the $4q+2$ pile, making $B$ the second player in a game where we may apply the useful fact (since $p+q=k$), so $B$ wins. If $A$ splits the original pile as $(4p, 4q+3)$, $B$ removes one nut from the $4p$ pile, so the situation is two piles with $4(p-1)+3$ and $4q+3$ nuts. Then $B$ can use the winning strategy for the second player just described on each pile separately, ultimately making $B$ the winner.

It remains to prove the useful fact when $s+t=k+1$. Due to symmetry, there are two possibilities for the first move: Assume the first player moves $(4s+1, 4t+1) \rightarrow (4s+1, 4p, 4q+1)$. The second player then splits the middle pile into $(4p-1, 1)$, so the situation is $(4s+1, 4q+1, 4p-1)$. Since the second player has a winning strategy both when the initial situation is $(4s+1, 4q+1)$ and when it is $4p-1$, he wins (this also holds when $p=1$).

Now assume the first player makes the move $(4s+1, 4t+1) \rightarrow (4s+1, 4p+2, 4q+3)$. If $p=0$, the second player splits the third pile as $4q+3=(4q+1)+2$ and wins by the useful fact. If $p>0$, the second player splits the second pile as $4p+2=(4p+1)+1$, and wins because he wins in each of the situations $(4s+1, 4p+1)$ and $4q+3$.
