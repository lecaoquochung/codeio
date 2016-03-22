import React from 'react'
import _ from 'lodash'
import {Link} from 'react-router'

import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import SubHeader from '../layout/SubHeader.jsx'

import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import config from '../../config/config'

let Maps = React.createClass({
    getDefaultProps: function () {
        return {
            styles: {
                'colorful': {name: 'Colorful', url: config.apiRootUrl + '/maps/colorful.json'},
                'greyscale': {name: 'greyscale', url: config.apiRootUrl + '/maps/greyscale.json'},
                'metro': {name: 'metro', url: config.apiRootUrl + '/maps/metro.json'},
                'mono-color': {name: 'mono-color', url: config.apiRootUrl + '/maps/mono-color.json'},
                'monochrome': {name: 'monochrome', url: config.apiRootUrl + '/maps/monochrome.json'},
                'nightvision': {name: 'Nightvision', url: config.apiRootUrl + '/maps/nightvision.json'},
                'nightvision-highlight': {
                    name: 'nightvision-highlight',
                    url: config.apiRootUrl + '/maps/nightvision-highlight.json'
                },
                'old-paper': {name: 'Old Paper', url: config.apiRootUrl + '/maps/old-paper.json'}
            }
        }
    },
    getInitialState: function () {
        return {
            current: this.props.params
        }
    },

    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Google Map', 'Custom Skins']} icon="map-marker"
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader className="hidden-xs"/>
                </div>


                <div className="row">
                    <div className="col-xs-12">
                        { _.map(this.props.styles, function (style, key) {
                            return (
                                <Link className="btn btn-default" to={'/maps/'+key} key={'map-'+key}
                                      activeClassName="active">{style.name}</Link>
                            )
                        }) }
                    </div>
                    <hr/>
                </div>

                <WidgetGrid>
                    <div className="row">
                        <article className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <JarvisWidget
                                editbutton={false}
                                deletebutton={false}
                                fullscreenbutton={false}
                                color="white"
                                style={{marginBottom: 0}}>
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-map-marker"/> </span>
                                    <h2>Map demo</h2>
                                </header>
                                <div>
                                    <div className="widget-body no-padding">

                                        {this.props.children}

                                    </div>
                                </div>
                            </JarvisWidget>
                        </article>
                    </div>
                </WidgetGrid>
            </div>
        )
    }
});

export default Maps