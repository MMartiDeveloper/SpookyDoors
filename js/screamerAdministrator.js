var currentScreamer;

function displayScreamer(){
  var num = Math.round(Math.random() * 8);
  switch (num) {
    case 1:
      spaghet();
      break;
    case 2:
      screamer1();
      break;
    case 3:
      hangedMan();
      break;
    case 4:
      dio();
      break;
    case 5:
      screamer2();
      break;
    case 6:
      screamer3();
      break;
    case 7:
      bamboozled();
      break;
    case 8:
      theWae();
      break;
    default:
      screamer1();
  }
}

function videoScreamer(timeOut){
  screamer.style.display = "inline";
  screamer.play();
  setTimeout(function(){
    screamer.style.display = "none";
    screamer.pause();
    gameOver();
  }, timeOut);
}

function imgScreamer(timeOut){
  screamer.style.display = "inline";
  setTimeout(function(){
    screamer.style.display = "none";
    stopCurrentAudio();
    gameOver();
  }, 500);
}

function spaghet(){
  screamer = document.getElementById("videoScreamer");
  screamer.src="video/spaghet.mp4";
  videoScreamer(3000);
}

function dio(){
  screamer = document.getElementById("videoScreamer");
  screamer.src="video/dio.mp4";
  videoScreamer(2000);
}

function bamboozled(){
  screamer = document.getElementById("videoScreamer");
  screamer.src="video/bamboozled.mp4";
  videoScreamer(7000);
}
function theWae(){
  screamer = document.getElementById("videoScreamer");
  screamer.src="video/theWae.mp4";
  videoScreamer(2000);
}

function hangedMan(){
  screamer = document.getElementById("imgScreamer");
  screamer.src="img/screamers/hangedMan.png";
  playScreamer1Sound();
  imgScreamer(500);
}

function screamer1(){
  screamer = document.getElementById("imgScreamer");
  screamer.src="img/screamers/screamer1.png";
  playScreamer2Sound();
  imgScreamer(500);
}

function screamer2(){
  screamer = document.getElementById("imgScreamer");
  screamer.src="img/screamers/screamer2.jpg";
  playScreamer2Sound();
  imgScreamer(500);
}

function screamer3(){
  screamer = document.getElementById("imgScreamer");
  screamer.src="img/screamers/screamer3.jpg";
  playScreamer3Sound();
  imgScreamer(500);
}
