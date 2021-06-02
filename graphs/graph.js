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
        delete this.adjacencyList[v];
    }

    recursiveDFS(start) {
        const res = [],
            visited = {};

        const dfsHelper = vt => {
            if (!vt) return undefined;
            visited[vt] = true;
            res.push(vt);
            this.adjacencyList[vt].forEach(neighbor => {
                if (!visited[neighbor]) return dfsHelper(neighbor);
            });
        }
        dfsHelper(start);

        return res;
    }
}

let g = new Graph();
g.addVertex('tokyo');
g.addVertex('dallas');
g.addVertex('san francisco');
g.addVertex('bengaluru');
g.addVertex('morocco');
g.addVertex('hong kong');
g.addVertex('miami');
g.addVertex('new york');
g.addVertex('sydney');
g.addVertex('dubai');
g.addVertex('lisbon');
g.addVertex('paris');
g.addEdge('san francisco', 'bengaluru');
g.addEdge('san francisco', 'miami');
g.addEdge('san francisco', 'sydney');
g.addEdge('san francisco', 'dubai');
g.addEdge('san francisco', 'lisbon');
g.addEdge('paris', 'dubai');
g.addEdge('paris', 'san francisco');
g.addEdge('bengaluru', 'dubai');
g.addEdge('bengaluru', 'morocco');
g.addEdge('bengaluru', 'dallas');
g.addEdge('dallas', 'new york');
g.addEdge('tokyo', 'new york');
g.addEdge('tokyo', 'morocco');
g.addEdge('tokyo', 'dallas');
g.addEdge('miami', 'sydney');
g.addEdge('lisbon', 'dubai');
g.addEdge('dallas', 'morocco');
console.log(g.recursiveDFS('san francisco'));