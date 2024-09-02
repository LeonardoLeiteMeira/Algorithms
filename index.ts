import heapSort from "./src/heapsort";
import quickSort from "./src/quickSort";

type SortFunction = (arr: number[]) => number[]

function runHeapSortTests(sortFunction:SortFunction) {
    const tests = [
        {
            input: [1, 2, 3, 4, 5],
            expected: [1, 2, 3, 4, 5],
        },
        {
            input: [5, 4, 3, 2, 1],
            expected: [1, 2, 3, 4, 5],
        },
        {
            input: [2, 3, 2, 3, 1, 1],
            expected: [1, 1, 2, 2, 3, 3],
        },
        {
            input: [1],
            expected: [1],
        },
        {
            input: [],
            expected: [],
        },
        {
            input: [-1, -3, -2, -4, -5],
            expected: [-5, -4, -3, -2, -1],
        },
        {
            input: [-10, 0, 5, -2, 3, 2, 1],
            expected: [-10, -2, 0, 1, 2, 3, 5],
        },
        {
            input: [3.5, 1.2, 4.8, 3.3, 2.1],
            expected: [1.2, 2.1, 3.3, 3.5, 4.8],
        },
        {
            input: [10, 3, 15, 7, 8, 23, 74, 18],
            expected: [3, 7, 8, 10, 15, 18, 23, 74],
        },
        {
            input: [87, 32, 45, 99, 24, 73, 56, 8, 66, 29, 15, 88, 41, 52, 93, 3, 100, 77, 2, 61, 38, 49, 6, 11, 68, 20, 35, 79, 12, 70, 54, 82, 90, 44, 14, 23, 47, 17, 36, 62, 5, 83, 21, 28, 91, 13, 72, 57, 95, 26],
            expected: [2, 3, 5, 6, 8, 11, 12, 13, 14, 15, 17, 20, 21, 23, 24, 26, 28, 29, 32, 35, 36, 38, 41, 44, 45, 47, 49, 52, 54, 56, 57, 61, 62, 66, 68, 70, 72, 73, 77, 79, 82, 83, 87, 88, 90, 91, 93, 95, 99, 100]
        }

    ];

    tests.forEach((test, index) => {
        const inputCopy = [...test.input]; 
        const sorted = sortFunction(inputCopy);
        const passed = arraysEqual(sorted, test.expected);

        console.log(`Teste ${index + 1}: ${passed ? 'PASSOU' : 'FALHOU'}`);
        if (!passed) {
            console.log(`    Entrada: ${test.input}`);
            console.log(`    Esperado: ${test.expected}`);
            console.log(`    Obtido: ${sorted}`);
        }
    });
}

function arraysEqual(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}



// runHeapSortTests(heapSort);
runHeapSortTests(quickSort);
