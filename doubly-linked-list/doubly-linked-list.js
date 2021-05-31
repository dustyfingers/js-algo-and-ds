class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let removedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }

        this.length--;
        return removedNode.val;
    }

    shift() {
        if (!this.head) return undefined;

        if (length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let removedNode = this.head;

            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }

        this.length--;
        return removedNode;
    }

    unshift(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let count, current;

        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        
        return current;
    }

    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) !!this.unshift(val); // !! coerces to boolean instead of the node that is returned by these functions
        if (index === this.length) !!this.push(val); // !! coerces to boolean instead of the node that is returned by these functions

        const newNode = new Node(val);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        afterNode.prev = newNode, newNode.next = afterNode;

        this.length++;
        return true;
    }

    remove() {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) this.shift();
        if (index === this.length - 1) this.pop();

        const foundNode = this.get(index);
        const beforeNode = foundNode.prev;
        const afterNode = foundNode.next;

        beforeNode.next = afterNode, afterNode.prev = beforeNode;
        foundNode.prev = null, foundNode.next = null;

        this.length--;
        return foundNode;
    }
}

const list = new DoublyLinkedList();

list.push(4)
list.push(7);
list.push(5);
console.log('removed ' + list.pop() + ' from list.')

list.push(17);
list.push(9);
list.push(4);
list.push(90)

console.log(list.get(3));
console.log(list.get(-1));
console.log(list.get(300));
console.log(list.get(5));
console.log(list.set(0, 5));
console.log(list);