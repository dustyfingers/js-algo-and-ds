// given two strings, write a function that determines if the second is an anagram of the first
// eg, cinema and iceman are anagrams of each other
// if should retuyrn true if the strings are anagrams, and false if they are not

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }

    return true;
}

console.log(validAnagram('icemane', 'cinemea'));
console.log(validAnagram('iceman', 'cinema'));
console.log(validAnagram('iceman', 'cinemea'));

// since this implementation uses the frequency counter pattern we maintain the O(n) runtime!