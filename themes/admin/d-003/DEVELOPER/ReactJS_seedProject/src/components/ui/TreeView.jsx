import React from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import HtmlRender from '../utils/HtmlRender.jsx'
import {findDOMNode} from 'react-dom'


let TreeViewItem = React.createClass({
    _handleExpand: function (e) {
        e.stopPropagation()
        let item = this.props.item
        if (item.children && item.children.length) {
            item.expanded = !item.expanded;
            this.forceUpdate()

        }
    },
    render: function () {
        let item = this.props.item;

        let children = item.children ? <TreeView className={classnames({
       'smart-treeview-group': true,
        hidden: !item.expanded
       })} items={item.children} role="group"/> : null;

        return (
            <li className={classnames({
                parent_li: item.children && item.children.length
           })} onClick={this._handleExpand}>
                <HtmlRender html={item.content}/>{children}
            </li>
        )
    },
    componentDidUpdate: function(){
       this._handleIcon();
    },
    componentDidMount: function(){
        this._handleIcon();
    },
    _handleIcon: function(){
        let item = this.props.item
        if(item.children && item.children.length){
            $(findDOMNode(this)).find('>p>span>i')
                .toggleClass('fa-plus-circle', !item.expanded)
                .toggleClass('fa-minus-circle', !!item.expanded)
        }
    }
});

let TreeView = React.createClass({
    render: function () {
        let items = this.props.items;
        return (
            <ul role={this.props.role} className={this.props.className}>
                {items.map(function (item) {
                    return (
                        <TreeViewItem key={_.uniqueId('treeview-item')} item={item}/>
                    )
                })}
            </ul>
        )
    }
});

export default TreeView