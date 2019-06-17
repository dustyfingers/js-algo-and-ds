// a process or function is reursive if it calls *itself*
// recursive functions have:
// 1. a base case to terminate calls
// 2. a different input each time the function is called


//first recursive function
function countDown(num) {
    if (num <= 0) {
        console.log('All done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(10);


// second recursive function 
function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}
console.log(sumRange(10));