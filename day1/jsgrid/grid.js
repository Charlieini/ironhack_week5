function isEven(n) {
   return n % 2 == 0;
}

window.setInterval(function(){
  $(function grid(){
  $('.cell').remove();
  for (i=0;i<100;i++) {
    var s = $('<div class="cell"></div>');
    $('#root').append(s);
    random = parseInt(Math.random() *10);
    if (isEven(random)) {
      $(s).addClass('active');
    }
  };
});}, 1000);
