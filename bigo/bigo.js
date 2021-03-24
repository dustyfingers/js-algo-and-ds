// goal: write a function that calculates the sum of all nubmers from 1 up to and including some number, n

// inefficent on large scales
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}
// more operations as n grows
// this would be O(n)

let t1 = Date.now();
console.log(addUpTo(10000000));
let t2 = Date.now();
console.log(`Time Elapsed::  ${(t2 - t1) / 1000} seconds`);



// waaay more scalable!!
const addUpToToo = (n) =>  n * (n + 1) / 2;
// only 3 basic operations as n grows, no matter what
// this would be O(1)
// the number of operations is *constant*

let altT1 = Date.now();
console.log(addUpToToo(10000000));
let altT2 = Date.now();
console.log(`Time Elapsed::  ${(altT2 - altT1) / 1000} seconds`);


// this is also O(n)
function countUpAndDown(n) {
	console.log('going up!');
	for (let i = 0; i < n; i++) {
		console.log(i)
	}

	console.log('all the way at the top!');
	console.log('going down!');

	for (let j = n - 1; j >= 0; j--) {
		console.log(j);
	}
	console.log('back down. bye!')
}

let altT3 = Date.now();
countUpAndDown(10);
let altT4 = Date.now();
console.log(`Time Elapsed::  ${(altT4 - altT3) / 1000} seconds`);


// what about nested loops?
// an 0(n) operation inside of an o(n) operation
// O(n^2)!!!
// the runtime grows at the rate of n^2 because it has on average
// n^2 more operations to do for each iteration
function printPairs(n) {
	for (let i = 0; i < n; i++){
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}
printPairs(250);



// now about space complexity!
function double(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(2 * arr[i]);
	}
	return newArr;
}
// the only memory we are taking up with the algorithms code *NOT THE INPUTS* 
// is the space for the instantiated newArr variable
// we dont instantiate anything new every loop
// the space O(n) is..... O(1)


// more complex big o complexities
// O(log n)
// better than O(n)!
// not quite as good as constant complexity O(1)