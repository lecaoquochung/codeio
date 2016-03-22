window.jQuery = window.$ =  require("jquery");
require("jquery-ui");
require("bootstrap");
require("fastclick");
require("moment");
require("moment-timezone");
require("fullcalendar");
require("notification");
require("smartwidgets");
require("easy-pie");
require("sparkline");
require('jvectormap');
require('jvectormap-world-mill-en');

window.SMARTADMIN_GLOBALS = require('./config/config');

require.ensure([], function(require){
    require('./Router.jsx');
});
