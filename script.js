//variables
const body = document.querySelector("body");
const win = document.getElementById("win");
const draw = document.getElementById("draw");
const loss = document.getElementById("loss");

let choices = ["r", "p", "s"];
let winningChoices = ["rs", "pr", "sp"];
let numWins = 0;
let numLosses = 0;
let numDraws = 0;
let attempts = 0;

for (let x = 1; x < 11; x++) {
  let userChoice = prompt("Rock, Paper or Scissors?");
  userChoice.toLowerCase();
  let compChoice = choices[Math.floor(Math.random() * 3)];
  console.log(userChoice);
  console.log(compChoice);
  let outcome = userChoice + compChoice;
  attempts++;
  console.log(outcome);
  if (winningChoices.includes(outcome)) {
    alert(`Attempt ${x}, WINNER`);
    numWins++;
  } else if (userChoice === compChoice) {
    alert(`Attempt ${x}, Draw!`);
    numDraws++;
  } else if (choices.indexOf(userChoice) === -1) {
    alert(`Attempt ${x}, Please input either: R , P , S`);
    console.log("Please input either: R , P , S");
  } else {
    alert(`Attempt ${x}, You Lose`);
    numLosses++;
  }
}
alert(`Wins:${numWins} Losses: ${numLosses} Draws: ${numDraws}`);

if (attempts === 10 && numWins > numLosses && numWins > numDraws) {
  body.style.backgroundColor = "green";
  win.classList.toggle("hidden");
  win.classList.add("display-center");
} else if (attempts === 10 && numDraws > numLosses && numDraws > numWins) {
  body.style.backgroundColor = "orange";
  draw.classList.toggle("hidden");
  draw.classList.add("display-center");
} else if (attempts === 10 && numLosses > numWins && numLosses > numDraws) {
  body.style.backgroundColor = "red";
  loss.classList.toggle("hidden");
  loss.classList.add("display-center");
} else {
  body.style.backgroundColor = "orange";
  draw.classList.toggle("hidden");
  draw.classList.add("display-center");
}
