/** Skills Plugin - can be used as a plugin **/
	// Requires snap.svg.js 
	// Reference by http://tympanus.net/codrops/2011/04/22/animated-skills-diagram/
	;(function($) {
		"use strict";
			// Create the defaults once
			// Customize the option, 
			var pluginName = "skillChart",
				defaults = {
					width: "auto", // set either there or in css stylesheet
					height: "auto",    
					easing: "bounce",
					random: true,   // if random true, then startAngle is disabled
					duration: 300,
					strokeWidth: 18,
					spacing: 20,
					startAngle: 90,
					selector: "> span",
					circleRadius: 70, // circleRadius
					circleColor: "#fff",
					circleStrokeWidth: "none",
					circleStrokeColor: "none",
					textFont: "PT Sans, sans-serif", 
					textColor: "#6f6f6f",
					textWeight: "normal",   // normal, bold
					textDefault: "SKILLS",
					textSize: 14,
					strokeHoverColor: ["#e96a32", "#e95432", "#ef4b41", "#e93b32"],  // array of colors or single string color
					strokeHoverWidth: 22,
						updateOnResize: true
				};

			// The actual plugin constructor
			function Plugin(element, options) {
					this.elem = element;
					this.opts = $.extend({}, defaults, options);

					this._defaults = defaults;
					this._name = pluginName;
					this._snap = "";
					this._timeout = undefined;
					this.init();
	                this._update(this.elem, this.opts);
			}
			Plugin.prototype = {

				init: function() {
					this.opts.width = this.opts.width == "auto" ? $(this.elem).width() : this.opts.width;
						this.opts.height = this.opts.height == "auto" ? $(this.elem).height() : this.opts.height;
					this._snap = Snap(this.opts.width, this.opts.height).appendTo(this.elem);
					this._drawCircle(this.opts);
					this._drawArc(this.elem, this.opts);
				},
			 
				_update: function(elem, opts) {
					var $t = this,
							$elem = $(elem);
					if(opts.updateOnResize) {
						$(window).smartresize(function() {
							$("svg", $elem).remove();
							// width/height necessary here because, its value doesn't have "auto" anymore here
							opts.width = $elem.width();
							opts.height = $elem.height();
							$t.init();
						});
					}
				},

				_rand: function(l, u) {
					return Math.floor(Math.random()*(u-l+1)+l);
				},

				_calcPath: function(percent, rad, start) {
			var v = percent == 100 ? 359.99 : 3.6*percent,
				a1 = (this.opts.random ? this._rand(91, 240) : start)*Math.PI/180,
				a2 = a1 - v*Math.PI/180,
				sx = this.opts.width/2 + rad * Math.cos(a1),
				sy = this.opts.height/2 - rad * Math.sin(a1),
				x = this.opts.width/2 + rad * Math.cos(a2),
				y = this.opts.height/2 - rad * Math.sin(a2),
				path = [["M", sx, sy], ["A", rad, rad, 0, +(v > 180), 1, x, y]];
			return path;
				},

				_drawArc: function(elem, opts) {
					var self = this,
						$elem = $(elem),
						// Settings for Text in middle
						text = self._snap.text(opts.width/2, opts.height/2, "").attr({
							text: opts.textDefault,
						font: opts.textSize + "px " + opts.textFont,
						fill: opts.textColor,
						"text-anchor": "middle",
						"letter-spacing": 1,
												"font-weight": opts.textWeight
						}),
						percentText = self._snap.text(opts.width/2, opts.height/2 + 10, "").attr({
							font: (opts.textSize - 2) + "px " + opts.textFont,
							fill: opts.textColor,
							"text-anchor": "middle",
							"font-weight": opts.textWeight
						});


					$elem.find(this.opts.selector).each(function(i) {
						var $t = $(this),
							thisOpts = $t.data();	// percent, color
					var dr = opts.circleRadius + opts.spacing*i,
						path = self._calcPath(thisOpts.percent, dr, opts.startAngle),
						strokeWidth =  opts.strokeWidth,
										shc = opts.strokeHoverColor;

					self._snap.path().attr({
						path: path,
						fill: "none",
						"stroke-width": strokeWidth,
						"stroke": thisOpts.skillsColor
								// On MouseOver
					}).mouseover(function() {
						this.animate({
							"stroke-width": opts.strokeHoverWidth,
							"stroke": typeof(shc) == "string" ? shc : shc[i]
						}, opts.duration, mina[opts.easing], function() {
							text.attr({
								text: $t.text(),
								
							});
							percentText.attr({
								text: $t.data().percent + "%",
								transform: "translate(0, 10)"
							});
						});
									 
						// On MouseOut, restore it
					}).mouseout(function() {
					this.animate({
							"stroke-width": strokeWidth,
							"stroke": thisOpts.skillsColor
						}, opts.duration, mina[opts.easing], function() {
							text.attr({
								text: opts.textDefault,
							});
							percentText.attr({
								text: ""
							});
						});
					});
					$t.hide(); 	// hide the html
					});

				},

				_drawCircle : function(opts) {
				// Draw middle Circle 
				this._snap.circle(opts.width/2, opts.height/2, opts.circleRadius - opts.spacing + 10).attr({
					fill: opts.circleColor,
					"stroke-width": opts.circleStrokeWidth,
					"stroke": opts.circleStrokeColor
				});
				},

		};


		$.fn[pluginName] = function (options) {
				return this.each(function() {
						if (!$.data(this, "plugin_" + pluginName)) {
								$.data(this, "plugin_" + pluginName, new Plugin(this, options));
						}
				});
		};

	})(jQuery);

	// Initialization of script 
	$(window).on('load', function() {
		$("#circular-skills").skillChart();
	});