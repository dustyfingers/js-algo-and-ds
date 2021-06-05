const fib = n => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(45));

// what about the time complexity fo this solution?
// its.... not good. 
// O(2^n)
// even worse that quadratic (n^2), like REAL bad
// almost as bad as O(n!) which is just insane tbh