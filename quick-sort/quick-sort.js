const pivot = (arr, start=0, end=arr.length+1) => {
    let pivot = arr[start], swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
    }

    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
    return swapIdx;
}

console.log(pivot([4,8,2,1,5,7,6,3]));

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if ( left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }

    return arr;
}

console.log(quickSort([4,2,1,5,3]));