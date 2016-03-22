

import React from 'react'

import ElementHolder from '../../utils/mixins/ElementHolder.jsx'

var VectorMap = React.createClass({
    mixins: [ElementHolder],
    componentDidMount: function(){
        var data = this.props.data;

        $(this.getHold()).vectorMap({
            map: 'world_mill_en',
            backgroundColor: '#fff',
            regionStyle: {
                initial: {
                    fill: '#c4c4c4'
                },
                hover: {
                    "fill-opacity": 1
                }
            },
            series: {
                regions: [
                    {
                        values: data,
                        scale: ['#85a8b6', '#4d7686'],
                        normalizeFunction: 'polynomial'
                    }
                ]
            },
            onRegionLabelShow: function (e, el, code) {
                if (typeof data[code] == 'undefined') {
                    e.preventDefault();
                } else {
                    var countrylbl = data[code];
                    el.html(el.html() + ': ' + countrylbl + ' visits');
                }
            }
        });


    },
    componentWillUnmount: function(){
        let mapObject = $(this.getHold()).children('.jvectormap-container').data('mapObject');
        mapObject && mapObject.remove();
    },
    render: function () {
        return (
            <div id="vector-map" className="vector-map" ref={ref=>this.setHold(ref)}/>
        )
    }
});

export default VectorMap

