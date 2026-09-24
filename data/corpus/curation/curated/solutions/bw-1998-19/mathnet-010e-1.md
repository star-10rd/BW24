Solution:

We start with the following observation: In a match between two teams (not necessarily of equal sizes), there exists in one of the teams a player who won his games with at least half of the members of the other team.

Indeed: suppose there is no such player. If the teams consist of $m$ and $n$ members then the players of the first team jointly won less than $m \cdot \frac{n}{2}$ games, and the players of the second team jointly won less than $m \cdot \frac{n}{2}$ games - this is a contradiction since the total number of games played is $m n$, and in each game there must have been a winner.

Returning to the original problem (with two equal teams of size $1000$), choose a player who won his games with at least half of the members of the other team - such a player exists, according to the observation above, and we shall call his team "first" and the other team "second" in the sequel. Mark this player with a white hat and remove from further consideration all those players of the second team who lost their games to him. Applying the same observation to the first team (complete) and the second team truncated as explained above, we again find a player (in the first or in the second team) who won with at least half of the other team members. Mark him with a white hat, too, and remove the players who lost to him from further consideration.

We repeat this procedure until there are no players left in one of the teams; say, in team $Y$. This means that the white-hatted players of team $X$ constitute a group with the required property (every member of team $Y$ has lost his game to at least one player from that group). Each time when a player of team $X$ was receiving a white hat, the size of team $Y$ was reduced at least by half; and since initially the size was a number less than $2^{10}$, this could not happen more than ten times.

Hence the white-hatted group from team $X$ consists of not more than ten players. If there are fewer than ten, round the group up to ten with any players.
