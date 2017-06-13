/*
we're going to have a current board, which is an array of 3 matrices. 
we should have a print board function
it's an object that has its own board
when you create a new game, it creates a new board
disallow moves to a spot with a piece on it
you place a piece using a function, which alternates between X and O
after every move, you use the win-checkers
vertical win checker
diagonal win checker
also checks for stalemate - if no win checkers happen, and we've hit 9 pieces (counter) then return stalemate
*/

const prompt = require('prompt');


let board = [['[]','[]','[]'],['[]','[]','[]'],['[]','[]','[]']];

const printBoard = () => {
  console.log(`${board[0][0]} ${board[0][1]} ${board[0][2]}\n${board[1][0]} ${board[1][1]} ${board[1][2]}\n${board[2][0]} ${board[2][1]} ${board[2][2]}`)
};

let currPc = 'X';
let numberOfPieces = 0;

const detectColumnWin = () => {
  if (board[0][0] !== '[]') {
    if (board[1][0] === board[0][0] && board[2][0] === board[0][0]) {
      console.log(`Player ${board[0][0]} wins!`)
    }
  }
  if (board[0][1] !== '[]') {
    if (board[1][1] === board[0][1] && board[2][1] === board[0][1]) {
      console.log(`Player ${board[0][1]} wins!`)
    }
  }
  if (board[0][2] !== '[]') {
    if (board[1][2] === board[0][2] && board[2][2] === board[0][2]) {
      console.log(`Player ${board[0][2]} wins!`)
    }
  }
};

const detectRowWin = () => {
  if (board[0][0] !== '[]') {
    if (board[0][1] === board[0][0] && board[0][2] === board[0][0]) {
      console.log(`Player ${board[0][0]} wins!`)
    }
  }
  if (board[1][0] !== '[]') {
    if (board[1][1] === board[1][0] && board[1][2] === board[1][0]) {
      console.log(`Player ${board[0][1]} wins!`)
    }
  }
  if (board[2][0] !== '[]') {
    if (board[2][1] === board[2][1] && board[2][1] === board[2][1]) {
      console.log(`Player ${board[0][2]} wins!`)
    }
  }
};

const detectMajorDiagWin = () => {
  if (board[2,0] === board[1,1] === board[0,2]) {
    console.log(`Player ${board[2,0]} wins!}`)
  }
};

const detectMinorDiagWin = () => {
  if (board[0,0] === board[1,1] === board[2,2]) {
    console.log(`Player ${board[2,0]} wins!}`)
  }
};

const placePiece = (moveIdx) => {
  if (moveIdx === 1) {
    board[0][0] = currPc;
  }
  if (moveIdx === 2) {
    board[0][1] = currPc;
  }
  if (moveIdx === 3) {
    board[0][2] = currPc;
  }
  if (moveIdx === 4) {
    board[1][0] = currPc;
  }
  if (moveIdx === 5) {
    board[1][1] = currPc;
  }
  if (moveIdx === 6) {
    board[1][2] = currPc;
  }
  if (moveIdx === 7) {
    board[2][0] = currPc;
  }
  if (moveIdx === 8) {
    board[2][1] = currPc;
  }
  if (moveIdx === 9) {
    board[2][2] = currPc;
  }

  printBoard();

  detectColumnWin();
  detectMajorDiagWin();
  detectMinorDiagWin();
  detectRowWin();
  
  if (numberOfPieces === 9) console.log('Stalemate!')

  if (currPc === 'X') {
    currPc = 'O';
  } else {
    currPc = 'X';
  }

  promptMove();
};

const promptMove = () => {
  prompt.start();
  console.log(`Player ${currPc}'s turn!`)
  prompt.get(['Move'], (err, res) => {
    placePiece(res.Move);
  })
}

console.log('On your move, enter 1-9')

promptMove();
