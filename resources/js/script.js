$(document).ready(function(){ 

	/* Add/ Remove Sticky Navigation */ 

	$('.js--section-features').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
    });
});

