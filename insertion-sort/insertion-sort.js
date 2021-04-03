const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        // we use var here so we can use j out of this loops scope
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
        console.log(arr);
    }

    return arr;
}

// ! insertion sort has a time complexity of O(n^2) :-/

console.log(insertionSort([56, 2, 123, 1]));