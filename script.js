document.addEventListener('DOMContentLoaded', function() {
  const overlayStart = document.querySelector(".overlay-start");
  const overlayStartGameBtn = document.getElementById("overlay-start-game-btn");

// Start game function
  function startGame() {
    overlayStart.style.display = "flex";
    overlayStartGameBtn.addEventListener('click', function() {
      resetGame(); 
      overlayStart.style.display = "none";
      resetSelection();
    });
  }

  startGame();
});


function getRandomComputerResult() {
const options = ["Rock", "Paper", "Scissors"];
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
return (
  (player === "Rock" && computer === "Scissors") ||
  (player === "Scissors" && computer === "Paper") ||
  (player === "Paper" && computer === "Rock")
);
}

let playerScore = 0;
let computerScore = 0;
// Each selection winner text
function getRoundResults(userOption) {
const computerResult = getRandomComputerResult();

if (hasPlayerWonTheRound(userOption, computerResult)) {
  playerScore++;
  return `Player wins! ${userOption} beats ${computerResult}`;
} else if (computerResult === userOption) {
  return `It's a tie! Both chose ${userOption}`;
} else {
  computerScore++;
  return `Computer wins! ${computerResult} beats ${userOption}`;
}
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const resetGameBtn = document.getElementById("reset-game-btn");
const overlay = document.getElementById("overlay");
const overlayWinnerMsg = document.getElementById("overlay-winner-msg");
const overlayResetGameBtn = document.getElementById("overlay-reset-game-btn");

// End of the game winner function
function showResults(userOption) {
roundResultsMsg.innerText = getRoundResults(userOption);
computerScoreSpanElement.innerText = computerScore;
playerScoreSpanElement.innerText = playerScore;

if (playerScore === 3 || computerScore === 3) {
  if (playerScore === 3) {
    overlayWinnerMsg.innerText = "Player has won the game " + playerScore + " to " + computerScore + "! \n Try again...?";
  } else {
    overlayWinnerMsg.innerText = "Computer has won the game " + computerScore + " to " + playerScore + "! \n Try again...?";
  }
  overlay.style.display = "flex";
}
}
// Reset's entire game for another round and at start of game
function resetGame() {
playerScore = 0;
computerScore = 0;
playerScoreSpanElement.innerText = playerScore;
computerScoreSpanElement.innerText = computerScore;
roundResultsMsg.innerText = "";
winnerMsgElement.innerText = "";
overlay.style.display = "none";
resetSelection();
}
// Function to reset the selection
function resetSelection() {
const symbols = document.querySelectorAll('.symbol');
symbols.forEach(symbol => {
  symbol.classList.remove('selected');
});
}

resetGameBtn.addEventListener("click", resetGame);
overlayResetGameBtn.addEventListener("click", resetGame);

const rockSym = document.getElementById("rock-sym");
const paperSym = document.getElementById("paper-sym");
const scissorsSym = document.getElementById("scissors-sym");

rockSym.addEventListener("click", function () {
showResults("Rock");
});

paperSym.addEventListener("click", function () {
showResults("Paper");
});

scissorsSym.addEventListener("click", function () {
showResults("Scissors");
});

const symbols = document.querySelectorAll('.symbol');
symbols.forEach(symbol => {
symbol.addEventListener('click', () => {
  symbols.forEach(s => s.classList.remove('selected'));
  symbol.classList.add('selected');
});
});
