$(function(){

  $(".search_artist").on("click",function(e){
    $('#artist-list').empty();
    var request = $.get('https://api.spotify.com/v1/search?type=artist&query=' + $('input').val());
    request.done(showArtist);
    request.fail(function (error){
      console.log('Error!');
    })
    e.preventDefault();
  });


  function showArtist(response){
    var artists = response.artists.items
    artists.forEach(function (artist){
      // var url_poster = artist.images[0].url;
          $('#artist-list').append('<li class="album">' + artist.name);
          $('li:last-of-type').attr("value",artist.id);
          if (artist.images.length > 0){
          $('#artist-list').append('<img width="100" heigth="100"></img>');
          $('img:last-of-type').attr("src",artist.images[0].url);
        }

    });
  }

  $("ul").on("click", ".album", function(e){
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: "https://api.spotify.com/v1/artists/" + $(this).attr("value") + "/albums",
      success: showAlbum,
      error: function(){
        console.log("Error!")
      },
      dataType:"json"
    });
  });

  function showAlbum(response) {
    var albums = response.items;
    albums.forEach(function(album){
      console.log(album.href);
    });
  }


});
