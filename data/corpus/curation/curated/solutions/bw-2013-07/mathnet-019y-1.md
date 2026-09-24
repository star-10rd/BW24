Firstly note that for given $n$ exactly one player has a winning strategy. We'll show by induction that $B$ has a winning strategy if $n$ is odd.

First step of induction is clear. Assume $n$ is odd and $B$ has a winning strategy for all odd integers smaller than $n$. If player $A$ can't make a move, $B$ wins. In other case, $A$ chooses a divisor $m$. Note that $m \mid n - m$ and $m < n - m$, because $m \le \frac{n}{3}$ as $n$ is odd. Therefore $B$ may choose $m$ (in particular can make a move) and pass a number $n - 2m$ to player $A$. The number is odd and smaller than $n$, so the thesis is correct by induction.

Now, let $n$ be even, but not a power of $2$. In that case $n$ has an odd divisor greater than one. Player $A$ may choose an odd divisor and pass an odd integer to player $B$. Then we have a situation where $B$ starts with an odd integer, so $A$ has a winning strategy.

Consider now $n = 2^k$ for positive integer $k$. Once again we'll prove it by induction. Thesis: for odd $k$ player $B$ has a winning strategy and for even $k$ player $A$ has a winning strategy. Base: for $k=1$ player $B$ has a winning strategy as $A$ can't make the first move. For $k=2$ player $A$ may win, passing $2$ to player $B$. The step of induction is split to two parts:

* Assume $A$ has a winning strategy for $2^k$, then player $B$ has one for $2^{k+1}$. Let $n = 2^{k+1}$. Player $A$ has to choose a divisor $2^l$ for $1 \le l \le k$. If he chooses $2^k$, he passes $n - 2^k = 2^k$ to player $B$. By induction player $B$ has a winning strategy. If $A$ chooses smaller divisor, passes an even integer, which is not a power of $2$ as $2^k < n - 2^l < n = 2^{k+1}$. We have already proved that starting player (in that case $B$) has a winning strategy for such number.

* Assume $B$ has a winning strategy for $2^k$, then player $A$ has one for $2^{k+1}$. Let $n = 2^{k+1}$. It is sufficient for player $A$ to choose a divisor $2^k$, then he passes number $2^k$ to $B$. By induction second player (in this case $A$) has a winning strategy.

To sum up: player $B$ has a winning strategy for odd $n$ and for $n = 2 \cdot 4^k$ for non-negative integer $k$.
