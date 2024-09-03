import djikstra from "./djikstra";
import testCases from "./testsCase";



export default function runDjikstraTest(){
    for(const graph of testCases){
        console.log('-------------------');
        graph.printGraph();
        console.log('-------------------\n');
        const result = djikstra(graph, 'A');
        for (const item of result){
            console.log(item);
        }
        console.log('-------------------\n');
    }
}