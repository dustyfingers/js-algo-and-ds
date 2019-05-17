
// inefficent on large scales
function addUpTo(n) {
	let total  = 0;
	for (let i = 1; i <=n; i++) {
		total += i;
	}
	return total;
}

let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000 } seconds.`);


// waaay more scalable!!
function addUpToToo(n) {
    return n * (n +1) / 2;
}

let altT1 = performance.now();
console.log(addUpToToo(1000000000));
let altT2 = performance.now();
console.log(`Time Elapsed: ${(altT2 - altT1) / 1000 } seconds.`);
