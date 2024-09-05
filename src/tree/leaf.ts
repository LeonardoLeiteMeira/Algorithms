export default class Leaf{
    constructor(
        public value:number,
        public data:string,
        public left: Leaf | null = null,
        public right: Leaf | null = null,
    ){}
}