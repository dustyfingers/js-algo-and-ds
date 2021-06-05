const averagePair = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] / 2 === val) return true;
        }
    }
    return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));