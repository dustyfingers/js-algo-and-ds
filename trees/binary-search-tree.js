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

    breadthFirstSearch() {
        let queue = [], 
            visited = [],
            currentNode = this.root;

        queue.push(currentNode);

        // empty arrays are truthy in javascript
        while (queue.length) {
            currentNode = queue.shift();
            visited.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        return visited;
    }

    depthFirstSearchPreOrder() {
        let visited = [],
            currentNode = this.root;
        
        const dfsHelper = node => {
            visited.push(node.value);
            if (node.left) dfsHelper(node.left);
            if (node.right) dfsHelper(node.right);
        }
        
        dfsHelper(currentNode);
        return visited;
    }

    depthFirstSearchPostOrder() {
        let visited = [],
            currentNode = this.root;
        
        const dfsHelper = node => {
            if (node.left) dfsHelper(node.left);
            if (node.right) dfsHelper(node.right);
            visited.push(node.value);
        }
        
        dfsHelper(currentNode);
        return visited;
    }

    depthFirstSearchInOrder() {
        let visited = [],
            currentNode = this.root;
        
        const dfsHelper = node => {
            if (node.left) dfsHelper(node.left);
            visited.push(node.value);
            if (node.right) dfsHelper(node.right);
        }
        
        dfsHelper(currentNode);
        return visited;
    }
}

let tree = new BinarySearchTree();

tree.insert(10)
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree.find(10));
// console.log(tree.find(2));

console.log(tree.breadthFirstSearch());
console.log(tree.depthFirstSearchPreOrder());
console.log(tree.depthFirstSearchPostOrder());
console.log(tree.depthFirstSearchInOrder());

// big o of binary search trees
// O(log n) for insertion (NOT guaranteed - this is AT BEST)
// O(log n) for searching (NOT guaranteed - this is AT BEST)

// rule of thumb for log n time complexity - 
// if you DOUBLE the data, you only increase the number of steps for find/insert by ONE