// implement a function called countUniqueValues 
// it should accept a sorted array if integers
// it should count and return the number of unique values in this given array
// note: this array is sorted!

const countUniqueValues = arr => {
    let left = 0;
    let right = 1;
    let uniqueValues = 0;

    if (arr[left]) uniqueValues += 1;

    while (right < arr.length) {
        if (arr[left] !== arr[right]) uniqueValues += 1;
        left = right;
        right++;
    }

    return uniqueValues;
}

console.log(countUniqueValues([3, 5, 7, 7]));
console.log(countUniqueValues([3, 5, 6, 7, 7]));
console.log(countUniqueValues([-3, 3, 5, 6, 7, 7, 7, 8]));