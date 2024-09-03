import Graph from "./graph";

interface Visited{
    vertexId:string,
    totalWeight:number,
    previousVertexId:string|null,
    isVisited:boolean
}
export default function djikstra(graph:Graph, firstVertexId:string):Visited[] {
    const visiteds:Visited[] = [];
    const priorityQueue:Visited[] = [];

    let visitFirstElement:Visited = {
        vertexId:firstVertexId,
        totalWeight:0,
        previousVertexId:null,
        isVisited:false
    }
    visiteds.push(visitFirstElement);
    priorityQueue.push(visitFirstElement);
    
    
    while(priorityQueue.length > 0){
        let currentVertex:Visited = priorityQueue.reduce<Visited>((acc:Visited, current:Visited) => {
            if(acc.totalWeight > current.totalWeight){
                return current;
            }
            return acc;
        },priorityQueue[0]);
        
        visitVertex(currentVertex, priorityQueue, visiteds, graph);
    }

    return visiteds;
}

const visitVertex = (currentVertex:Visited,priorityQueue:Visited[], visiteds:Visited[], graph:Graph) => {
    currentVertex.isVisited = true;

    const edges = graph.vertex.get(currentVertex.vertexId)?.edges;
    if(!edges){
        return;
    }

    for (const edge of edges){
        const targetOfEdge = visiteds.find((visited:Visited) => visited.vertexId === edge.target.id);
        if(targetOfEdge && targetOfEdge.isVisited === false){
            if(targetOfEdge.totalWeight >= currentVertex.totalWeight + edge.weight){
                targetOfEdge.previousVertexId = currentVertex.vertexId;
                targetOfEdge.totalWeight = currentVertex.totalWeight + edge.weight;
            }
        }
        if(!targetOfEdge){
            let newItemToVisit:Visited = {
                vertexId:edge.target.id,
                totalWeight:currentVertex.totalWeight + edge.weight,
                previousVertexId:currentVertex.vertexId,
                isVisited:false
            };
            visiteds.push(newItemToVisit);
            priorityQueue.push(newItemToVisit);
        }
    }

    priorityQueue.splice(priorityQueue.indexOf(currentVertex), 1);
}
