/** CUSTOM SCRIPT FOR CAR DOOR **/


"use strict";
	
	
// Hide Loading Box (Preloader)
function handlePreloader() {
	if($('.preloader').length){
		$('.preloader').delay(500).fadeOut(500);
	}
}	
	
//Update Header Style + Scroll to Top
function headerStyle() {
	if($('.main-header').length){
		var windowpos = $(window).scrollTop();
		if (windowpos >= 80) {
			$('.main-header').addClass('fixed-header');
			$('.scroll-to-top').fadeIn(300);
		} else {
			$('.main-header').removeClass('fixed-header');
			$('.scroll-to-top').fadeOut(300);
		}
	}
}

headerStyle();
	
	
//Scroll to Top Style Two
function scrollTopStyletwo() {
	if($('.page-wrapper').length){
		var windowpos = $(window).scrollTop();
		if (windowpos >= 120) {
			$('.scroll-to-top').fadeIn(300);
		} else {
			$('.scroll-to-top').fadeOut(300);
		}
	}
}

scrollTopStyletwo();
	
	
//Submenu Dropdown Toggle
if($('.main-menu li.dropdown ul').length){
	$('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
	
	//Dropdown Button
	$('.main-menu li.dropdown .dropdown-btn').on('click', function() {
		$(this).prev('ul').slideToggle(500);
	});
	
	//Disable dropdown parent link
	$('.navigation li.dropdown > a').on('click', function(e) {
		e.preventDefault();
	});
}

//Revolution Slider
if($('.revolution-slider .tp-banner').length){

	jQuery('.revolution-slider .tp-banner').show().revolution({
	  
	  delay:10000,
	  startwidth:1200,
	  startheight:720,
	  hideThumbs:600,

	  thumbWidth:80,
	  thumbHeight:50,
	  thumbAmount:5,

	  navigationType:"bullet",
	  navigationArrows:"0",
	  navigationStyle:"preview4",

	  touchenabled:"on",
	  onHoverStop:"off",

	  swipe_velocity: 0.7,
	  swipe_min_touches: 1,
	  swipe_max_touches: 1,
	  drag_block_vertical: false,

	  parallax:"mouse",
	  parallaxBgFreeze:"on",
	  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

	  keyboardNavigation:"off",

	  navigationHAlign:"center",
	  navigationVAlign:"bottom",
	  navigationHOffset:0,
	  navigationVOffset:20,

	  soloArrowLeftHalign:"left",
	  soloArrowLeftValign:"center",
	  soloArrowLeftHOffset:20,
	  soloArrowLeftVOffset:0,

	  soloArrowRightHalign:"right",
	  soloArrowRightValign:"center",
	  soloArrowRightHOffset:20,
	  soloArrowRightVOffset:0,

	  shadow:0,
	  fullWidth:"on",
	  fullScreen:"off",

	  spinner:"spinner4",

	  stopLoop:"off",
	  stopAfterLoops:-1,
	  stopAtSlide:-1,

	  shuffle:"off",

	  autoHeight:"off",
	  forceFullWidth:"on",

	  hideThumbsOnMobile:"on",
	  hideNavDelayOnMobile:1500,
	  hideBulletsOnMobile:"on",
	  hideArrowsOnMobile:"on",
	  hideThumbsUnderResolution:0,

	  hideSliderAtLimit:0,
	  hideCaptionAtLimit:0,
	  hideAllCaptionAtLilmit:0,
	  startWithSlide:0,
	  videoJsPath:"",
	  fullScreenOffsetContainer: ""
  });

	
}

// galleryMasonaryLayout
function galleryMasonaryLayout () {
	if ($('.img-masonary').length) {
		$('.img-masonary').isotope({
			layoutMode:'masonry'
		});
	}
}

// accrodion
function accrodion () {
	if ($('.accrodion-grp').length) {
		
		$('.accrodion-grp').each(function () {
			var accrodionName = $(this).data('grp-name');
			var Self = $(this);
			Self.addClass(accrodionName);
			Self.find('.accrodion .accrodion-content').hide();
			Self.find('.accrodion.active').find('.accrodion-content').show();
			Self.find('.accrodion').each(function() {
				$(this).find('.accrodion-title').on('click', function () {
					if ($(this).parent().hasClass('active') === false ) {					
						$('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
						$('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
						$(this).parent().addClass('active');					
						$(this).parent().find('.accrodion-content').slideDown();	
					};
				});
			});
		});
		
	};
}
	
//Accordions
if($('.accordion-box').length){
	$('.accordion-box .acc-btn').on('click', function() {
	if($(this).hasClass('active')!==true){
			$('.accordion-box .acc-btn').removeClass('active');
		}
		
	if ($(this).next('.acc-content').is(':visible')){
			$(this).removeClass('active');
			$(this).next('.acc-content').slideUp(500);
		}
	else{
			$(this).addClass('active');
			$('.accordion-box .acc-content').slideUp(500);
			$(this).next('.acc-content').slideDown(500);	
		}
	});
}

//Skill Progress Bar
if($('.skill-box .bar-fill').length){
	$(".skill-box .bar-fill").each(function() {
		var progressWidth = $(this).attr('data-percent');
		$(this).css('width',progressWidth+'%');
		$(this).parents('.bar').children('.percent').html(progressWidth+'%');
	});
}

//Tabs Box
if($('.tab-style').length){
	$('.tab-style .tab-btn').on('click', function(e) {
		e.preventDefault();
		var target = $($(this).attr('href'));
		$('.tab-style .tab-btn').removeClass('active');
		$(this).addClass('active');
		$('.tab-style .tab').fadeOut(0);
		$('.tab-style .tab').removeClass('active-tab');
		$(target).fadeIn(300);
		$(target).addClass('active-tab');
		var windowWidth = $(window).width();
		if (windowWidth <= 700) {
			$('html, body').animate({
			   scrollTop: $('.tab-style .content-column').offset().top-100
			 }, 1000);
		}
	});
	
}

//LightBox / Fancybox
if($('.lightbox-image').length) {
	$('.lightbox-image').fancybox();
}
	
// Common CssJs
function commonCssJs () {
    $('[data-height]').each(function() {
        $(this).css('height', $(this).data("height"));
    });
    $('[data-font-size]').each(function() {
        $(this).css('font-size', $(this).data("font-size"));
    });
    $('[data-text-color]').each(function() {
        $(this).css('color', $(this).data("text-color"));
    });
	$('[data-bg-color]').each(function() {
        $(this).css("cssText", "background: " + $(this).data("bg-color") + " !important;");
    });
    $('[data-bg-img]').each(function() {
        $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
    });
    $('[data-border]').each(function() {
        $(this).css('border', $(this).data("border"));
    });
    $('[data-margin-top]').each(function() {
        $(this).css('margin-top', $(this).data("margin-top"));
    });
    $('[data-margin-right]').each(function() {
        $(this).css('margin-right', $(this).data("margin-right"));
    });
    $('[data-margin-left]').each(function() {
        $(this).css('margin-left', $(this).data("margin-left"));
    });
    $('[data-margin-bottom]').each(function() {
        $(this).css('margin-bottom', $(this).data("margin-bottom"));
    });
}

// teamCarosule
function teamCarosule () {
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    dots: false,
		    nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    autoplay: false,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        },
		        1200:{
		            items:4
		        }
		    }
		});
	}
}

