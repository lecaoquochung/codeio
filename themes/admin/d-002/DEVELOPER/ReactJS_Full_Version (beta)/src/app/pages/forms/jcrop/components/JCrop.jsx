import React from 'react'

import {findDOMNode} from 'react-dom'
import {Component} from 'react'
import {cropMove, cropFieldChange, jcropInit} from '../actions/crop'
import _ from 'lodash'
import classnames from 'classnames'

require('jcrop');
require('../../../../../../bower_components/Jcrop/css/Jcrop.min.css');

class JCrop extends Component {
    constructor(props) {
        super(props);
        this.api = null;
        this.thumbnail = null;
        this.store = props.store;
        this.componentContainer = null;
    }

    componentDidMount() {
        const self = this;
        const element = $(this.refs.img);
        self.componentContainer = $(findDOMNode(this));
        let width, height;

        const _init = ()=> {
            element.Jcrop({}, function () {
                self.api = this;
                self.thumbnail = null;
                width = this.container.context.width;
                height = this.container.context.height;

                self.store.dispatch(jcropInit(
                    _.merge(self.store.getState().options, self.props.options),
                    self.props.crop
                ))
            });
        };
        _init();

        element.parent().on('cropmove cropend', function (e, s, c) {
            if (!_.isEqual(c, self.store.getState().crop)) {
                self.store.dispatch(cropMove(c))
            }
        });

        const setSelect = _.debounce((crop)=> {
            if(!self.api.ui.selection){
                self.api.newSelection();
            }
            self.api.setSelect([
                crop.x,
                crop.y,
                crop.w,
                crop.h
            ]);
        }, 100);

        const animateTo = _.debounce((crop)=> {
            if(!self.api.ui.selection){
                self.api.newSelection();
            }
            self.api.animateTo([
                crop.x,
                crop.y,
                crop.w,
                crop.h
            ]);
        }, 100);

        const setOptions = _.debounce((options) => {
            self.api.setOptions(options);
        }, 100);

        self.unsubscribe = self.store.subscribe(() => {
            const crop = self.store.getState().crop;
            const options = self.store.getState().options;
            setOptions(options)
            if (options.animation) {
                animateTo(crop)
            } else {
                setSelect(crop)
            }

            if (options.setImage && !_.endsWith(element.attr('src'), options.setImage)) {
                let clone = element.clone();
                clone.css({
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 10000,
                    display: 'inherit'
                });
                self.api.container.append(clone)
                self.api.destroy()
                element.attr('src', options.setImage);
                clone.fadeOut(200, ()=> {
                    clone.remove()
                    _init()
                });
            }

            if(options.containerClass && !self.api.container.hasClass(options.containerClass)){
                self.api.container.attr('class', 'jcrop-hl-active jcrop-active ' + options.containerClass);
            }

            self.handleThumbnail(crop, options)

        })


    }

    handleThumbnail(crop, options) {
        let self = this;

        if (options.showThumbnail) {
            let size = options.thumbnailSize;
            let width = crop.h <= crop.w ? size : crop.w / crop.h * size;
            let height = crop.h > crop.w ? size : crop.h / crop.w * size;
            if (!self.thumbnail) {
                self.thumbnail = new $.Jcrop.component.Thumbnailer(self.api);
                self.thumbnail.init(self.api, {
                    width: width,
                    height: height
                });
            } else {
                self.thumbnail.resize(
                    width,
                    height
                )
            }
        } else {
            if (self.thumbnail) {
                $('.jcrop-thumb', self.api.container).fadeOut(250, ()=> {
                    self.thumbnail = null;
                    $(this).remove();
                })
            }
        }
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {

        return <div className={classnames(this.props.className, 'jcrop-editor')} >
            <img ref="img" src={this.props.src}/>
        </div>
    }
}

export default JCrop