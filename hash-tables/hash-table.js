function hash(key, arrLength) {
    let result = 0,
        p = 15485863;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        result = (result * p + value) % arrLength;
    }
    return result;
}

let stuff = "hello bello woo hoo";

console.log(hash(stuff, 20));
console.log(hash(stuff + 'r', 20));