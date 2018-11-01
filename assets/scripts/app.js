'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  // your JS code goes here

  let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]

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

const click = $(() => {
    $('.sidebar').click(function () {
      $('#api-login').toggle()
    })
})

const reset = function () {
    if (document.getElementsByClassName === playerOne || playerTwo) {
      board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ]
      $('.grid-item').html(' ')
    }
  }
$('#reset').click(reset)

// function myFunction() {
//     const sign-up = document.getElementById("sign-up")
//     const sign-in = document.getElementById("sign-in")
//     const sign-out = document.getElementById("sign-out")
//     const change-password = document.getElementById("change-password")
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else if
//       var x = document.getElementById("sign-in"); {
//         x.style.display = "none";
//     }
// }



  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  // $('#change-password').on('submit', authEvents.onChangePassword)
})
