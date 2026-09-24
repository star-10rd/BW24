Solution:

First we note that if nobody is excluded in some session, then the situation becomes stable and nobody can be excluded in any later session.

We use induction to prove the slightly more general claim that if the jury has $2 n$ members, $n \geq 2$, then after at most $n$ sessions nobody will be excluded anymore. For $n=2$ the claim is obvious, since if some members are excluded in the first two sessions, there are at most two members left, and hence nobody is excluded in the third session.

Now assuming that the claim is true for $n \leq k-1$, suppose the jury has $2 k$ members, and consider the first session. If nobody is excluded, we are done. If a positive and even number of members are excluded, there will be $2 r$ members left with $r<k$, and by the induction hypotheses the jury will stabilize after at most $r$ more sessions, giving a total of at most $r+1 \leq k$ sessions, as required.

Finally suppose that an odd number of members are excluded in the first session. There are three alternatives:

(i) An even number of members are excluded in each of the next $m$ sessions, after which nobody is excluded. Then the number of members left is at most $2 k-1-2 m$. Hence $2 k-1-2 m \geq 1$, so that $k \geq m+1$. Hence the number of sessions is at most $k$.

(ii) An even number of members are excluded in each of the next $m$ sessions, after which an odd number of members greater than 1 are excluded. Then there are at most $2 k-1-2 m-3$ members left, and by the induction hypotheses, the jury will stabilize in no more than $k-m-2$ sessions. The total number of sessions is therefore $1+m+1+(k-m-2)=k$.

(iii) An even number of members are excluded in each of the next $m$ sessions, followed by a session where precisely one member $M$ is excluded. In this session, there were $2 r+1$ members present for some $r$, and $r+1$ of these voted for the exclusion of $M$. But then any member other than $M$ was thought to be incompetent by at most $r$ others. In the next session the jury will have $2 r$ members, and since the members do not change their sympathies, nobody can be excluded. Hence the situation is stable after $m+2$ sessions, and at least $1+2 m+1=2 m+2$ members have been excluded. But there must be at least 3 members left, for one member cannot be excluded from a jury of 2 members. Hence $2 m+2 \leq 2 k-3$, whence $m+2 \leq k$.

Thus the claim holds for $n=k$ also. We conclude that the claim holds for all $n \geq 2$.
