import React from 'react'

import ElementHolder from '../../../../components/utils/mixins/ElementHolder.jsx'

import jarvisWidgetsDefaults from '../../../../components/layout/widgets/WidgetDefaults' ;

import BigBreadcrumbs from '../../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import SubHeader from '../SubHeader.jsx'
import SparklineContainer from '../../../../components/graphs/inline/SparklineContainer.jsx'
import EasyPieChartContainer from '../../../../components/graphs/inline/EasyPieChartContainer.jsx'


let StaticPageLoader = React.createClass({
    mixins: [ElementHolder],

    componentWillMount: function () {
        this._process(this.props.location.pathname)
    },
    componentWillReceiveProps: function (nextProps, nextState) {
        if (nextProps.location.pathname != this.props.location.pathname) {
            this._process(nextProps.location.pathname)
        }
    },
    render: function () {
        return (
            <div id="content">
                {(this.props.route.subHeader == false ? null :
                    <div className="row">
                        <BigBreadcrumbs className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                        <SubHeader />
                    </div>)}

                <div className="row">
                    <SparklineContainer><EasyPieChartContainer>
                        <div className="col-sm-12" ref="viewport">
                        </div>
                    </EasyPieChartContainer> </SparklineContainer>
                </div>
            </div>
        )
    },
    _process: function (url) {
        $.get('html/' + url).then(function (res) {
            $(this.refs.viewport).html(res);
            let $container = $(this.getHold());
            $('#widget-grid', $container).jarvisWidgets(jarvisWidgetsDefaults);
            $('.dropdown-toggle', $container).dropdown()
        }.bind(this))
    }
});

export default StaticPageLoader