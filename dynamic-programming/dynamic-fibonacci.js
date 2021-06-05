// the memo is like the lookup table for past solutions!
const fib = (n, memo=[]) => {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    const res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

console.log(fib(100));

// what about the time complexity fo this solution?
// its.... not good. 
// O(2^n)
// even worse that quadratic (n^2), like REAL bad
// almost as bad as O(n!) which is just insane tbh

// enter memoization!
// we can store the result of expensive function calls and 
// return the cached result when the same inputs occour again!
// for example so we dont have to figure out fib(5) EVERY single time we need it

// what about the big O of the memoized solution?
// its time complexity is actually O(n)!
// way better!
// at scale, this technique could be very useful in certain contexts...