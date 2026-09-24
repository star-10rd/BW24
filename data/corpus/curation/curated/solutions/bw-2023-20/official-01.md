(a) No, there is no such labelling.

On the contrary, we show that for every labelling there exist two German products whose difference is not divisible by 65 . Suppose that an $8 \times 8$ square grid is labelled with the numbers $1,2, \ldots, 64$ such that no number is used twice.

We can construct a German product that is divisible by 13 by choosing a German set that includes the cell with the label 13 and seven others in different rows and columns, but otherwise arbitrarily.

We can construct a German product that is not divisible by 13 as follows. Notice that only four labels are divisible by 13, namely $13,26,39$, and 52 . These four labels are located in at most four rows; we denote the index set of these rows $R \subseteq[1,8]$. Similarly, there are at least four columns that do not contain any of these four labels; we denote the index set of these columns $C \subseteq[1,8]$. Since $R \leq C$ it is possible to choose cells of a German set from rows $R$ using only columns from $C$. The remaining cells are chosen from the remaining rows accordingly to the definition, but otherwise arbitrarily. The resulting German product is not divisible by 13 since the German set avoids the cells whose labels are divisible by 13 .

The difference of the two German products is not divisible by 13, since one German product is divisible by 13 whereas the other one is not. Hence the difference is not divisible by 65 .
(b) Yes, there is such a labelling.

For $k \in[0,99]$ we define $a_{k}=2^{k}(\bmod 101)$; in other words, $a_{k}$ is the remainder of $2^{k}$ when divided by 101. Note that $a_{k} \neq 0$ since no power of 2 is divisible by 101 . Hence $1 \leq a_{k} \leq 100$ for all $k \in[0,99]$.

We label the cells of the square grid with the numbers $a_{k}$ as follows:

| $a_{0}$ | $a_{1}$ | $a_{2}$ | $\cdots$ | $a_{9}$ |
| :---: | :---: | :---: | :---: | :---: |
| $a_{10}$ | $a_{11}$ | $a_{12}$ | $\cdots$ | $a_{19}$ |
| $a_{20}$ | $a_{21}$ | $a_{22}$ | $\cdots$ | $a_{29}$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\ddots$ | $\vdots$ |
| $a_{90}$ | $a_{91}$ | $a_{92}$ | $\cdots$ | $a_{99}$ |

More precisely, if we label the rows and columns of the chessboard by $\{0,1,2, \ldots, 9\}$, then the cell with coordinates $(i, j)$ gets the label $a_{10 i+j}$.

Note that $a_{10 i+j} \equiv 2^{10 i+j}(\bmod 101)$ and that $2^{10 i+j}=\left(2^{10}\right)^{i} \cdot 2^{j}$. Hence for this labelling any rook product is congruent to

$$
\left(2^{10}\right)^{0+1+2+\ldots+9} \cdot 2^{0+1+2+\ldots+9}
$$

modulo 101. Hence the difference of any two German products is divisible by 101 for this labelling.

It remains to show that the $a_{k}$ are pairwise different. (In more elaborate language, we would say that 2 is a primitive root modulo 101.) To do this, we denote by $s$ the smallest positive integer such that $2^{s} \equiv 1(\bmod 101)$. Using long division, we may write $100=q s+r$ with non-negative integers $q$ and $r$ such that $0 \leq r \leq s-1$. By virtue of Fermat's little theorem we have

$$
1 \equiv 2^{100} \equiv 2^{q s+r} \equiv\left(2^{s}\right)^{q} \cdot 2^{r} \equiv 1^{q} \cdot 2^{r} \equiv 2^{r} \quad(\bmod 101) .
$$

Since $r<s$ and $s$ is the smallest positive integer with $2^{s} \equiv 1(\bmod 101)$, we must have $r=0$. In other words, 100 is divisible by $s$; in other words, $s$ is a divisor of 100 .

We claim that $s=100$. If this was not the case, we would have $s \mid 20$ or $s \mid 50$, which implies that $2^{20} \equiv 1(\bmod 101)$ or $2^{50} \equiv 1(\bmod 101)$. However $2^{10}=1024 \equiv 14(\bmod 101)$, so that $2^{20} \equiv 14^{2} \equiv 196 \equiv-6 \not \equiv 1(\bmod 101)$ and $2^{50} \equiv\left(2^{20}\right)^{2} \cdot 2^{10} \equiv(-6)^{2} \cdot 14 \equiv 504 \equiv-1$ 丰 $1(\bmod 101)$.

