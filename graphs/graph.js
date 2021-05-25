class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(item => item !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(item => item !== v1);
    }

    removeVertex(v) {
        while (this.adjacencyList[v].length) {
            const adjVertex = this.adjacencyList[v].pop();
            this.removeEdge(v, adjVertex);
        }
    }
}

let g = new Graph();
g.addVertex('tokyo');
g.addVertex('dallas');
g.addVertex('morocco');
g.addVertex('semey');
g.addEdge('tokyo', 'semey')
g.addEdge('tokyo', 'morocco')
g.addEdge('tokyo', 'dallas')
g.addEdge('dallas', 'morocco')
g.removeEdge('tokyo', 'dallas')
g.removeVertex('tokyo');
console.log(g);