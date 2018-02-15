function abrirPuerta(){
  this.src = "img/doors/doorOpened.png";
  playOpeningSound();
  removeEvents();
  fadeOutDoors();
}

function cerrarPuerta(){
  this.src = "img/doors/doorClosed.png";
  playCloseSound();
}

function entreAbrirPuerta(){
  this.src = "img/doors/doorOpening.png";
  playOpenSound();
}

function fadeOutDoors() {
  $( function() {
    $( "img" ).tooltip("disable");
  } );
    var element = document.getElementById("doors");
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
          op = 0;
          clearInterval(timer);
          rollFun();
          clearDoors();
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeInDoors() {
  $("img[class='door']").each(function(){
    var num = Math.round(Math.random() * 8);
    if(num <= 3){
      $(this).parpadea();
      return false;
    }
  });
    var element = document.getElementById("doors");
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
            setDoors();
            $( function() {
              $( "img" ).tooltip("enable");
            } );
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}
