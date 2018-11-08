'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#sidebar').click(function () {
    $('.show-hide').toggle()
  })

  $('#sidebar-2').click(function () {
    $('.show-hide-2').toggle()
  })

  $('#create-game').click(function () {
    $('.toggle-all-games').toggle()
  })

  $('#game-history').click(function () {
    $('.show-hide-3').toggle()
  })

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.grid-item').on('click', gameEvents.onUpdateGame)
  $('#game-history').on('click', gameEvents.onGameHistory)
})
