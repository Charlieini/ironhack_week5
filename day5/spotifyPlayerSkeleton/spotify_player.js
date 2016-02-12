$(function(){

  var SpotifyPlayer = function() {};

  var Track = function(response) {
    this.title = response.tracks.items[0].name;
    this.artist = response.tracks.items[0].artists[0];
    this.cover = response.tracks.items[0].album.images[0].url;
    this.audio = response.tracks.items[0].preview_url;
    this.renderTrack();
  };

  var Artist = function(response) {
    this.name = response.name;
    this.image = response.images[0].url;
    this.renderArtist();
  };

  var spoti = new SpotifyPlayer;

  SpotifyPlayer.prototype.fetchTracks = function(e){
    e.preventDefault();
    $.ajax({
      type:"GET",
      url:"https://api.spotify.com/v1/search?type=track&query=" + $('input').val(),
      success: this.createTrack,
      error: function(){
        console.log("Error fetching songs!");
      },
      datatype:"json"
    });
  };

  SpotifyPlayer.prototype.createTrack = function(response){
    var track = new Track(response);
    $('.btn-play').removeClass('playing');
    $('progress').attr("value",0);
    debugger
  };

  SpotifyPlayer.prototype.playTrack = function(){
    if($('.btn-play').hasClass('playing')){
      $('.js-player').trigger('pause');
      $('.btn-play').removeClass('playing')
    }
    else {
      $('.js-player').trigger('play');
      $('.btn-play').addClass('playing');
    }
  };

  SpotifyPlayer.prototype.printTime = function(){
    var current = $('.js-player').prop('currentTime');
    $('progress').attr("value",current);
  };

  SpotifyPlayer.prototype.fetchArtist = function(e) {
    e.preventDefault();
    $.ajax({
      type:"GET",
      url:"https://api.spotify.com/v1/artists/" + $('.author').val(),
      success: this.createArtist,
      error: function(){
        console.log("Error fetching songs!");
      },
      datatype:"json"
    });
  };

  SpotifyPlayer.prototype.createArtist = function(response) {
    var artist = new Artist(response);
  }

  Track.prototype.renderTrack = function() {
    $(".title").text(this.title);
    $('.author').text(this.artist.name);
    $('.author').attr("value",this.artist.id);
    $('.cover img').attr('src',this.cover);
    $('.js-player').attr('src',this.audio);
  };

  Artist.prototype.renderArtist = function() {
    $('#artist-name').text(this.name);
    $('#artist-img').attr("src",this.image);
    $('.modal').modal('show');
  }

  $('form').on("submit",spoti.fetchTracks.bind(spoti));
  $('.btn-play').on("click", spoti.playTrack);
  $('.js-player').on('timeupdate', spoti.printTime);
  $('.author').on('click', spoti.fetchArtist.bind(spoti));
});
