function hash(key, arrLength) {
    let result = 0;

    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        result = (result + value) % arrLength;
    }

    return result;
}

let stuff = "hello bello woo hoo";

console.log(hash(stuff, 20));
console.log(hash(stuff + 'r', 20));