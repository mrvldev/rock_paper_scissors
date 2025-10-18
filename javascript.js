let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let computerScore = 0;
let humanScore = 0;

//get computer choice randomly
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1; // 1: Rock, 2: Paper, 3: Scissors
}

//get human choice from user input
function getHumanChoice() {
    return prompt("Enter your choice (1: Rock, 2: Paper, 3: Scissors): ");
}

function playRound(computerChoice, humanChoice) 
        {
    if (computerChoice == humanChoice) {
        return "It's a tie!";
    }
    if  (
        (computerChoice == 1 && humanChoice == 3) || 
        (computerChoice == 2 && humanChoice == 1) || 
        (computerChoice == 3 && humanChoice == 2)
    )
    {
        computerScore++;
        return "Computer wins this round!";
    } 
    else 
    {
        humanScore++;
        return "Human wins this round!";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        console.log("Computer choice is: " + computerChoice);
        console.log("Human choice is: " + humanChoice);
        console.log(playRound(computerChoice, humanChoice));
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
        console.log("-----------------------------------------------------------")
    }
}


playGame();