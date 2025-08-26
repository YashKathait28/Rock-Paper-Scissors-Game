let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgIs = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

// Computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("The game is draw!");
  msgIs.innerText = "The game is draw. Play again!";
  msgIs.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win!");
    msgIs.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msgIs.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You lose!");
    msgIs.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    msgIs.style.backgroundColor = "red";
  }
};

// User Choice
const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  // Generate computer choice
  const compChoice = genCompChoice();
  console.log("computer choice =", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
