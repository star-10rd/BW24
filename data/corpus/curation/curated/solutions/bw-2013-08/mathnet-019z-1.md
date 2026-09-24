First we'll show it by induction that it is possible for $n-1$ pairs to visit the sauna at the same time. Base of induction is clear.

Assume that $n-2$ pairs may be placed in $n-1$ rooms. Take additional pair. Let $k$ be the number of pairs that they know and $m$ be the number of rooms taken by males.

If $m > k$, there is a room with males that aren't known by the additional guy. Then he may enter the room and his wife may enter an empty room ($n$-th room).

If $m \le k$ we have $n-2-k < n-1-m$. There are $n-2-k$ females that the additional woman doesn't know and $n-1-m$ rooms taken by females (or empty). It means, that there is a room taken only by females (maybe 0) that the additional woman know, so she may join them. The additional man may enter the $n$-th room.

Now we only have to show that it is the biggest number. For $n$ pairs that don't know each other, men need to be placed in different rooms, so they need $n$ rooms. Then there is no place for women.
