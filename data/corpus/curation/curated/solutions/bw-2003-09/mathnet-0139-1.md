Solution:

Let the Fibonacci numbers be denoted $F_{0}=1$, $F_{1}=2$, $F_{2}=3$ etc. Then $F_{10}=144$. We will prove by induction on $k$ that using $k$ questions subject to the conditions of the problem, it is possible to determine any positive integer $n \leq F_{k}$.

First, for $k=0$ it is trivial, since without asking we know that $n=1$. For $k=1$, we simply ask if $n$ is smaller than $2$. For $k=2$, we ask if $n$ is smaller than $3$ and if $n$ is smaller than $2$; from the two answers we can determine $n$.

Now, in general, our first two questions will always be "Is $n$ smaller than $F_{k-1}+1$?" and "Is $n$ smaller than $F_{k-2}+1$?". We then receive the answer to the first question. As long as we receive affirmative answers to the $i-1$'st question, the $i+1$'st question will be "Is $n$ smaller than $F_{k-(i+1)}+1$?". If at any point, say after asking the $j$'th question, we receive a negative answer to the $j-1$'st question, we then know that $F_{k-(j-1)}+1 \leq n \leq F_{k-(j-2)}$, so $n$ is one of $F_{k-(j-2)}-F_{k-(j-1)}=F_{k-j}$ consecutive integers, and by induction we may determine $n$ using the remaining $k-j$ questions. Otherwise, we receive affirmative answers to all the questions, the last being "Is $n$ smaller than $F_{k-k}+1=2$?"; so $n=1$ in that case.
