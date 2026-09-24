Solution:

Suppose that there is an $x$ such that $0 < x < \frac{\pi}{2}$ and $\sin x$, $\cos x$, $\tan x$, $\cot x$ in some order are consecutive terms of an arithmetic progression.

Suppose $x \leq \frac{\pi}{4}$. Then $\sin x \leq \sin \frac{\pi}{4} = \cos \frac{\pi}{4} \leq \cos x < 1 \leq \cot x$ and $\sin x < \frac{\sin x}{\cos x} = \tan x \leq 1 \leq \cot x$, hence $\sin x$ is the least and $\cot x$ is the greatest among the four terms. Thereby, $\sin x < \cot x$, therefore equalities do not occur.

Independently on whether the order of terms is $\sin x < \tan x < \cos x < \cot x$ or $\sin x < \cos x < \tan x < \cot x$, we have $\cos x - \sin x = \cot x - \tan x$. As
$$
\cot x - \tan x = \frac{\cos x}{\sin x} - \frac{\sin x}{\cos x} = \frac{\cos^2 x - \sin^2 x}{\cos x \sin x} = \frac{(\cos x - \sin x)(\cos x + \sin x)}{\cos x \sin x},
$$
we obtain $\cos x - \sin x = \frac{(\cos x - \sin x)(\cos x + \sin x)}{\cos x \sin x}$. As $\cos x > \sin x$, we can reduce by $\cos x - \sin x$ and get
$$
1 = \frac{\cos x + \sin x}{\cos x \sin x} = \frac{1}{\sin x} + \frac{1}{\cos x}.
$$
But $0 < \sin x < 1$ and $0 < \cos x < 1$, hence $\frac{1}{\sin x}$ and $\frac{1}{\cos x}$ are greater than 1 and their sum cannot equal 1, a contradiction.

If $x > \frac{\pi}{4}$ then $0 < \frac{\pi}{2} - x < \frac{\pi}{4}$. As the sine, cosine, tangent and cotangent of $\frac{\pi}{2} - x$ are equal to the sine, cosine, tangent and cotangent of $x$ in some order, the contradiction carries over to this case, too.
