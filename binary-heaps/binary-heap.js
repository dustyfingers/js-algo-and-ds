class MaxBinaryHeap {
    constructor(values) {
        this.values = values;
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
            idx = parentIdx;
        }
    }

    remove() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const { length } = this.values, element = this.values[0];

        while (true) {
            const leftChildIdx = 2 * idx + 1, rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild, swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) swap = leftChildIdx;
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (!swap && rightChild > element) || 
                    (swap && rightChild > leftChild)) swap = rightChildIdx;
            }
            if (swap === null) break;
            [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
            idx = swap;
        }
        return element;
    }
}

let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
heap.insert(55);
console.log(heap.values);
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
console.log(heap.values);