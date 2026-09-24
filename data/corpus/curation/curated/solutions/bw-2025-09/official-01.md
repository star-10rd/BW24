## Solution We start by proving a lemma.

**Lemma:** If all interior angles of an n-gon are 120◦ and 240◦ , then n is an even number.
Proof: The sum of the interior angles of a polygon is 180◦ · (n − 2). For a polygon with a
angles equal to 120◦ and b angles equal to 240◦

                                180◦ · (n − 2) = a · 120◦ + b · 240◦
                                        3(n − 2) = 2a + 4b.

The right-hand side is an even number, so the left-hand side must also be an even number, so
n is even.
                                                          √                   √
Introduce 6 unit
              √   vectors  a  =  (1;
                                   √ 0), b  =    (1/2,      3/2), c =  (−1/2,   3/2), d = (−1, 0),
e = (−1/2, − 3/2), f = (1/2, − 3/2). Every next vector is obtained rotating the previous one by 60◦ counterclockwise.
    As the consecutive side lengths {n, n − 1, . . . , 2, 1} are known in advance, each Baltic polyiamond can be specified as a sequence of its side vector directions only.

    For example, the polyiamond in the above image is encoded as ABCDEDEFAFAB, since its
sides (adding up to (0; 0)) are

                          12a, 11b, 10c, 9d, 8e, 7d, 6e, 5f , 4a, 3f , 2a, 1b.

Definition. The vertex where the side of length n meets the side of length 1 will be called the
origin of the Baltic polyiamond.

Without loss of generality we assume that the longest side has the direction A – if necessary, rotate it by a multiple of 60◦ .

**Lemma 2:** An encoding of any Baltic polyiamond starting with A consists of letter pairs
AB, AF, CB, CD, ED, EF in some order. (For example, the 12-gon above can be expressed as pairs
like this: AB.CD.ED.EF.AF.AB.
Proof: Each of the side directions A, C, E can be followed just by some letter that immediately
precedes or immediately follows it. For example, A can be followed by F or B (”slight right”
and ”slight left” turns), but it cannot be followed by E or C (which would be ”sharp right” and
”sharp left” turns causing acute internal angles). A cannot be followed by another A or by D as

                                                  18

then the side does not change the direction at all.
Similarly C can be only followed by B and D and E can only followed by D and F. Each new pair
can only start with another letter A, C, E, because the side direction alternates between two sets
{A, C, E} and {B, D, F}.

**Lemma 3:** Color every point in the infinite triangle grid in colors 0, 1 or 2. as shown in
the image.

    Assume that a Baltic polyiamond is drawn so that the origin is located in a red vertex
(color 0). Mark the colors of vertices after traversing every two sides. The colors must follow
this sequence:

                   0 → 1 → 2 → 0 → 1 → 2 → 0 → 1 → 2 → ...
In other words, after traversing every two sides of a Baltic polyiamond having lengths 2k and
2k − 1 respectively, color adds 1 (modulo 3).
Proof: According to Lemma 2, each two consecutive sides of lengths 2k and 2k − 1 can have
any directions AB, AF, CB, CD, ED, EF. We observe that the grid coloring is symmetric against
rotations by 120◦ around any grid point. For this reason it is sufficient to analyze just the
directions AB and AF.

Consider the direction AB and assume that the corresponding vector 2k a + (2k-1)b
starts from some color ck ∈ {0, 1, 2}. Transform the sum as follows:

                           2k a + (2k-1)b = 2k(a+b) + (−b).

The first vector 2k(a+b) preserves the color ck , but the second vector adds 1 to the color ck
(modulo 3).

                                               19

   Similarly, assume that the vector 2k a + (2k-1)f starts from color 0. It is a sum of two
vectors: 2k(a+f) and −f . In this case 2k(a+f) preserves the color, but −f advances the color
number by 1.

The problem statement follows from Lemma 3: Traversing every 2 sides changes color (adds 1
modulo 3), but after traversing all n sides the polygon must return to its origin having color 0.
Therefore the number of side pairs is divisible by 3 and consequently n is divisible by 6.
