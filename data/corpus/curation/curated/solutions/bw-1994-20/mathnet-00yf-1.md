Solution:

Consider the side $AB$ of the big triangle $ABC$ as "horizontal" and suppose the statement of the problem does not hold. The side $AB$ contains $3001$ vertices $A = A_{0}, A_{1}, \ldots, A_{3000} = B$ of $3$ colours. Hence, there are at least $1001$ vertices of one colour, e.g., red. For any two red vertices $A_{k}$ and $A_{n}$ there exists a unique vertex $B_{kn}$ such that the triangle $B_{kn} A_{k} A_{n}$ is equilateral. That vertex $B_{kn}$ cannot be red. For different pairs $(k, n)$ the corresponding vertices $B_{kn}$ are different, so we have at least $\binom{1001}{2} > 500000$ vertices of type $B_{kn}$ that cannot be red. As all these vertices are situated on $3000$ horizontal lines, there exists a line $L$ which contains more than $160$ vertices of type $B_{kn}$, each of them coloured in one of the two remaining colours. Hence there exist at least $81$ vertices of the same colour, e.g., blue, on line $L$.

For every two blue vertices $B_{kn}$ and $B_{ml}$ on line $L$ there exists a unique vertex $C_{knml}$ such that:
(i) $C_{knml}$ lies above the line $L$;
(ii) The triangle $C_{knml} B_{kn} B_{ml}$ is equilateral;
(iii) $C_{knml} = B_{pq}$ where $p = \min(k, m)$ and $q = \max(n, l)$.

Different pairs of vertices $B_{kn}$ belonging to line $L$ define different vertices $C_{knml}$. So we have at least $\binom{81}{2} > 3200$ vertices of type $C_{knml}$ that can be neither blue nor red. As the number of these vertices exceeds the number of horizontal lines, there must be two vertices $C_{knml}$ and $C_{pqrs}$ on one horizontal line. Now, these two vertices define a new vertex $D_{knmlpqrs}$ that cannot have any of the three colours, a contradiction.
