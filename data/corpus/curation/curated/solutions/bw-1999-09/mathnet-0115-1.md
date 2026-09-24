Solution:
Answer: $24$.
Since each unit cube contributes to exactly three of the row sums, then the total of all the $27$ row sums is $3 \cdot (1+2+\ldots+27) = 3 \cdot 14 \cdot 27$, which is even. Hence there must be an even number of odd row sums.

![](attached_image_1.png)
(a)
![](attached_image_2.png)
(b)
![](attached_image_3.png)
I
![](attached_image_4.png)
II
![](attached_image_5.png)
III
Figure 2

Figure 3

We shall prove that if one of the three levels of the cube (in any given direction) contains an even row sum, then there is another even row sum within that same level - hence there cannot be $26$ odd row sums. Indeed, if this even row sum is formed by three even numbers (case (a) on Figure 2, where $+$ denotes an even number and $-$ denotes an odd number), then in order not to have even column sums (i.e. row sums in the perpendicular direction), we must have another even number in each of the three columns. But then the two remaining rows contain three even and three odd numbers, and hence their row sums cannot both be odd. Consider now the other case when the even row sum is formed by one even number and two odd numbers (case (b) on Figure 2). In order not to have even column sums, the column containing the even number must contain another even number and an odd number, and each of the other two columns must have two numbers of the same parity. Hence the two other row sums have different parity, and one of them must be even.

It remains to notice that we can achieve $24$ odd row sums (see Figure 3, where the three levels of the cube are shown).
