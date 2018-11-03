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
  let rowWin = false
  // let colWin = false
  // let diagWin = false
  if (board.some(row => row.every(el => el === playerOne))) {
    console.log('X Wins')
    rowWin = true
  }
  // if () {
  //   colWin = true
  // }

  // if any are true, return true
  return rowWin
  // return rowWin || colWin || diagWin
}
$('.grid-item').click(checkForWins)
//   for (let i = 0; i < board.length; i++) {
//     if (board[i][0] === playerOne && board[i][1] === playerOne && board[i][2] === playerOne) {

// for (let i = 0; i < board.length; i++) {
//   for (let j = 0; j < board[i].length; i++) {
//     board[i][j] === playerOne
//   }
// }
// let threeInARow = false

//   threeInARow = true
// }

// if any of these are true return win
//   return threeInARow || threeinA
// }

// const createGame = function () {
//   if (document.getElementsByClassName === playerOne || playerTwo) {
//     board = [
//       [' ', ' ', ' '],
//       [' ', ' ', ' '],
//       [' ', ' ', ' ']
//     ]
//     $('.grid-item').html(' ')
//     currentMove = ' '
//     console.log(board)
//   }
// }
// $('#create-game').click(createGame)

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
