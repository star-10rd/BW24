$18$ problems are enough. The following table shows how to arrange problems for $8$ levels:

| Level 1 | 1 | 2 | 3 | 4 | 5 |
|---------|---|---|---|---|---|
| Level 2 | 1 | 6 | 7 | 8 | 9 |
| Level 3 | 2 | 6 | 10 | 11 | 12 |
| Level 4 | 3 | 7 | 10 | 13 | 14 |
| Level 5 | 4 | 8 | 11 | 13 | 15 |
| Level 6 | 5 | 9 | 12 | 14 | 15 |
| Level 7 | 1 | 10 | 15 | 16 | 17 |
| Level 8 | 2 | 8 | 14 | 16 | 18 |

Further we show that $18$ is indeed the smallest possible number of problems that is sufficient. Denote by $a_i$ the number of problems that are common for $i$ levels. As there are in total $40$ problems then
$$
a_1 + 2a_2 + 3a_3 + 4a_4 + 5a_5 + 6a_6 + 7a_7 + 8a_8 = 40 \quad (1)
$$
If we consider all the pairs of these $40$ problems then at most $\frac{8 \cdot 7}{2} = 28$ of them can be equal. Each problem that is common for $i$ levels defines $\binom{i}{2}$ such pairs, therefore
$$
\binom{2}{2}a_2 + \binom{3}{2}a_3 + \binom{4}{2}a_4 + \binom{5}{2}a_5 + \binom{6}{2}a_6 + \binom{7}{2}a_7 + \binom{8}{2}a_8 \le 28 \quad (2)
$$
We must prove that $a_1 + a_2 + \dots + a_8 \ge 18$ which given (1) is equivalent to
$$
a_2 + 2a_3 + 3a_4 + 4a_5 + 5a_6 + 6a_7 + 7a_8 \le 22 \quad (3)
$$
From (1) we can also get that
$$
2a_2 + 3a_3 + 4a_4 + 5a_5 + 6a_6 + 7a_7 + 8a_8 \le 40 \quad (4)
$$
By adding (4) and (2) and dividing the result by $3$ we obtain
$$
a_2 + 2a_3 + \frac{10}{3}a_4 + 5a_5 + 7a_6 + \frac{28}{3}a_7 + 12a_8 \le 22\frac{2}{3} \quad (5)
$$
(3) then is a trivial consequence of (5) (coefficients for $a_i$ in (5) are greater or equal than those in (3) and the result for the expression in (3) has to be an integer).
