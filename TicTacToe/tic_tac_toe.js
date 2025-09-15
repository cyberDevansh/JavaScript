let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let  newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let playerturn = true; //true for player1 and false for player2

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerturn === true) {
            box.innerText = "X";
            playerturn = false;
        }
        else {
            box.innerText = "O";
            playerturn = true;
        }
        box.disabled=true;
        checkWinner();

    });
    }
);



const showWinner=(winner)=>{
    msgContainer.innerText=`Congratulations! ${winner} is the winner`;
    msgContainer.classList.remove("hide");
}

checkWinner = () =>{
    for (let pattern of winCombinations){
        console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;

        if (position1!="" && position1===position2 && position2===position3){
            // alert(`${position1} is the winner`);
            showWinner();
            resetGame();
            
            break;
        }
    }


}   

