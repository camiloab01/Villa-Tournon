$(document).ready(function(){
	$('.carousel-slide').sliderArrow({
		next_slides : 2500
	});

	$('.carousel').carousel({
		interval: 3000 //changes the speed
	});
});

(function() {
	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
		new SelectFx(el);
	} );
})();