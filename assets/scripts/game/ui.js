'use strict'

const store = require('../store.js')
// const events = require('../events.js')

const createGameSuccess = data => {
  store.user = data.user
  $('.scores').text('Game On!')
  $('.scores').removeClass()
  $('.scores').addClass('success')
  console.log('createGameSuccess ran. Data is :', data)
}

const createGameFailure = error => {
  $('.scores').text('create game request failed')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
  console.log('createGameFailure ran. Error is :', error)
}

const updateGameSuccess = data => {
  store.user = data.user
  $('.scores').text('Next Move')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
  console.log('updateGameSuccess ran. Data is:', data)
}

const updateGameFailure = error => {
  $('.scores').text('Move failed')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
  console.log('updateGameFailure ran. Data is:', error)
}

const gameHistorySuccess = data => {
  store.user = data.user
  $('#allStats').text('Next Move')
  $('#allStats').removeClass()
  $('#allStats').addClass('failure')
  console.log('getHistorySuccess ran. Data is:', data)
}

const gameHistoryFailure = error => {
  $('.scores').text('Request failed')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
  console.log('getHistoryFailure ran. Data is:', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameHistorySuccess,
  gameHistoryFailure
}
