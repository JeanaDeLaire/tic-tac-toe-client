'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  console.log(data.user.token)
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
  $('#api-login').css('display', 'none')
  $('#sidebar').css('display', 'none')
  $('#toggle-2').css('display', 'flex')
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message-2').text('Password changed successfully')
  $('#message-2').removeClass()
  $('#message-2').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message-2').text('Error on password change')
  $('#message-2').removeClass()
  $('#message-2').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  // console.log(null.user.token)
  $('#message-2').text('Signed Out successfully')
  store.user = null
  $('#message-2').removeClass()
  $('#message-2').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
}

const signOutFailure = error => {
  $('#message-2').text('Sign Out failed')
  $('#message-2').removeClass()
  $('#message-2').addClass('failure')
  console.log('signOutFailure ran. Data is :', error)
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
