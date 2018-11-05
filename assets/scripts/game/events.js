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
  // const checkForTie = () => {
  //   // const flatBoard = board.flat()
  //   // return flatBoard.every(cell => cell !== '')
  //   const flatBoard = []
  //   flatBoard.concat(...board)
  //   return flatBoard.every(cell => cell !== ' ')
  // }
  if (target.is('div') && currentMove % 2 === 0 && target.text() === '' && checkForWins() === false) {
    target.html(playerOne)
    target.css('color', 'rgb(92, 113, 246)')
    board[r][c] = playerOne
    console.log(board)
    currentMove++
    data.value = playerOne
    $('.scores').text('Player O is up.')
    console.log(data)
  } else if (target.is('div') && !currentMove % 2 === 0 && target.text() === '' && checkForWins() === false) {
    target.html(playerTwo)
    target.css('color', 'rgb(109, 71, 134)')
    board[r][c] = playerTwo
    console.log(board)
    currentMove++
    data.value = playerTwo
    $('.scores').text()
    $('.scores').text('Player X is up.')
    console.log(data)
    // if checkForWins returns true pass over data
    // if board indexes
  } if (checkForWins() === true) {
    data.over = true
    console.log('game over')
    // console.log(data)
    // return data.over
  } else if (board.every(row => row.every(cell => cell !== ' '))) {
    data.over = true
    $('.scores').html("It's a draw!")
  }

//   (board.every(row => row.every(cell => cell !== '')))
//
// //   let empty = true
// // for (let r = 0; board[r].length; i++)
// // for (let c = 0; board[r][c].length; i++)
//
//    {
//     $('.scores').html("It's a draw!")
//   }
}
$('.grid-item').click(play)

const checkForWins = function () {
  if (rowWin || colWin || diagWin) { return }
  if (board.some(row => row.every(el => el === playerOne))) {
    console.log('X Wins')
    $('.scores').html('X wins! Start a new game.')
    rowWin = true
  } else if (board.some(row => row.every(el => el === playerTwo))) {
    console.log('O Wins')
    $('.scores').html('O wins! Start a new game.')
    rowWin = true
  } else if (board[0][0] === playerOne && board[1][0] === playerOne && board[2][0] === playerOne) {
    console.log('X Wins')
    $('.scores').html('X wins! Start a new game.')
    colWin = true
  } else if (board[0][1] === playerOne && board[1][1] === playerOne && board[2][1] === playerOne) {
    console.log('X Wins')
    $('.scores').html('X wins! Start a new game.')
    colWin = true
  } else if (board[0][2] === playerOne && board[1][2] === playerOne && board[2][2] === playerOne) {
    console.log('X Wins')
    $('.scores').html('X wins! Start a new game.')
    colWin = true
  } else if (board[0][0] === playerTwo && board[1][0] === playerTwo && board[2][0] === playerTwo) {
    console.log('O Wins')
    $('.scores').html('O wins! Start a new game.')
    colWin = true
  } else if (board[0][1] === playerTwo && board[1][1] === playerTwo && board[2][1] === playerTwo) {
    console.log('O Wins')
    $('.scores').html('O wins! Start a new game.')
    colWin = true
  } else if (board[0][2] === playerTwo && board[1][2] === playerTwo && board[2][2] === playerTwo) {
    console.log('O Wins')
    $('.scores').html('O wins! Start a new game.')
    colWin = true
  } else if (board[0][0] === playerOne && board[1][1] === playerOne && board[2][2] === playerOne) {
    console.log('X Wins')
    $('.scores').html('X wins! Start a new game.')
    diagWin = true
  } else if (board[0][0] === playerTwo && board[1][1] === playerTwo && board[2][2] === playerTwo) {
    console.log('O Wins')
    $('.scores').html('O wins! Start a new game.')
    diagWin = true
  } else if (board[0][2] === playerOne && board[1][1] === playerOne && board[2][0] === playerOne) {
    console.log('X Wins')
    $('.scores').html('X wins! Start a new game.')
    diagWin = true
  } else if (board[0][2] === playerTwo && board[1][1] === playerTwo && board[2][0] === playerTwo) {
    console.log('O Wins')
    $('.scores').html('O wins! Start a new game.')
    diagWin = true
  }
  // if any are true, return true
  return rowWin || colWin || diagWin
}

const createGame = event => {
  // const data = getFormFields(event.target)
  // api.createGame(data)
  //   .then(ui.createGameSuccess)
  //   .catch(ui.createGameFailure)
  // if (rowWin || colWin || diagWin) {
  // gameId()
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
  console.log(board)
  // console.log(data)
  $('.scores').html('')
  // }
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
  const target = $(event.target)
  if (target.text !== '') {
    return
  }
  // const data = getFormFields(event.target)
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGameHistory = event => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.updateGame(data)
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
