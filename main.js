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
   $( ".J" )
  .mousedown(function(event) {
  	$('#J').get(0).play().currentTime=0;
  })

   $( ".Z" )
  .mousedown(function(event) {
  	$('#Z').get(0).play().currentTime=0;
  })
   $( ".X" )
  .mousedown(function(event) {
  	$('#X').get(0).play().currentTime=0;
  })
   $( ".C" )
  .mousedown(function(event) {
  	$('#C').get(0).play().currentTime=0;
  })
   $( ".V" )
  .mousedown(function(event) {
  	$('#V').get(0).play().currentTime=0;
  })
   $( ".B" )
  .mousedown(function(event) {
  	$('#B').get(0).play().currentTime=0;
  })
   $( ".N" )
  .mousedown(function(event) {
  	$('#N').get(0).play().currentTime=0;
  })
   $( ".M" )
  .mousedown(function(event) {
  	$('#M').get(0).play().currentTime=0;
  })
   $( ".Q" )
  .mousedown(function(event) {
  	$('#Q').get(0).play().currentTime=0;
  })
   $( ".E" )
  .mousedown(function(event) {
  	$('#E').get(0).play().currentTime=0;
  })
   $( ".T" )
  .mousedown(function(event) {
  	$('#T').get(0).play().currentTime=0;
  })
   $( ".I" )
  .mousedown(function(event) {
  	$('#I').get(0).play().currentTime=0;
  })
  $( ".P" )
  .mousedown(function(event) {
  	$('#P').get(0).play().currentTime=0;
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
  $( ".Z" )
  .mousemove(function(event) {
  	$('#Z').get(0).play().currentTime=0;
  })
   $( ".X" )
  .mousemove(function(event) {
  	$('#X').get(0).play().currentTime=0;
  })
   $( ".C" )
 .mousemove(function(event) {
  	$('#C').get(0).play().currentTime=0;
  })
   $( ".V" )
  .mousemove(function(event) {
  	$('#V').get(0).play().currentTime=0;
  })
   $( ".B" )
  .mousemove(function(event) {
  	$('#B').get(0).play().currentTime=0;
  })
   $( ".N" )
  .mousemove(function(event) {
  	$('#N').get(0).play().currentTime=0;
  })
   $( ".M" )
  .mousemove(function(event) {
  	$('#M').get(0).play().currentTime=0;
  })
   $( ".Q" )
  .mousemove(function(event) {
  	$('#Q').get(0).play().currentTime=0;
  })
   $( ".E" )
  .mousemove(function(event) {
  	$('#E').get(0).play().currentTime=0;
  })
   $( ".T" )
  .mousemove(function(event) {
  	$('#T').get(0).play().currentTime=0;
  })
   $( ".I" )
  .mousemove(function(event) {
  	$('#I').get(0).play().currentTime=0;
  })
  $( ".P" )
  .mousemove(function(event) {
  	$('#P').get(0).play().currentTime=0;
  })
})
/*
$ (function() {
	var key = $(event.target).attr('class');
    var note =$('#'+key)[0];

    ($(event.target).attr('class');)

$(this).mousedown(function(event){

    note.play();
    note.currentTime = 0
})
});*/


