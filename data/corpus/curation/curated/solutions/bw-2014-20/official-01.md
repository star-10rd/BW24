If all the numbers in the sequence are even, then we can divide each element of the sequence by the maximal possible power of 2 . In this way we obtain a new sequence of integers which is determined by the same recurrence formula and has the same period, but now it contains an odd number. Consider this new sequence modulo 2. Since the number 2015 is odd, it has no influence to the calculations modulo 2 , so we may think that modulo 2 this sequence is given by the Fibonacci recurrence $a_{k+1} \equiv a_{k}+a_{k-1}$ with $a_{j} \equiv 1$ $(\bmod 2)$ for at least one $j$. Then it has the following form $\ldots, 1,1,0,1,1,0,1,1,0, \ldots$ (with period 3 modulo 2), so that the length of the original period of our sequence (if it is periodic!) must be divisible by 3 .

Remark. It is not known whether a periodic sequence of integers satisfying the recurrence condition of this problem exists. The solution of such a problem is apparently completely out of reach. See, e.g., the recent preprint

Brandon Avila and Tanya Khovanova, Free Fibonacci sequences, 2014, preprint at http://arxiv.org/pdf/1403.4614v1.pdf

for more information. (The problem given at the olympiad is Lemma 28 of this paper, where 2015 can be replaced by any odd integer greater than 1.)
