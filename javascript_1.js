let pl_sc = 0;
let comp_sc = 0;
const maxScore = 5;

// computer choice
function computer_choice() {
  const letters = ["s", "p", "r"];
  return letters[Math.floor(Math.random() * letters.length)];
}

// win?
function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a draw!";
  }

  if (
    (player === "s" && computer === "p") ||
    (player === "r" && computer === "s") ||
    (player === "p" && computer === "r")
  ) {
    pl_sc++;
    return "You win this round!";
  } else {
    comp_sc++;
    return "Computer wins this round!";
  }
}

// main part
while (pl_sc < maxScore && comp_sc < maxScore) {
  let answer = prompt("Enter (S)cissor, (P)aper or (R)ock: ").toLowerCase();

  // check invalid input
  if (!["s", "p", "r"].includes(answer)) {
    alert("Invalid input! Please enter s, p, or r.");
    continue;
  }

  let comp = computer_choice();

  console.log("You chose:", answer);
  console.log("Computer chose:", comp);
  console.log(determineWinner(answer, comp));
  console.log(`Score → You: ${pl_sc} | Computer: ${comp_sc}`);
  console.log("----------------------------");
}

// scores
if (pl_sc === maxScore) {
  console.log("🎉 You won the game!");
} else {
  console.log("💻 Computer won the game!");
}
