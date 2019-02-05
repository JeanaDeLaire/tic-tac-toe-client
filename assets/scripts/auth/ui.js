'use strict'

// authentication CRUD user feedback

const store = require('../store.js')

// show message at bottom of sign up form alerting success
// clear form
const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('input:text, input:password').val('')
}

// show message at bottom of sign up form alerting sign up failure
const signUpFailure = () => {
  $('#message').text('Error on sign up')
  $('input:text, input:password').val('')
}

// if sign in is successful hide the form and show navbar with game options
// clear form
const signInSuccess = data => {
  store.user = data.user
  $('.show-hide').css('display', 'none')
  $('.toggle').css('display', 'none')
  $('.toggle-2').css('display', 'flex')
  $('input:text, input:password').val('')
}

// alert user if sign in fails
// clear form
const signInFailure = () => {
  $('#message').text('Error on sign in')
  $('input:text, input:password').val('')
}

// inform user when pw change is successful
// clear form
const changePasswordSuccess = data => {
  $('#message-2').text('Password changed successfully')
  $('input:text, input:password').val('')
}

// inform user if pw change fails
// clear form
const changePasswordFailure = () => {
  $('#message-2').text('Error on password change')
  $('input:text, input:password').val('')
}

// when the user signs out close all sign in displays
// hide Navbar
// hide the Gameboard
// show them the option to sign in again
const signOutSuccess = data => {
  store.user = null
  $('.toggle-2').css('display', 'none')
  $('.toggle').css('display', 'flex')
  $('.show-hide-2').css('display', 'none')
  $('.show-hide-3').css('display', 'none')
  $('.scoreboard').css('display', 'none')
  $('.grid-container').css('display', 'none')
  $('input:text, input:password').val('')
  $('#message-2').text('')
  $('#message').text('')
}

// if sign out fails inform user.
const signOutFailure = () => {
  $('#message-2').text('Sign Out failed')
  $('input:text, input:password').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
