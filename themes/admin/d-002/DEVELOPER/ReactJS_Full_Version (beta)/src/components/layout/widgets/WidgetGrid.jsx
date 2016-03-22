/**
 * Created by griga on 12/1/15.
 */


import React from 'react'
import ElementHolder from '../../utils/mixins/ElementHolder.jsx'

import jarvisWidgetsDefaults from './WidgetDefaults' ;

let WidgetGrid = React.createClass({
    mixins: [ElementHolder],

    render: function(){
        return (
            <section id="widget-grid">
                {this.props.children}
            </section>
        )
    },
    componentDidMount: function(){
        $(this.getHold()).jarvisWidgets(jarvisWidgetsDefaults);
    }
});


export default WidgetGrid