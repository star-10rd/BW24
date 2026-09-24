Number the coins by $2^{k}$-digit binary numbers from $\overbrace{00 \ldots 0}^{\text {length } 2^{k}}$ to $\overbrace{11 \ldots 1}^{\text {length } 2^{k}}$. Let $A_{i}$ be the set of coins which have 0 in $i$-th position of the binary number. The first $2^{k}$ tests we perform with the help of $2^{k}$ different dogs. In the $i$-th test we determine whether the set $A_{i}$ contains the fake coin. With out loss of generality we may assume that the dogs determined that all the digits in the number of the fake coin are 0 's. Due to the possible presence of the sick dog in these tests, it means in fact that the binary number of the fake coin contains at most one 1 .

$$
\text { length } 2^{k}
$$

In the next test we let a new dog determine whether the coin $00 \ldots 0$ is genuine. If the new dog barks then the coin is really fake, for otherwise two dogs had given us a false answer. If the new dog does not bark we find a dog we have not used before to test the suspected coin.

(i) If the last two dogs disagree one of them must be sick and hence the first $k$ dogs must be healthy. length $2^{k}$

In this case the coin $\overbrace{00 \ldots 0}$ is the fake one.

(ii) If the last two dogs agree (by not barking) it follows that both of them are healthy. The reason is that if one of the last two dogs was sick and did not bark, it would mean that the first $k$ dogs were length $2^{k}$

healthy, implying that the coin $00 \ldots 0$ is fake, but then the other of the last two dogs is healthy and did not bark at the fake coin, a contradiction.

Therefore one of the first $2^{k}$ dogs gave a wrong verdict. In this case we have $2^{k}$ possible candidates for the fake coin. We can find the fake coin using the last dog and $k$ tests using binary search.

It follows that no more than $2^{k}+k+2$ tests are needed.
