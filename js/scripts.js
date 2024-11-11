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
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		//Hamburger Icon Active
		jQuery(".hamburger").click(function(){
			jQuery(this).addClass("is-active");
		});

		//Hamburger Icon Active
		jQuery(".btn-close").click(function(){
			jQuery(".hamburger").removeClass("is-active");
		});

		$('.accordion-header').click(function() {
            var $item = $(this).parent();

            // Close previously active item
            $('.accordion-item.active').not($item).removeClass('active');

            // Toggle the clicked item
            $item.toggleClass('active');
        });

		$('.testimonials').owlCarousel({
			items: 1,
			margin: 24,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000
		});

		$('.sm-advantage').owlCarousel({
			items: 1,
			margin: 24,
			loop: true,
			nav: true,
			smartSpeed: 1000,
			navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']
		});


		// Show popup when carousel item is clicked
		$(".item-1").click(function() {
			$(".popup-item-1").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-2").click(function() {
			$(".popup-item-2").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-3").click(function() {
			$(".popup-item-3").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-4").click(function() {
			$(".popup-item-4").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-5").click(function() {
			$(".popup-item-5").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-6").click(function() {
			$(".popup-item-6").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-7").click(function() {
			$(".popup-item-7").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-8").click(function() {
			$(".popup-item-8").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-9").click(function() {
			$(".popup-item-9").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-10").click(function() {
			$(".popup-item-10").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-11").click(function() {
			$(".popup-item-11").fadeIn(); // Show popup overlay
		});
		// Show popup when carousel item is clicked
		$(".item-12").click(function() {
			$(".popup-item-12").fadeIn(); // Show popup overlay
		});





		// Close popup when close button is clicked
		$(".popup-close").click(function() {
			$(".popup-overlay").fadeOut(); // Hide popup overlay
		});

		// Close popup when clicking outside the popup box
		$(window).click(function(event) {
			if ($(event.target).is(".popup-overlay")) {
				$(".popup-overlay").fadeOut();
			}
		});


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);