export class RowWinInspector{
    constructor(...cols){
        this.cols = cols;
    }
    inspect(){
        for(let row=0; row<6;row++){
            let init=this.cols[0].getTokenAt(row);
            if(init !== null){
                for(let plus=1;plus<=4;plus++){
                    if(plus ===4){
                        return init
                    }
                    if(this.cols[plus].getTokenAt(row) !== init){
                        break;
                    }
                }
            }
        }
        return 0;
    }
}
