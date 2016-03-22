import React from 'react'
import Reflux from 'reflux'
import _ from 'lodash'

import {GoogleMap, Marker} from "react-google-maps";
import ScriptjsLoader from "../../../../node_modules/react-google-maps/lib/async/ScriptjsLoader";

import config from '../../config/config'

let _mapInstances = {};
let _counter = 0;

let MapView = React.createClass({
    getInitialState: function () {
        return {
            style: null,
            instanceId: '_mapInstances' + (++ _counter)
        }
    },
    componentWillMount: function () {
        this._getStyle(this.props.params.style)
    },
    componentWillReceiveProps: function (nextProps) {
        this._getStyle(nextProps.params.style)
    },
    _getStyle: function (style) {
        $.getJSON(config.apiRootUrl + 'api/maps/' + style + '.json')
            .then(this._setStyle)
    },
    _setStyle: function (data) {
        let map = _mapInstances[this.state.instanceId];
        if(map){
            map.setOptions({
                styles: data
            });
            google.maps.event.trigger(map,'resize')
        } else {
            this.setState({
                style: data
            })
        }

    },
    componentWillUnmount: function(){
        delete _mapInstances[this.state.instanceId]  
    },
    render: function () {
        return (
            <section style={{minHeight: "400px"}}>
                {this.state.style ?
                    <ScriptjsLoader
                        hostname={"maps.googleapis.com"}
                        pathname={"/maps/api/js"}
                        query={{v: `3.22`, libraries: "geometry,drawing,places"}}
                        loadingElement={
                            <div>
                              <i className="fa fa-gear fa-spinner" />
                            </div>
                          }
                        containerElement={
                            <div style={{minHeight: "400px"}} />
                        }
                        googleMapElement={
                                    <GoogleMap
                                      defaultZoom={3}
                                      defaultCenter={{lat: -25.363882, lng: 131.044922}}
                                      defaultOptions={{
                                          styles: this.state.style
                                        }}
                                        ref={googleMap => {
                                          if (!googleMap) {
                                            return;
                                          }
                                          _mapInstances[this.state.instanceId] = googleMap.props.map
                                        }}
                                    />
                      }
                    /> : null}
            </section>
        )
    }
});

export default MapView