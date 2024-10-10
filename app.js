let userCount = 0;
let compCount = 0;

const choices = document.querySelectorAll(".img-container");
const topMsg = document.querySelector(".msg-container");
const bottomMsg = document.querySelector(".msg-dis");
const userScore = document.querySelector(".user-score-count");
const compScore = document.querySelector(".comp-score-count");

const genCompChoice = () => {
  const compOption = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return compOption[randIdx];
};

const draw = () => {
  topMsg.innerText = "Game Draw";
  topMsg.style.backgroundColor = "black";
  bottomMsg.innerText = "Play Again";
};

const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    topMsg.innerText = "You Win";
    topMsg.style.backgroundColor = "green";
    bottomMsg.innerText = `${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
    userCount++;
    userScore.innerText = userCount;
  } else {
    topMsg.innerText = "You Loss";
    topMsg.style.backgroundColor = "red";
    bottomMsg.innerText = `${userChoice.toUpperCase()} Loss Against ${compChoice.toUpperCase()}`;
    compCount++;
    compScore.innerText = compCount;
  }
};

const playGame = (userChoice) => {
  console.log(userChoice);

  const compChoice = genCompChoice();
  console.log(compChoice);

  if (compChoice === userChoice) {
    draw();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
