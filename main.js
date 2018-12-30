	/*var repeat = false;*/
	
	$ (function() {
   $(this).keydown(function(event){

/*if (!repeat) {*/
	var key= $(this).find('.key[data-key='+event.which+']');
	key.addClass('playing');
	var audio =$('audio[data-key='+event.which+']')[0];
		$(this).find('audio[data-key='+event.which+']').autoplay;
	audio.play()
	audio.currentTime=0;
	
/* repeat = true;}*/
  

});
   

  $(this).keyup(function(event){
 	/* repeat = false; */
	var key= $(this).find('.key[data-key='+event.which+']');
	var audio =$('audio[data-key='+event.which+']')[0];
	key.removeClass('playing');
	$(this).find('audio[data-key='+event.which+']').autoplay;
	audio.stop();

});
	});

	 $( ".key" )
  .mouseup(function(event) {
    $( this ).removeClass('playing');
 
  })
  .mousedown(function(event) {
    $( this ).addClass('playing');
  });

 
 $( ".A" )
  .mouseup(function(event) {
  	$('#A').get(0).play().currentTime=1;
  })
  $( ".B" )
  .mouseup(function(event) {
  	$('#B').get(0).play().currentTime=1;
  })
  $( ".C" )
  .mouseup(function(event) {
  	$('#C').get(0).play().currentTime=1;
  })
  $( ".D" )
  .mouseup(function(event) {
  	$('#D').get(0).play().currentTime=1;
  })
  $( ".E" )
  .mouseup(function(event) {
  	$('#E').get(0).play().currentTime=1;
  })
  $( ".F" )
  .mouseup(function(event) {
  	$('#F').get(0).play().currentTime=1;
  })

  $( ".G" )
  .mouseup(function(event) {
  	$('#G').get(0).play().currentTime=1;
  })
  $( ".H" )
  .mouseup(function(event) {
  	$('#H').get(0).play().currentTime=1;
  })
  $( ".K" )
  .mouseup(function(event) {
  	$('#K').get(0).play().currentTime=1;
  })

   

  
var repeat = false;
el.addEventListener("keyup", function() { repeat = false; });
el.addEventListener("keydown", function() {
  if (!repeat) {
    
    repeat = true;
  }
});