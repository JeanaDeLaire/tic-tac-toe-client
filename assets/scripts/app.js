'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  // your JS code goes here
  // toggle authentication prompts

  $('#sidebar').click(function () {
    $('.show-hide').toggle()
  })

  $('#create-game').click(function () {
    $('.toggle-all-games').toggle()
  })

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

  $('#create-game').on('click', gameEvents.onCreateGameClick)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})
