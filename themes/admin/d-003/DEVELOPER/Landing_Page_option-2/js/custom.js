(function($) {
	"use strict";

	// Global Variables/Selectors (Common to all)
	var $masonryGrid = $("#masonry-grids"),
		$featuredPost = $(".featured-post"),
		$pageContents = $(".page-contents"),
		supportTransitions = Modernizr.csstransitions;

	/** Masonry Grids Config **/
	function masonryConfig() {
		var $item = $("> li.grid-item", $masonryGrid);

		function masonryInit() {
			$masonryGrid.masonry({
				itemSelector: "li.grid-item"
			});
		}
		// Centering Full Layout Vertically
		function centeringLayout() {
			var wH = $("html").outerHeight(),
				contH = $masonryGrid.outerHeight();

			$masonryGrid.css("margin-top", Math.abs(wH/2 - contH/2));
		}
		// Re-order Layout
		function reArrange() {
			function compare(a, b) {
				return ($(a).data("cell") > $(b).data("cell")) ? 1 : -1;
			}
			$item.sort(compare).prependTo($masonryGrid.selector);
		}

		// Init Events & functions
		masonryInit();	// First Time Initialization
		$(window).on("load resize", function(e) {
			var width = $(this).width()
			reArrange();	// call reArrange Function (on every resize)
			// Custom Arrangement -- change acc. to your needs
			if(width <= 480) {
				$("[data-cell=1]").after($("[data-cell=3]"));
				$("[data-cell=8]").after($("[data-cell=5]"));
			}
			else if(width <= 1200) {
				if(width <= 991) {
					$("[data-cell=5]").after($("[data-cell=8]"));
				}
				$("[data-cell=4]").after($("[data-cell=7]"));
				$("[data-cell=6]").after($("[data-cell=5]"));
			}

			$masonryGrid.masonry("destroy");	// destroy previous initialization
			masonryInit();	// Reinitialize
			centeringLayout();	// Center the Layout Vertically
		});

	}


	/** Own Carousel Config **/
	function owlCarouselConfig() {
		var owl = $("#owl-carousel"),
			owlOpts = {
				slideSpeed: 200,
				paginationSpeed: 200,
				rewindSpeed: 800,
				singleItem: true,
				autoPlay: true,
				pagination: false, // disable default pagination
				responsive: true
			};

		owl.owlCarousel(owlOpts);
		// Custom Pagination Init
		var $pagination = $featuredPost.find(".featured-pagination"),
			$next = $pagination.find(".next"),
			$back = $pagination.find(".back");

		$next.click(function() {
			owl.trigger("owl.next");
		});
		$back.click(function() {
			owl.trigger("owl.prev");
		});


		// For Resume Timeline
		var timeline = $("#timeline-carousel"),
			timelineOpts = {
				slideSpeed: 200,
				paginationSpeed: 200,
				rewindSpeed: 800,
				// singleItem: true,
				items : 3,
				itemsDesktop: [1170, 3],
				itemsMobile: [480, 1],
				autoPlay: true,
				pagination: false, // disable default pagination
				// responsive: true
			};
		timeline.owlCarousel(timelineOpts);
		
	}

	/** Isotop Config - For portfolio page **/
	function isotopeConfig() {
		var $container = $("#filter-port"),
			$filter = $("#filter-nav");

		$(window).on("load resize", function() {
			$container.isotope({
				itemSelector: ".item",
				animationEngine: "best-available",
				transformsEnabled: true,
				resizesContainer: true,
				resizable: true,
				easing: "linear",
				layoutMode: "masonry"
			});

			$filter.find("a").on("click touchstart", function(e) {
				var $t = $(this),
					selector = $t.data("filter");
				// Don't proceed if already selected
				if($t.hasClass("filter-current"))
					return false;

				$filter.find(".filter-current").removeClass("filter-current");
				$t.parent().addClass("filter-current");
				$container.isotope({filter: selector});

				e.stopPropagation();
				e.preventDefault(); 
			});
		})
	}

	/** Popup - For portfolio page **/
	function magnificPopupConfig() {
				// For Images
		$(".image-popup").magnificPopup({
			type: "image",
			titleSrc: "title",
			key: "image-key",
			verticalFit: true,
			mainClass: "image-popup-style",	// This same class is used for video popup
			tError: '<a href="%url%">The image</a> could not be loaded.',
			gallery: {
				enabled: true
			},
			callbacks: {
				open: function() {
					this.content.addClass("fadeInLeft");
					// console.log(this.st);
				},
				close: function() {
					this.content.removeClass("fadeInLeft");
				}
			}
		});

		// For Videos
		$(".video-popup").magnificPopup({
			type: "iframe",
			titleSrc: "title",
			key: "video-key",
			mainClass: "video-popup-style",
			tError: '<a href="%url%">The Video</a> could not be loaded.',
			gallery: {
				enabled: true
			},
			fixedContentPos: false,
			callbacks: {
				open: function() {
					this.content
					.addClass("fadeInLeft")
					.append("<div class='mfp-bottom-bar'>" + 
						"<div class='mfp-title'>" + this.st.el.attr("title") + "</div></div>");
				},
				close: function() {
					this.content.removeClass("fadeInLeft");
				}
			}
		});
	}


	/** Contact Form validation **/
	function contactValidateConfig() {
		var $form = $("#contact-form"),
		successMsg = "<span class='elegant-eleganticons-44 form-success'>Your message has been sent!</span>",
		errorMsg = "<span class='elegant-eleganticons-45 form-error'>Oops! something went wrong with the server.</span>",
		response;
		$form.validate({	
			rules: {
				"cform-name": {
					required: true,
					minlength: 2
				},
				"cform-email": "required",
				"cform-message": {
					required: true,
					minlength: 5
				}
			},
			errorClass: "invalid-error",
			errorElement: "span",
			
		});

		$form.submit(function(e) {
			if($form.valid()) {
				$.ajax({
					url: $form.attr("action"),
					type: "POST",
					data: $form.serialize(),
					success: function() {
						response = successMsg;
					},
					error: function() {
						response = errorMsg;
					},
					complete: function() {
						$(".form-success, .form-error").remove();
						$form.find("#cform-submit").parent().after($(response).fadeIn(500, function() {
							$form[0].reset();
						}));
					}
				});
			}
			e.preventDefault();	// Prevent default form submit
		});
	}


	/** Parallax Config **/
	function parallaxEffect() {
		$pageContents.on("scroll", function(e) {
			var offset = $(this).scrollTop(),
				by = 4;	// edit this
			$(".parallax").each(function() {
				$(this).css("background-position", "center " + (-offset/by) + "px");
			});
			e.stopPropagation();
		});
	}


	/** Flip Menu Initialization **/
	function flipMenuInit() {
		// Initialize FlipMenu Plugin
		var fm = $(".flip-menu");
		fm.flipMenu({
			onAnimStart: function(t, b) {	// arguments -- placeholderEl, targetEl
				b.removeAttr("style data-cell");
			},
			onContentLoad: function(el) {
				setTimeout(function() {
					$pageContents.scrollTop( $(el.attr("href"))[0].offsetTop - 43.5 );
				}, 20);
				
			}
		});
	}

	/** Internal Menu Script **/
	function internalMenu() {
		var $innerNav = $(".inner-nav");


		$(".flip-menu > li a").on("click touchstart", function(e) {
			$innerNav.addClass("show-inner-nav");
		});

		// Remove menu on click
		$(".inner-nav .close-btn").on("click touchstart", function(e) {
			$innerNav.removeClass("show-inner-nav");
			// hide also menu-content
			$(".menu-content").removeClass("show-menu");
		});
	
		// Show menu on click
		$innerNav.find(".menu-btn").on("click touchstart", function(e) {
			if(e.target == this) {
				$(".menu-content").toggleClass("show-menu");
			}
			e.stopPropagation();
		});

		// Stick the menu 
		$pageContents.on("scroll", function() {
			// $innerNav.css("top", this.scrollTop + "px");
			// document.querySelector(".inner-nav").style.cssText = "top: " + this.scrollTop + "px";
		});
	   
    	
	


		// Initialize SmoothScroll Plugin
		$innerNav.find("a").smoothScroll({
			scrollElement: $pageContents,
			direction: "top",
			offset: -43,
			preventDefault: true
		});
		
	}	

	/** Initialization of all Functions Here **/
	function init() {
		masonryConfig();
		owlCarouselConfig();
		isotopeConfig();
		magnificPopupConfig() 
		contactValidateConfig()
		parallaxEffect();
		internalMenu();
		flipMenuInit()
	};
	init();




})(jQuery);