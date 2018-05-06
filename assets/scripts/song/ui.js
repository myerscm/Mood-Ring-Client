'use strict'

const onMySongsSuccess = function (data) {
  // clear content div, in case something was already there
  $('#songlist').html('')

  data.songs.forEach(song => {
    const songHTML = (`
      <h4>Title: ${song.title}</h4>
      <p>Artist: ${song.artist}</p>
      <p>Mood: ${song.mood}</p>
      <p>Song ID: ${song.id}</p>
      <br>
    `)

    $('#songlist').append(songHTML)
  })
  if (data.songs.length === 0) {
    $('#hidesongs').addClass('hidden')
    $('#apimessage').html('You have no songs! Go add some!')
    $('#apimessage').css('background-color', 'red')
    setTimeout(() => {
      $('#apimessage').html('')
    }, 6000
    )
  }
}

const onCreateSongSuccess = function (data) {
  $('#apimessage').html('Song successfully posted!')
  $('#apimessage').css('background-color', 'green')
  setTimeout(() => {
    $('#apimessage').html('')
  }, 4000
  )
  $('form').trigger('reset')
}

const onDeleteSongSuccess = function (data) {
  $('#apimessage').html('Song successfully removed')
  $('#apimessage').css('background-color', 'green')
  setTimeout(() => {
    $('#apimessage').html('')
  }, 4000
  )
  $('form').trigger('reset')
}

const onUpdateSongSuccess = function (data) {
  $('#apimessage').html('Song successfully updated')
  $('#apimessage').css('background-color', 'green')
  setTimeout(() => {
    $('#apimessage').html('')
  }, 4000
  )
  $('form').trigger('reset')
}

const onError = function (data) {
  $('#apimessage').html('That song does not exist')
  $('#apimessage').css('background-color', 'red')
  setTimeout(() => {
    $('#apimessage').html('')
  }, 4000
  )
}

module.exports = {
  onMySongsSuccess,
  onCreateSongSuccess,
  onDeleteSongSuccess,
  onUpdateSongSuccess,
  onError
}
