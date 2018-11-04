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
// Once clicked, grid-item cannot be changed
const play = function (event) {
  const r = $(event.target).data('r')
  const c = $(event.target).data('c')
  const target = $(event.target)
  const index = c + (r * 3)
  const data = {}
  data.index = index
  data.over = false
  if (target.is('div') && currentMove % 2 === 0 && target.text() === '' && checkForWins() === false) {
    target.html(playerOne)
    target.css('color', 'rgb(92, 113, 246)')
    board[r][c] = playerOne
    console.log(board)
    currentMove++
    data.player = playerOne
    console.log(data)
  } else if (target.is('div') && !currentMove % 2 === 0 && target.text() === '' && checkForWins() === false) {
    target.html(playerTwo)
    target.css('color', 'rgb(109, 71, 134)')
    board[r][c] = playerTwo
    console.log(board)
    currentMove++
    data.player = playerTwo
    console.log(data)
    // if checkForWins returns true pass over data
  } if (checkForWins() === true) {
    data.over = true
    console.log('game over')
    console.log(data)
    return data.over
  }
}

// when divs with the class grid-item are clicked run the play function
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

const onCreateGame = event => {
  event.preventDefault()
  // const data = {}
  // api.createGame(data)
  //   .then(ui.createGameSuccess)
  //   .catch(ui.createGameFailure)
  // if (document.getElementsByClassName === playerOne || playerTwo) {
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
}

$('#create-game').click(onCreateGame)

// const  = function () {
//   let gameEnd = false
// if (rowWin  || colWin || diagWin === true)
// {    gameEnd = true }
// }
// $('.grid-item').click(gameOver)

module.exports = {
  board,
  playerOne,
  playerTwo,
  currentMove,
  play,
  onCreateGame,
  updateGame,
  checkForWins
}
