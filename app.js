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