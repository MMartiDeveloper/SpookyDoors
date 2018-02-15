var audio = null;

function stopCurrentAudio(){
  audio.pause();
}

function playOpenSound(){
  audio = new Audio('audio/doors/doorOpen.wav');
  audio.play();
}

function playCloseSound(){
  audio = new Audio('audio/doors/doorClose.wav');
  audio.play();
}

function playOpeningSound(){
  audio = new Audio('audio/doors/doorOpening.wav');
  audio.play();
}

function playScreamer1Sound(){
  audio = new Audio('audio/screamers/screamer1.ogg');
  audio.play();
}

function playScreamer2Sound(){
  audio = new Audio('audio/screamers/screamer2.wav');
  audio.play();
}

function playScreamer3Sound(){
  audio = new Audio('audio/screamers/screamer3.wav');
  audio.play();
}
