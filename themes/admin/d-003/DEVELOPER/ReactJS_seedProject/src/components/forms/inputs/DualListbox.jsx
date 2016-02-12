import React from 'react'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import {findDOMNode} from 'react-dom'
import _ from 'lodash'


let DualListbox = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            let element = $(findDOMNode(this));
            let props = this.props;

            let aOptions = _.pick(props, ['nonSelectedFilter']);

            let options = _.extend(aOptions, {
                nonSelectedListLabel: 'Non-selected',
                selectedListLabel: 'Selected',
                preserveSelectionOnMove: 'moved',
                moveOnSelect: false,
                size: this.props.size || 10
            });

            element.bootstrapDualListbox(options);
        }.bind(this))
    },
    render: function () {
        let items = this.props.items || [];
        let selected = items.filter(function(item){
            return item.selected
        }).map(function(item){
            return item.key
        })
        return (
            <select multiple={true} defaultValue={selected}>
                {
                    items.map(function(item, idx){
                        return (
                            <option value={item.key} key={_.uniqueId('duallistbox-')}>{item.value}</option>
                        )
                    })
                }
            </select>
        )
    }
});

export default DualListbox