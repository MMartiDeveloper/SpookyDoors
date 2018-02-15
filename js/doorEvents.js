var doors;
window.onload = function(){
  doors = document.getElementById("doors").getElementsByTagName("img");
  setDoors();
}

function removeEvents(){
  for (var door in doors) {
    if (doors.hasOwnProperty(door)) {
      doors[door].onclick = null;
      doors[door].onmouseout = null;
      doors[door].onmouseover = null;
    }
  }
}

function setDoors(){

  for (var door in doors) {
    if (doors.hasOwnProperty(door)) {
      doors[door].onclick = abrirPuerta;
      doors[door].onmouseout = cerrarPuerta;
      doors[door].onmouseover = entreAbrirPuerta;
    }
  }
}

function clearDoors(){
  for (var door in doors) {
    if (doors.hasOwnProperty(door)) {
      doors[door].src = "img/doors/doorClosed.png";
    }
  }
  $("img[class='door']").each(function(){

      $(this).para();
  })
}
