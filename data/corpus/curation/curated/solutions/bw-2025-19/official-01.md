## Solution The answer is N = 99.

We solve the problem for the more general case with n ≥ 5 integers on the blackboard.

Since Anna necessarily can reach a state with 1 integer on the board, he must have a first
move. Thus, we have N ≤ n − 1.

For N ≥ n − 1 we give the following construction. Let q, p_1 , . . . , p_n−2 be distinct primes
and suppose the integers on the board are qp_1 , p_1 , p_1 p_2 , p_2 p_3 , . . . , p_n−3 p_n−2 and p_n−2 p_1 . On the
one hand, Anna has the moves

           (p_1 , p_1 p_2 ) 7→ p_2 , (p_2 , p_2 p_3 ) 7→ p_3 , . . . , (p_n−2 , p_n−2 p_1 ) 7→ p_1 , (p_1 , qp_1 ) 7→ q

after which only q is left on the board. On the other hand, Anna has the move

                                                   (p_1 , qp_1 ) 7→ q

after which the integers on the board are q, p_1 p_2 , . . . , p_n−3 p_n−2 , p_n−2 p_1 , none of which are divisible by each other.

Remark. There might exist some slightly different constructions. For example, take q, p_1 , . . . , p_n−2
be distinct primes and suppose the integers on the board are

                               qp_1 , qp_2 , . . . , qp_n−2 , q^{n−3} , q^{n−3} p_1 p_2 . . . p_n−2 .

On the one hand, Anna has the moves

                               (qp_1 , q^{n−3} p_1 p_2 · · · p_n−2 ) 7→ q^{n−4} p_2 · · · p_n−2 ,
                                 (qp_2 , q^{n−4} p_2 · · · p_n−2 ) 7→ q n−5 p_3 · · · p_n−2 ,
                                                               ..
                                                                .
                                    (qp_n−3 , qp_n−3 p_n−2 ) 7→ p_n−2 ,
                                           (p_n−2 , qp_n−2 ) 7→ q,
                                                  (q, q^{n−3} ) 7→ q^{n−4}

after which only q^{n−4} is left on the board. On the other hand, Anna has the move

                                 (q^{n−3} , q^{n−3} p_1 p_2 . . . p_n−2 ) 7→ p_1 p_2 . . . p_n−2

after which the integers on the board are qp_1 , qp_2 , . . . , qp_n−2 , p_1 p_2 . . . p_n−2 , none of which are
divisible by each other.
