var scripts = {
    "aliases" : {

        "react/lib": "/node_modules/react/lib",
        "react": "/node_modules/react/dist/react.min.js",
        "react-dom": "/node_modules/react-dom/dist/react-dom.min.js",
        "react-bootstrap": "/node_modules/react-bootstrap/dist/react-bootstrap.min.js",
        "react-router": "/node_modules/react-router/umd/ReactRouter.min.js",
        "history/lib": "/node_modules/history/umd/History.min.js",

        "lodash": "/bower_components/lodash/lodash.min.js",

        "jquery": "/bower_components/jquery/dist/jquery.min.js",
        "jquery-ui": "/bower_components/jquery-ui/jquery-ui.min.js",

        "bootstrap": "/bower_components/bootstrap/dist/js/bootstrap.min.js",

        "pace": "/bower_components/pace/pace.min.js",

        "fastclick": "/bower_components/fastclick/lib/fastclick.js",

        "jquery-color": "/bower_components/jquery-color/jquery.color.js",



        "ckeditor": "/bower_components/ckeditor/ckeditor.js",

        "moment": "/bower_components/moment/min/moment-with-locales.min.js",
        "moment-timezone": "/bower_components/moment-timezone/builds/moment-timezone.min.js",

        "sparkline": "/bower_components/relayfoods-jquery.sparkline/dist/jquery.sparkline.min.js",
        "easy-pie": "/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js",

        "flot": "/bower_components/Flot/jquery.flot.js",
        "flot-resize": "/bower_components/Flot/jquery.flot.resize.js",
        "flot-fillbetween": "/bower_components/Flot/jquery.flot.fillbetween.js",
        "flot-orderBar": "/bower_components/flot.orderbars/js/jquery.flot.orderBars.js",
        "flot-pie": "/bower_components/Flot/jquery.flot.pie.js",
        "flot-time": "/bower_components/Flot/jquery.flot.time.js",
        "flot-tooltip": "/bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js",

        "raphael": "/bower_components/raphael/raphael-min.js",
        "morris": "/bower_components/morris.js/morris.min.js",
        "dygraphs": "/bower_components/dygraphs/dygraph-combined.js",
        "chartjs": "/bower_components/Chart.js/Chart.min.js",

        "highcharts": "/bower_components/highcharts/highcharts.js",
        "highchartTable": "/bower_components/highchartTable/jquery.highchartTable.js",

        "datatables.net" : "/bower_components/datatables/media/js/jquery.dataTables.min.js",
        "datatables.net-bs" : "/bower_components/datatables/media/js/dataTables.bootstrap.min.js",
        "datatables.net-buttons" : "/bower_components/datatables-buttons/js/dataTables.buttons.js",
        "datatables.net-buttons.bootstrap" : "/bower_components/datatables-buttons/js/buttons.bootstrap.js",
        "datatables.net-buttons.print" : "/bower_components/datatables-buttons/js/buttons.print.js",
        "datatables.net-buttons.flash" : "/bower_components/datatables-buttons/js/buttons.flash.js",
        "datatables.net-buttons.colVis" : "/bower_components/datatables-buttons/js/buttons.colVis.js",
        "datatables.net-responsive" : "/bower_components/datatables-responsive/js/dataTables.responsive.js",
        "datatables.net-responsive.bootstrap" : "/bower_components/datatables-responsive/js/responsive.bootstrap.js",

        "jqgrid": "/bower_components/jqgrid/js/minified/jquery.jqGrid.min.js",
        "jqgrid-locale-en": "/bower_components/jqgrid/js/i18n/grid.locale-en.js",


        "select2": "/bower_components/select2/select2.min.js",
        "summernote": "/bower_components/summernote/dist/summernote.min.js",
        "bootstrap-markdown": "/bower_components/bootstrap-markdown/js/bootstrap-markdown.js",
        "markdown": "/bower_components/markdown/lib/markdown.js",
        "he": "/bower_components/he/he.js",
        "to-markdown": "/bower_components/to-markdown/dist/to-markdown.js",

        "jquery-maskedinput": "/bower_components/jquery.maskedinput/dist/jquery.maskedinput.min.js",
        "jquery-validate": "/bower_components/jquery-validation/dist/jquery.validate.min.js",

        "bootstrap-validator": "/bower_components/bootstrapvalidator/dist/js/bootstrapValidator.min.js",
        "ionslider": "/bower_components/ion.rangeSlider/js/ion.rangeSlider.min.js",
        "nouislider": "/bower_components/nouislider/distribute/jquery.nouislider.min.js",
        "bootstrap-duallistbox": "/bower_components/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min.js",
        "bootstrap-timepicker": "/bower_components/bootstrap3-fontawesome-timepicker/js/bootstrap-timepicker.min.js",
        "bootstrap-slider": "/bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js",
        "clockpicker": "/bower_components/clockpicker/dist/bootstrap-clockpicker.min.js",
        "bootstrap-colorpicker": "/bower_components/bootstrap-colorpicker/js/bootstrap-colorpicker.js",
        "bootstrap-tagsinput": "/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js",

        "jquery-knob": "/bower_components/jquery-knob/dist/jquery.knob.min.js",

        "x-editable": "/bower_components/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.min.js",

        "fuelux-wizard": "/bower_components/fuelux/js/wizard.js",

        "dropzone": "/bower_components/dropzone/downloads/dropzone.min.js",

        "jcrop": "/bower_components/Jcrop/js/Jcrop.min.js",


        "bootstrap-progressbar": "/bower_components/bootstrap-progressbar/bootstrap-progressbar.min.js",
        "jquery-nestable": "/bower_components/jquery-nestable/jquery.nestable.js",

        "jvectormap": "/bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js",
        "jvectormap-world-mill-en": "/bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js",

        "magnific-popup": "/bower_components/magnific-popup/dist/jquery.magnific-popup.js",

        "fullcalendar": "/web/smartadmin-plugin/fullcalendar/jquery.fullcalendar.min.js",
        "smartwidgets": "/web/smartadmin-plugin/smartwidgets/jarvis.widget.js",

        "notification": "/web/smartadmin-plugin/notification/SmartNotification.min.js",
        "chatbox": "/web/smartadmin-plugin/chat/chat.box.js"


    },
    "chunks": {
        "vendor": [
            'react',
            'react-dom',
            'react-bootstrap',
            'react-router',
            "jquery",
            "jquery-ui",
            "moment",
            "moment-timezone",
            "easy-pie",
            "sparkline",
            //"bootstrap",
            //"fastclick",
            //"fullcalendar",
            //"notification",
            //"smartwidgets",
            //"jvectormap"
        ] ,
        //"vendor.ui": [
        //    "select2",
        //    "script!summernote",
        //    "script!markdown",
        //    "script!he",
        //    "script!to-markdown",
        //    "script!bootstrap-markdown",
        //    "bootstrap-slider",
        //    "bootstrap-progressbar",
        //    "jquery-validate",
        //    "jquery-maskedinput",
        //    "bootstrap-validator",
        //    "ionslider",
        //    "nouislider",
        //    "bootstrap-duallistbox",
        //    "bootstrap-timepicker",
        //    "clockpicker",
        //    "bootstrap-colorpicker",
        //    "bootstrap-tagsinput",
        //    "jquery-knob",
        //    "x-editable",
        //    "fuelux-wizard",
        //    "dropzone",
        //    "jquery-nestable",
        //    "script!ckeditor"
        //],
        //"vendor.datatables": [
        //    "datatables.net",
        //    "datatables.net-bs",
        //    "datatables.net-buttons",
        //    "datatables.net-buttons.bootstrap",
        //    "datatables.net-buttons.print",
        //    "datatables.net-buttons.flash",
        //    "datatables.net-buttons.colVis",
        //    "datatables.net-responsive",
        //    "datatables.net-responsive.bootstrap"
        //],
        //"vendor.graphs": [
        //    'script!raphael',
        //    'script!morris',
        //    'script!dygraphs',
        //    'script!chartjs',
        //    'script!highcharts',
        //    'script!highchartTable'
        //]

    },
    noParse: [
        "jquery",
        //'jquery-ui',
        //"react",
        "moment",
        //"moment-timezone",
        //"easy-pie",
        //"sparkline",
        //'react-dom',
        //"select2",
        "summernote",
        "to-markdown",
        //"bootstrap-markdown",
        //"bootstrap-slider",
        //"bootstrap-progressbar",
        //"jquery-validate",
        //"jquery-maskedinput",
        //"bootstrap-validator",
        //"ionslider",
        //"nouislider",
        //"bootstrap-duallistbox",
        //"bootstrap-timepicker",
        //"clockpicker",
        //"bootstrap-colorpicker",
        //"bootstrap-tagsinput",
        //"jquery-knob",
        //"x-editable",
        //"fuelux-wizard",
        //"dropzone",
        //"jquery-nestable",
        //"superbox",
        //"datatables.net",
        //"datatables.net-bs",
        //"datatables.net-buttons",
        //"datatables.net-buttons.bootstrap",
        //"datatables.net-buttons.print",
        //"datatables.net-buttons.flash",
        //"datatables.net-buttons.colVis",
        //"datatables.net-responsive",
        //"datatables.net-responsive.bootstrap",
        "raphael",
        "morris",
        "dygraphs",
        "chartjs",
        "ckeditor"
    ]
};

module.exports = scripts;


