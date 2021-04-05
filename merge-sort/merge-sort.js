// merge sort exploits the fact that arrays of length 0 and 1 are always sorted
// works by decomposing an array into smaller arrays of 0 or 1 elements and then building up a newly sorted array

// custom merge function
const merge = (sortedArr1, sortedArr2) => {
    let resultsArr = [];
    let i = 0;
    let j = 0;

    while (i < sortedArr1.length && j < sortedArr2.length) {
        if (sortedArr2[j] > sortedArr1[i]) {
            resultsArr.push(sortedArr1[i]);
            i++;
        } else {
            resultsArr.push(sortedArr2[j]);
            j++;
        }
    }

    while (i < sortedArr1.length) {
        resultsArr.push(sortedArr1[i]);
        i++;
    }

    while (j < sortedArr2.length) {
        resultsArr.push(sortedArr2[j]);
        j++;
    }

    // ! no nested loops! O(n + m) time!!

    return resultsArr;
};

const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let halfPoint = Math.floor(arr.length / 2);
    let firstHalf = mergeSort(arr.slice(0, halfPoint));
    let secondHalf = mergeSort(arr.slice(halfPoint));
    return merge(firstHalf, secondHalf);
};

console.log(mergeSort([1,2,3,37,9,6,7,93,22,5,6]))

// ! merge sort has a O(n log(n)) runtime!
// ! log n splits (as length of input grows to 32, splits grows to ~5). the length of the array halves each iteration
// ! n comparisons each split for the length of the array
// * therefore O(n log(n))