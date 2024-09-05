import Leaf  from './leaf';



function printTree(node: Leaf | null, prefix: string = '', isLeft: boolean = true) {
    if (node !== null) {
        console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
        printTree(node.left, prefix + (isLeft ? "│   " : "    "), true);
        printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }
}

export default function binaryTree(){
    const root = new Leaf(4,"4-4");
    insertInBinaryTree(root,new Leaf(7,"7-7"));
    insertInBinaryTree(root,new Leaf(3,"3-3"));
    insertInBinaryTree(root,new Leaf(5,"5-5"));
    insertInBinaryTree(root,new Leaf(1,"1-1"));
    printTree(root);

    console.log("\n++++++++++ BUSCA ++++++++++++++");
    console.log("\n--------- 5 (Found) ---------");
    console.log("Data from leaf: ",searchBinaryTree(root,5)?.data);
    console.log("\n--------- 7 (Found) ---------");
    console.log("Data from leaf: ",searchBinaryTree(root,7)?.data);
    console.log("\n--------- 6 (Not Found) ---------");
    console.log("Data from leaf: ",searchBinaryTree(root,6));

    console.log("\n\n++++++++++ Delection ++++++++++++++");
}

const insertInBinaryTree = (rootLeaf: Leaf | null, leafToInsert: Leaf) => {
    if(rootLeaf === null){
        return leafToInsert;
    }

    if(leafToInsert.value < rootLeaf.value ){
        if(rootLeaf.left === null){
            rootLeaf.left = leafToInsert;
            return rootLeaf;
        }
        insertInBinaryTree(rootLeaf.left,leafToInsert);
        return rootLeaf;
    }

    if(rootLeaf.value < leafToInsert.value ){
        if(rootLeaf.right === null){
            rootLeaf.right = leafToInsert;
            return rootLeaf;
        }
        insertInBinaryTree(rootLeaf.right,leafToInsert);
        return rootLeaf;
    }
}

const searchBinaryTree = (rootLeaf: Leaf | null, valueToSearch: number) => {
    if(rootLeaf === null){
        return null;
    }

    if(rootLeaf.value === valueToSearch){
        return rootLeaf;
    }

    if(valueToSearch < rootLeaf.value ){
        if(rootLeaf.left === null){
            return null;
        }
        return searchBinaryTree(rootLeaf.left, valueToSearch);
    }

    if(rootLeaf.value < valueToSearch ){
        if(rootLeaf.right === null){
            return null;
        }
        return searchBinaryTree(rootLeaf.right, valueToSearch);
    }
}

const deleteLeaf = (rootLeaf: Leaf | null, valueToDelete: number) => {
    if(rootLeaf === null){
        return null;
    }

    let leafToDelete:Leaf|null = null;
    if(rootLeaf.left?.value === valueToDelete){
        leafToDelete = rootLeaf.left;
    }

    if(rootLeaf.right?.value === valueToDelete){
        leafToDelete = rootLeaf.right;
    }
    
    if(leafToDelete){

        //1. Ver se ele e a ultima folha, se sim, apenas muda o apontamento do rootLeaf para null
        if(isLastLeaf(leafToDelete)){
            rootLeaf.left = null;
            return rootLeaf;
        }

        //2. Verificar se tem apenas uma camada abaixo dele, se sim apontar o rootLeaf para qualquer filho que ele tenha
        if(isSubTreeWithOneLayer(leafToDelete)){
            if(leafToDelete.right){
                rootLeaf.left = leafToDelete.right;
                return rootLeaf;
            }

            if(leafToDelete.left){
                rootLeaf.left = leafToDelete.left;
                return rootLeaf;
            }
        }


        //3. Tendo uma sub-arvore abaixo dele, verificar se tem filho a direita, e pegar o item mais a esqueda dele.
        // Se nao tiver filho a direita, pegar o item mais a direita da sub-arvore a esquerda
        let mostExtremeLeaf: Leaf|null = null;
        if(leafToDelete.right){
            mostExtremeLeaf = getMostRightLeaf(leafToDelete.right);
        }else{
            mostExtremeLeaf = getMostLeftLeaf(leafToDelete.left!);
        }
        //TODO
        // rootLeaf["??"] = mostExtremeLeaf;
        //COMO REFEVER O APONTAMENTO DO ROOTLEAF PARA O MOSTEXTREMELEAF



    }




    if(rootLeaf.value < valueToDelete){
        deleteLeaf(rootLeaf.right,valueToDelete);
    }
    if(valueToDelete < rootLeaf.value){
        deleteLeaf(rootLeaf.left,valueToDelete);
    }
}
const isLastLeaf = (rootLeaf: Leaf) => {
    if(rootLeaf.left === null && rootLeaf.right === null){
        return true;
    }
}

const isSubTreeWithOneLayer = (leaf: Leaf) => {
    if(leaf.right){
        if(leaf.left) return isLastLeaf(leaf.left) && isLastLeaf(leaf.right);
        return isLastLeaf(leaf.right);
    }else{
        if(leaf.left) return isLastLeaf(leaf.left);
        return false;
    }
}

const getMostLeftLeaf = (rootLeaf: Leaf) => {
    if(rootLeaf.left){
        return getMostLeftLeaf(rootLeaf.left);
    }
    return rootLeaf;
}
const getMostRightLeaf = (rootLeaf: Leaf) => {
    if(rootLeaf.right){
        return getMostRightLeaf(rootLeaf.right);
    }
    return rootLeaf;
}

