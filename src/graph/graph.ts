class Graph {
    public vertices: Map<string, Vertex>;

    constructor() {
        this.vertices = new Map<string, Vertex>();
    }

    addVertex(id: string): Vertex {
        const vertex = new Vertex(id);
        this.vertices.set(id, vertex);
        return vertex;
    }

    addEdge(sourceId: string, targetId: string, weight: number): void {
        const sourceVertex = this.vertices.get(sourceId);
        const targetVertex = this.vertices.get(targetId);

        if (sourceVertex && targetVertex) {
            const edge = new Edge(targetVertex, weight);
            sourceVertex.edges.push(edge);
        } else {
            throw new Error("Source or target vertex not found.");
        }
    }

    getVertex(id: string): Vertex | undefined {
        return this.vertices.get(id);
    }

    printGraph(): void {
        this.vertices.forEach((vertex, id) => {
            const edges = vertex.edges.map(edge => `(${edge.target.id}, weight: ${edge.weight})`).join(", ");
            console.log(`${id} -> [${edges}]`);
        });
    }
}