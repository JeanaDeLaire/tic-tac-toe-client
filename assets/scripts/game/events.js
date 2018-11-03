'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

const playerOne = 'X'
const playerTwo = 'O'
let currentMove = ''
let rowWin = false
let colWin = false
let diagWin = false

const updateGame = event => {
  event.preventDefault()
}

// Game Logic
// when user clicks on box, place an x first then an o and alternate
// Once clicked, grid-item cannot be changed until new game
const play = function (event) {
  const r = $(event.target).data('r')
  const c = $(event.target).data('c')
  const target = $(event.target)
  const index = c + (r * 3)
  const data = {}
  data.index = index
  data.over = false
  if (target.is('div') && currentMove % 2 === 0 && target.html() !== playerOne && target.html() !== playerTwo) {
    target.html(playerOne)
    board[r][c] = playerOne
    console.log(board)
    currentMove++
    data.player = playerOne
    console.log(data)
    // if checkForWins returns true pass over data
  } else if (target.is('div') && !currentMove % 2 === 0 && target.html() !== playerOne && target.html() !== playerTwo) {
    target.html(playerTwo)
    board[r][c] = playerTwo
    console.log(board)
    currentMove++
    data.player = playerOne
    console.log(data)
    // if checkForWins returns true pass over data
  }
  // after checking for win add
}

// when divs with the class grid-item are clicked run the play function
$('.grid-item').click(play)

const checkForWins = function () {
  if (board.some(row => row.every(el => el === playerOne))) {
    console.log('X Wins')
    rowWin = true
  } else if (board.some(row => row.every(el => el === playerTwo))) {
    console.log('O Wins')
    rowWin = true
  } else if (board[0][0] === playerOne && board[1][0] === playerOne && board[2][0] === playerOne) {
    console.log('X Wins')
    colWin = true
  } else if (board[0][1] === playerOne && board[1][1] === playerOne && board[2][1] === playerOne) {
    console.log('X Wins')
    colWin = true
  } else if (board[0][2] === playerOne && board[1][2] === playerOne && board[2][2] === playerOne) {
    console.log('X Wins')
    colWin = true
  } else if (board[0][0] === playerTwo && board[1][0] === playerTwo && board[2][0] === playerTwo) {
    console.log('O Wins')
    colWin = true
  } else if (board[0][1] === playerTwo && board[1][1] === playerTwo && board[2][1] === playerTwo) {
    console.log('O Wins')
    colWin = true
  } else if (board[0][2] === playerTwo && board[1][2] === playerTwo && board[2][2] === playerTwo) {
    console.log('O Wins')
    colWin = true
  } else if (board[0][0] === playerOne && board[1][1] === playerOne && board[2][2] === playerOne) {
    console.log('X Wins')
    diagWin = true
  } else if (board[0][0] === playerTwo && board[1][1] === playerTwo && board[2][2] === playerTwo) {
    console.log('O Wins')
    diagWin = true
  } else if (board[0][2] === playerOne && board[1][1] === playerOne && board[2][0] === playerOne) {
    console.log('X Wins')
    diagWin = true
  } else if (board[0][2] === playerTwo && board[1][1] === playerTwo && board[2][0] === playerTwo) {
    console.log('O Wins')
    diagWin = true
  }
  // if any are true, return true
  return rowWin || colWin || diagWin
}

$('.grid-item').click(checkForWins)
//   for (let i = 0; i < board.length; i++) {
//     if (board[i][0] === playerOne && board[i][1] === playerOne && board[i][2] === playerOne) {
// if any of these are true return win
//   return threeInARow || threeinA
// }

const onCreateGame = event => {
  event.preventDefault()
  const data = {}
  // api.createGame(data)
  //   .then(ui.createGameSuccess)
  //   .catch(ui.createGameFailure)
  if (document.getElementsByClassName === playerOne || playerTwo) {
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]
    $('.grid-item').html(' ')
    currentMove = ''
    rowWin = false
    colWin = false
    diagWin = false
    console.log(board)
  }
}
$('#create-game').click(onCreateGame)

module.exports = {
  board,
  playerOne,
  playerTwo,
  currentMove,
  play,
  onCreateGame,
  updateGame,
  checkForWins
  // reset
}
