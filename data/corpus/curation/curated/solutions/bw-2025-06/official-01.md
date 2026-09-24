## Solution 1 Answer is n(n−1)/2 + 1.

If among every two new people, one has freed the other one at least once, then there has
been at least n(n−1)/2
                     liberations. Two liberations of the same person must be preceded by having been imprisoned two times, because if a person is freed then it cannot be freed before having
been imprisoned again. Liberations of different people obviously must be preceded by having
been imprisoned during different knockouts, as one knockout can result in imprisoning only
one other person. Thus for fulfilling the condition in question, there must be at least n(n−1)/2
knockouts plus one more knockout to free the person imprisoned lastly. Altogether, there must
be at least n(n−1)
               2
                   + 1 knockouts.

Now we show that n(n−1)       2
                                  + 1 knockouts is enough. Firstly, let n be odd. Label all new people
by integers 0, 1, . . . , n − 1. Let the person (n−1)/2
                                                        imprison the people 0, 1, . . . , n−1
                                                                                           2
                                                                                              − 1 during the
       n−1                                                                    n−1 n−1
first 2 knockouts, then let the person n − 1 imprison the people 2 , 2 + 1, . . . , n − 2 during
the next (n−1)/2
                   knockouts, and so on cyclically modulo n. In other words, during every new
knockouts, the next person in the cyclic order modulo n is imprisoned, the imprisoning person
is changed after every n−1       2
                                    knockouts and then it jumps over exactly n−1      2
                                                                                          − 1 people in the
cyclic order. Every new imprisoner imprisons the previous imprisoner during its first knockout
and frees all countries imprisoned by the previous imprisoner. This implies that shifting the
imprisoner by n−1      2
                          is always possible. After n(n−1)/2
                                                               knockouts, the person 0 imprisons people
(n+1)/2, (n+1)/2
           + 1, . . . , n − 1  and all other new people  are free. At last, let the country n−12
                                                                                                  imprisoner
                                                                                    n−1
the person 0 again. After that, every new person has once freed all the 2 people immediately
following it in the cyclic order. Thus among every two new people, one has freed the other one.

Let now n be even. Denote one new person as C. Apply the programme of knockouts described above for odd n to the set of all other new people, but at the end of the series of
knockouts organized by each person, add one more knockout during which this person imprisons also C. During the first knockout of the next imprisoner, the latter frees C, so it will be
able to imprison it again during its last knockout. This way, there will be (n−1)(n−2)/2
                                                                                       +1+(n−1)
                  n(n−1)
or, equivalently, 2 + 1 knockouts in total. After that, among every two new people, one
has freed the other one.

## Solution 2 For the construction part, we follow solution 1. We prove that there must be
at least n(n−1)
            2
                + 1 knockouts differently. We show that the sum of the number of currently
imprisoned people and the number of liberations having taken place so far (different people
freed during one knockout contribute independently) increases by exactly 1 during each knockout. Indeed, let u be the number of imprisoned new people before the knockout, let v be
the number of liberations having taken place before the knockout and let k be the number of
people freed during the knockout. Then after the knockout, the number of imprisoned new people is u−k+1 and the number of liberations having taken place is v+k, which is u+v+1 in total.

As the number of imprisoned new people and the number of liberations are both zeros at the
beginning, the sum of these numbers equals the number of knockouts all the time. If among

                                                    13

every two new people, one of them has freed the other one at least once, then the number of
liberations is at least n(n−1)
                           2
                               and the number of imprisoned new people is at least 1 (the person
that has been knocked out lastly is imprisoned), which is n(n−1)
                                                              2
                                                                  + 1 in total. So there must
                     n(n−1)
have been at least 2 + 1 knockouts.
