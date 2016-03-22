import React from 'react'

import ReactDOM from 'react-dom'


let EasyPieChart = React.createClass({
    componentDidMount: function () {
        let $element = $(ReactDOM.findDOMNode(this));
        let props = this.props;


        let barColor = $element.css('color') || props.pieColor;
        let trackColor = props.trackColor || 'rgba(0,0,0,0.04)';
        let size = props.pieSize || 25;

        $element.easyPieChart({

            barColor: barColor,
            trackColor: trackColor,
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: parseInt(size / 8.5),
            animate: 1500,
            rotate: -90,
            size: size,
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }

        });
        $element.find('canvas').attr('data-reactid', $element.data('reactid') + '.0.1')
        $element.data('easyPieChart').update(this.props.percent);
    },
    render: function () {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
});

export default EasyPieChart