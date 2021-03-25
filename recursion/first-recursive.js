// first simple recursive function
function countDown(num) {
    if (num <= 0) return;
    console.log(num);
    num--;
    countDown(num);
}
countDown(20);
// time big O? O(1)
// spcae big O? O(1)


// the same function, iteratively
function downDownIter(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
}
countDownIter(20);
// time big O? O(n)
// space big O? O(1)