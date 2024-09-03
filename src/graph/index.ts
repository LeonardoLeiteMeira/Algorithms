import djikstra from "./djikstra";
import testCases from "./testsCase";



export default function runDjikstraTest(){
    console.log("=====================DJIKSTRA TESTS===================== ");
    for(const graph of testCases){
        graph.printGraph();
        const result = djikstra(graph, 'A');
        for (const item of result){
            console.log(item);
        }
        console.log('-------------------\n');
    }
    console.log("========================================== ");
}