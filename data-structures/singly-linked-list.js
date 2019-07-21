// node
// piece of data - val
// pointer to next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// super bad, super simple 'linked list'
// let first = new Node('Hello');
// first.next = new Node('World');
// first.next.next = new Node('Louie');


// singly linked list
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}
let list = new SinglyLinkedList();
list.push('Hello');
console.log(list);
list.push('World');
list.push('Goodbye');
console.log(list);
list.pop();
console.log(list);