import _ from 'lodash'
import React from 'react'

import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import ElementHolder from '../../utils/mixins/ElementHolder.jsx'


let pressets = {
    line: {
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether the line is curved between points
        bezierCurve: true,
        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.4,
        //Boolean - Whether to show a dot for each point
        pointDot: true,
        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,
        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    },
    radar: {
        //Boolean - Whether to show lines for each scale point
        scaleShowLine : true,
        //Boolean - Whether we show the angle lines out of the radar
        angleShowLineOut : true,
        //Boolean - Whether to show labels on the scale
        scaleShowLabels : false,
        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero : true,
        //String - Colour of the angle line
        angleLineColor : "rgba(0,0,0,.1)",
        //Number - Pixel width of the angle line
        angleLineWidth : 1,
        //String - Point label font declaration
        pointLabelFontFamily : "'Arial'",
        //String - Point label font weight
        pointLabelFontStyle : "normal",
        //Number - Point label font size in pixels
        pointLabelFontSize : 10,
        //String - Point label font colour
        pointLabelFontColor : "#666",
        //Boolean - Whether to show a dot for each point
        pointDot : true,
        //Number - Radius of each point dot in pixels
        pointDotRadius : 3,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 20,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,
        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    },
    polar: {
        //Boolean - Show a backdrop to the scale label
        scaleShowLabelBackdrop : true,
        //String - The colour of the label backdrop
        scaleBackdropColor : "rgba(255,255,255,0.75)",
        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero : true,
        //Number - The backdrop padding above & below the label in pixels
        scaleBackdropPaddingY : 2,
        //Number - The backdrop padding to the side of the label in pixels
        scaleBackdropPaddingX : 2,
        //Boolean - Show line for each value in the scale
        scaleShowLine : true,
        //Boolean - Stroke a line around each segment in the chart
        segmentShowStroke : true,
        //String - The colour of the stroke on each segement.
        segmentStrokeColor : "#fff",
        //Number - The width of the stroke value in pixels
        segmentStrokeWidth : 2,
        //Number - Amount of animation steps
        animationSteps : 100,
        //String - Animation easing effect.
        animationEasing : "easeOutBounce",
        //Boolean - Whether to animate the rotation of the chart
        animateRotate : true,
        //Boolean - Whether to animate scaling the chart from the centre
        animateScale : false,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    },
    bar: {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero : true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,
        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth : 1,
        //Boolean - If there is a stroke on each bar
        barShowStroke : true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth : 1,
        //Number - Spacing between each of the X value sets
        barValueSpacing : 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing : 1,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    },
    doughnut: {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : true,
        //String - The colour of each segment stroke
        segmentStrokeColor : "#fff",
        //Number - The width of each segment stroke
        segmentStrokeWidth : 2,
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 50, // This is 0 for Pie charts
        //Number - Amount of animation steps
        animationSteps : 100,
        //String - Animation easing effect
        animationEasing : "easeOutBounce",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    },
    pie: {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,
        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",
        //Number - The width of each segment stroke
        segmentStrokeWidth: 2,
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - types of animation
        animationEasing: "easeOutBounce",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
        //Boolean - Re-draw chart on page resize
        responsive: true,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    }
};

let ChartJsGraph = React.createClass({
    mixins: [ScriptLoader, ElementHolder],
    componentDidMount: function () {
        this.loadScript('/vendor.graphs.js').then(function(){
            this._renderChart(this.props.data)
        }.bind(this))
    },
    componentWillReceiveProps: function(nextProps){
        this._renderChart(nextProps.data)
    },
    _renderChart: function(data){
        var ctx = this.getHold().getContext("2d");
        if(data) {
            switch (this.props.type) {
                case "line":
                    new Chart(ctx).Line(data, pressets.line);
                    break;
                case "radar":
                    new Chart(ctx).Radar(data, pressets.radar);
                    break;
                case "polar":
                    new Chart(ctx).PolarArea(data, pressets.polar);
                    break;
                case "bar":
                    new Chart(ctx).Bar(data, pressets.bar);
                    break;
                case "doughnut":
                    new Chart(ctx).Doughnut(data, pressets.doughnut);
                    break;
                case "pie":
                    new Chart(ctx).Pie(data, pressets.pie);
                    break;
            }
        }
    },
    render: function () {
        return (
            <canvas ref={ref=>this.setHold(ref)}/>
        )
    }
});

export default ChartJsGraph