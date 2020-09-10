export class DiagWinInspector{
    constructor(...cols){
        this.cols = cols;
    }
    inspect(){
        for(let start=0; start<6;start++){
            let init = this.cols[0].getTokenAt(start)
            if(init !== null){
                if(start <= 2){
                    let win = this.diagDown(start, init);
                    if(win !== 0){
                        return win;
                    }
                }
                else{
                    let win = this.diagUp(start, init);
                    if(win !== 0){
                        return win;
                    }
                }
            }
        }
        return 0;
    }
    diagDown(startRow, startVal){
        for(let plus =1; plus<=4;plus++){
            if(plus === 4){
                return startVal;
            }
            if(this.cols[plus].getTokenAt(startRow+plus) !== startVal){
                break
            }
        }
        return 0;
    }
    diagUp(startRow, startVal){
        for(let plus=1;plus<=4;plus++){
            if(plus === 4){
                return startVal;
            }
            if(this.cols[plus].getTokenAt(startRow-plus) !== startVal){
                break;
            }
        }
        return 0;
    }
}
