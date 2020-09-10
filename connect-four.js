import { Game } from './game.js';
window.addEventListener("DOMContentLoaded", e => {
    let game;
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
    function updateUI() {
        let holder = document.getElementById("board-holder");
        if(game == undefined){
            holder.classList.add("is-invisible");
        }
        else{
            holder.classList.remove("is-invisible");
            const gameName = document.getElementById("game-name");
            gameName.innerHTML = game.getName();
        }
    }
});
