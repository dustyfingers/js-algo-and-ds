const productOfArray = arr => {
    if (arr.length === 1) return arr[0];
    let lastItem = arr[arr.length - 1];
    arr.pop();
    return lastItem * productOfArray(arr);
}

console.log(productOfArray([7]));