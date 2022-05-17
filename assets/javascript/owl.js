$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 4000,
        autoplayHoverPause: true,
		autoHeight: true,
		center: true,
		responsive: {
			500: {
				items: 3,
			},
		},
	});
});
