var intervalo;
jQuery.fn.parpadea = function() {
   this.each(function(){
      elem = $(this);
       intervalo = setInterval(
         function(){
           elem.fadeOut(5, function(){
             $(this).fadeIn(5);
           })
         }, 15);

   });
   return this;
};
jQuery.fn.para = function() {
   clearInterval(intervalo)
};
