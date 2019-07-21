let string = 'omg lol haha zomg haha teehee uwu aha! omg! lol haha bazinga! omg haha lol lol'

// want to count number of times a smaller string occours in a larger string?
// USE NAIVE STRING SEARCH!

// STEPS
// loop over longer string
// loop over shorter string
// if chars dont match, break out of inner loop, else keep going
// if complete inner loop, found match! increment the count of matched strings
// if complete outer loop, return count of matches

function naiveStringSearch(lgString, pattern) {
    let matchCount = 0;
    for (let i = 0; i < lgString.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== lgString[i + j]) break;
            if (j === pattern.length - 1) matchCount++;
        }
    }
    return matchCount;
}

console.log(naiveStringSearch(string, 'omg'));
console.log(naiveStringSearch(string, 'zomg'));
console.log(naiveStringSearch(string, 'lol'));