// sponsorsCarosule
function sponsorsCarosule () {
	if ($('.sponsors-section .slider').length) {
		$('.sponsors-section .slider').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			autoplay: 5000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1100:{
					items:4
				}
			}
		});
	}
}

// galleryCarousel
function galleryCarousel () {
	if ($('.gallery-slider-carousel').length) {
		$('.gallery-slider-carousel').owlCarousel({
		    loop:true,
			margin:0,
		    dots: false,
		    nav: true,
	        navText: [
	            '<i class="fa fa-angle-left"></i>',
	            '<i class="fa fa-angle-right"></i>'
	        ],
			autoplayHoverPause:true,
			autoplay: 5000,
			smartSpeed: 1000,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:3
				},
				1024:{
					items:3
				},
				1100:{
					items:4
				}
		    }
		});
	}
}

// testiCarosule
function testiCarosule () {
	if ($('.testimonaials-carousel').length) {
		$('.testimonaials-carousel').owlCarousel({
		    loop: true,
		    margin: 50,
		    nav: false,
		    dots: true,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:2
		        },
		        1200:{
		            items:3
		        }
		    }
		});
	}
}

// serviceCarosule
function serviceCarosule () {
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
		    dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    autoplay: false,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        640:{
		            items:2
		        },
		        1000:{
		            items:3
		        },
		        1200:{
		            items:3
		        }
		    }
		});
	}
}

