'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signUpSuccess ran. Data is :', data)
  $('input:text, input:password').val('')
  // $('#sign-up-hide').css('display', 'none')
  // $('#sign-in-hide').css('display', 'flex')
}

const signUpFailure = () => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('signUpFailure ran.')
  $('input:text, input:password').val('')
}

const signInSuccess = data => {
  // console.log(data.user.token)
  store.user = data.user
  // $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signInSuccess ran. Data is :', data)
  $('.show-hide').css('display', 'none')
  $('.toggle').css('display', 'none')
  $('.toggle-2').css('display', 'flex')
  $('input:text, input:password').val('')
}

const signInFailure = () => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signInFailure ran. Error is :', error)
  $('input:text, input:password').val('')
}

const changePasswordSuccess = data => {
  $('#message-2').text('Password changed successfully')
  $('#message-2').removeClass()
  $('#message-2').addClass('success')
  // console.log('changePasswordSuccess ran. Data is :', data)
  $('input:text, input:password').val('')
}

const changePasswordFailure = () => {
  $('#message-2').text('Error on password change')
  $('#message-2').removeClass()
  $('#message-2').addClass('failure')
  // console.error('changePasswordFailure ran. Error is :', error)
  $('input:text, input:password').val('')
}

const signOutSuccess = data => {
  // $('#message-2').text('Signed Out successfully')
  store.user = null
  $('#message-2').removeClass()
  $('#message-2').addClass('success')
  // console.log('signOutSuccess ran. Data is :', data)
  $('.toggle-2').css('display', 'none')
  $('.toggle').css('display', 'flex')
  $('.show-hide-2').css('display', 'none')
  $('.scoreboard').css('display', 'none')
  $('.grid-container').css('display', 'none')
  $('input:text, input:password').val('')
}

const signOutFailure = () => {
  $('#message-2').text('Sign Out failed')
  $('#message-2').removeClass()
  $('#message-2').addClass('failure')
  // console.log('signOutFailure ran. Data is :', error)
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
