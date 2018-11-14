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
  // $('.scores').removeClass()
  // $('.scores').addClass('success')
  console.log('updateGameSuccess ran. Data is:', data)
}

const updateGameFailure = error => {
  $('.scores').text('Move failed')
  $('.scores').removeClass()
  $('.scores').addClass('failure')
  console.log('updateGameFailure ran. Data is:', error)
}

// const gameHistorySuccess = data => {
//   const filteredGames = data.games.filter(el => el.over === true)
//   console.log(filteredGames)
//   filteredGames.forEach(el => {
//     const scoreData = JSON.stringify(el.cells)
//     $('#allStats').append(scoreData)
//     $('#allStats').removeClass()
//     $('#allStats').addClass('success')
//   })
// }

const gameHistorySuccess = data => {
  const filteredGames = data.games.filter(el => el.over === true)
  console.log(filteredGames)
  // console.log(filteredGames[0].cells)
  filteredGames.forEach(el => {
    const cellHtml = el.cells.map(i => {
      return `<div class="little-cell">${i}</div>`
    })
    const littleBoard = `<div class="little-board">${cellHtml.join('')}</div>`
    console.log(littleBoard)
    $('#allStats').append(littleBoard)
    $('#allStats').removeClass()
    $('#allStats').addClass('success')
  })
}

// const makeBoard = function (data) {
//   const filteredGames = data.games.filter(el => el.over === true)
//   const cellHtml = filteredGames.map(el => {
//     return `<div clas="little-cell">${el}</div>`
//   })
//   const littleBoard = `<div class="little-board">${cellHtml.join()}</div>`
// console.log(littleBoard)
// }

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
