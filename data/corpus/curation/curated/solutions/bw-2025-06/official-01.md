## Solution 1

The answer is

$$
\frac{n(n-1)}2+1.
$$

If among every two people one has freed the other at least once, then there have been at least $\frac{n(n-1)}2$ liberations. Two liberations of the same person must be preceded by that person being imprisoned twice, because after a person is freed they cannot be freed again before being imprisoned again. Liberations of different people must be preceded by different knock-outs, since one knock-out can imprison only one other person. Thus at least $\frac{n(n-1)}2$ knock-outs are needed, plus one more knock-out to free the person imprisoned last. Therefore at least

$$
\frac{n(n-1)}2+1
$$

knock-outs are necessary.

We now show that this many knock-outs are sufficient. First let $n$ be odd. Label the people by $0,1,\ldots,n-1$. Let person $\frac{n-1}{2}$ imprison people $0,1,\ldots,\frac{n-1}{2}-1$ during the first $\frac{n-1}{2}$ knock-outs; then let person $n-1$ imprison people $\frac{n-1}{2},\frac{n-1}{2}+1,\ldots,n-2$ during the next $\frac{n-1}{2}$ knock-outs, and continue cyclically modulo $n$.

In other words, during every knock-out the next person in the cyclic order modulo $n$ is imprisoned; the imprisoning person changes after every $\frac{n-1}{2}$ knock-outs and then jumps over exactly $\frac{n-1}{2}-1$ people in the cyclic order. Every new imprisoner imprisons the previous imprisoner during their first knock-out and frees everyone imprisoned by the previous imprisoner. Hence shifting the imprisoner by $\frac{n-1}{2}$ is always possible.

After $\frac{n(n-1)}2$ knock-outs, person $0$ imprisons people $\frac{n+1}{2},\frac{n+1}{2}+1,\ldots,n-1$, and all other people are free. Finally, let person $\frac{n-1}{2}$ imprison person $0$ again. After that, every person has once freed all the $\frac{n-1}{2}$ people immediately following them in the cyclic order. Thus, among every two people, one has freed the other.

Now let $n$ be even. Denote one person by $C$. Apply the programme above for odd $n$ to the other $n-1$ people, but at the end of the series of knock-outs organized by each person, add one more knock-out in which this person also imprisons $C$. During the first knock-out of the next imprisoner, that person frees $C$, so $C$ can be imprisoned again during the last knock-out of the series. In this way there are

$$
\frac{(n-1)(n-2)}2+1+(n-1)=\frac{n(n-1)}2+1
$$

knock-outs in total. After that, among every two people, one has freed the other.

## Solution 2

For the construction, use Solution 1. We prove the lower bound differently.

Consider the sum of the number of currently imprisoned people and the number of liberations that have occurred so far, counting different people freed in one knock-out independently. This sum increases by exactly $1$ during each knock-out. Indeed, let $u$ be the number of imprisoned people before a knock-out, $v$ the number of liberations before it, and $k$ the number of people freed during it. After the knock-out, the number imprisoned is $u-k+1$ and the number of liberations is $v+k$, for a total of $u+v+1$.

Initially both quantities are $0$, so their sum always equals the number of knock-outs. If among every two people one has freed the other at least once, then the number of liberations is at least $\frac{n(n-1)}2$ and at least one person is imprisoned, namely the person knocked out last. Hence the sum is at least

$$
\frac{n(n-1)}2+1,
$$

so at least that many knock-outs have occurred.
