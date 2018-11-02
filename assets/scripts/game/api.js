'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

// const gameHistory = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/:id',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//   "game": {
//     "id": data.index,
//     "cells": ["o","x","o","x","o","x","o","x","o"],
//     "over": data.value
//     "player_x": {
//       "id": 1,
//       "email": "and@and.com"
//     },
//     "player_o": {
//       "id": 3,
//       "email": "'"dna@dna.com"'"
//     }
//   }
// }
//   })
// }

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': data.index,
          'value': data.value
        },
        'over': data.over
      }
    }
  })
}

module.exports = {
  createGame,
  // gameHistory,
  updateGame
}
