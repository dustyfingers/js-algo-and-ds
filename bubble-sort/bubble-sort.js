// ? aside: ES2015 swapping
const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

// 'naive' solution
// sorts high-to-low
// const bubbleSort = arr => {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j+1] < arr[j]) swap(arr, j, j+1);
//         }
//     }
//     return arr;
// }


// optimized solution
// sorts high-to-low
const bubbleSort = arr => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j+1] < arr[j]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}
// ! bubble sort has O(n^2) runtime :(

// logs
console.log(bubbleSort([42, 35, 36, -3, 37, 99, 42]));