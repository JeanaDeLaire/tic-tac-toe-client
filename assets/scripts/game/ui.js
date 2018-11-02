'use strict'

// const store = require('../store.js')

const createGameSuccess = data => {
  $('stats').text('Game On!')
  $('#stats').removeClass()
  $('#stats').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
}

const createGameFailure = error => {
  $('#stats').text('Error on sign up')
  $('#stats').removeClass()
  $('#stats').addClass('failure')
  console.log('signUpFailure ran. Error is :', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
