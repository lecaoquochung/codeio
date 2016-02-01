		<!--================================================== -->

		<!-- PACE LOADER - turn this on if you want ajax loading to show (caution: uses lots of memory on iDevices)
		<script data-pace-options='{ "restartOnRequestAfter": true }' src="<?php echo ASSETS_URL; ?>/js/plugin/pace/pace.min.js"></script>-->

		<!-- Link to Google CDN's jQuery + jQueryUI; fall back to local -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script>
			if (!window.jQuery) {
				document.write('<script src="<?php echo ASSETS_URL; ?>/js/libs/jquery-2.1.1.min.js"><\/script>');
			}
		</script>

		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
		<script>
			if (!window.jQuery.ui) {
				document.write('<script src="<?php echo ASSETS_URL; ?>/js/libs/jquery-ui-1.10.3.min.js"><\/script>');
			}
		</script>

		<!-- IMPORTANT: APP CONFIG -->
		<script src="js/app.config.seed.js"></script>

		<!-- BOOTSTRAP JS -->
		<script src="<?php echo ASSETS_URL; ?>/js/bootstrap/bootstrap.min.js"></script>

		<!--[if IE 8]>

			<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>

		<![endif]-->

		<!-- MAIN APP JS FILE -->
		<script src="<?php echo ASSETS_URL; ?>/js/app.seed.js"></script>		

		<script>
			$.fn.removeClassPrefix = function (prefix) {

		        this.each(function (i, it) {
		            var classes = it.className.split(" ")
		                .map(function (item) {
		                    return item.indexOf(prefix) === 0 ? "" : item;
		                });
		            //it.className = classes.join(" ");
		            it.className = $.trim(classes.join(" "));

		        });

		        return this;
		    };
		</script>
