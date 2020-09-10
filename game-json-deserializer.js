import { Game } from "./game.js"
export class GameJSONDeserializer{
    constructor(string){
        this.string = string
    }
    deserialize(){
        console.log(this.string);
        let storage = JSON.parse(this.string);
        console.log(storage);
        let game = new Game(storage.p1name, storage.p2name);
        let p1turn = true;
        while(storage.p1.length > 0 || storage.p2.length >0){
            let move = p1turn ? storage.p1.pop() : storage.p2.pop();
            game.playInColumn(move[1]);
            p1turn = !p1turn;
        }
        return game;
    }
}
