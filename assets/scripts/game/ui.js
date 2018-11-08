'use strict'

const store = require('../store.js')

const createGameSuccess = data => {
  store.game = data.game
  $('.scores').text('Game On!')
  // $('.scores').removeClass()
  // $('.scores').addClass('success')
  // console.log('createGameSuccess ran. Data is :', data)
  $('.grid-container').css('display', 'grid')
  $('.scoreboard').css('display', 'flex')
}

const createGameFailure = error => {
  $('.scores').text('create game request failed')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
  console.log('createGameFailure ran. Error is :', error)
}

const updateGameSuccess = data => {
  // $('.scores').prepend('Player moved. ')
  $('.scores').removeClass()
  $('.scores').addClass('success')
  // console.log('updateGameSuccess ran. Data is:', data)
}

const updateGameFailure = error => {
  $('.scores').text('Move failed')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
  console.log('updateGameFailure ran. Data is:', error)
}

// const gameHistorySuccess = data => {
//   console.log(data)
//   const scoreData = JSON.stringify(data)
//   $('#allStats').append(scoreData)
//   $('#allStats').removeClass()
//   $('#allStats').addClass('success')
//   console.log(data.game.cells)
// }

const gameHistorySuccess = data => {
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      const scoreData = JSON.stringify(data.games[i].cells)
      // console.log(data.games[i].cells)
      $('#allStats').append(scoreData)
      $('#allStats').removeClass()
      $('#allStats').addClass('success')
    }
  }
}

const gameHistoryFailure = () => {
  $('.scores').text('Request failed')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameHistorySuccess,
  gameHistoryFailure
}
