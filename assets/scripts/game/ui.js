'use strict'

// game CRUD user feedback

const store = require('../store.js')

// display the gameboard when a signed in user clicks on new game
const createGameSuccess = data => {
  store.game = data.game
  $('.scores').text('Game On!')
  $('.grid-container').css('display', 'grid')
  $('.scoreboard').css('display', 'flex')
}

// If starting a new game doesn't work inform the user.
const createGameFailure = () => {
  $('.scores').text('Your create game request failed.')
}

// this function can be changed to show successful updates
// for project submission requirements
const updateGameSuccess = data => {
  $('.scores').append('')
}

// if the game does not update inform the user the connection may be lost
const updateGameFailure = () => {
  $('.scores').text('Move failed. Please try again.')
}

// function to retrieve visual of previous completed games
const gameHistorySuccess = data => {
  $('#allStats').text('')
  // filter through all games to retrieve completed games
  const filteredGames = data.games.filter(el => el.over === true)
  const totalOverGames = filteredGames.length
  filteredGames.forEach(el => {
    const cellHtml = el.cells.map(i => {
      // place each player token into a div within the board grid
      return `<div class="little-cell">${i}</div>`
    })
    const littleBoard = `<div class="little-board">${cellHtml.join('')}</div>`
    $('.game-history').text('Games completed: ' + totalOverGames)
    // add visual of completed games to dropdown section
    $('#allStats').append(littleBoard)
  })
}

const gameHistoryFailure = () => {
  $('.scores').text('Request failed')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameFailure,
  updateGameSuccess,
  gameHistorySuccess,
  gameHistoryFailure
}
