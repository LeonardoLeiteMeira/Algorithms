
export default function heapSort(arr: number[]): number[] {
    let size = arr.length;
    while (size > 0){
        buildMaxHeap(arr, size);
        changeElement(arr, 0, size-1);
        size--;
    }
    return arr;
}

function buildMaxHeap(arr: number[], size:number) {
    const lastParentIndex = Math.floor(size/2) - 1;
    for (let i = lastParentIndex; i>=0; i--){
        checkSubTree(arr, i, size);
    }
}

function checkSubTree(arr: number[], index:number, size:number) {
    let childrenIndex = getChildrenIndex(index, size-1);
    let largest = index;

    if(childrenIndex.left && arr[childrenIndex.left]>arr[largest]){
        largest = childrenIndex.left;
    }
    if(childrenIndex.right && arr[childrenIndex.right]>arr[largest]){
        largest = childrenIndex.right; 
    }

    if(largest !== index){
        changeElement(arr, index, largest);
        checkSubTree(arr, largest, size);
    }
}

function changeElement(arr: number[], first: number, second:number) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

const getChildrenIndex = (index: number, maxIndex:number):ChildrenIndex => {
    const left = 2*index + 1;
    const right = 2*index + 2;
    return {
        left: left > maxIndex ? undefined : left,
        right: right > maxIndex ? undefined : right
    };
};

interface ChildrenIndex {
    left: number|undefined;
    right: number|undefined;
}

