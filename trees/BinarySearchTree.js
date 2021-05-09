class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return this;
        }

        let newNode = new Node(value);
        let current = this.root;

        while (true) {
            if (value === current.value) return undefined;

            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return undefined;
        var current = this.root;
        var found = false;

        while(current && !found) {
            if (value < current.value) current = current.left;
            else if (value > current.value) current = current.right;
            else found = true;
        }
        if (!found) return undefined;
        return current;
    }
}

let tree = new BinarySearchTree();

tree.insert(10)
tree.insert(5);
tree.insert(15);
tree.insert(9);
tree.insert(13);
tree.insert(25);
console.log(tree.find(10));
console.log(tree.find(2));

// big o of binary search trees
// O(log n) for insertion (NOT guaranteed - this is AT BEST)
// O(log n) for searching (NOT guaranteed - this is AT BEST)

// rule of thumb for log n time complexity - 
// if you DOUBLE the data, you only increase the number of steps for find/insert by ONE