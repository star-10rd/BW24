Solution:
Clearly there must be rows with some zeroes. Consider the case when there is a row with just one zero; we can assume it is $(0,1,1,1,1,1)$. Then for each row $(1, x_{2}, x_{3}, x_{4}, x_{5}, x_{6})$ there is also a row $(0, x_{2}, x_{3}, x_{4}, x_{5}, x_{6})$; the conclusion follows.

Consider the case when there is a row with just two zeroes; we can assume it is $(0,0,1,1,1,1)$. Let $n_{ij}$ be the number of rows with first two elements $i, j$. As in the first case $n_{00} \geq n_{11}$. Let $n_{01} \geq n_{10}$; the other subcase is analogous. Now there are $n_{00} + n_{01}$ zeroes in the first column and $n_{10} + n_{11}$ ones in the first column; the conclusion follows.

Consider now the case when each row contains at least three zeroes (except $(1,1,1,1,1,1)$, if such a row exists). Let us prove that it is impossible that each such row contains exactly three zeroes. Assume the opposite. As $n > 2$ there are at least two rows with zeroes; they are different, so their product contains at least four zeroes, a contradiction. So there are more than $3(n-1)$ zeroes in the array; so in some column there are more than $(n-1)/2$ zeroes; so there are at least $n/2$ zeroes.
