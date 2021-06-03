const PriorityQueue = require('./priority-queue');

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    dijkstrasAlgo(startVtx, endVtx) {
        const nodes = new PriorityQueue();
        const distances = {}, previous = {};
        let smallest, path = [];

        // build initial state
        for (let vtx in this.adjacencyList) {
            if (vtx === startVtx) {
                distances[vtx] = 0;
                nodes.enqueue(vtx, 0);
            }
            else {
                distances[vtx] = Infinity;
                nodes.enqueue(vtx, Infinity);
            }
            previous[vtx] = null;
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === endVtx) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighborIdx in this.adjacencyList[smallest]) {
                    let neighborNode = this.adjacencyList[smallest][neighborIdx];
                    let candidate = distances[smallest] + neighborNode.weight;

                    if (candidate < distances[neighborNode.node]) {
                        distances[neighborNode.node] = candidate;
                        previous[neighborNode.node] = smallest;
                        nodes.enqueue(neighborNode.node, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();
    }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
console.log(g.dijkstrasAlgo("A", "E"));
