Solution:

Each time the operation is performed, the difference between the two numbers on the blackboard will become one half of its previous value (regardless of which number was erased). The mean value of two integers is an integer if and only if their difference is an even number. Suppose the initial numbers were $a = 2000$ and $b$. It follows that the operation can be performed $n$ times if and only if $a - b$ is of the form $2^{n} u$. This shows that $n \leqslant 10$ since $2^{11} > 2000$. Choosing $b = 976$ so that $a - b = 1024 = 2^{10}$, the operation can be performed $10$ times.
