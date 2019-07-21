
//**** 
// LINEAR SEARCH
// WHERE YOU HAVE TO CHECK EVERY ELEMENT FOR SOME CONDITION
// IE, is usernames[i] === 'alice_in_chains'

let userIdx = usernames.indexOf('dog_guy');

// custom linear search implementation
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i]) return i;
    }
    return -1;
}

// es6 linear search algorithm
function linearSearchES6(arr, val, res = -1) {
    arr.forEach((item, i) => {
        if (item === val) res = i;
    });
    return res;
}

console.log(linearSearch(states, 'Nebraska320'));
console.log(linearSearch(states, 'Nebraska'));
console.log(linearSearchES6(states, 'Nebraska32'));
console.log(linearSearchES6(states, 'Nebraska'));