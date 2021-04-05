const areThereDuplicates = (...args) => {
    let counter = [];
    for (let i = 0; i < args.length; i++) {
        if (!counter.includes(args[i])) counter.push(args[i]);
        else return true;
    }
    return false;
};

console.log(areThereDuplicates(3, 5, 7));
console.log(areThereDuplicates(3, 5, 7, 3));