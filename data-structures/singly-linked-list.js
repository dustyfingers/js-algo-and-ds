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
        let node = new Node(val)
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else this.tail.next = node;
    }
}
let list = new SinglyLinkedList();