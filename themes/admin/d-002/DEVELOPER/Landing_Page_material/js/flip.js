/** Flip Menu 
---------------**/

(function($) {
	"use script";

	var pluginName = "flipMenu",
		defaults = {
			targetEl: "li",
			clickedEl: "a",
			styleClass: "flipMenu",
			dataAttr: "[data-flip-menu]",
			duration: 450,	// Keep it same as transition timing 
			// Only for animation supported browser
			onAnimStart: function() {},	// arguments -- placeholderEl, targetEl
			onAnimEnd: function() {},	// arguments -- placeholderEl, targetEl,
			onContentLoad: function() {}	// arguments -- clickedEl
		},
		$pageContents = $(".page-contents"),
		$innerPages = $(".inner-pages"),
		$pageClose = $(".inner-nav .close-btn"),
		animationEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'MozAnimation' : 'animationend',
			'animation' : 'animationend'
		},
		// There's a bug in safari, so I fallback to simple.
		isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
		animationEnd = animationEndEventNames[Modernizr.prefixed('animation')],
		supportAnimations = Modernizr.cssanimations;

	function Plugin(elem, opts) {
		this.elem = elem;
		this.opts = $.extend({}, defaults, opts);

		this._defaults = defaults;
		this._name = pluginName;
		this._init();
	}

	Plugin.prototype = {
		_init: function() {
			this._isAnimating = false;
			this._newEl = null;
			this._innerEl = null;	// actual target child
			this._pageOffset = {x: 0, y: 0};
			this._initEvents(this.opts);
		},

		_initEvents: function(opts) {
			var $el = $(this.elem),
				$clicker = $(opts.clickedEl + opts.dataAttr, $el),
				self = this,
				isPlaceholderLoaded = false;

			$clicker.on("click touchstart", function(e) {
				var $t = $(this);
				// Check if cloned content is loaded
				if(!isPlaceholderLoaded) {
					self._loadPlaceholder(self.opts, $t);
					self._loadContent(self.opts, $t);
					isPlaceholderLoaded = true;
				}
				

				// Remove on click close-btn
				$pageClose.on("click touchstart", function(e) {
					if(e.target == this) {
						self._unloadPlaceholder(self.opts);
						self._unloadContent(self.opts, $t);
						isPlaceholderLoaded = false;
					}
				});

				e.preventDefault();
				e.stopPropagation();

			});


			// Prevent Scrolling when animating
			$(window).on("scroll", function() {
				if(self._isAnimating) 
					window.scrollTo(self._pageOffset.x, self._pageOffset.y);
			});

		},

		_loadPlaceholder: function(opts, clickedEl) {
			var self = this, $el = $(self.elem),
				node = "<" + $el.get(0).nodeName + ">",
				placeholderOffset = clickedEl.offset(),
				$clickedParent = clickedEl.parents(opts.targetEl).eq(0);
			
			// Callback Function (onContentLoad) -- Load here
			opts.onContentLoad(clickedEl);
			// If Supported, then do this else simply show the content.
			if(supportAnimations && !isSafari) {
				self._newEl = $(node, {
					attr: {"class": $el.attr("class")},
					prependTo: "body",
					addClass: opts.styleClass
				});

				// Now find parent of clickedElement by _initEvents and clone it
				// Remove the style attribute also linked by other plugins
				self._innerEl = $clickedParent.clone(true);

				self._newEl.prepend(self._innerEl);		// Attach innerEl

				// Set Custom CSS
				self._newEl.css({
					width: clickedEl.width(),
					height: clickedEl.height(),
					top: placeholderOffset.top,
					left: placeholderOffset.left
				});

				self._isAnimating = true;
				self._pageOffset = {x: window.pageXOffset, y: window.pageYOffset};

				// Callback Function 
				opts.onAnimStart(self._newEl, self._innerEl);
				$("body").addClass("noscroll");	// remove body scroll while animating

				setTimeout(function() {	// firefox bug (neccessary setTimeout)
					$el.addClass("scaleGridBoxes");
				}, 20);
					// Scale down original element
				// Define Keyframes here (name is same as defined in flipOutY class)
				// Can also use transition, but transition effect is not same as this.
				setTimeout(function() {
					self._newEl.addClass("flipOutY");
				}, 0);
				$.keyframe.define([{
					name: 'flipOutY',
				      '0%': {
				       	'transform': 'perspective(5000px) rotateY(0deg)'
				      },
				      '5%': {
				        'transform': 'perspective(5000px) rotateY(25deg)'
				      },
				      '20%': {
				        'transform': 'perspective(5000px) rotateY(60deg)'
				      },
				      '100%': {
				        'transform': 'perspective(5000px) rotateY(179.9deg)',
				        'width': "100%", 'height': '100%',
				        'top': self._pageOffset.y + 'px',
				        'left': self._pageOffset.x + 'px'
				        // 'top': 0,
				        // 'left': 0
				      },
				}]);


				// Hide original clicked grid (don't use display: none)
				$clickedParent.css("visibility", "hidden");
			} 

			else {
				// do for IE9
				$pageContents.css("-webkit-transition", "0").addClass('page-show');
				$innerPages.css("-webkit-transition", "0").addClass("show-inner-pages");
				$("body, html").scrollTop(0);
			}

		}, // End Placeholder

		_unloadPlaceholder: function(opts) {
			// remove content
			if(supportAnimations && !isSafari) 
				this._newEl.remove();
		},

		_loadContent: function(opts, clickedEl) {
			var self = this;
			if(supportAnimations && !isSafari) {
				self._newEl.on(animationEnd, function(e) {
					self._isAnimating = false;
					if(e.target == this) {
						setTimeout(function() {	// FF problem
							$pageContents.addClass("page-show").on("transitionend webkitTransitionEnd", function(e) {
								$("body, html").scrollTop(0);	// adjust body scrollbar
								$innerPages.addClass('show-inner-pages');
								$(this).off("transitionend webkitTransitionEnd");
								e.stopPropagation();
							});
						}, 20);	
						// Callback Function
					
						opts.onAnimEnd(self._newEl, self._innerEl);	
					}
				});
			}

			
		},
		_unloadContent: function(opts, clickedEl) {
			var $el = $(this.elem);
			setTimeout(function() {	// setTimeout for firefox
				$el.removeClass("scaleGridBoxes");
				$pageContents.removeClass("page-show");
			}, 17);
			clickedEl.parents(opts.targetEl).eq(0).css("visibility", "visible");
			$("body").removeClass("noscroll");
			$innerPages.removeClass('show-inner-pages');
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function() {
				if (!$.data(this, "plugin_" + pluginName)) {
						$.data(this, "plugin_" + pluginName, new Plugin(this, options));
				}
		});
	};

})(jQuery);



