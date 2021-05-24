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

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable();

ht.set('yellow', '#yellhex');
ht.set('green', '#grnhex');
ht.set('red', '#redhex');

console.log(ht.get('yellow'));
console.log(ht.values());
console.log(ht.keys());