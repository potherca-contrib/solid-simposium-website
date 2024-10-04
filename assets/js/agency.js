// Agency Theme JavaScript

(function($) {
	$(document).ready(function() {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 200)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 201
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

	// Modals
	document.body.addEventListener('click', function(evt) { 
		if (evt.target.classList.contains('portfolio-hover')) {
			$(evt.target).parent().parent().find('~ .portfolio-modal').modal({
				backdrop: false
			});
		}
	});

	});
})(jQuery); // End of use strict
