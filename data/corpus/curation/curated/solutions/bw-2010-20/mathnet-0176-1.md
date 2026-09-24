For $n = 1$ the statement is obviously false. We assert that it is true for all $n > 1$.

We first consider the sequence $x_0, x_1, \dots$ of positive integers which is recursively defined by $x_0 = n$ and $x_{k+1} = (x_0 + \dots + x_k)! + 1$ for $k \ge 0$. We claim that the set $A := \{x_k \mid k \ge 1\}$ satisfies the condition.

Suppose the contrary that there exist $1 \le i_1 < \dots < i_n$ such that $x_{i_1} + \dots + x_{i_n}$ and $x_{i_1} \cdots x_{i_n}$ have a common prime factor $p$. Then there exist a $j \in \{1, \dots, n\}$ such that $p \mid x_{i_j}$. From the definition of the sequence $(x_1, x_2, \dots)$ we get $x_k \equiv 1 \pmod p$ for every integer $k > i_j$. This implies $p \mid x_{i_1} + \dots + x_{i_{j-1}} + n - j =: S$. Because of $S > 0$ and $S \le x_0 + \dots + x_{i_{j-1}}$ we have $p \mid (x_0 + \dots + x_{i_{j-1}})! = x_{i_j} - 1$ which contradicts $p \mid x_{i_j}$.

Thus, for every pairwise distinct $a_1, \dots, a_n \in A$ the numbers $a_1 + \dots + a_n$ and $a_1 \cdots a_n$ are indeed coprime.
