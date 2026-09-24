Solution:

We will identify ourselves with the second magician. Then we need to choose a card in such a manner that another magician will be able to understand which of the 4 cards we have chosen and what information it gives about the order of the other cards. We will reach these two goals independently.
Let $a, b, c$ be remainders of the labels of the spectators' three cards modulo 5. There are three possible cases.

1) All the three remainders coincide. Then choose a card with a remainder not equal to the remainder of spectators' cards. Denote this remainder $d$.

Note that we now have 2 different remainders, one of them in 3 copies (this will be used by the first magician to distinguish between the three cases). To determine which of the cards is chosen by us is now a simple exercise in division by 5. But we must also encode the ordering of the spectators' cards. These cards have a natural ordering by their labels, and they are also ordered by their belonging to the spectators. Thus, we have to encode a permutation of 3 elements. There are 6 permutations of 3 elements, let us enumerate them somehow. Then, if we want to inform the first magician that spectators form a permutation number $k$ with respect to the natural ordering, we choose the card number $5k+d$.

2) The remainders $a, b, c$ are pairwise different. Then it is clear that exactly one of the following possibilities takes place:
$$
\text{either } |b-a|=|a-c|, \text{ or } |a-b|=|b-c|, \text{ or } |a-c|=|c-b|
$$
(the equalities are considered modulo 5). It is not hard to prove it by a case study, but one could also imagine choosing three vertices of a regular pentagon - these vertices always form an isosceles, but not an equilateral triangle.

Each of these possibilities has one of the remainders distinguished from the other two remainders (these distinguished remainders are $a, b, c$, respectively). Now, choose a card from the rest of the deck having the distinguished remainder modulo 5. Hence, we have three different remainders, one of them distinguished by (9) and presented in two copies. Let $d$ be the distinguished remainder and $s=5m+d$ be the spectator's card with this remainder.

Now we have to choose a card $r$ with the remainder $d$ such that the first magician would be able to understand which of the cards $s$ and $r$ was chosen by us and what permutation of spectators it implies. This can be done easily: if we want to inform the first magician that spectators form a permutation number $k$ with respect to the natural ordering, we choose the card number $s+5k\pmod{100}$.

The decoding procedure is easy: if we have two numbers $p$ and $q$ that have the same remainder modulo 5, calculate $p-q\pmod{100}$ and $q-p\pmod{100}$. If $p-q\pmod{100}>q-p\pmod{100}$ then $r=q$ is our card and $s=p$ is the spectator's card. (The case $p-q\pmod{100}=q-p\pmod{100}$ is impossible since the sum of these numbers is equal to 100, and one of them is not greater than $6\cdot 5=30$.)

3) Two remainders (say, $a$ and $b$) coincide. Let us choose a card with the remainder $d=(a+c)/2 \bmod 5$. Then $|a-d|=|d-c| \bmod 5$, so the remainder $d$ is distinguished by (9). Hence we have three different remainders, one of them distinguished by (9) and one of the non-distinguished remainders presented in two copies. The first magician will easily determine our card, and the rule to choose the card in order to enable him also determine the order of spectators is similar to the one in the 1st case.
