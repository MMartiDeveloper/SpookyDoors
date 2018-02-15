function gameOver(){
  var scoreboard = document.getElementById("scoreboard");
  $.get("score.php", function(respuesta){
    var done = false;
  var cosas = JSON.parse(respuesta);
    for (var line in cosas) {
      var position = 1+parseInt(line);
      if(roomCount >= cosas[line]['points'] && done == false){
        done = true;
        pos = position;
        var p = $("<p></p>").text(position + ".-" + roomCount).attr("display", "in-line");
        var input = $("<input></input>").attr("type", "text");
        input.attr("onkeypress", "envia(event)");
        p.append(input);
        $("#scoreboard").append(p);
      }else{
        var p = $("<p></p>").text(position + ".-" + cosas[line]['points'] + " " + cosas[line]['name']);
      $("#scoreboard").append(p);
      }
    }
    var button = $("<button>CLOSE</button>").click(cierra);
    $("#scoreboard").append(button);
  });
  scoreboard.style.display = "block";
}


function cierra(){
  location.reload();
}
function envia (event){
  if(event.keyCode == 13){
    var nameW = document.getElementsByTagName("input")[0].value;
    $.post("save.php", { position:pos, points:roomCount, name: nameW}, function(respuesta){
      location.reload();
    });
    return false; // returning false will prevent the event from bubbling up.
  }else{
      return true;
  }
}
