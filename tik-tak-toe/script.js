// javascript for tic tac toe

const prompt = require("prompt-sync")();

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let currentPlayer = "X";
let gameOver = false;

const drawBoard = () => {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i].join("|"));
    if (i < board.length - 1) {
      console.log("---------");
    }
  }
};

const checkWin = (player) => {
  // Check rows
  for (let i = 0; i < board.length; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < board[0].length; i++) {
    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }

  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }
  return false;
};

const checkDraw = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === " ") {
        return false;
      }
    }
  }
};

while (!gameOver) {
  drawBoard();
  console.log(`Player ${currentPlayer}'s turn`);
  let row = parseInt(prompt("Enter row (0-2): ")) - 1;
  let col = parseInt(prompt("Enter column (0-2): ")) - 1;
  if (board[row][col] !== " ") {
    console.log("Invalid move. Choose an empty cell");
    continue;
  }
  board[row][col] = currentPlayer;
  if (checkWin(currentPlayer)) {
    drawBoard();
    console.log(`Player ${currentPlayer} wins!`);
    gameOver = true;
    break;
  } else if (checkDraw()) {
    drawBoard();
    console.log("It's a draw!");
    gameOver = true;
    break;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
