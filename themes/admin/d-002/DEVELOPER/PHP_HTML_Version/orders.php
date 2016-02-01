<?php

//initilize the page
require_once("inc/init.php");

//require UI configuration (nav, ribbon, etc.)
require_once("inc/config.ui.php");

/*---------------- PHP Custom Scripts ---------

YOU CAN SET CONFIGURATION VARIABLES HERE BEFORE IT GOES TO NAV, RIBBON, ETC.
E.G. $page_title = "Custom Title" */

$page_title = "Orders";

/* ---------------- END PHP Custom Scripts ------------- */

//include header
//you can add your custom css in $page_css array.
//Note: all css files are inside css/ folder
$page_css[] = "your_style.css";
include("inc/header.php");

//include left panel (navigation)
//follow the tree in inc/config.ui.php
$page_nav["ecommerce"]["sub"]["orders"]["active"] = true;
include("inc/nav.php");

?>
<!-- ==========================CONTENT STARTS HERE ========================== -->
<!-- MAIN PANEL -->
<div id="main" role="main">
	<?php
		//configure ribbon (breadcrumbs) array("name"=>"url"), leave url empty if no url
		//$breadcrumbs["New Crumb"] => "http://url.com"
		$breadcrumbs["E-commerce"] = "";
		include("inc/ribbon.php");
	?>

	<!-- MAIN CONTENT -->
	<div id="content">

		<!-- row -->
		<div class="row">
			
			<!-- col -->
			<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
				<h1 class="page-title txt-color-blueDark">
					
					<!-- PAGE HEADER -->
					<i class="fa-fw fa fa-home"></i> 
						Page Header 
					<span>>  
						Subtitle
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
				
				<!-- NEW WIDGET START -->
				<article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					
					<!-- Widget ID (each widget will need unique ID)-->
					<div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-1" data-widget-editbutton="false">
						<!-- widget options:
						usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">

						data-widget-colorbutton="false"
						data-widget-editbutton="false"
						data-widget-togglebutton="false"
						data-widget-deletebutton="false"
						data-widget-fullscreenbutton="false"
						data-widget-custombutton="false"
						data-widget-collapsed="true"
						data-widget-sortable="false"

						-->
						<header>
							<span class="widget-icon"> <i class="fa fa-table"></i> </span>
							<h2>Column Filters </h2>

						</header>

						<!-- widget div-->
						<div>

							<!-- widget edit box -->
							<div class="jarviswidget-editbox">
								<!-- This area used as dropdown edit box -->

							</div>
							<!-- end widget edit box -->

							<!-- widget content -->
							<div class="widget-body no-padding">

								<table id="datatable_fixed_column" class="table table-striped table-bordered" width="100%">
			
							        <thead>
										<tr>
											<th class="hasinput" style="width:10%">
												<input type="text" class="form-control" placeholder="Find ID" />
											</th>
											<th class="hasinput" style="width:12%">
												<input type="text" class="form-control" placeholder="Filter Cust ID" />
											</th>
											<th class="hasinput icon-addon">
												<input id="dateselect_filter" type="text" placeholder="Purchase Date" class="form-control datepicker" data-dateformat="yy/mm/dd">
												<label for="dateselect_filter" class="glyphicon glyphicon-calendar no-margin padding-top-15" rel="tooltip" title="" data-original-title="Purchase Date"></label>
											</th>
											<th class="hasinput">
												<input type="text" class="form-control" placeholder="Delivery Date" />
											</th>
											<th class="hasinput" style="width:12%">
												<input type="text" class="form-control" placeholder="Base Price Filter" />
											</th>
											<th class="hasinput" style="width:10%">
												<input type="text" class="form-control" placeholder="ZipCode Filter" />
											</th>
											<th class="hasinput" style="width:10%">
												<input type="text" class="form-control" placeholder="Status Filter" />
											</th>

										</tr>
							            <tr>
						                    <th data-class="expand">Order ID</th>
						                    <th >Cust ID / Phn</th>
						                    <th data-hide="phone, tablet">Purchase</th>
						                    <th data-hide="phone, tablet">Delivery</th>
						                    <th data-hide="phone,tablet">Base Price</th>
						                    <th data-hide="phone,tablet">Postal/Zip</th>
						                    <th>Status</th>
							            </tr>
							        </thead>

									<tbody>
									<tr>
										<td>100</td>
										<td>418-109-1913</td>
										<td>2015/04/19</td>
										<td>2015/01/08</td>
										<td>$94.56</td>
										<td>31195</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>101</td>
										<td>990-667-7807</td>
										<td>2015/03/06</td>
										<td>2015/10/04</td>
										<td>$27.86</td>
										<td>5246TN</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>102</td>
										<td>311-911-1205</td>
										<td>2015/07/29</td>
										<td>2016/12/15</td>
										<td>$4.56</td>
										<td>65221</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>103</td>
										<td>385-793-5538</td>
										<td>2015/04/01</td>
										<td>2015/02/18</td>
										<td>$3.16</td>
										<td>2833</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>104</td>
										<td>210-743-6103</td>
										<td>2016/12/09</td>
										<td>2016/08/19</td>
										<td>$18.25</td>
										<td>135431</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>105</td>
										<td>231-914-0557</td>
										<td>2016/07/17</td>
										<td>2015/01/29</td>
										<td>$41.59</td>
										<td>5052</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>106</td>
										<td>664-358-7649</td>
										<td>2015/10/30</td>
										<td>2015/07/12</td>
										<td>$51.16</td>
										<td>3517</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>107</td>
										<td>564-170-5735</td>
										<td>2015/06/10</td>
										<td>2015/11/13</td>
										<td>$76.05</td>
										<td>11800</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>108</td>
										<td>262-460-2718</td>
										<td>2015/02/10</td>
										<td>2015/07/22</td>
										<td>$81.92</td>
										<td>43311</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>109</td>
										<td>481-983-9286</td>
										<td>2015/09/20</td>
										<td>2015/03/06</td>
										<td>$89.37</td>
										<td>7837LT</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>110</td>
										<td>470-303-8995</td>
										<td>2015/10/02</td>
										<td>2016/05/11</td>
										<td>$99.12</td>
										<td>1116</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>111</td>
										<td>323-939-3058</td>
										<td>2016/06/02</td>
										<td>2016/04/08</td>
										<td>$17.96</td>
										<td>15556</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>112</td>
										<td>286-647-0112</td>
										<td>2015/04/19</td>
										<td>2016/02/13</td>
										<td>$33.57</td>
										<td>YT1I 1DK</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>113</td>
										<td>243-397-4446</td>
										<td>2016/07/26</td>
										<td>2016/08/17</td>
										<td>$75.48</td>
										<td>50669</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>114</td>
										<td>282-860-9800</td>
										<td>2015/05/09</td>
										<td>2016/01/02</td>
										<td>$10.69</td>
										<td>68-645</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>115</td>
										<td>780-291-7845</td>
										<td>2016/07/24</td>
										<td>2015/10/13</td>
										<td>$9.94</td>
										<td>83219</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>116</td>
										<td>247-117-2405</td>
										<td>2016/01/16</td>
										<td>2016/11/07</td>
										<td>$30.15</td>
										<td>55025</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>117</td>
										<td>472-566-1814</td>
										<td>2015/06/27</td>
										<td>2015/02/18</td>
										<td>$36.05</td>
										<td>9384</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>118</td>
										<td>442-363-9434</td>
										<td>2015/02/08</td>
										<td>2015/12/26</td>
										<td>$5.35</td>
										<td>C2W 1N4</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>119</td>
										<td>704-691-6511</td>
										<td>2016/11/11</td>
										<td>2015/10/13</td>
										<td>$47.87</td>
										<td>39524</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>120</td>
										<td>952-622-8377</td>
										<td>2016/02/14</td>
										<td>2016/03/25</td>
										<td>$9.76</td>
										<td>6074</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>121</td>
										<td>114-905-2603</td>
										<td>2015/08/03</td>
										<td>2016/08/08</td>
										<td>$94.36</td>
										<td>77494</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>122</td>
										<td>787-698-1395</td>
										<td>2016/09/09</td>
										<td>2016/08/24</td>
										<td>$72.68</td>
										<td>636093</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>123</td>
										<td>267-616-1347</td>
										<td>2016/06/27</td>
										<td>2016/12/08</td>
										<td>$47.26</td>
										<td>77-155</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>124</td>
										<td>591-548-3838</td>
										<td>2015/12/04</td>
										<td>2016/04/20</td>
										<td>$31.49</td>
										<td>BT12 5IZ</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>125</td>
										<td>637-921-0686</td>
										<td>2016/03/12</td>
										<td>2015/10/10</td>
										<td>$79.40</td>
										<td>J2E 1P5</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>126</td>
										<td>856-370-0372</td>
										<td>2017/01/01</td>
										<td>2015/05/09</td>
										<td>$90.81</td>
										<td>247783</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>127</td>
										<td>952-276-8536</td>
										<td>2015/12/22</td>
										<td>2016/06/25</td>
										<td>$73.66</td>
										<td>067493</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>128</td>
										<td>530-586-5762</td>
										<td>2015/01/17</td>
										<td>2016/01/15</td>
										<td>$48.62</td>
										<td>0452</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>129</td>
										<td>409-490-1203</td>
										<td>2015/01/10</td>
										<td>2016/09/26</td>
										<td>$42.07</td>
										<td>43393</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>130</td>
										<td>610-524-9521</td>
										<td>2015/01/04</td>
										<td>2015/07/29</td>
										<td>$10.20</td>
										<td>58669</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>131</td>
										<td>216-257-8260</td>
										<td>2015/06/13</td>
										<td>2016/04/26</td>
										<td>$96.76</td>
										<td>63584</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>132</td>
										<td>105-480-3572</td>
										<td>2016/12/29</td>
										<td>2015/06/13</td>
										<td>$14.09</td>
										<td>60276</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>133</td>
										<td>348-497-3366</td>
										<td>2015/05/29</td>
										<td>2015/01/07</td>
										<td>$89.05</td>
										<td>55821</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>134</td>
										<td>115-921-4161</td>
										<td>2016/11/23</td>
										<td>2016/12/02</td>
										<td>$20.40</td>
										<td>15894</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>135</td>
										<td>395-408-1093</td>
										<td>2015/05/19</td>
										<td>2015/08/11</td>
										<td>$83.94</td>
										<td>81192</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>136</td>
										<td>135-526-6879</td>
										<td>2016/05/29</td>
										<td>2015/08/14</td>
										<td>$93.48</td>
										<td>837474</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>137</td>
										<td>959-685-6738</td>
										<td>2015/05/16</td>
										<td>2016/03/09</td>
										<td>$50.79</td>
										<td>7068JV</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>138</td>
										<td>794-978-5321</td>
										<td>2015/12/12</td>
										<td>2015/04/05</td>
										<td>$10.93</td>
										<td>4915</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>139</td>
										<td>882-702-0411</td>
										<td>2015/03/13</td>
										<td>2015/01/31</td>
										<td>$44.66</td>
										<td>28290</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>140</td>
										<td>759-384-9249</td>
										<td>2015/06/11</td>
										<td>2016/03/26</td>
										<td>$58.39</td>
										<td>8827</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>141</td>
										<td>587-835-4561</td>
										<td>2015/09/26</td>
										<td>2015/07/17</td>
										<td>$98.55</td>
										<td>74827</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>142</td>
										<td>725-403-0101</td>
										<td>2016/06/12</td>
										<td>2015/05/19</td>
										<td>$95.88</td>
										<td>1261</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>143</td>
										<td>992-541-1831</td>
										<td>2016/04/16</td>
										<td>2016/09/27</td>
										<td>$66.71</td>
										<td>63751</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>144</td>
										<td>728-297-7349</td>
										<td>2015/05/09</td>
										<td>2015/12/24</td>
										<td>$81.29</td>
										<td>926921</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>145</td>
										<td>947-567-1316</td>
										<td>2016/08/02</td>
										<td>2016/10/20</td>
										<td>$15.45</td>
										<td>9317</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>146</td>
										<td>768-878-0538</td>
										<td>2015/04/15</td>
										<td>2016/11/12</td>
										<td>$2.39</td>
										<td>34279</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>147</td>
										<td>215-558-4200</td>
										<td>2015/02/28</td>
										<td>2015/07/30</td>
										<td>$6.14</td>
										<td>19352</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>148</td>
										<td>261-382-8720</td>
										<td>2015/06/05</td>
										<td>2016/11/26</td>
										<td>$67.41</td>
										<td>FE9 7MH</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>149</td>
										<td>640-907-0882</td>
										<td>2016/09/18</td>
										<td>2015/04/19</td>
										<td>$88.69</td>
										<td>2921</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>150</td>
										<td>218-107-6882</td>
										<td>2015/05/03</td>
										<td>2016/10/13</td>
										<td>$85.89</td>
										<td>70231</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>151</td>
										<td>659-367-0922</td>
										<td>2015/04/25</td>
										<td>2016/06/18</td>
										<td>$98.37</td>
										<td>7461</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>152</td>
										<td>430-679-9159</td>
										<td>2016/07/06</td>
										<td>2016/07/12</td>
										<td>$50.50</td>
										<td>67979</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>153</td>
										<td>886-963-9314</td>
										<td>2015/01/18</td>
										<td>2015/09/12</td>
										<td>$6.39</td>
										<td>05638-710</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>154</td>
										<td>125-692-0482</td>
										<td>2015/08/08</td>
										<td>2015/12/24</td>
										<td>$23.82</td>
										<td>16072</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>155</td>
										<td>751-349-1880</td>
										<td>2015/03/03</td>
										<td>2016/05/08</td>
										<td>$52.61</td>
										<td>13147</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>156</td>
										<td>777-282-1331</td>
										<td>2015/12/26</td>
										<td>2015/06/29</td>
										<td>$1.56</td>
										<td>61612</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>157</td>
										<td>585-902-6191</td>
										<td>2015/12/29</td>
										<td>2016/11/21</td>
										<td>$93.53</td>
										<td>80223</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>158</td>
										<td>193-981-5430</td>
										<td>2015/09/29</td>
										<td>2016/01/30</td>
										<td>$95.51</td>
										<td>56858</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>159</td>
										<td>992-785-4941</td>
										<td>2016/03/22</td>
										<td>2015/04/05</td>
										<td>$27.99</td>
										<td>3576</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>160</td>
										<td>386-859-7614</td>
										<td>2015/01/15</td>
										<td>2015/02/07</td>
										<td>$44.78</td>
										<td>N0U 9WV</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>161</td>
										<td>101-274-3614</td>
										<td>2016/11/13</td>
										<td>2016/01/24</td>
										<td>$3.95</td>
										<td>59174</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>162</td>
										<td>787-544-3871</td>
										<td>2015/12/04</td>
										<td>2016/01/09</td>
										<td>$27.84</td>
										<td>B1M 1R4</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>163</td>
										<td>942-862-7191</td>
										<td>2015/04/03</td>
										<td>2016/03/23</td>
										<td>$26.65</td>
										<td>294109</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>164</td>
										<td>594-593-6286</td>
										<td>2016/01/02</td>
										<td>2015/06/19</td>
										<td>$58.71</td>
										<td>B0S 1G8</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>165</td>
										<td>143-432-4840</td>
										<td>2015/02/03</td>
										<td>2015/07/17</td>
										<td>$0.84</td>
										<td>552935</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>166</td>
										<td>497-509-3981</td>
										<td>2016/01/21</td>
										<td>2015/07/07</td>
										<td>$84.93</td>
										<td>973574</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>167</td>
										<td>884-652-8085</td>
										<td>2015/09/14</td>
										<td>2016/04/23</td>
										<td>$98.61</td>
										<td>18945</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>168</td>
										<td>717-284-8414</td>
										<td>2016/06/20</td>
										<td>2016/12/18</td>
										<td>$95.19</td>
										<td>87759</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>169</td>
										<td>561-986-9733</td>
										<td>2016/12/11</td>
										<td>2016/03/22</td>
										<td>$13.19</td>
										<td>9902</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>170</td>
										<td>909-319-2001</td>
										<td>2015/08/31</td>
										<td>2016/10/09</td>
										<td>$6.74</td>
										<td>99284</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>171</td>
										<td>723-509-1991</td>
										<td>2015/06/27</td>
										<td>2016/10/28</td>
										<td>$66.48</td>
										<td>26-432</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>172</td>
										<td>323-818-5864</td>
										<td>2016/09/08</td>
										<td>2015/07/30</td>
										<td>$2.11</td>
										<td>H6 2EI</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>173</td>
										<td>768-118-0590</td>
										<td>2016/10/06</td>
										<td>2015/04/11</td>
										<td>$77.71</td>
										<td>647520</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>174</td>
										<td>778-291-3123</td>
										<td>2016/10/11</td>
										<td>2016/10/27</td>
										<td>$82.91</td>
										<td>18-513</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>175</td>
										<td>120-419-7239</td>
										<td>2015/04/05</td>
										<td>2015/12/31</td>
										<td>$72.04</td>
										<td>G3V 4V4</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>176</td>
										<td>308-771-2360</td>
										<td>2015/06/12</td>
										<td>2015/06/07</td>
										<td>$53.24</td>
										<td>34-511</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>177</td>
										<td>435-934-3666</td>
										<td>2015/11/04</td>
										<td>2015/03/15</td>
										<td>$53.56</td>
										<td>6013</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>178</td>
										<td>200-581-0070</td>
										<td>2015/05/15</td>
										<td>2015/09/29</td>
										<td>$32.81</td>
										<td>R5R 0LA</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>179</td>
										<td>217-143-3336</td>
										<td>2016/03/03</td>
										<td>2016/12/15</td>
										<td>$71.36</td>
										<td>JE0Q 6LG</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>180</td>
										<td>416-333-6106</td>
										<td>2015/11/30</td>
										<td>2016/10/23</td>
										<td>$13.18</td>
										<td>0896OW</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>181</td>
										<td>958-105-6909</td>
										<td>2016/10/13</td>
										<td>2015/06/04</td>
										<td>$31.18</td>
										<td>5715</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>182</td>
										<td>898-158-0311</td>
										<td>2016/12/09</td>
										<td>2016/02/08</td>
										<td>$37.92</td>
										<td>45412</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>183</td>
										<td>342-330-3813</td>
										<td>2016/12/03</td>
										<td>2016/08/06</td>
										<td>$17.91</td>
										<td>10400</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>184</td>
										<td>503-586-0614</td>
										<td>2015/02/06</td>
										<td>2016/01/28</td>
										<td>$42.78</td>
										<td>39736</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>185</td>
										<td>847-618-9860</td>
										<td>2015/07/02</td>
										<td>2016/10/30</td>
										<td>$99.08</td>
										<td>4230EX</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>186</td>
										<td>918-569-5470</td>
										<td>2016/10/22</td>
										<td>2016/03/05</td>
										<td>$15.80</td>
										<td>37458-805</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>187</td>
										<td>691-844-7795</td>
										<td>2016/06/16</td>
										<td>2015/10/12</td>
										<td>$69.47</td>
										<td>48263</td>
										<td><span class="center-block padding-5 label label-success">Delivered</span></td>
									</tr>
									<tr>
										<td>188</td>
										<td>362-305-4703</td>
										<td>2015/07/28</td>
										<td>2016/02/07</td>
										<td>$3.31</td>
										<td>8241</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>189</td>
										<td>799-196-9936</td>
										<td>2015/10/11</td>
										<td>2016/02/29</td>
										<td>$75.86</td>
										<td>649745</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>190</td>
										<td>936-632-5009</td>
										<td>2016/05/14</td>
										<td>2015/08/29</td>
										<td>$8.20</td>
										<td>83574</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>191</td>
										<td>442-802-2702</td>
										<td>2015/02/15</td>
										<td>2016/10/25</td>
										<td>$36.37</td>
										<td>6323WX</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>192</td>
										<td>419-270-1336</td>
										<td>2015/06/20</td>
										<td>2015/03/26</td>
										<td>$55.43</td>
										<td>405381</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>193</td>
										<td>318-318-4193</td>
										<td>2015/03/01</td>
										<td>2015/12/05</td>
										<td>$98.69</td>
										<td>59-392</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									<tr>
										<td>194</td>
										<td>612-644-9749</td>
										<td>2016/04/07</td>
										<td>2016/11/21</td>
										<td>$15.68</td>
										<td>536797</td>
										<td><span class="center-block padding-5 label label-danger">Error</span></td>
									</tr>
									<tr>
										<td>195</td>
										<td>244-586-2343</td>
										<td>2016/02/09</td>
										<td>2016/02/25</td>
										<td>$77.01</td>
										<td>0276EH</td>
										<td><span class="center-block padding-5 label label-default">Incomplete</span></td>
									</tr>
									<tr>
										<td>196</td>
										<td>107-584-3630</td>
										<td>2016/03/24</td>
										<td>2015/12/22</td>
										<td>$34.84</td>
										<td>35418</td>
										<td><span class="center-block padding-5 label label-success">Complete</span></td>
									</tr>
									<tr>
										<td>197</td>
										<td>579-525-3847</td>
										<td>2015/07/08</td>
										<td>2015/08/29</td>
										<td>$77.18</td>
										<td>9622</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>198</td>
										<td>695-251-5944</td>
										<td>2015/06/09</td>
										<td>2015/03/05</td>
										<td>$80.51</td>
										<td>26198</td>
										<td><span class="center-block padding-5 label label-warning">Pending</span></td>
									</tr>
									<tr>
										<td>199</td>
										<td>463-986-3891</td>
										<td>2015/01/05</td>
										<td>2015/07/16</td>
										<td>$39.52</td>
										<td>KP08 4DX</td>
										<td><span class="center-block padding-5 label label-info">Refunded</span></td>
									</tr>
									</tbody>
														
															</table>

														</div>
														<!-- end widget content -->

													</div>
													<!-- end widget div -->

												</div>
												<!-- end widget -->

											</article>
											<!-- WIDGET END -->
											
										</div>

										<!-- end row -->

										<!-- row -->

										<div class="row">

											<!-- a blank row to get started -->
											<div class="col-sm-12">
												<!-- your contents here -->
											</div>
												
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
<script src="<?php echo ASSETS_URL; ?>/js/plugin/datatables/jquery.dataTables.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/datatables/dataTables.colVis.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/datatables/dataTables.tableTools.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/datatables/dataTables.bootstrap.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/datatable-responsive/datatables.responsive.min.js"></script>

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

		/* // DOM Position key index //
		
			l - Length changing (dropdown)
			f - Filtering input (search)
			t - The Table! (datatable)
			i - Information (records)
			p - Pagination (paging)
			r - pRocessing 
			< and > - div elements
			<"#id" and > - div with an id
			<"class" and > - div with a class
			<"#id.class" and > - div with an id and class
			
			Also see: http://legacy.datatables.net/usage/features
		*/	

		/* BASIC ;*/
			var responsiveHelper_dt_basic = undefined;
			var responsiveHelper_datatable_fixed_column = undefined;
			var responsiveHelper_datatable_col_reorder = undefined;
			var responsiveHelper_datatable_tabletools = undefined;
			
			var breakpointDefinition = {
				tablet : 1024,
				phone : 480
			};

		/* END BASIC */
		
		/* COLUMN FILTER  */
	    var otable = $('#datatable_fixed_column').DataTable({
	    	//"bFilter": false,
	    	//"bInfo": false,
	    	//"bLengthChange": false
	    	//"bAutoWidth": false,
	    	//"bPaginate": false,
	    	//"bStateSave": true // saves sort state using localStorage
			"sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6 hidden-xs'f><'col-sm-6 col-xs-12 hidden-xs'<'toolbar'>>r>"+
					"t"+
					"<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
			"autoWidth" : true,
			"preDrawCallback" : function() {
				// Initialize the responsive datatables helper once.
				if (!responsiveHelper_datatable_fixed_column) {
					responsiveHelper_datatable_fixed_column = new ResponsiveDatatablesHelper($('#datatable_fixed_column'), breakpointDefinition);
				}
			},
			"rowCallback" : function(nRow) {
				responsiveHelper_datatable_fixed_column.createExpandIcon(nRow);
			},
			"drawCallback" : function(oSettings) {
				responsiveHelper_datatable_fixed_column.respond();
			}		
		
	    });
	    
	    // custom toolbar
	    $("div.toolbar").html('<div class="text-right"><img src="img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
	    	   
	    // Apply the filter
	    $("#datatable_fixed_column thead th input[type=text]").on( 'keyup change', function () {
	    	
	        otable
	            .column( $(this).parent().index()+':visible' )
	            .search( this.value )
	            .draw();
	            
	    } );
	    /* END COLUMN FILTER */   
	})

</script>

<?php 
	//include footer
	include("inc/google-analytics.php"); 
?>