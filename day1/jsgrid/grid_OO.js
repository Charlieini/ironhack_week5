$(function grid(){
  for (i=0;i<100;i++) {
    var s = $('<div class="cell" row="' + (parseInt(i/10)) +'"column="' + i%10 +'"></div>');
    $('#root').append(s);
    };

  var randomRow = parseInt(Math.random()*10);
  var randomColumn = parseInt(Math.random()*10);

  $('.cell[row="'+ randomRow +'"][column="'+ randomColumn +'"]').attr("class","cell active-head");

  var columnPosition = [0,1,2,3,4,5,6,7,8,9];
  var rowPosition = [0,1,2,3,4,5,6,7,8,9];

  for (var i=0; i<randomRow; i++){
    rowPosition.push(rowPosition[0]);
    rowPosition.splice(0,1);
  }

  for (var i=0; i<=randomColumn; i++){
    columnPosition.push(columnPosition[0]);
    columnPosition.splice(0,1);
  }

var direction = "R";

  setInterval(function(){
    var row = rowPosition[0];
    var column = columnPosition[0];

    $('.cell[row="'+ rowPosition[0] +'"][column="'+ columnPosition[0] +'"]').attr("class","cell active-head");
    $('.cell[row="'+ rowPosition[0] +'"][column="'+ columnPosition[9] +'"]').attr("class","cell active");
    $('.cell[row="'+ rowPosition[0] +'"][column="'+ columnPosition[6] +'"]').attr("class","cell");

    if (direction == "R"){
      columnPosition.push(columnPosition[0]);
      columnPosition.splice(0,1);
    }
    else if (direction === "L"){
      columnPosition.unshift(columnPosition[0]);
      columnPosition.splice(10,1);
    }
    else if (direction === "U"){
      rowPosition.push(rowPosition[0]);
      rowPosition.splice(0,1);
    }
    else if (direction ==="D") {
      rowPosition.unshift(rowPosition[0]);
      rowPosition.splice(10,1);
    }

  }, 1000);

  $(document).keypress(function(e){
    console.log(e.which);
    if(e.which === 119){
      var direction = "U";
      console.log("UP");
    }
    else if(e.which === 97) {
      var direction = "L";
      console.log("LEFT!")
    }
    else if(e.which === 115){
      var direction = "D";
      console.log("DOWN!")
    }
    else if(e.which === 100){
      var direction = "R"
      console.log("RIGTH!")
    }
  });

  });


  // $('.cell[row="'+ randomRow +'"][column="'+ randomColumn +'"]').attr("class","cell active-head");
  // $('.cell[row="'+ randomRow +'"][column="'+ tail +'"]').attr("class","cell active");
  // $('.cell[row="'+ randomRow +'"][column="'+ snake +'"]').attr("class","cell");
