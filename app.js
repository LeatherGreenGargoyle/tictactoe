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

const newGame = () => {
  this.board = [['','',''],['','',''],['','','']];

  this.currPc = 'X';

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
    
    // execute win checkers

    if (this.currPc === 'X') {
      this.currPc = 'O';
    } else {
      this.currPc = 'X';
    }
  }

}