'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
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
const data = {}
// data.over = false

// Game Logic
// when user clicks on box, place an x first then an o and alternate
// Once clicked, grid-item cannot be changed
const play = function (event) {
  const r = $(event.target).data('r')
  const c = $(event.target).data('c')
  const target = $(event.target)
  const index = c + (r * 3)
  data.index = index
  data.over = false
  if (target.is('div') && currentMove % 2 === 0 && target.text() === '' && checkForWins() === false) {
    target.html(playerOne)
    target.css('color', 'rgb(92, 113, 246)')
    board[r][c] = playerOne
    currentMove++
    data.value = playerOne
    $('.scores').text('')
    $('.scores').text('Player O is up')
  } else if (target.is('div') && !currentMove % 2 === 0 && target.text() === '' && checkForWins() === false) {
    target.html(playerTwo)
    target.css('color', 'rgb(109, 71, 134)')
    board[r][c] = playerTwo
    // console.log(board)
    currentMove++
    data.value = playerTwo
    $('.scores').text('')
    $('.scores').text('Player X is up')
    // if checkForWins returns true pass over data
  } if (checkForWins() === true) {
    data.over = true
    // console.log('game over')
    return data.over
  } else if (board.every(row => row.every(cell => cell !== ' '))) {
    data.over = true
    $('.scores').html("It's a draw. :/ ")
    return data.over
  }
}
$('.grid-item').click(play)

const checkForWins = function () {
  if (rowWin || colWin || diagWin) { return }
  if (board.some(row => row.every(el => el === playerOne))) {
    $('.scores').html('X wins! Start a new game')
    rowWin = true
  } else if (board.some(row => row.every(el => el === playerTwo))) {
    $('.scores').html('O wins! Start a new game')
    rowWin = true
  } else if (board[0][0] === playerOne && board[1][0] === playerOne && board[2][0] === playerOne) {
    $('.scores').html('X wins! Start a new game')
    colWin = true
  } else if (board[0][1] === playerOne && board[1][1] === playerOne && board[2][1] === playerOne) {
    $('.scores').html('X wins! Start a new game')
    colWin = true
  } else if (board[0][2] === playerOne && board[1][2] === playerOne && board[2][2] === playerOne) {
    $('.scores').html('X wins! Start a new game')
    colWin = true
  } else if (board[0][0] === playerTwo && board[1][0] === playerTwo && board[2][0] === playerTwo) {
    $('.scores').html('O wins! Start a new game')
    colWin = true
  } else if (board[0][1] === playerTwo && board[1][1] === playerTwo && board[2][1] === playerTwo) {
    $('.scores').html('O wins! Start a new game')
    colWin = true
  } else if (board[0][2] === playerTwo && board[1][2] === playerTwo && board[2][2] === playerTwo) {
    $('.scores').html('O wins! Start a new game')
    colWin = true
  } else if (board[0][0] === playerOne && board[1][1] === playerOne && board[2][2] === playerOne) {
    $('.scores').html('X wins! Start a new game')
    diagWin = true
  } else if (board[0][0] === playerTwo && board[1][1] === playerTwo && board[2][2] === playerTwo) {
    $('.scores').html('O wins! Start a new game')
    diagWin = true
  } else if (board[0][2] === playerOne && board[1][1] === playerOne && board[2][0] === playerOne) {
    $('.scores').html('X wins! Start a new game')
    diagWin = true
  } else if (board[0][2] === playerTwo && board[1][1] === playerTwo && board[2][0] === playerTwo) {
    $('.scores').html('O wins! Start a new game')
    diagWin = true
  }
  // if any are true, return true
  return rowWin || colWin || diagWin
}

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
