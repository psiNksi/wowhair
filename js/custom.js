$(function(){

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)
		})

	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});
	}

	$(window).bind('load resize', hf);

	$('.banner-slider').slick({
		arrows: false,
		dots: true,
	})

	$('.gallery-slider').slick({
		arrows: false,
		dots: true,
	})
});

   


