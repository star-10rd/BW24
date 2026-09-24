Let $x$ be the number of triplet photos (depicting three people, that is, three pairs) and let $y$ be the number of pair photos (depicting two people, that is, one pair). Then $3 x+y=45$.

Each person appears with nine other people, and since 9 is odd, each person appears on at least one pair photo. Thus $y \geq 5$, so that $x \leq 13$. The total number of photos is $x+y=45-2 x \geq 45-2 \cdot 13=19$.

On the other hand, 19 photos will suffice. We number the persons $0,1, \ldots, 9$, and will proceed to specify 13 triplet photos. We start with making triplets without common pairs of the persons $1-8$ :

$$
123,345,567,781
$$

Think of the persons 1-8 as arranged in order around a circle. Then the persons in each triplet above are separated by at most one person. Next we make triplets containing 0 , avoiding previously mentioned pairs by combining 0 with two people among the persons $1-8$ separated by two persons:

$$
014,085,027,036
$$

Then we make triplets containing 9, again avoiding previously mentioned pairs by combining 9 with the other four possibilities of two people among 1-8 being separated by two persons:

$$
916,925,938,947
$$

Finally, we make our last triplet, again by combining people from 1-8: 246 . Here 2 and 4 , and 4 and 6 , are separated by one person, but those pairs were not accounted for in the first list, whereas 2 and 6 are separated by three persons, and have not been paired before. We now have 13 photos of 39 pairs. The remaining 6 pairs appear on 6 pair photos.

Remark: This problem is equivalent to asking how many complete 3-graphs can be packed (without common edges) into a complete 10-graph.
