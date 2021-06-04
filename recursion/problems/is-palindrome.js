const isPalindrome = string => {
    let isEqual = false, firstHalf, reversedSecondHalf;

    if (string.length % 2 === 0) {
        firstHalf = string.slice(0, string.length / 2);
        reversedSecondHalf = string.slice(string.length / 2).split('').reverse().join('');
        if (firstHalf === reversedSecondHalf) isEqual = true;
    } else {
        firstHalf = string.slice(0, Math.floor(string.length / 2));
        reversedSecondHalf = string.slice(Math.floor(string.length / 2) + 1).split('').reverse().join('');
        if (firstHalf === reversedSecondHalf) isEqual = true;
    }

    return isEqual;
}

console.log(isPalindrome('ispalindrome'));
console.log(isPalindrome('ispalindromer'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('anna'));
