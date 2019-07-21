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
    let letters = [];
    for (let i = 0; i < lgString.length; i++) {
        letters.push(lgString.charAt(i));
        for (let i = 0; i < pattern.length; i++) {
            letters.push(pattern.charAt(i));
        }
    }
    return letters;
}

console.log(naiveStringSearch(string, 'omg'));
console.log(naiveStringSearch(string, 'zomg'));
console.log(naiveStringSearch(string, 'lol'));