'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  // your JS code goes here
  // toggle authentication prompts

  $('.sidebar').click(function () {
    $('#api-login').toggle()
  })

  let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]

  console.log(board)

  const playerOne = 'X'
  const playerTwo = 'O'
  let currentMove = ''

  // Game Logic
  // when user clicks on box, place an x first then an o and alternate
  // Once clicked, grid-item cannot be changed until new game
  const play = function (event) {
    const r = $(event.target).data('r')
    const c = $(event.target).data('c')
    const target = $(event.target)
    if (target.is('div') && currentMove % 2 === 0 && target.html() !== playerOne && target.html() !== playerTwo) {
      target.html(playerOne)
      board[r][c] = playerOne
      console.log(board)
      currentMove++
    } else if (target.is('div') && !currentMove % 2 === 0 && target.html() !== playerOne && target.html() !== playerTwo) {
      target.html(playerTwo)
      board[r][c] = playerTwo
      console.log(board)
      currentMove++
    }
  }
  // when divs with the class grid-item are clicked run the play function
  $('.grid-item').click(play)

  // const checkForWins = function () {
  //   for (let i = 0; i < board.length; i++) {
  //     if (board[i][0] === playerOne && board[i][1] === playerOne && board[i][2] === playerOne) {
  //       console.log('X Wins')
  //     }
    // }

    // for (let i = 0; i < board.length; i++) {
    //   for (let j = 0; j < board[i].length; i++) {
    //     board[i][j] === playerOne
    //   }
    // }
    // let threeInARow = false
    // if (board.some(row => row.every(el => el === playerOne))) {
    //   threeInARow = true
    // }


    // if any of these are true return win
  //   return threeInARow || threeinA
  // }
  // $('.grid-item').click(checkForWins)

//
// win options
// board = [
//   ['X', 'X', 'X'],
//   [' ', ' ', ' '],
//   [' ', ' ', ' ']
// ]
// board = [
//   ['O', 'O', 'O'],
//   [' ', ' ', ' '],
//   [' ', ' ', ' ']
// ]
//
// if (board[0][1][2] = 'X') {
//   // x wins
// }
// board = [
//   [' ', ' ', ' '],
//   ['X', 'X', 'X'],
//   [' ', ' ', ' ']
// ]
// board = [
//   [' ', ' ', ' '],
//   ['O', 'O', 'O'],
//   [' ', ' ', ' ']
// ]
// if (board[0]
//
// board = [
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
//   ['X', 'X', 'X']
// ]
// board = [
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
//   ['O', 'O', 'O']
// ]
// board = [
//   ['X', ' ', ' '],
//   ['X', ' ', ' '],
//   ['X', ' ', ' ']
// ]
// board = [
//   ['O', ' ', ' '],
//   ['O', ' ', ' '],
//   ['O', ' ', ' ']
// ]
// board = [
//   [' ', 'X', ' '],
//   [' ', 'X', ' '],
//   [' ', 'X', ' ']
// ]
// board = [
//   [' ', 'O', ' '],
//   [' ', 'O', ' '],
//   [' ', 'O', ' ']
// ]
// board = [
//   [' ', ' ', 'X'],
//   [' ', ' ', 'X'],
//   [' ', ' ', 'X']
// ]
// board = [
//   [' ', ' ', 'O'],
//   [' ', ' ', 'O'],
//   [' ', ' ', 'O']
// ]
// board = [
//   ['X', ' ', ' '],
//   [' ', 'X', ' '],
//   [' ', ' ', 'X']
// ]
// board = [
//   ['O', ' ', ' '],
//   [' ', 'O', ' '],
//   [' ', ' ', 'O']
// ]



// reset the board on a click
const reset = function () {
    if (document.getElementsByClassName === playerOne || playerTwo) {
      board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ]
      $('.grid-item').html(' ')
      currentMove = ' '
      console.log(board)
    }
  }
  $('#reset').click(reset)

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})
