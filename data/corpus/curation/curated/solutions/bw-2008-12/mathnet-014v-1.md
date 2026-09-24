Solution:

Assume there exists a set $\mathscr{S}$ of sets of three children such that any set of two children is a subset of exactly one member of $\mathscr{S}$, and assume that the children $A$ and $B$ make a common present to $C$ if and only if $\{A, B, C\} \in \mathscr{S}$. Then it is true that any two children $A$ and $B$ make a common present to exactly one other child $C$, namely the unique child such that $\{A, B, C\} \in \mathscr{S}$. Because $\{A, B, C\} = \{A, C, B\}$ it is also true that if $A$ and $B$ make a present to $C$ then $A$ and $C$ make a present to $B$. We shall construct such a set $\mathscr{S}$.

Let $A_{1}, \ldots, A_{n}, B_{1}, \ldots, B_{n}, C_{1}, \ldots, C_{n}$ be the children, and let the following sets belong to $\mathscr{S}$.

(1) $\{A_{i}, B_{i}, C_{i}\}$ for $1 \leq i \leq n$.

(2) $\{A_{i}, A_{j}, B_{k}\}$, $\{B_{i}, B_{j}, C_{k}\}$ and $\{C_{i}, C_{j}, A_{k}\}$ for $1 \leq i < j \leq n$, $1 \leq k \leq n$ and $i + j \equiv 2k \pmod{n}$.

We note that because $n$ is odd, the congruence $i + j \equiv 2k \pmod{n}$ has a unique solution with respect to $k$ in the interval $1 \leq k \leq n$. Hence for $1 \leq i < j \leq n$ the set $\{A_{i}, A_{j}\}$ is a subset of a unique set $\{A_{i}, A_{j}, B_{k}\} \in \mathscr{S}$, and similarly the sets $\{B_{i}, B_{j}\}$ and $\{C_{i}, C_{j}\}$.

The relations $i + j \equiv 2i \pmod{n}$ and $i + j \equiv 2j \pmod{n}$ both imply $i \equiv j \pmod{n}$, which contradicts $1 \leq i < j \leq n$. Hence for $1 \leq i \leq n$, the set $\{A_{i}, B_{i}, C_{i}\}$ is the only set in $\mathscr{S}$ of which any of the sets $\{A_{i}, B_{i}\}$, $\{A_{i}, C_{i}\}$ and $\{B_{i}, C_{i}\}$ is a subset.

For $i \neq k$, the relations $i + j \equiv 2k \pmod{n}$ and $1 \leq j \leq n$ determine $j$ uniquely, and we have $i \neq j$ because otherwise $i + j \equiv 2k \pmod{n}$ implies $i \equiv k \pmod{n}$, which contradicts $i \neq k$. Thus $\{A_{i}, B_{k}\}$ is a subset of the unique set $\{A_{i}, A_{j}, B_{k}\} \in \mathscr{S}$. Similarly $\{B_{i}, C_{k}\}$ and $\{A_{i}, C_{k}\}$.

Altogether, each set of two children is thus a subset of a unique set in $\mathscr{S}$.
