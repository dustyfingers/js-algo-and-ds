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
}

let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
heap.insert(55);
console.log(heap.values);