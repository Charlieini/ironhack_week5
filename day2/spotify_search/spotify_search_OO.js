$(function(){

  var Spotify = function () {};

  Spotify.prototype.fetchArtist = function(artist) {
    $.ajax({
      type: 'GET',
      url: 'https://api.spotify.com/v1/search?type=artist&query=' + artist,
      success: this.renderArtists,
      error: function(){
        console.log("Error!");
      }
    })
  };

Spotify.prototype.renderArtists = function(response) {
  $('#artist-list').empty();
  $('#album-list').empty();
  $('#track-list').empty();
  var artists = response.artists.items;
  artists.forEach(function(artist){
    $('#artist-list').append('<li class="artist">' + artist.name);
    $('li:last-of-type').attr("value",artist.id);
    if (artist.images.length > 0){
    $('#artist-list').append('<img width="100" heigth="100"></img>');
    $('img:last-of-type').attr("src",artist.images[0].url);
    }
  });
}

  Spotify.prototype.fetchAlbums = function(artist_id) {
    $.ajax({
      type: "GET",
      url: 'https://api.spotify.com/v1/artists/' + artist_id + '/albums',
      success: this.renderAlbums,
      error: function(){
        console.log("Error!");
      }
    })
  };

  Spotify.prototype.renderAlbums = function(response) {
    $('#album-list').empty();
    $('#track-list').empty();
    var albums = response.items;
    albums.forEach(function(album){
      $('#album-list').append('<li class="album">' + album.name);
      $('li:last-of-type').attr("value",album.id);
      if (album.images.length > 0){
      $('#album-list').append('<img width="100" heigth="100"></img>');
      $('#album-list img:last-of-type').attr("src",album.images[0].url);
      }
    });
  }

  Spotify.prototype.fetchTracks = function(album_id) {
        $.ajax({
      type: "GET",
      url: 'https://api.spotify.com/v1/albums/' + album_id + '/tracks',
      success:this.renderTracks,
      error: function(){
        console.log("Error!");
      }
    })
  };

  Spotify.prototype.renderTracks = function(response) {
    $('#track-list').empty();
    var tracks = response.items;
    tracks.forEach(function(track){
      $('#track-list').append('<a class="track" target="_blank">' + track.name);
      $('a:last-of-type').attr("href",track.preview_url);
      $('#track-list').append('<br>');
    });
  }

  Spotify.prototype.searchArtist = function(e) {
    e.preventDefault();
    var artist = $('input').val();
    this.fetchArtist(artist);
  };

  Spotify.prototype.searchAlbum = function(event) {
    event.preventDefault();
    var artist_id = $(event.currentTarget).attr("value");
    this.fetchAlbums(artist_id);
  }

  Spotify.prototype.searchTracks = function(event) {
    event.preventDefault();
    var album_id = $(event.currentTarget).attr("value");
    this.fetchTracks(album_id);
  }

  var spoti = new Spotify();

  $('.search_artist').on('click', spoti.searchArtist.bind(spoti));
  $('#artist-list').on('click', '.artist', spoti.searchAlbum.bind(spoti));
  $('#album-list').on('click', '.album', spoti.searchTracks.bind(spoti));;
});
