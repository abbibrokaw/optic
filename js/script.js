$(document).ready(function() {

	$("#home_button").click(function() {
		$('body,html').animate({
			scrollTop: $(".home").offset().top
		}, 900);
	});

	$("#donate_button").click(function() {
		$('body,html').animate({
			scrollTop: $(".donate").offset().top
		}, 900);
	});

	$("#process_button").click(function() {
		$('body,html').animate({
			scrollTop: $(".process_background_02").offset().top
		}, 900);
	});

	$("#start_button").click(function() {
		$('body,html').animate({
			scrollTop: $(".start").offset().top
		}, 900);
	});

	// actively measuring how far we have scrolled down
	$(window).on('scroll',function(){
		var h = $(document).scrollTop();
		$(".height").html(h + " px");
	});

	// setting up for the reverse scrolling
	var winHeight = $(window).innerHeight();
	var slideHeight = winHeight * -3; // variable for how tall each column is

	$(".donate_scroll_left").css({bottom: winHeight * 3}); // positions the stack of slides necessary for reverse scrolling

	var controller = new ScrollMagic.Controller(); // activating scroll magic effects

	// offset is how far down the page you want an effect to be triggered (measured in pixels)
	// duration is the amount of pixels scrolled that will keep the effect active

	new ScrollMagic.Scene({offset: 2955, duration: 2000})
		.setPin(".donate_scroll") // pins .donate_scroll to the top of the page
		.addTo(controller); // we just need this after every scroll magic effect

	new ScrollMagic.Scene({offset: 2955, duration: 4000})
		.setTween(".donate_scroll_left",{bottom: slideHeight + "px", ease:Power0.easeNone}) // reverse scrolling for the left column, the "ease:Power0..." thing is just to eliminate easing motions
		.addTo(controller);

	new ScrollMagic.Scene({offset: 2955, duration: 2000})
		.setTween(".donate_scroll_right",{top: slideHeight + "px", ease:Power0.easeNone}) // normal scrolling for the right column
		.addTo(controller);

	new ScrollMagic.Scene({offset: 6435, duration: 1500})
		.setPin(".process_background_03")
		.addTo(controller);

	new ScrollMagic.Scene({offset: 6435, duration: 3000})
		.setPin(".process_background_04")
		.addTo(controller);

	new ScrollMagic.Scene({offset: 7910, duration: 3050})
		.setPin(".process_image_02")
		.addTo(controller);

	new ScrollMagic.Scene({offset: 9410, duration: 1550})
		.setPin(".process_image_03")
		.addTo(controller);

	new ScrollMagic.Scene({offset: 10910, duration: 50})
		.setPin(".process_image_04")
		.addTo(controller);

});


$(document).scroll(function(){

	var y = $(document).scrollTop();

	$(".donate_text_02").html(y);

	if (y > 1500 && y < 3050) {
		$(".donate_text_02").fadeIn({'opacity': '1'}, 1000);
	}

	else {
		$(".donate_text_02").fadeOut({'opacity': '0'});
	}
});