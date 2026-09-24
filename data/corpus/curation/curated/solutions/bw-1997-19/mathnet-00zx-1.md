Solution:

a) As each campaign-making animal uses exactly $n$ paths and the total number of paths is $\frac{n(n-1)}{2}$, the number of campaign-making animals cannot exceed $\frac{n-1}{2}$. Labeling the caves by integers $0,1,2, \ldots, n-1$, we can construct $\frac{n-1}{2}$ non-intersecting campaign routes as follows:
$$
\begin{aligned}
& 0 \rightarrow 1 \rightarrow 2 \rightarrow 3 \rightarrow \ldots \rightarrow n \rightarrow 0 \\
& 0 \rightarrow 2 \rightarrow 4 \rightarrow 6 \rightarrow \ldots \rightarrow n-1 \rightarrow 0 \\
& 0 \rightarrow 3 \rightarrow 6 \rightarrow 9 \rightarrow \ldots \rightarrow n-2 \rightarrow 0 \\
& \ldots \ldots \ldots+\cdots \\
& 0 \rightarrow \frac{n-1}{2} \rightarrow n-1 \rightarrow \ldots \rightarrow \frac{n+1}{2} \rightarrow 0
\end{aligned}
$$
(As each of these cyclic routes passes through any cave, the $\frac{n-1}{2}$ campaign-making animals can be chosen arbitrarily).


b) As noted above, the number of campaign-making animals cannot exceed $\frac{9-1}{2}=4$. The 4 non-intersecting campaign routes can be constructed as follows:
$$
\begin{aligned}
& 0 \rightarrow 1 \rightarrow 2 \rightarrow 8 \rightarrow 3 \rightarrow 7 \rightarrow 4 \rightarrow 6 \rightarrow 5 \rightarrow 0 \\
& 0 \rightarrow 2 \rightarrow 3 \rightarrow 1 \rightarrow 4 \rightarrow 8 \rightarrow 5 \rightarrow 7 \rightarrow 6 \rightarrow 0 \\
& 0 \rightarrow 3 \rightarrow 4 \rightarrow 2 \rightarrow 5 \rightarrow 1 \rightarrow 6 \rightarrow 8 \rightarrow 7 \rightarrow 0 \\
& 0 \rightarrow 4 \rightarrow 5 \rightarrow 3 \rightarrow 6 \rightarrow 2 \rightarrow 7 \rightarrow 1 \rightarrow 8 \rightarrow 0
\end{aligned}
$$
