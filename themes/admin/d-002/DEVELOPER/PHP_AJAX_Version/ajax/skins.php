<?php require_once("inc/init.php"); ?>
<!-- row -->
<div class="row">
	
	<!-- col -->
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<h1 class="page-title txt-color-blueDark text-center well">
			
			<!-- PAGE HEADER -->
				SmartAdmin Pre-built Skins<br>
				<small class="text-primary">Don't like the default look of SmartAdmin? Not a problem! SmartAdmin comes with 6 prebuilt skins to choose from.</small>
		</h1>
		
	</div>
	<!-- end col -->
	
</div>
<!-- end row -->

<!--
	The ID "widget-grid" will start to initialize all widgets below 
	You do not need to use widgets if you dont want to. Simply remove 
	the <section></section> and you can use wells or panels instead 
	-->

<!-- widget grid -->
<section id="widget-grid" class="">

	<!-- row -->

	<div class="row">

		<!-- a blank row to get started -->
		<div class="col-sm-6">
			<!-- your contents here -->
			<div class="well text-center">
				<h5>
					Skin name "<strong>Glass</strong>" <br> 
					<small>Add the following class to body tag <code>.smart-style-5</code></small>
				</h5>
				<img src="img/demo/layout-skins/skin-glass.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">
			</div>
		</div>
		<div class="col-sm-6">
			<!-- your contents here -->
			<div class="well text-center">
				<h5>
					Skin name "<strong>Google</strong>" <br> 
					<small>Add the following class to body tag <code>.smart-style-3</code></small>
				</h5>
				<img src="img/demo/layout-skins/skin-google.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">
			</div>
		</div>
			
	</div>

	<div class="row">

		<!-- a blank row to get started -->
		<div class="col-sm-6">
			<!-- your contents here -->
			<div class="well text-center">
				<h5>
					Skin name "<strong>PixelSmash</strong>" <br> 
					<small>Add the following class to body tag <code>.smart-style-4</code></small>
				</h5>
				<img src="img/demo/layout-skins/skin-pixel.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">
			</div>
		</div>
		<div class="col-sm-6">
			<!-- your contents here -->
			<div class="well text-center">
				<h5>
					Skin name "<strong>Dark Elegance</strong>" <br> 
					<small>Add the following class to body tag <code>.smart-style-1</code></small>
				</h5>
				<img src="img/demo/layout-skins/skin-dark.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">
			</div>
		</div>
			
	</div>	

	<div class="row">

		<!-- a blank row to get started -->
		<div class="col-sm-6">
			<!-- your contents here -->
			<div class="well text-center">
				<h5>
					Skin name "<strong>Default</strong>" <br> 
					<small>Add the following class to body tag <code>.smart-style-0</code></small>
				</h5>
				<img src="img/demo/layout-skins/skin-default.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">
			</div>
		</div>
		<div class="col-sm-6">
			<!-- your contents here -->
			<div class="well text-center">
				<h5>
					Skin name "<strong>Ultra Light</strong>" <br> 
					<small>Add the following class to body tag <code>.smart-style-2</code></small>
				</h5>
				<img src="img/demo/layout-skins/skin-ultralight.png" class="img-responsive center-block" style="box-shadow: 0px 0px 3px 0px #919191;">
			</div>
		</div>
			
	</div>
	<!-- end row -->

</section>
<!-- end widget grid -->

<script type="text/javascript">
	
	/* DO NOT REMOVE : GLOBAL FUNCTIONS!
	 *
	 * pageSetUp(); WILL CALL THE FOLLOWING FUNCTIONS
	 *
	 * // activate tooltips
	 * $("[rel=tooltip]").tooltip();
	 *
	 * // activate popovers
	 * $("[rel=popover]").popover();
	 *
	 * // activate popovers with hover states
	 * $("[rel=popover-hover]").popover({ trigger: "hover" });
	 *
	 * // activate inline charts
	 * runAllCharts();
	 *
	 * // setup widgets
	 * setup_widgets_desktop();
	 *
	 * // run form elements
	 * runAllForms();
	 *
	 ********************************
	 *
	 * pageSetUp() is needed whenever you load a page.
	 * It initializes and checks for all basic elements of the page
	 * and makes rendering easier.
	 *
	 */

	pageSetUp();
	
	/*
	 * ALL PAGE RELATED SCRIPTS CAN GO BELOW HERE
	 * eg alert("my home function");
	 * 
	 * var pagefunction = function() {
	 *   ...
	 * }
	 * loadScript("js/plugin/_PLUGIN_NAME_.js", pagefunction);
	 * 
	 * TO LOAD A SCRIPT:
	 * var pagefunction = function (){ 
	 *  loadScript(".../plugin.js", run_after_loaded);	
	 * }
	 * 
	 * OR you can load chain scripts by doing
	 * 
	 * loadScript(".../plugin.js", function(){
	 * 	 loadScript("../plugin.js", function(){
	 * 	   ...
	 *   })
	 * });
	 */
	
	// pagefunction
	
	var pagefunction = function() {
		// clears the variable if left blank
	};
	
	// end pagefunction

	// destroy generated instances 
	// pagedestroy is called automatically before loading a new page
	// only usable in AJAX version!

	var pagedestroy = function(){
		
		/*
		Example below:

		$("#calednar").fullCalendar( 'destroy' );
		if (debugState){
			root.console.log("✔ Calendar destroyed");
		} 

		For common instances, such as Jarviswidgets, Google maps, and Datatables, are automatically destroyed through the app.js loadURL mechanic

		*/
	}

	// end destroy
	
	// run pagefunction
	pagefunction();
	
</script>
