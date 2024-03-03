let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorePara = document.querySelector("#userscore");
const compscorePara = document.querySelector("#compscore");
const resetGame = document.querySelector("#reset");

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const DrawGame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    console.log(`user: ${userChoice}, comp: ${compChoice}`)

    if (compChoice === userChoice){
        DrawGame();
    }
    else{
        let userWin = true;
        if(userChoice=== "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //userWin = scissors, comp=rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const restart = () => {
    userscore=0;
    compscore=0;
    userscorePara.innerText = userscore;
    compscorePara.innerText = compscore;
    msg.style.backgroundColor="#081b31";
}

resetGame.addEventListener("click", restart);