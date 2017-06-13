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

const Game = function() {
  this.board = [['[]','[]','[]'],['[]','[]','[]'],['[]','[]','[]']];

  this.printBoard = () => {
    console.log(`${this.board[0][0]} ${this.board[0][1]} ${this.board[0][2]}\n${this.board[1][0]} ${this.board[1][1]} ${this.board[1][2]}\n${this.board[2][0]} ${this.board[2][1]} ${this.board[2][2]}`)
  };

  this.currPc = 'X';
  this.numberOfPieces = 0;

  this.detectColumnWin = (yIdx, xIdx) => {
    if (this.board[0][0] !== '[]') {
      if (this.board[1][0] === this.board[0][0] && this.board[2][0] === this.board[0][0]) {
        console.log(`Player ${this.board[0][0]} wins!`)
      }
    }
    if (this.board[0][1] !== '[]') {
      if (this.board[1][1] === this.board[0][1] && this.board[2][1] === this.board[0][1]) {
        console.log(`Player ${this.board[0][1]} wins!`)
      }
    }
    if (this.board[0][2] !== '[]') {
      if (this.board[1][2] === this.board[0][2] && this.board[2][2] === this.board[0][2]) {
        console.log(`Player ${this.board[0][2]} wins!`)
      }
    }
  };

  this.detectRowWin = () => {
    if (this.board[0][0] !== '[]') {
      if (this.board[0][1] === this.board[0][0] && this.board[0][2] === this.board[0][0]) {
        console.log(`Player ${this.board[0][0]} wins!`)
      }
    }
    if (this.board[1][0] !== '[]') {
      if (this.board[1][1] === this.board[1][0] && this.board[1][2] === this.board[1][0]) {
        console.log(`Player ${this.board[0][1]} wins!`)
      }
    }
    if (this.board[2][0] !== '[]') {
      if (this.board[2][1] === this.board[2][1] && this.board[2][1] === this.board[2][1]) {
        console.log(`Player ${this.board[0][2]} wins!`)
      }
    }
  };

  this.detectMajorDiagWin = () => {
    if (this.board[2,0] === this.board[1,1] === this.board[0,2]) {
      console.log(`Player ${this.board[2,0]} wins!}`)
    }
  };

  this.detectMinorDiagWin = () => {
    if (this.board[0,0] === this.board[1,1] === this.board[2,2]) {
      console.log(`Player ${this.board[2,0]} wins!}`)
    }
  };

  this.placePiece = (moveIdx) => {
    if (moveIdx === 1) {
      this.board[0][0] = this.currPc;
    }
    if (moveIdx === 2) {
      this.board[0][1] = this.currPc;
    }
    if (moveIdx === 3) {
      this.board[0][2] = this.currPc;
    }
    if (moveIdx === 4) {
      this.board[1][0] = this.currPc;
    }
    if (moveIdx === 5) {
      this.board[1][1] = this.currPc;
    }
    if (moveIdx === 6) {
      this.board[1][2] = this.currPc;
    }
    if (moveIdx === 7) {
      this.board[2][0] = this.currPc;
    }
    if (moveIdx === 8) {
      this.board[2][1] = this.currPc;
    }
    if (moveIdx === 9) {
      this.board[2][2] = this.currPc;
    }

    this.printBoard();

    this.detectColumnWin();
    this.detectMajorDiagWin();
    this.detectMinorDiagWin();
    this.detectRowWin();
    
    if (this.numberOfPieces === 9) console.log('Stalemate!')

    if (this.currPc === 'X') {
      this.currPc = 'O';
    } else {
      this.currPc = 'X';
    }

    this.promptMove();
  };

  this.promptMove = () => {
    prompt.start();
    console.log(`Player ${this.currPc}'s turn!`)
    prompt.get(['Move'], (err, res) => {
      game.placePiece(res.Move);
    })
  }
}

let game = new Game();
console.log('On your move, enter 1-9')
game.promptMove();
