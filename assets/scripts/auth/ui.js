'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('input:text, input:password').val('')
}

const signUpFailure = () => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('input:text, input:password').val('')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.show-hide').css('display', 'none')
  $('.toggle').css('display', 'none')
  $('.toggle-2').css('display', 'flex')
  $('input:text, input:password').val('')
}

const signInFailure = () => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('input:text, input:password').val('')
}

const changePasswordSuccess = data => {
  $('#message-2').text('Password changed successfully')
  $('#message-2').removeClass()
  $('#message-2').addClass('success')
  $('input:text, input:password').val('')
}

const changePasswordFailure = () => {
  $('#message-2').text('Error on password change')
  $('#message-2').removeClass()
  $('#message-2').addClass('failure')
  $('input:text, input:password').val('')
}

const signOutSuccess = data => {
  store.user = null
  $('#message-2').removeClass()
  $('#message-2').addClass('success')
  $('.toggle-2').css('display', 'none')
  $('.toggle').css('display', 'flex')
  $('.show-hide-2').css('display', 'none')
  $('.scoreboard').css('display', 'none')
  $('.grid-container').css('display', 'none')
  $('input:text, input:password').val('')
  $('#message-2').text('')
  $('#message').text('')
}

const signOutFailure = () => {
  $('#message-2').text('Sign Out failed')
  $('#message-2').removeClass()
  $('#message-2').addClass('failure')
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
