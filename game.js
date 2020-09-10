import { Column } from './column.js';
export class Game {
    constructor(name1, name2){
        this.name1 = name1;
        this.name2 = name2;
        this.player = 1;
        this.columns = [];
        for(let n=0; n <7;n++){
            this.columns.push(new Column());
        }
    }
    getName() {
        return `${this.name1} vs ${this.name2}`;
    }
    playInColumn(col) {
        this.columns[col].add(this.player);
        this.player = (this.player === 1) ? 2 : 1;
    }
    getTokenAt(row, col){
        return this.columns[col].getTokenAt(row);
    }
    isColumnFull(col){
        return this.columns[col].isFull();
    }
}