// CounterNumberChanger
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}

// contactFormValidation
function contactFormValidation () {

	if($('.contact-form').length){
		$('.contact-form').each(function () {
			
			var cfName = $(this).attr('id');

			$('#'+cfName).validate({ // initialize the plugin
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true
					},
					date: {
						required: true
					},
					category: {
						required: true
					},
					phone: {
						required: true
					},
					gender: {
						required: true
					},
					dateOfBirth: {
						required: true
					},
					subject: {
						required: true
					}
				},
				submitHandler: function (form) { 
					// sending value with ajax request
					$.post($(form).attr('action'), $(form).serialize(), function (response) {
						$(form).parent('div').append(response);
						$(form).find('input[type="text"]').val('');
						$(form).find('input[type="email"]').val('');
						$(form).find('textarea').val('');
					});
					return false;
				}
			});
		});
	}
}

// selectInput
function selectInput () {
	if ($('.select-input').length) {
		$('.select-input').selectmenu();
	};
}

// datePicker
function datePicker () {
	if ($('.date-picker').length) {
		$('.date-picker').datepicker();
	};
}

// Scroll to a Specific Div
if($('.scroll-to-target').length){
	$(".scroll-to-target").on('click', function() {
		var HeaderHeight = $('.header-lower').height();
		var target = $(this).attr('data-target');
	   // animate
	   $('html, body').animate({
		   scrollTop: $(target).offset().top - HeaderHeight
		 }, 1000);

	});
}

// gMap
function gMap () {
	if ($('.google-map').length) {
        $('.google-map').each(function () {
        	// getting options from html 
        	var mapName = $(this).attr('id');
        	var mapLat = $(this).data('map-lat');
        	var mapLng = $(this).data('map-lng');
        	var iconPath = $(this).data('icon-path');
        	var mapZoom = $(this).data('map-zoom');
        	var mapTitle = $(this).data('map-title');

        	// if zoom not defined the zoom value will be 15;
        	if (!mapZoom) {
        		var mapZoom = 15;
        	};
        	// init map
        	var map;
            map = new GMaps({
                div: '#'+mapName,
                scrollwheel: false,
                lat: mapLat,
                lng: mapLng,
                zoom: mapZoom
            });
            // if icon path setted then show marker
            if(iconPath) {
        		map.addMarker({
	            	icon: iconPath,
	                lat: mapLat,
	                lng: mapLng,
	                title: mapTitle
	            });
        	}
        });  
	};
}

// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		accrodion();
		commonCssJs();
		galleryMasonaryLayout();
		teamCarosule();
		serviceCarosule();
		sponsorsCarosule();
		galleryCarousel();
		CounterNumberChanger();
		testiCarosule();
		serviceCarosule();
		contactFormValidation();
		selectInput();
		datePicker();
		gMap();
	})(jQuery);
});

// window on load function
jQuery(window).on('load', function () {
	(function ($) {
		// add your functions
		handlePreloader();
	})(jQuery);
});

// window on scroll function
jQuery(window).on('scroll', function () {
	(function ($) {
		// add your functions
		headerStyle();
		scrollTopStyletwo();
	})(jQuery);
});