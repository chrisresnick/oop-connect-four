export class Column{
    constructor(){
        this.mySquares = [];
        for(let i = 0; i<7; i++){
            this.mySquares.push(null);
        }
    }
    add(player){
        let square = 5;
        while(square >= 0){
            if(this.mySquares[square] === null){
                this.mySquares[square] = player;
                return true;
            }
            square--;
        }
        return false;
    }
    isFull(){
        return !(this.add(null));
    }
    getTokenAt(num){
        return this.mySquares[num];
    }
}
