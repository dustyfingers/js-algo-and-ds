const data = require("./data");
// LINEAR SEARCH
// YOU HAVE TO CHECK EVERY ELEMENT FOR SOME CONDITION
// IE, is usernames[i] === 'alice_in_chains'

let userIdx = data.usernames.indexOf('dog_guy');

// custom linear search implementation
// essentially a rewrite of the .indexOf() function!
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i]) return i;
    }
    return -1;
}

// es6 linear search algorithm
const linearSearchES6 = (arr, val, res = -1) => {
    arr.forEach((item, i) => {
        if (item === val) res = i;
    });
    return res;
}

console.log(linearSearch(data.states, 'Nebraska320'));
console.log(linearSearch(data.states, 'Nebraska'));
console.log(linearSearchES6(data.states, 'Nebraska32'));
console.log(linearSearchES6(data.states, 'Nebraska'));