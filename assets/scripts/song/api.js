'use strict'
const config = require('../config')
const store = require('../store')

const getMySongs = function (data) {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const createSong = function (data) {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const updateSong = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/songs/' + data.song.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const destroySong = function (songId) {
  return $.ajax({
    url: config.apiUrl + '/songs/' + songId,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createSong,
  updateSong,
  getMySongs,
  destroySong
}