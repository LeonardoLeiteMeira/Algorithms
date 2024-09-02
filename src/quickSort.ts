export default function quickSort(arr: number[]): number[] {
    let size = arr.length;
    if(size<=1){
        return arr;
    }

    // There are some strategies to choose the pivot, but in this case we are choosing the first element
    let pivot = arr[0];

    let left:number[] = []
    let right:number[] = []

    for (let i=1; i<size; i++){
        if(arr[i]>pivot){
            right.push(arr[i]);
        }
        if(arr[i]<=pivot){
            left.push(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    return [...left, pivot, ...right];
}

