<?php

//initilize the page
require_once("inc/init.php");

//require UI configuration (nav, ribbon, etc.)
require_once("inc/config.ui.php");

/*---------------- PHP Custom Scripts ---------

YOU CAN SET CONFIGURATION VARIABLES HERE BEFORE IT GOES TO NAV, RIBBON, ETC.
E.G. $page_title = "Custom Title" */

$page_title = "HighChartTable";

/* ---------------- END PHP Custom Scripts ------------- */

//include header
//you can add your custom css in $page_css array.
//Note: all css files are inside css/ folder
$page_css[] = "your_style.css";
include("inc/header.php");

//include left panel (navigation)
//follow the tree in inc/config.ui.php
$page_nav["graphs"]["sub"]["highchart"]["active"] = true;
include("inc/nav.php");

?>
<!-- ==========================CONTENT STARTS HERE ========================== -->
<!-- MAIN PANEL -->
<div id="main" role="main">
	<?php
		//configure ribbon (breadcrumbs) array("name"=>"url"), leave url empty if no url
		//$breadcrumbs["New Crumb"] => "http://url.com"
		$breadcrumbs["Graphs"] = "";
		include("inc/ribbon.php");
	?>

	<!-- MAIN CONTENT -->
	<div id="content">

		<!-- Bread crumb is created dynamically -->
		<!-- row -->
		<div class="row">
			
			<!-- col -->
			<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
				<h1 class="page-title txt-color-blueDark">
					
					<!-- PAGE HEADER -->
					<i class="fa-fw fa fa-home"></i> 
						Graphs 
					<span>>  
						Highchart Table
					</span>
				</h1>
			</div>
			<!-- end col -->
			
			<!-- right side of the page with the sparkline graphs -->
			<!-- col -->
			<div class="col-xs-12 col-sm-5 col-md-5 col-lg-8">
				<!-- sparks -->
				<ul id="sparks">
					<li class="sparks-info">
						<h5> My Income <span class="txt-color-blue">$47,171</span></h5>
						<div class="sparkline txt-color-blue hidden-mobile hidden-md hidden-sm">
							1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471
						</div>
					</li>
					<li class="sparks-info">
						<h5> Site Traffic <span class="txt-color-purple"><i class="fa fa-arrow-circle-up" data-rel="bootstrap-tooltip" title="Increased"></i>&nbsp;45%</span></h5>
						<div class="sparkline txt-color-purple hidden-mobile hidden-md hidden-sm">
							110,150,300,130,400,240,220,310,220,300, 270, 210
						</div>
					</li>
					<li class="sparks-info">
						<h5> Site Orders <span class="txt-color-greenDark"><i class="fa fa-shopping-cart"></i>&nbsp;2447</span></h5>
						<div class="sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm">
							110,150,300,130,400,240,220,310,220,300, 270, 210
						</div>
					</li>
				</ul>
				<!-- end sparks -->
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

				<div class="col-sm-12"> 
					
					<div class="alert alert-info">
									
							
						
							<h3 class="no-margin">jQuery HighchartTable</h3>
						    <h5>Convert your HTML data tables into fancy Highcharts graphs without any coding!</h5>
							<ul>
								<li>The HighchartTable plugin takes data and attributes from a table and parses them to simply create an Hightcharts chart</li>
								<li>Control the graph dynamically and easily without any javascript</li>
								<li>Builds automatically during page load, all you need to do is load the plugin</li>
								<li>See the full documentation <a href="http://highcharttable.org/#documentation" target="_blank"><strong>here <i class="fa fa-link"></i> </strong> </a></li>
							</ul>
						
							
					
					</div>

					<div class="col-sm-12 well"> 
						<div class="col-sm-6">
							<table class="highchart table table-hover table-bordered" data-graph-container=".. .. .highchart-container2" data-graph-type="column">
				              <caption>Column example</caption>
				              <thead>
				                <tr>
				                  <th>Month</th>
				                  <th class="">Sales</th>
				                  <th class="">Benefits</th>
				                  <th class="">Expenses</th>
				                  <th class="">Prediction</th>
				                </tr>
				              </thead>
				              <tbody>
				                <tr>
				                  <td>January</td>
				                  <td class="">8000</td>
				                  <td class="">2000</td>
				                  <td class="">1000</td>
				                  <td class="">9000</td>
				                </tr>
				                <tr>
				                  <td>February</td>
				                  <td class="">12000</td>
				                  <td class="">3000</td>
				                  <td class="">1300</td>
				                  <td class="">10000</td>
				                </tr>
				                <tr>
				                  <td>March</td>
				                  <td class="">18000</td>
				                  <td class="">4000</td>
				                  <td class="">1240</td>
				                  <td class="">11000</td>
				                </tr>
				                <tr>
				                  <td>April</td>
				                  <td class="">2000</td>
				                  <td class="">-1000</td>
				                  <td class="">-150</td>
				                  <td class="">13000</td>
				                </tr>
				                <tr>
				                  <td>May</td>
				                  <td class="">500</td>
				                  <td class="">-2500</td>
				                  <td class="">1000</td>
				                  <td class="">14000</td>
				                </tr>
				                <tr>
				                  <td>June</td>
				                  <td class="">600</td>
				                  <td class="">-500</td>
				                  <td class="">-500</td>
				                  <td class="">15000</td>
				                </tr>
				              </tbody>
				            </table>
						</div>
						<div class="col-sm-6">
							<div class="highchart-container2"></div>
						</div>
					</div>
					
					<div class="col-sm-12 well"> 
						<div class="col-sm-6">
							<table class="highchart table table-hover table-bordered" data-graph-container=".. .. .highchart-container" data-graph-type="line">
				              <caption>Line example</caption>
				              <thead>
				                <tr>
				                  <th>Month</th>
				                  <th>Sales</th>
				                  <th>Benefits</th>
				                </tr>
				              </thead>
				              <tbody>
				                <tr>
				                  <td>January</td>
				                  <td>8000</td>
				                  <td>2000</td>
				                </tr>
				                <tr>
				                  <td>February</td>
				                  <td>12000</td>
				                  <td>3000</td>
				                </tr>
				                <tr>
				                  <td>March</td>
				                  <td>18000</td>
				                  <td>4000</td>
				                </tr>
				                <tr>
				                  <td>April</td>
				                  <td>2000</td>
				                  <td>-1000</td>
				                </tr>
				                <tr>
				                  <td>May</td>
				                  <td>500</td>
				                  <td>-2500</td>
				                </tr>
				              </tbody>
				            </table>
						</div>
						<div class="col-sm-6">
							<div class="highchart-container"></div>
						</div>
					</div>

					<div class="col-sm-12 well"> 
						<div class="col-sm-6">
							<table class="highchart table table-hover table-bordered" data-graph-container=".. .. .highchart-container3" data-graph-type="column">
				              <caption>Column + area example</caption>
				              <thead>
				                <tr>
				                  <th>Month</th>
				                  <th>Sales</th>
				                  <th data-graph-type="area">Benefits</th>
				                </tr>
				              </thead>
				              <tbody>
				                <tr>
				                  <td>January</td>
				                  <td>8000</td>
				                  <td>2000</td>
				                </tr>
				                <tr>
				                  <td>February</td>
				                  <td>12000</td>
				                  <td>3000</td>
				                </tr>
				                <tr>
				                  <td>March</td>
				                  <td>18000</td>
				                  <td>4000</td>
				                </tr>
				                <tr>
				                  <td>April</td>
				                  <td>2000</td>
				                  <td>-1000</td>
				                </tr>
				                <tr>
				                  <td>May</td>
				                  <td>500</td>
				                  <td>-2500</td>
				                </tr>
				              </tbody>
				            </table>
						</div>
						<div class="col-sm-6 ">
							<div class="highchart-container3"></div>
						</div>
					</div>

				</div>
				
				<!-- end row -->

			</div>

			<!-- end row -->

		</section>
		<!-- end widget grid -->

	</div>
	<!-- END MAIN CONTENT -->

</div>
<!-- END MAIN PANEL -->
<!-- ==========================CONTENT ENDS HERE ========================== -->

<!-- PAGE FOOTER -->
<?php
	// include page footer
	include("inc/footer.php");
?>
<!-- END PAGE FOOTER -->

<?php 
	//include required scripts
	include("inc/scripts.php"); 
?>

<!-- PAGE RELATED PLUGIN(S) 
<script src="<?php echo ASSETS_URL; ?>/js/plugin/YOURJS.js"></script>-->
<script src="<?php echo ASSETS_URL; ?>/js/plugin/highChartCore/highcharts-custom.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/highchartTable/jquery.highchartTable.min.js"></script>

<script>

	$(document).ready(function() {
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
		 * OR
		 * 
		 * loadScript(".../plugin.js", run_after_loaded);
		 */
		
		$('table.highchart').highchartTable();
	})

</script>

<?php 
	//include footer
	include("inc/google-analytics.php"); 
?>