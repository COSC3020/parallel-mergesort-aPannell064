# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

While in practice the program would likely run faster than standard mergesort. The span of this parallel program in terms of worst-case $\Theta$ is still going to be $\Theta(n \cdot log{n})$. This is because it has to parallelize to a depth of $log{n}$ and then iterate through the entirety of each divided list. 
