// daily-problems-data.js

const dailyProblemsData = {
    "A": [
        {
            "name": "2023/1",
            "topic": "A",
            "statement": `
            Find all strictly increasing sequences of positive integers $a_1, a_2, \\ldots$ with $a_1=1$, satisfying$$3(a_1+a_2+\\ldots+a_n)=a_{n+1}+\\ldots+a_{2n}$$ for all positive integers $n$.
            `

        },
        {
            "name": "2023/2",
            "topic": "A",
            "statement": `
                Let \\( a_1, a_2, \\ldots, a_{2023} \\) be positive reals such that \\( \\sum_{i=1}^{2023}a_i^i = 2023 \\). Show that
                \\[
                \\sum_{i=1}^{2023}a_i^{2024-i} > 1 + \\frac{1}{2023}.
                \\]
            `
        },
        {
            "name": "2023/3",
            "topic": "A",
            "statement": `
                Denote a set of equations in the real numbers with variables $x_1, x_2, x_3 \\in \\mathbb{R}$ Flensburgian if there exists an $i \\in \\{1, 2, 3\\}$ such that every solution of the set of equations where all the variables are pairwise different, satisfies $x_i>x_j$ for all $j \\neq i$.

Find all positive integers $n \\geq 2$, such that the following set of two equations $a^n+b=a$ and $c^{n+1}+b^2=ab$ in three real variables $a,b,c$ is Flensburgian.
            `
        },
        // Add more Algebra problems here
    ],
    "N": [

        {
            "name": "2023/16",
            "topic": "N",
            "statement": 
            `
                Prove that there exist nonconstant polynomials $f, g$ with integer coefficients, such that for infinitely many primes $p$, $p \\nmid f(x)-g(y)$ for any integers $x, y$.

            `,

        },
        {
            "name": "2023/N2",
            "topic": "N",
            "statement": "Determine whether the number \( 2^{100} + 1 \) is prime."
        },
        // Add more Number Theory problems here
    ],
    "C": [
        {
            "name": "2023/C1",
            "topic": "C",
            "statement": `
                Let \( n \) be a positive integer. A German set in an \( n \times n \) square grid is a set of \( n \) cells which contains exactly one cell in each row and column. Given a labeling of the cells with the integers from \( 1 \) to \( n^2 \) using each integer exactly once, we say that an integer is a German product if it is the product of the labels of the cells in a German set.
                
                <ol type="a">
                    <li>Let \( n = 8 \). Determine whether there exists a labeling of an \( 8 \times 8 \) grid such that the following condition is fulfilled: The difference of any two German products is always divisible by \( 65 \).</li>
                    <li>Let \( n = 10 \). Determine whether there exists a labeling of a \( 10 \times 10 \) grid such that the following condition is fulfilled: The difference of any two German products is always divisible by \( 101 \).</li>
                </ol>
            `
        },
        {
            "name": "2023/C2",
            "topic": "C",
            "statement": "In how many ways can 5 indistinguishable balls be placed into 3 distinct boxes?"
        },
        // Add more Combinatorics problems here
    ],
    "G": [
        {
            "name": "2023/G1",
            "topic": "G",
            "statement": "Prove that the sum of the interior angles of a triangle is \( 180^\circ \)."
        },
        {
            "name": "2023/G2",
            "topic": "G",
            "statement": "Find the area of a regular hexagon with side length \( s \)."
        },
        // Add more Geometry problems here
    ]
};
