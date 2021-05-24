class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let result = 0,
            p = 15485863;
    
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            result = (result * p + value) % this.keyMap.length;
        }
        return result;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
            }
        }
        return undefined;
    }
}

let ht = new HashTable();

ht.set('yellow', '#yellhex');
ht.set('green', '#grnhex');
ht.set('red', '#redhex');

console.log(ht.get('yellow'));