let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#rematch");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [2, 4, 6]];
const resetGame=()=>{
    turnO=true
    anabkeBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"

            turnO = false;

        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner ();
    });
});
const anabkeBoxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}
const disabledBoxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkwinner = () => {
    for (let pattern of winPattern) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);