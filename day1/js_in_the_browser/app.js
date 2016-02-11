$(function () {
  var p = $('<p>This is a p</p>');
  var h = $('<h1 id="title">JQuery cool</h1>');
  var b = $('<button class="js-tacos">Tacos!</button>')
  var a = $('<button data-action="do stuff">Do stuff</button>')
  $('#root').append(p);
  $('#root').append(h);
  $('#root').append(b);
  $('#root').append(a);
  $('p').addClass('my-class');
  $('h1').removeClass('title');
  $('#container').prepend("<p>Prepend me.</p>")
  $('#container').before("<p>before me.</p>")
  $('#container').after("<p>after me.</p>")

});
