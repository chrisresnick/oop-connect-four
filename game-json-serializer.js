export class GameJSONSerializer{
    constructor(game){
        this.game = game;
        this.storage = {"p1": [],
                        "p2": [],
                        "p1name": game.name1,
                        "p2name": game.name2};

    }
    serialize(){
        for(let row = 0; row<6;row++){
            for(let col=0; col<7;col++){
                let val = this.game.getTokenAt(row, col);
                if(val === 1){
                    this.storage.p1.push([row,col]);
                } else if (val === 2){
                    this.storage.p2.push([row, col]);
                }
            }
        }
        let temp =JSON.stringify(this.storage);
        console.log(temp);
        return temp;
    }
}