Now assume that $k, \ell \in[0,99]$ are positive integers with $k>\ell$ and $a_{k}=a_{\ell}$. Then we have $2^{k} \equiv 2^{\ell}(\bmod 101)$ and $0 \equiv 2^{k}-2^{\ell} \equiv 2^{\ell} \cdot\left(2^{k-\ell}-1\right)(\bmod 101)$. Since $2^{\ell}$ and 101 are coprime, it follows that $2^{k-\ell}-1 \equiv 0(\bmod 101)$ and $2^{k-\ell} \equiv 1(\bmod 101)$. This cannot be true, since $k-\ell \in[1,99]$, but $s=100$ is the smallest positive integer with $2^{s} \equiv 1(\bmod 101)$. Hence $a_{k} \neq a_{\ell}$.

We conclude that the numbers $a_{k}$ with $k \in[0,99]$ are a hundred pairwise different numbers from the set $[1,100]$, hence they are a permutation of the set $[1,100]$ as it was required.
2nd Solution:

Definition: Let $p$ be a prime. Consider an $n \times n$ square grid of elements $a_{i, j} \in \mathbb{F}_{p}^{*}$ (for $i, j=1, \ldots, n$ ), which are not necessarily distinct. We call it rooky, if all its German products are equal as elements in $\mathbb{F}_{p}^{*}$.

We will provide a classification of all rooky square grids. Of course, most of this is not necessary when writing down a solution to the given problem, but it may still be interesting...

Lemma: A square grid is rooky if and only if for all $i, j, k, \ell$ :

$$
a_{i, j} \cdot a_{k, \ell}=a_{i, \ell} \cdot a_{k, j}
$$

Proof. If we swap the rows of two cells in a German set and keep their columns, it turns one valid German set into another. When comparing their German products, we can ignore all $n-2$ labels of cells that were not moved. The remaining values are $a_{i, j} \cdot a_{k, \ell}$ resp. $a_{i, \ell} \cdot a_{k, j}$ for certain $i, j, k, \ell$. This gives equality (1) for rooky square grids.

Conversely assume that (1) holds. Then we have to compare two arbitrary German products. But they can transformed into each other by a sequence of several swaps of two cells. Due to (1) the German product does not change at any of these steps, so the rook products of the original configurations are the same as well.

Lemma: A rooky square grid is uniquely determined by the elements of its first row and first column.

Proof. Indeed the previous lemma implies that

$$
a_{i, j} \cdot a_{1,1}=a_{i, 1} \cdot a_{1, j}
$$

which determines $a_{i, j}$ uniquely because $a_{1,1}$ is a unit.

One can actually prove directly that the square grid obtained that way is rooky, but it is simpler to continue directly to

Proposition: Let $\lambda_{i} \in \mathbb{F}_{p}^{*}(i=1, \ldots, n)$ and $\mu_{j} \in \mathbb{F}_{p}^{*}(j=1, \ldots, n)$ arbitrary elements. Then the square grid with

$$
a_{i, j}=\lambda_{i} \cdot \mu_{j}
$$

is rooky. Moreover any rooky square grid can be obtained this way.

Proof. The square grid with $a_{i, j}=\lambda_{i} \cdot \mu_{j}$ is rooky, because any German product has the value

$$
\prod_{i} \lambda_{i} \cdot \prod_{j} \mu_{j} .
$$

## B ALTIC <br> Way <br> FLENSBURG 2023

Let us prove the converse: By the previous lemma, it suffices to find $\lambda_{i} \mathrm{~s}$ and $\mu_{j} \mathrm{~s}$ that recreate the values of the first row and column. For this simply set $\lambda_{i}=a_{i, 1}$ and $\mu_{j}=\frac{a_{1, j}}{a_{1,1}}$.

Proposition: For any prime $p>n^{2}$, there exists a rooky square grid with only distinct elements.

Proof. Choose any primitive root $\alpha \in \mathbb{F}_{p}^{*}$. Then set $\lambda_{i}=\alpha^{i-1}, \mu_{j}=\alpha^{n \cdot(j-1)}$ and $a_{i, j}=\lambda_{i} \cdot \mu_{j}=\alpha^{i-1+n \cdot(j-1)}$. This provides indeed a rooky square grid. The values in the square are $\alpha^{0}, \alpha^{1}, \ldots, \alpha^{n^{2}-1}$. As we have chosen a primitive root, these are all distinct.

For $n=10, p=101$ and $\alpha=2$, this reproduces exactly the construction given in the previous solution.
