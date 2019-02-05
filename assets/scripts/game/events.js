'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// set board as empty 3x3 2D array to match HTML data structure
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

// declare global variables for player tokens, current move, wins, and data
const playerOne = 'X'
const playerTwo = 'O'
let currentMove = ''
let rowWin = false
let colWin = false
let diagWin = false
const data = {}
// data.over = false

// Game Logic
// Once clicked, grid-item cannot be changed
const play = function (event) {
  // obtain correct div user clicked on
  const r = $(event.target).data('r')
  const c = $(event.target).data('c')
  const target = $(event.target)
  // flaten array to make api read it as one dimensional
  const index = c + (r * 3)
  data.index = index
  data.over = false
  // check to see if anyone has moved
  // if it is an equal number data is player one
  if (target.is('div') && currentMove % 2 === 0 && target.text() === '' && checkForWins() === false) {
    target.html(playerOne)
    target.css('color', 'rgb(92, 113, 246)')
    board[r][c] = playerOne
    currentMove++
    data.value = playerOne
    // alert user that player two is up
    $('.scores').text('')
    $('.scores').text('Player O is up')
    // check to see if anyone has moved
    // if it is an odd number data is player two
  } else if (target.is('div') && !currentMove % 2 === 0 && target.text() === '' && checkForWins() === false) {
    target.html(playerTwo)
    target.css('color', 'rgb(109, 71, 134)')
    board[r][c] = playerTwo
    // console.log(board)
    currentMove++
    data.value = playerTwo
    // alert user that player one is up
    $('.scores').text('')
    $('.scores').text('Player X is up')
    // if checkForWins returns true pass over data and inform user game is over
  } if (checkForWins() === true) {
    data.over = true
    // console.log('game over')
    return data.over
    // if every cell is filled end the game and inform user it's a draw
  } else if (board.every(row => row.every(cell => cell !== ' '))) {
    data.over = true
    $('.scores').html("It's a draw. :/ ")
    return data.over
  }
}
// call the play function whenever a game cell is clicked
$('.grid-item').click(play)

const checkForWins = function () {
  // check to see if there is already a win set to true before proceeding
  if (rowWin || colWin || diagWin) { return }
  // if every cell in a row matches x, x wins
  if (board.some(row => row.every(el => el === playerOne))) {
    $('.scores').html('X wins! Start a new game')
    rowWin = true
    // if every cell in a row matches o, o wins
  } else if (board.some(row => row.every(el => el === playerTwo))) {
    $('.scores').html('O wins! Start a new game')
    rowWin = true
    // if every first column cell is x, x wins
  } else if (board[0][0] === playerOne && board[1][0] === playerOne && board[2][0] === playerOne) {
    $('.scores').html('X wins! Start a new game')
    colWin = true
    // if every second column cell is x, x wins
  } else if (board[0][1] === playerOne && board[1][1] === playerOne && board[2][1] === playerOne) {
    $('.scores').html('X wins! Start a new game')
    colWin = true
    // if every third column cell is x, x wins
  } else if (board[0][2] === playerOne && board[1][2] === playerOne && board[2][2] === playerOne) {
    $('.scores').html('X wins! Start a new game')
    colWin = true
    // if ever first column cell is o, o wins
  } else if (board[0][0] === playerTwo && board[1][0] === playerTwo && board[2][0] === playerTwo) {
    $('.scores').html('O wins! Start a new game')
    colWin = true
    // if every second column cell is o, o wins
  } else if (board[0][1] === playerTwo && board[1][1] === playerTwo && board[2][1] === playerTwo) {
    $('.scores').html('O wins! Start a new game')
    colWin = true
    // if every third column cell is o, o wins
  } else if (board[0][2] === playerTwo && board[1][2] === playerTwo && board[2][2] === playerTwo) {
    $('.scores').html('O wins! Start a new game')
    colWin = true
    // if from top left to bottom right diagonally is x, x wins
  } else if (board[0][0] === playerOne && board[1][1] === playerOne && board[2][2] === playerOne) {
    $('.scores').html('X wins! Start a new game')
    diagWin = true
    // if from top left to bottom right diagonally is o, o wins
  } else if (board[0][0] === playerTwo && board[1][1] === playerTwo && board[2][2] === playerTwo) {
    $('.scores').html('O wins! Start a new game')
    diagWin = true
    // if from top right to bottom left diagonally is x, x wins
  } else if (board[0][2] === playerOne && board[1][1] === playerOne && board[2][0] === playerOne) {
    $('.scores').html('X wins! Start a new game')
    diagWin = true
    // if from top right to bottom left diagonally is o, o wins
  } else if (board[0][2] === playerTwo && board[1][1] === playerTwo && board[2][0] === playerTwo) {
    $('.scores').html('O wins! Start a new game')
    diagWin = true
  }
  // if any win options are true, return true
  return rowWin || colWin || diagWin
}

// when new game is selected reset win options to false and board to empty
const createGame = event => {
  rowWin = false
  colWin = false
  diagWin = false
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
  $('.grid-item').text('')
  currentMove = ' '
  $('.scores').html('')
}

$('#create-game').click(createGame)

// when game events are triggered (clicked) follow through these CRUD steps
// prevent page from reloading
// obtain data to send to api
// call functions to post, patch, get, and delete information based on need
// give user feedback

const onCreateGame = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

$('#create-game').click(onCreateGame)

const onUpdateGame = event => {
  event.preventDefault()
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGameHistory = event => {
  event.preventDefault()
  api.gameHistory(data)
    .then(ui.gameHistorySuccess)
    .catch(ui.gameHistoryFailure)
}

module.exports = {
  board,
  playerOne,
  playerTwo,
  createGame,
  currentMove,
  play,
  onCreateGame,
  onUpdateGame,
  checkForWins,
  onGameHistory
}
