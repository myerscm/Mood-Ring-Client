const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onGetSongs = function (event) {
  event.preventDefault()
  $('#songlist').removeClass('hidden')
  $('#hidesongs').removeClass('hidden')
  api.getMySongs()
    .then(ui.onMySongsSuccess)
}

const onCreateSong = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createSong(data)
    .then(ui.onCreateSongSuccess)
    .then(() => onGetSongs(event))
}

const onDeleteSong = function (event) {
  event.preventDefault()
  const songId = getFormFields(event.target)
  api.destroySong(songId.song.id)
    .then(ui.onDeleteSongSuccess)
    .then(() => onGetSongs(event))
    .catch(ui.onError)
}

const onUpdateSong = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateSong(data)
    .then(ui.onUpdateSongSuccess)
    .then(() => onGetSongs(event))
    .catch(ui.onError)

}

const hideSongs = function () {
  event.preventDefault()
  $('#songlist').addClass('hidden')
  $('#hidesongs').addClass('hidden')
}

const showCreateForms = function () {
  event.preventDefault()
  $('#createsongs').removeClass('hidden')
}

const showRemoveForms = function () {
  event.preventDefault()
  $('#removesongs').removeClass('hidden')
}

const showUpdateForms = function () {
  event.preventDefault()
  $('#update').removeClass('hidden')
}

const hideCreate = function () {
  event.preventDefault()
  $('#createsongs').addClass('hidden')
}

const hideDestroy = function () {
  event.preventDefault()
  $('#removesongs').addClass('hidden')
}

const hideUpdate = function () {
  event.preventDefault()
  $('#update').addClass('hidden')
}

const addHandlers = function () {
  $('#mysongs').on('click', onGetSongs)
  $('#hidesongs').on('click', hideSongs)
  $('#createforms').on('submit', onCreateSong)
  $('#addsongs').on('click', showCreateForms)
  $('#hidecreate').on('click', hideCreate)
  $('#removeforms').on('submit', onDeleteSong)
  $('#destroysongs').on('click', showRemoveForms)
  $('#hidedestroy').on('click', hideDestroy)
  $('#updateforms').on('submit', onUpdateSong)
  $('#updatesongs').on('click', showUpdateForms)
  $('#hideupdate').on('click', hideUpdate)
}

module.exports = {
  addHandlers
}
