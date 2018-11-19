'use strict'

const store = require('../store.js')

const createGameSuccess = data => {
  store.game = data.game
  $('.scores').text('Game On!')
  $('.grid-container').css('display', 'grid')
  $('.scoreboard').css('display', 'flex')
}

const createGameFailure = () => {
  $('.scores').text('create game request failed')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
}

const updateGameSuccess = data => {
  $('.scores').append('!')
  // $('.scores').delay(1000).fadeOut(100).fadeIn(200).fadeOut(100).fadeIn(200)
  $('.scores').addClass('success')
}

const updateGameFailure = () => {
  $('.scores').text('Move failed')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
}

const gameHistorySuccess = data => {
  $('#allStats').text('')
  const filteredGames = data.games.filter(el => el.over === true)
  const totalOverGames = filteredGames.length
  filteredGames.forEach(el => {
    const cellHtml = el.cells.map(i => {
      return `<div class="little-cell">${i}</div>`
    })
    const littleBoard = `<div class="little-board">${cellHtml.join('')}</div>`
    $('.game-history').text('Games completed: ' + totalOverGames)
    $('#allStats').append(littleBoard)
    $('#allStats').removeClass()
    $('#allStats').addClass('success')
  })
}

const gameHistoryFailure = () => {
  $('.scores').text('Request failed')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameFailure,
  updateGameSuccess,
  gameHistorySuccess,
  gameHistoryFailure
}
