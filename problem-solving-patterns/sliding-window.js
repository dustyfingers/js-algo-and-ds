
// this function takes in an array and a number and finds the highest consecutive sum 
// of length num in that array
const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    // find the sum of the first n elements in the array
    // and set this to be maxSum
    // ! this is our initial 'sliding window' i through num
    for (let i = 0; i < num; i++) maxSum += arr[i];

    // the tempsum is this new max
    tempSum = maxSum;

    // for each element in the given array AFTER the initial
    // sum is taken
    for (let i = num; i < arr.length; i++) {
        // temp sum is the old tempSum - the element at the index i - num
        //  + the element at the current index
        tempSum = tempSum - arr[i - num] + arr[i];

        // reassign new maxSum if tempSum is bigger than old MaxSum
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1,2,3,4,5,6,7], 2));