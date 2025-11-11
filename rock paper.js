let userScore = 0;
let compScore = 0;

const choices= document.querySelectorAll(".choice")
const userScorePara = document.querySelector("#score1")
const compScorePara = document.querySelector("#score2")
const msg = document.querySelector("#msg")




const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win"
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose"
        msg.style.backgroundColor = "red";
    }
}



const playgame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else if (userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        else{
            userWin = compChoice === "scissor" ? false : true;
        } 
        showWinner(userWin);  
     }
}





choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);        
    })
})