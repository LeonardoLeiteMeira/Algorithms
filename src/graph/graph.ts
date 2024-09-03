import Edge from "./edge";
import Vertex from "./vertex";

export default class Graph {
    public vertex: Map<string, Vertex>;

    constructor() {
        this.vertex = new Map<string, Vertex>();
    }

    addVertex(id: string): Vertex {
        const vertex = new Vertex(id);
        this.vertex.set(id, vertex);
        return vertex;
    }

    addEdge(sourceId: string, targetId: string, weight: number): void {
        const sourceVertex = this.vertex.get(sourceId);
        const targetVertex = this.vertex.get(targetId);

        if (sourceVertex && targetVertex) {
            const edge = new Edge(targetVertex, weight);
            sourceVertex.edges.push(edge);
        } else {
            throw new Error("Source or target vertex not found.");
        }
    }

    getVertex(id: string): Vertex | undefined {
        return this.vertex.get(id);
    }

    printGraph(): void {
        this.vertex.forEach((vertex, id) => {
            const edges = vertex.edges.map(edge => `(${edge.target.id}, weight: ${edge.weight})`).join(", ");
            console.log(`${id} -> [${edges}]`);
        });
        console.log("\n");
    }
}