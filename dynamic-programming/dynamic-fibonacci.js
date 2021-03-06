// the memo is like the lookup table for past solutions!
// now remember since this is a recursive solution when you do higher numbers
// you will get a stack overflow error
const fib = (n, memo=[]) => {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    const res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

// the table is also the lookup table for past solutions!
// wont get a stack overflow error wwith higher numbers because you dont have all
// these function calls on the call stack waiting to be resolved
const fibTab = (n) => {
    if (n <= 2) return 1;
    let table = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
}

console.log(fibTab(100));

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

// enter tabulation!
// tabulation is another dynamic programming technique that is kind of the 
// 'bottom-up' counterpart to memoizations 'top-down' approach
// eg, instead of starting with fib(100) in the call stack,
// you start with fib(1) and calculate upwards (in this example)