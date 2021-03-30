const data = require("./data");

const binarySearch = (arr, query) => {
    let leftPoint = 0;
    let rightPoint = arr.length - 1;
    let middlePoint = Math.floor((leftPoint + rightPoint) / 2);

    if (arr[middlePoint] === query) return middlePoint;

    while (arr[middlePoint] !== query && leftPoint <= rightPoint) {
        if (arr[middlePoint] > query) rightPoint = middlePoint - 1;
        else leftPoint = middlePoint + 1;

        middlePoint = Math.floor((leftPoint + rightPoint) / 2);
    }
    
    if (arr[middlePoint] === query) return middlePoint;
    else return -1;
}

console.log(binarySearch(data.states, 'Delaware'));
console.log(binarySearch(data.states, 'Alabama'));
console.log(binarySearch(data.states, 'Delaware23'));