import { Column } from './column.js';
import {ColumnWinInspector} from './column-win-inspector.js';
import { RowWinInspector } from './row-win-inspector.js';
import { DiagWinInspector } from './diag-win-inspector.js';
export class Game {
    constructor(name1, name2){
        this.name1 = name1;
        this.name2 = name2;
        this.player = 1;
        this.columns = [];
        this.winner = 0;
        for(let n=0; n <7;n++){
            this.columns.push(new Column());
        }
    }
    getName() {
        if(this.winner === 0){
            return `${this.name1} vs ${this.name2}`;
        }
        if(this.winner === 1){
            return `${this.name1} wins!`;
        }
        if(this.winner === 2){
            return `${this.name2} wins!`;
        }
        if(this.winner === 3){
            return `${this.name1} tied with ${this.name2}`;
        }

    }
    playInColumn(col) {
        this.columns[col].add(this.player);
        this.player = (this.player === 1) ? 2 : 1;
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagWin();
    }
    checkForDiagWin(){
        if(this.winner !== 0){
            return;
        }
        for(let start=0; start<4;start++){
            let colSlice = this.columns.slice(start,start+4);
            let inspector = new DiagWinInspector(...colSlice);
            let win = inspector.inspect();
            if(win !== 0){
                this.winner = win;
                return;
            }
        }

    }
    checkForRowWin(){
        if(this.winner !== 0){
            return;
        }
        for(let start=0; start<4;start++){
            let colSlice = this.columns.slice(start,start+4);
            let inspector = new RowWinInspector(...colSlice);
            let win = inspector.inspect();
            if(win !== 0){
                this.winner = win;
                return;
            }
        }

    }
    checkForColumnWin(){
        if(this.winner !== 0){
            return;
        }
        for(let column of this.columns){
            let inspector = new ColumnWinInspector(column);
            let win = inspector.inspect();
            if(win !== 0){
                this.winner = win;
                return;
            }
        }
    }
    checkForTie(){
        for(let num =0; num<7;num++){
            if(!this.isColumnFull(num)){
                return;
            }
        }
        this.winner = 3;
    }
    getTokenAt(row, col){
        return this.columns[col].getTokenAt(row);
    }
    isColumnFull(col){
        if(this.winner !== 0){
            return true;
        }
        return this.columns[col].isFull();
    }
}
