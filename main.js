	$(function() {
$(this).keydown(function(event){
	var key= $(this).find('.key[data-key='+event.which+']');
	var audio =$('audio[data-key='+event.which+']')[0];
	key.toggleClass('playing');
	$(this).find('audio[data-key='+event.which+']').autoplay;
	audio.play()
	audio.currentTime=0;
});
$(this).keyup(function(event){
	var key= $(this).find('.key[data-key='+event.which+']');
	var audio =$('audio[data-key='+event.which+']')[0];
	key.toggleClass('playing');
	$(this).find('audio[data-key='+event.which+']').autoplay;
	audio.stop();
});
	});