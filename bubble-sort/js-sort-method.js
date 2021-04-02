// js has a built in sort method!
// but ut doesnt always work the way you think...

let array = ['Williford', 'Louie', 'Colt', 'State Machine', 'Data Structure', 'Algorithms'];
console.log(array.sort());
// output:
// ['Algorithms', 'Colt', 'Data Structure', 'Louie', 'State Machine', 'Williford']
// as expected!

// what about numbers?
let numberArray = [6, 4, 15, 10];
console.log(numberArray.sort());
// output:
// [ 10, 15, 4, 6 ]

// odd! why??
// becuase, according to the mdn:
// 'the default sort order is according to string unicode code points'
// basically, every element is converted to a string then that unicode value is evauluated

// we can tell js how to sort though by passing in params
// specifially a comparator function that takes in 2 values: a and b
// if the comparator function returns a negative value, sort knows a should come before b
// if the comparator function returns a positive value, sort knows b should come before a
// if the comparator function returns 0, sort treats them as 'equal'

// this will sort the numbers low to high
console.log(numberArray.sort((num1, num2) => (num1 - num2)));

// this will sort the numbers high to low
console.log(numberArray.sort((num1, num2) => (num2 - num1)));

// this will sort the strings short to long
console.log(array.sort((str1, str2) => (str1.length - str2.length)));

// this will sort the strings long to short
console.log(array.sort((str1, str2) => (str2.length - str1.length)));