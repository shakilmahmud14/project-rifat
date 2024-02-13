(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeOut();
			} else {
				jQuery('.scrolltotop').fadeIn();
			}
		});


		// slick-banner slide
		$(document).ready(function() {
		  $('.flex-next').html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');
		  $('.flex-prev').html('<i class="fa fa-chevron-left" aria-hidden="true"></i>')
		});

		$('.slide-image').each(function() {
		  var bg = $(this).data('bg');
		  var pos = $(this).data('flex-start');
		  $(this).css({
		    "background-image" : "url("+bg+")",
		    "transform-origin": pos,
		  })
		});
		$('.flex-slider').flexslider({
		  slideshow: true,
		  slideshowSpeed: 5000,
		  animationSpeed: 1000,
		  controlNav: false,
		  pauseOnAction: true,
		  after: function(slider) {
		    if (!slider.playing) {
		      slider.play();
		    }
		  }
		});



		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);