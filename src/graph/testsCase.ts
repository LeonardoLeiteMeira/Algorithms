import Graph from "./graph";
import Vertex from "./vertex";

function generateGraph(verticesIds: string[], edges: { source: string, target: string, weight: number }[]): Graph {
    const graph = new Graph();
    const verticesMap: Map<string, Vertex> = new Map();

    verticesIds.forEach(id => {
        const vertex = graph.addVertex(id);
        verticesMap.set(id, vertex);
    });

    edges.forEach(({ source, target, weight }) => {
        const sourceVertex = verticesMap.get(source);
        const targetVertex = verticesMap.get(target);
        if (sourceVertex && targetVertex) {
            graph.addEdge(sourceVertex.id, targetVertex.id, weight);
        }
    });

    return graph;
}

const graph1 = generateGraph(
    ['A', 'B', 'C'],
    [
        { source: 'A', target: 'B', weight: 1 },
        { source: 'B', target: 'C', weight: 2 },
        { source: 'A', target: 'C', weight: 4 }
    ]
);

const graph2 = generateGraph(
    ['A', 'B', 'C', 'D'],
    [
        { source: 'A', target: 'B', weight: 2 },
        { source: 'B', target: 'C', weight: 3 },
        { source: 'C', target: 'D', weight: 4 },
        { source: 'D', target: 'A', weight: 5 }
    ]
);

const graph3 = generateGraph(
    ['A', 'B', 'C', 'D', 'E', 'F'],
    [
        { source: 'A', target: 'B', weight: 3 },
        { source: 'C', target: 'D', weight: 4 },
        { source: 'E', target: 'F', weight: 5 }
    ]
);

const graph4 = generateGraph(
    ['A', 'B', 'C', 'D', 'E'],
    [
        { source: 'A', target: 'B', weight: 1 },
        { source: 'A', target: 'C', weight: 2 },
        { source: 'A', target: 'D', weight: 3 },
        { source: 'A', target: 'E', weight: 4 },
        { source: 'B', target: 'C', weight: 1 },
        { source: 'B', target: 'D', weight: 2 },
        { source: 'B', target: 'E', weight: 3 },
        { source: 'C', target: 'D', weight: 1 },
        { source: 'C', target: 'E', weight: 2 },
        { source: 'D', target: 'E', weight: 1 }
    ]
);

const graph5 = generateGraph(
    ['A', 'B', 'C', 'D'],
    [
        { source: 'A', target: 'B', weight: 2 },
        { source: 'A', target: 'C', weight: 2 },
        { source: 'B', target: 'D', weight: 2 },
        { source: 'C', target: 'D', weight: 2 }
    ]
);

const graph6 = generateGraph(
    ['A', 'B', 'C', 'D', 'E'],
    [
        { source: 'A', target: 'B', weight: 3 },
        { source: 'A', target: 'C', weight: 5 },
        { source: 'B', target: 'D', weight: 4 },
        { source: 'C', target: 'E', weight: 6 }
    ]
);

const graph7 = generateGraph(
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    [
        { source: 'A', target: 'B', weight: 1 },
        { source: 'A', target: 'C', weight: 2 },
        { source: 'A', target: 'D', weight: 3 },
        { source: 'A', target: 'E', weight: 4 },
        { source: 'B', target: 'C', weight: 2 },
        { source: 'B', target: 'D', weight: 3 },
        { source: 'B', target: 'E', weight: 4 },
        { source: 'C', target: 'D', weight: 3 },
        { source: 'C', target: 'E', weight: 4 },
        { source: 'D', target: 'E', weight: 4 },
        { source: 'F', target: 'G', weight: 5 },
        { source: 'F', target: 'H', weight: 6 },
        { source: 'F', target: 'I', weight: 7 },
        { source: 'F', target: 'J', weight: 8 }
    ]
);

const graph8 = generateGraph(
    ['A', 'B', 'C', 'D', 'E'],
    [
        { source: 'A', target: 'B', weight: 1 },
        { source: 'B', target: 'C', weight: 1 },
        { source: 'C', target: 'D', weight: 1 },
        { source: 'D', target: 'E', weight: 1 }
    ]
);

const graph9 = generateGraph(
    ['A', 'B', 'C', 'D', 'E'],
    [
        { source: 'A', target: 'B', weight: 10 },
        { source: 'A', target: 'C', weight: 3 },
        { source: 'B', target: 'D', weight: 1 },
        { source: 'C', target: 'D', weight: 6 },
        { source: 'C', target: 'E', weight: 2 },
        { source: 'D', target: 'E', weight: 2 }
    ]
);

const graph10 = generateGraph(
    ['A', 'B', 'C', 'D', 'E', 'F'],
    [
        { source: 'A', target: 'B', weight: 2 },
        { source: 'B', target: 'C', weight: 4 },
        { source: 'C', target: 'D', weight: 1 },
        { source: 'D', target: 'E', weight: 3 },
        { source: 'E', target: 'F', weight: 5 },
        { source: 'F', target: 'A', weight: 6 },
        { source: 'C', target: 'A', weight: 7 },
        { source: 'B', target: 'D', weight: 5 }
    ]
);

const firstTestCase = new Graph();

firstTestCase.addVertex('A');
firstTestCase.addVertex('B');
firstTestCase.addVertex('C');
firstTestCase.addVertex('D');
firstTestCase.addVertex('E');

firstTestCase.addEdge('A', 'B', 5);
firstTestCase.addEdge('A', 'C', 1);
firstTestCase.addEdge('B', 'C', 4);
firstTestCase.addEdge('B', 'D', 2);
firstTestCase.addEdge('B', 'E', 4);
firstTestCase.addEdge('C', 'B', 2);
firstTestCase.addEdge('C', 'D', 5);
firstTestCase.addEdge('C', 'E', 5);
firstTestCase.addEdge('D', 'E', 2);

const testCases = [
    firstTestCase,
    graph1,
    graph2,
    graph3,
    graph4, 
    graph5,
    graph6,
    graph7,
    graph8,
    graph9,
    graph10
] 

export default testCases;