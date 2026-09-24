Solution:
Let us prove that this conclusion can in fact be drawn. For this purpose we denote the numbers assigned to the vertices of Romeo's tetrahedron by $r_{1}, r_{2}, r_{3}, r_{4}$ and the numbers assigned to the vertices of Juliette's tetrahedron by $j_{1}, j_{2}, j_{3}, j_{4}$ in such a way that
$$
\begin{aligned}
& r_{2} r_{3} + r_{3} r_{4} + r_{4} r_{2} = j_{2} j_{3} + j_{3} j_{4} + j_{4} j_{2} \\
& r_{1} r_{3} + r_{3} r_{4} + r_{4} r_{1} = j_{1} j_{3} + j_{3} j_{4} + j_{4} j_{1} \\
& r_{1} r_{2} + r_{2} r_{4} + r_{4} r_{1} = j_{1} j_{2} + j_{2} j_{4} + j_{4} j_{1} \\
& r_{1} r_{2} + r_{2} r_{3} + r_{3} r_{1} = j_{1} j_{2} + j_{2} j_{3} + j_{3} j_{1}
\end{aligned}
$$
We intend to show that $r_{1} = j_{1}$, $r_{2} = j_{2}$, $r_{3} = j_{3}$ and $r_{4} = j_{4}$, which clearly suffices to establish our claim. Now let
$$
R = \{ i \mid r_{i} > j_{i} \}
$$
denote the set of indices where Romeo's corresponding number is larger and define similarly
$$
J = \{ i \mid r_{i} < j_{i} \}
$$
If we had $|R| > 2$, then w.l.o.g. $\{1,2,3\} \subseteq R$, which easily contradicts (4). Therefore $|R| \leq 2$, so let us suppose for the moment that $|R| = 2$. Then w.l.o.g. $R = \{1,2\}$, i.e. $r_{1} > j_{1}$, $r_{2} > j_{2}$, $r_{3} \leq j_{3}$, $r_{4} \leq j_{4}$. It follows that $r_{1} r_{2} - r_{3} r_{4} > j_{1} j_{2} - j_{3} j_{4}$, but (1) + (2) - (3) - (4) actually tells us that both sides of this strict inequality are equal. This contradiction yields $|R| \leq 1$ and replacing the roles Romeo and Juliet played in the argument just performed we similarly infer $|J| \leq 1$. For these reasons at least two of the four desired equalities hold, say $r_{1} = j_{1}$ and $r_{2} = j_{2}$. Now using (3) and (4) we easily get $r_{3} = j_{3}$ and $r_{4} = j_{4}$ as well.
