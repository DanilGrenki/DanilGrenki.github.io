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
  $( ".key" )
  .mouseout(function(event) {
    $( this ).removeClass('playing');
  });

  $( ".key" )
  .mousemove(function(event) {
    $( this ).addClass('playing');
  });

 $ (function() {
 $( ".A" )
  .mousedown(function(event) {
  	$('#A').get(0).play().currentTime=0;
  })
  $( ".W" )
  .mousedown(function(event) {
  	$('#W').get(0).play().currentTime=0;
  })
  $( ".S" )
  .mousedown(function(event) {
  	$('#S').get(0).play().currentTime=0;
  })
  $( ".D" )
  .mousedown(function(event) {
  	$('#D').get(0).play().currentTime=0;
  })
  $( ".R" )
  .mousedown(function(event) {
  	$('#R').get(0).play().currentTime=0;
  })
  $( ".F" )
  .mousedown(function(event) {
  	$('#F').get(0).play().currentTime=0;
  })

  $( ".Y" )
  .mousedown(function(event) {
  	$('#Y').get(0).play().currentTime=0;
  })
  $( ".G" )
  .mousedown(function(event) {
  	$('#G').get(0).play().currentTime=0;
  })
  $( ".U" )
  .mousedown(function(event) {
  	$('#U').get(0).play().currentTime=0;
  })
$( ".H" )
  .mousedown(function(event) {
  	$('#H').get(0).play().currentTime=0;
  })
  $( ".O" )
  .mousedown(function(event) {
  	$('#O').get(0).play().currentTime=0;
  })
  $( ".J" )
  .mousedown(function(event) {
  	$('#J').get(0).play().currentTime=0;
  })

})
   
  

  $ (function() {
 $( ".A" )
  .mousemove(function(event) {
    $('#A').get(0).play().currentTime=0;
  })
  $( ".W" )
  .mousemove(function(event) {
    $('#W').get(0).play().currentTime=0;
  })
  $( ".S" )
  .mousemove(function(event) {
    $('#S').get(0).play().currentTime=0;
  })
  $( ".D" )
  .mousemove(function(event) {
    $('#D').get(0).play().currentTime=0;
  })
  $( ".R" )
  .mousemove(function(event) {
    $('#R').get(0).play().currentTime=0;
  })
  $( ".F" )
  .mousemove(function(event) {
    $('#F').get(0).play().currentTime=0;
  })

  $( ".Y" )
  .mousemove(function(event) {
    $('#Y').get(0).play().currentTime=0;
  })
  $( ".G" )
  .mousemove(function(event) {
    $('#G').get(0).play().currentTime=0;
  })
  $( ".U" )
  .mousemove(function(event) {
    $('#U').get(0).play().currentTime=0;
  })
$( ".H" )
  .mousemove(function(event) {
    $('#H').get(0).play().currentTime=0;
  })
  $( ".O" )
  .mousemove(function(event) {
    $('#O').get(0).play().currentTime=0;
  })
  $( ".J" )
  .mousemove(function(event) {
    $('#J').get(0).play().currentTime=0;
  })

})
