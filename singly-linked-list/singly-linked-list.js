// a linked list is a collection of nodes
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push should assign the given item to the list at the 'end' position
    push(item) {
        // create a new node
        let newNode = new Node(item);

        // if there is nothing in the list make this item the first element
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        // increment length
        this.length++;

        return this;
    }
}

let list = new SinglyLinkedList();

console.log(list.push("Hi!"));
console.log(list.push("150"));