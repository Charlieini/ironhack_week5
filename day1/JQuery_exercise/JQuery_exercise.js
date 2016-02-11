var phrases = [
  'She likes JQuery',
  'JQuery is awesome',
  'Give it more Jquery'
];

$(function () {
  randomNumber= parseInt(Math.random()*phrases.length);
  randomPhrase = phrases[randomNumber];
  $('body').prepend('<h1></h1>');
  $('h1').text(randomPhrase);

  $('button').on('click', function (){
    randomNumber = parseInt(Math.random()*phrases.length);
    randomPhrase = phrases[randomNumber];
    $('h1').text(randomPhrase);
  });

  $(document).keypress(function(e) {
    if(e.which == 13) {
      phrases.push($('input').val());
      $('div').append('<p class="check clearable">' + $('input').val());
      $(".check").on("click", function() {
          $(this).remove();
    });
    }
  });


  phrases.forEach(function(phrase){
    $('div').append('<p class="check">' + phrase);
  })

  $('a').on('click', function (){
      $('div').fadeToggle();
    });

  $(".check").on("click", function() {
      $(this).remove();
});

});
