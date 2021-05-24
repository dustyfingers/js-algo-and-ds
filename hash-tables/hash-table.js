class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash (key) {
        let result = 0,
            p = 15485863;
    
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            result = (result * p + value) % this.keyMap.length;
        }
        return result;
    }

    set (key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
    }
}