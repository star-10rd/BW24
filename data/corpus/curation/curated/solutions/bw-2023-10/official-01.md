Answer: All even numbers $n$ greater than 2 .

We show first that required initial states are impossible for odd $n$. Note that if one colour is missing then the numbers of marked points of existing two colours have different parities, i.e., the difference of these numbers is odd. Each step keeps the parity of the difference of the numbers of marked points of these two colours unchanged. Hence in every intermediate state and also in the final state, one of these two colours is represented. Consequently, a final state of the third colour is impossible.

For every even number $n>2$, an initial state with 2 consecutive points marked with one colour and $n-2$ points marked with another colour satisfies the conditions of the problem. Indeed, if $n>4$ then with two symmetric steps, one can reach a similar state where the number of points marked with the more popular colour is 2 less. Hence it suffices to solve the case $n=4$. In this case, making one step leads to a state with 3 marked points, all with different colours. In order to obtain a final state of any given colour, one can replace points of the other two colours with a new point of the given colour. This completes the solution.

## 2nd Solution:

Definition: Call a configuration colourful, if the final state may have any of the three colours.

The case of $n$ being odd is excluded as in the first solution, so let $n>2$ be even. To construct colourful configurations, we consider linear configurations, i.e. one where the points are placed on a line instead of a circle. There is only difference to the circular situaton: We may not choose the two end points for the replacement step. So it suffices to construct linear colourful configurations.

We start by providing explicit examples for $n=4$ and $n=6$ (with the bold letters being replaced):

$$
\begin{aligned}
& \mathbf{R G} R G \rightarrow B \mathbf{R G} \rightarrow B B \\
& R \mathbf{G R} G \rightarrow R \mathbf{B G} \rightarrow R R \\
& R \mathbf{G R} G \rightarrow \mathbf{R B} G \rightarrow G G \\
& \mathbf{R G} R R G R \rightarrow B R R \mathbf{G R} \rightarrow B R \mathbf{R B} \rightarrow B \mathbf{R G} \rightarrow B B \\
& R \mathbf{G R} R G R \rightarrow R B \mathbf{R G} R \rightarrow \mathbf{R B} B R \rightarrow \mathbf{G B} R \rightarrow R R \\
& R \mathbf{G R} R G R \rightarrow R B \mathbf{R G} R \rightarrow \mathbf{R B} B R \rightarrow G \mathbf{B R} \rightarrow G G .
\end{aligned}
$$

Next observe that the concatenation of several linear colourful configurations is again colourful: Indeed, each part can be transformed into the desired colour independently. So the building blocks for $n=4$ and $n=6$ can produce colourful configurations of any even length.

Actually one can prove a lot more about colourful configurations:

Proposition: Denote the number of red resp. green resp. blue points in the initial state by $R$ resp. $G$ resp. $B$. A circular configuration is colourful if and only if

$$
R \equiv G \equiv B \quad(\bmod 2)
$$

and it contains at least two colours.

Proof. We have already seen in the solution above that $R-G \bmod 2, G-B \bmod 2$ and $B-R$ mod 2 are invariants. Moreover it is obvious that we need at least two colours to be able to do anything. So the conditions are necessary.

We prove that they are sufficient: For $n=3$ the conditions require $R=G=B=1$ and the configuration indeed colourful. We continue by induction for $n>3$ : As $n>3$, there is at least one colour with more than one point, so assume wlog. $R>1$. Having at least two colours, we can find a pair of two different colours, one of which is red. Assume w.l.o.g. that the other is green. As a first step replace these two points. The resulting configuration has $R-1$ red, $G-1$ green and $B+1$ blue points, so it satisfies $R-1=G-1=B+1 \bmod 2$. Moreover due to $R>1$ is has at least one red and one blue point. So by induction the configuration is colourful, and hence so was our original state.

This classification of colourful configuration, has some nice consequences:

Proposition: If a circular configuration is colourful, then so is any permutation of its points.

Proof. Immediate.
