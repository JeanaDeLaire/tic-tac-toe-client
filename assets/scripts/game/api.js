'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = data => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateGame = data => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const gameHistory = data => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createGame,
  updateGame,
  gameHistory
}
