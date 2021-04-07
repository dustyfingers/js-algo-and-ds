class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push adds to the beginning
    push(value) {
        let newNode = new Node(value);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else if (this.size >= 1) {
            let currentFirst = this.head;
            this.first = newNode;
            this.first.next = currentFirst;
        }
        return ++this.size;
    }

    // pop removes from the beginning
    pop() {
        if (!this.first) return null;
        let currentFirst = this.first;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return currentFirst.val;
    }
}

// what is the general big o of stacks?
// insertion, removal O(1) - constant time!
// searching, access O(n)


let stack = new Stack();
console.log(stack.push('1'))
console.log(stack.push('boohoo'))
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)