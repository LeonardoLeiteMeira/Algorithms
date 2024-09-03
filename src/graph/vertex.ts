import Edge from "./edge";

export default class Vertex{
    public id:string;
    public edges:Edge[];
    constructor(id:string){
        this.id = id;
        this.edges = [];
    }
}