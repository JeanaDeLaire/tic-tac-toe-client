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
    data: {}
  })
}

const updateGame = data => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: data.index,
          value: data.value
        },
        over: data.over
      }
    }
  })
}

const gameHistory = data => {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: data.index,
          value: data.value
        },
        over: data.over
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  gameHistory
}
