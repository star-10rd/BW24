Answer: 2 .

If there are guests $1,2, \ldots, n$ and guest $i$ is friends with guest $i-1$ and $i+1$ modulo $n$ (e.g. guest 1 and guest $n$ are friends). Then if guest $i$ has $i$ amount of water in their jug at the start of the game, then only guest 1 and $n$ end up with a different amount of water than they started with.

To show that there always will be at least two guests with a different amount of water at the end of the game than they started with, let $x_{i}$ and $d_{i}$ be the amount of water and number of friends, respectively, that guest $i$ has. Define $z_{v}=x_{v} / d_{v}$ and assume without loss of generality that the friendship graph of the party is connected. Since every friend has at least one friend, there must exist two guests $a$ and $b$ at the party with the same number of friends by the pigeonhole principle. They must satisfy $z_{a} \neq z_{b}$. Thus, the sets

$$
S=\left\{c \mid z_{c}=\min _{d} z_{d}\right\} \text { and } T=\left\{c \mid z_{c}=\max _{d} z_{d}\right\}
$$

are non-empty and disjoint. Since we assumed the friendship graph to be connected, there exists a guest $c \in S$ that has a friend $d$ not in $S$. Let $F$ be the friends of $c$ at the party. Then the amount of water in $c$ 's cup at the end of the game is

$$
\sum_{f \in F} z_{f} \geqslant z_{d}+\left(d_{c}-1\right) z_{c}>d_{c} \cdot z_{c}=x_{c}
$$

Thus, $c$ ends up with a different amount of water at the end of the game. Similarly, there is a guest in $T$ that ends up with a different amount of water at the end of the game than what they started with.
