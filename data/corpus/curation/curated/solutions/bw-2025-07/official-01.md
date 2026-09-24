## Solution We will prove that the answer is X = n^4 .

For the construction, consider the 2 × 2 × 2 case and then divide each of these large prisms into
n^2/4
   smaller prisms.

Let n = 2k. Consider all 1 × 2k × 2k prisms (there are 6k of them). Call them plates.
Each plate can only contain needles of a single orientation. Assuming it is possible to do k^2 + 1
needles, we will show that each needle orientation is contained in at least 2k + 1 plates which
will give a contradiction by pigeonhole.

Fix the orientation of a needle. Each needle of this orientation can be contained in only
two different orientations of plates, call these orientations c1 and c2 . Additionally, each needle
corresponds to a unique pair of a plate of c1 and c2 . So if there are p_1 plates of c1 which contain
this orientation needle (similarly p_2 ) then there are at most p_1p_2 needles and hence:

                              (p_1+p_2)^2 ≥ 4p_1p_2 ≥ 4(k^2 + 1) > 4k^2

as needed.
