var fun = 30;
var incriment = 4;
var decrement = 12;

function moreFun(){
  fun += incriment;
}

function lessFun(){
  if((fun - decrement) < 0)
    fun = 0;
  else
    fun -= decrement;
}

function rollFun(){
    setTimeout(function(){
      if(Math.random() * 100 <= fun){
        displayScreamer();
        lessFun();
      }else{
        nextRoom();
        moreFun();
    }
    }, (Math.random() * (3000 - 1000) + 1000));
}
