const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");

let currentPlayer = "X";
let gameActive = true;

let gameState = ["", "", "", "", "", "", "", "", ""];


// WINNING COMBINATIONS

const winningConditions = [

  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]

];


// HANDLE CELL CLICK

function handleCellClick(clickedCellEvent){

  const clickedCell = clickedCellEvent.target;

  const clickedCellIndex = clickedCell.getAttribute("data-index");

  // PREVENT OVERWRITING

  if(gameState[clickedCellIndex] !== "" || !gameActive){
    return;
  }

  // UPDATE GAME STATE

  gameState[clickedCellIndex] = currentPlayer;

  clickedCell.innerHTML = currentPlayer;

  checkWinner();

}


// CHECK WINNER

function checkWinner(){

  let roundWon = false;

  for(let i = 0; i < winningConditions.length; i++){

    const condition = winningConditions[i];

    const a = gameState[condition[0]];
    const b = gameState[condition[1]];
    const c = gameState[condition[2]];

    if(a === "" || b === "" || c === ""){
      continue;
    }

    if(a === b && b === c){

      roundWon = true;

      break;
    }

  }

  // WINNER

  if(roundWon){

    statusText.innerHTML = `🎉 Player ${currentPlayer} Wins!`;

    gameActive = false;

    return;
  }

  // DRAW

  if(!gameState.includes("")){

    statusText.innerHTML = "🤝 Match Draw!";

    gameActive = false;

    return;
  }

  // SWITCH PLAYER

  currentPlayer = currentPlayer === "X" ? "O" : "X";

  statusText.innerHTML = `Player ${currentPlayer}'s Turn`;

}


// RESTART GAME

function restartGame(){

  currentPlayer = "X";

  gameActive = true;

  gameState = ["", "", "", "", "", "", "", "", ""];

  statusText.innerHTML = `Player ${currentPlayer}'s Turn`;

  cells.forEach(cell => {
    cell.innerHTML = "";
  });

}


// EVENT LISTENERS

cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});

restartBtn.addEventListener("click", restartGame);