import React from 'react'
import {findDOMNode} from 'react-dom'
import _ from 'lodash'

require('jcrop');

let SmartJcrop = React.createClass({
    componentDidMount: function(){
        this._init();
        this._bindPreview();
    },
    getInitialState: function(){
        return {
            imageWidth: 0,
            imageHeight: 0
        }
    },
    jcropApi: null,
    onSelectHandlers: [],
    onChangeHandlers: [],
    onSelect: function (c) {
        this.onSelectHandlers.forEach(function (handler) {
            handler.call(self.jcropApi, c)
        })
    },
    onChange: function (c) {
        this.onChangeHandlers.forEach(function (handler) {
            handler.call(self.jcropApi, c)
        })
    },

    _init: function(){
        let self = this;


        let options = this.props.options || {};
        let selection = this.props.selection || {};
        let coords = this.props.coords || {};
        $(findDOMNode(this)).Jcrop(options, function () {
            self.jcropApi = this;


            if (selection && _.isArray(selection)) {
                if (options && options.animate) {
                    self.jcropApi.animateTo(selection);
                } else {
                    self.jcropApi.setSelect(selection);
                }
            }

            var bounds = self.jcropApi.getBounds();
            self.setState({
                imageWidth: bounds[0],
                imageHeight: bounds[1]
            })
        });
    },
    _bindPreview(){

        var $previewPane = $(this.props.jcropPreview),
            $previewContainer = $previewPane.find('.preview-container'),
            $previewImg = $previewPane.find('img');

        if ($previewPane.length && $previewImg.length) {
            var previewUpdate = function (coords) {
                if (parseInt(coords.w) > 0) {
                    var rx = $previewContainer.width() / coords.w;
                    var ry = $previewContainer.height() / coords.h;

                    $previewImg.css({
                        width: Math.round(rx * this.state.imageWidth) + 'px',
                        height: Math.round(ry * this.state.imageHeight) + 'px',
                        marginLeft: '-' + Math.round(rx * coords.x) + 'px',
                        marginTop: '-' + Math.round(ry * coords.y) + 'px'
                    });
                }
            };
            this.onSelectHandlers.push(previewUpdate);
            this.onChangeHandlers.push(previewUpdate);
        }
    },
    render: function () {

        return (
            <img src={this.props.imgSrc} className={this.props.className} />
        )
    }
});

export default SmartJcrop