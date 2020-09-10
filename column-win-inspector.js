export class ColumnWinInspector{
    constructor(column){
        this.col = column;
    }
    inspect(){
        for(let start=0;start<= 3; start++){
            let init = this.col.getTokenAt(start);
            if(init !== null){
                for(let plus=1; plus<=4;plus++){
                    if(plus === 4) return init;
                    if(this.col.getTokenAt(start+plus) !== init){
                        break;
                    }
                }
            }
        }
        return 0;
    }
}
