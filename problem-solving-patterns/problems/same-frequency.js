// given two positive integers, find out if the two numbers have
// the same frequency of digits (return true or false)

const sameFrequency = (int1, int2) => {
    let intArr1 = (""+int1).split("");
    let intArr2 = (""+int2).split("");
    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let val of intArr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for (let val of intArr2) {
        freqCounter2[val] = (freqCounter2[val] || 0 ) + 1;
    }

    for (let key in freqCounter1) {
        if (freqCounter1[key] !== freqCounter2[key]) return false;
    }
    
    return true;
}


console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
