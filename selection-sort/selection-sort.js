// ? aside: ES2015 swapping
const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const selectionSort = arr => {

    for (let i = 0; i < arr.length; i++) {
        let smallestIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestIdx]) smallestIdx = j;
        }

        if (i !== smallestIdx) swap(arr, smallestIdx, i);
    }

    return arr;
}
// ! selection sort has O(n^2) runtime :(

console.log(selectionSort([8, 6 ,4, 3, 7, 2]))