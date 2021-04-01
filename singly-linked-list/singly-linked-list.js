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

        // increment length & return this
        this.length++;
        return this;
    }

    // traverse moves through each element of the list and logs the value held there
    traverse() {
        // place current at beginning
        let current = this.head;
        
        // iterate through current & log value
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }

    // pop removes the last node from the linked list and returns it
    pop() {
        // short circuit
        if (!this.head) return undefined;

        let current = this.head;
        let deletedItem;

        while (current) {
            // if list is only one item long
            if (this.length == 1) {
                deletedItem = current;
                this.tail = null;
                this.head = null;
                this.length--;
                return deletedItem;
            }

            // if at the second to last item
            if (!current.next.next && this.length > 1) {
                deletedItem = current.next;
                current.next = null;
                this.tail = current;
                this.length--;
                return deletedItem;
            } else 
            current = current.next;
        }
    }

    // shift removes a node from the beginning from the linked list
    shift() {
        // short circuit
        if (!this.head) return undefined;
        let current = this.head;

        this.head = current.next;
        this.length--;
        return current;
    }
}

let list = new SinglyLinkedList();

console.log(list.push("Hi!"));
console.log(list.push("150"));

list.traverse();

console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);


console.log(list.push("random!"));
console.log(list.push("junk"));
console.log(list.push("here!"));

console.log(list.shift());
console.log(list);
