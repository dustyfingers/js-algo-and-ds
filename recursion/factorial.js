// iterative solution
// O(n) runtime
const iterativeFactorial = num => {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }

    return total;
}

// recursive solution
// also O(n) runtime?
const recursiveFactorial = num => {
    if (num === 1) return 1;
    return num * recursiveFactorial(num - 1);
}