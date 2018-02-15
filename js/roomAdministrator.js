var roomCount = 0;
var pos = 0;

function nextRoom(){
  fadeInDoors();
  roomCount++;
  var roomCounter = document.getElementById("roomCounter");
  roomCounter.innerHTML = "Room " + roomCount;
}
