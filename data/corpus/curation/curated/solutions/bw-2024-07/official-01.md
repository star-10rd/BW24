Answer: 1, 2, 11, 22, 23.
Solution: Clearly, any $n$ that works must be a divisor of the number $45^{2}-1=2024$ of unit squares. Furthermore, it must not be greater than 45 , or else we cannot fit any $1 \times n$ rectangles in the grid. This leaves the options $n=1, n=2, n=4, n=8, n=11, n=22, n=23$ and $n=44$. Note that any divisor $d$ of a length $n$ that works also works, since we can just divide each of the $1 \times n$ and $n \times 1$ pieces into $1 \times d$ and $d \times 1$ pieces.

For $n=22$, we can cover the grid as in Fig. 4. By the above, this shows that $n=1, n=2$ and $n=11$ all work.

For $n=23$, we can cover the grid as in Fig. 5 .
![](figure-4.png)

Figure 4
![](figure-5.png)

Figure 5

The remaining possibilities are $n=4, n=8$ and $n=44$. All of these are divisible by 4 , and hence if any of them work $n=4$ would also have to work. However, $n=4$ does not work. Indeed, color gray all rows with row numbers congruent to 1 or 2 modulo 4 (Fig. 6). Then any $1 \times 4$ or $4 \times 1$ piece will cover an even number of gray squares. But there is an odd number of gray squares in total, since the number of gray rows is odd, as well as the length of any row, and the center square is white as it is in row 23 . So it is impossible to cover all of them.

Consequently, $n=1,2,11,22,23$ are the only values that work.
![](figure-6.png)

Figure 6
