const data = require("./data");

//****
// BINARY SEARCH!
//ONLY WORKS ON SORTED ARRAYS
// ELIMINATE HALF REMAINING ELEMENTS PER STEP INSTEAD OF ONE PER STEP


// pick halfway point in array,
// check if item is after or before your midpoint in array
// if item is before, throw out array elements after midpoint
//find a new midpoint between your old midpoint and the beginning of the array
//repeat step 2-4 until item matches

function binarySearch(arr, val) {
    let rightPointer = 0;
    let leftPointer = arr.length - 1;
    let middlePointer = Math.floor((rightPointer + leftPointer) / 2);
    while (arr[middlePointer] !== val && rightPointer <= leftPointer) {
        if (arr[middlePointer] > val) leftPointer = middlePointer - 1;
        else rightPointer = middlePointer + 1;
        middlePointer = Math.floor((rightPointer + leftPointer) / 2);
    }
    return arr[middlePointer] === val ? middlePointer : -1;
}

console.log(binarySearch(data.states, 'Delaware'));
console.log(binarySearch(data.states, 'Alabama'));
console.log(binarySearch(data.states, 'Delaware23'));