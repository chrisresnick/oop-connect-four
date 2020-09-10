import { Game } from './game.js';
let game;
function updateUI() {
    let holder = document.getElementById("board-holder");
    if(game == undefined){
        holder.classList.add("is-invisible");
    }
    else{
        holder.classList.remove("is-invisible");
        const gameName = document.getElementById("game-name");
        gameName.innerHTML = game.getName();
        const player = game.player;
        const clickTargets = document.getElementById("click-targets")
        if(player === 1){
            clickTargets.classList.add("black");
            clickTargets.classList.remove("red");
        } else {
            clickTargets.classList.add("red");
            clickTargets.classList.remove("black");
        }
        for(let row = 0; row<6;row++){
            for(let col = 0; col<7;col++){
                let elem = document.getElementById(`square-${row}-${col}`);
                let val = game.getTokenAt(row, col);
                elem.innerHTML = "";
                if (val === 1){
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("token");
                    newDiv.classList.add("black");
                    elem.appendChild(newDiv);
                } else if(val === 2){
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("token");
                    newDiv.classList.add("red");
                    elem.appendChild(newDiv);
                }
            }
        }
        for(let col=0; col<7;col++){
            let clicker = document.getElementById(`column-${col}`);
            if(game.isColumnFull(col)){
                clicker.classList.add("full");
            }
            else{
                clicker.classList.remove("full");
            }
        }
    }
}
window.addEventListener("DOMContentLoaded", e => {
    const p1Name = document.getElementById("player-1-name");
    const p2Name = document.getElementById("player-2-name");
    const newGame = document.getElementById("new-game");
    const listenForInput = e => {
        if(p1Name.value && p2Name.value){
            newGame.disabled = false;
        }
        else{
            newGame.disabled = true;
        }
    }
    p1Name.addEventListener("keyup", listenForInput);
    p2Name.addEventListener("keyup", listenForInput);
    newGame.addEventListener("click", e => {
        game = new Game(p1Name.value, p2Name.value);
        p1Name.value = "";
        p2Name.value = "";
        newGame.disabled = true;
        updateUI();
    })
    let targets = document.getElementById("click-targets");
    console.log(targets);
    targets.addEventListener("click", e => {
        let target = e.target;
        if(target.className === "click-target"){
            let id = target.id;
            let col = Number.parseInt(id[id.length-1]);
            game.playInColumn(col);
            updateUI();
        }

    });
});
