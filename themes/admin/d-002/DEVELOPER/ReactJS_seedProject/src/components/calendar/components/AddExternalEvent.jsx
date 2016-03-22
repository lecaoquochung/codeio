import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import classnames from 'classnames'

import {ButtonGroup, Button} from 'react-bootstrap'

import actions from '../actions/EventActions'

let AddExternalEvent = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function () {
        return {
            title: "",
            description: "",
            icon: 'fa-info',
            selectedClassName: {
                bg: 'bg-color-darken',
                txt: 'txt-color-white'
            }
        }
    },
    _addExternalEvent: function () {
        let event = {};
        if(this.state.title)
            event.title = this.state.title;
        if(this.state.description)
            event.description = this.state.description;
        event.className = this.state.selectedClassName.bg + ' ' + this.state.selectedClassName.txt;
        actions.addExternalEvent(event);
        this.setState({
            description: '',
            title: ''
        })
    },
    _setIcon: function (icon) {
        this.setState({
            icon: icon
        })
    },
    _setClassName: function (className) {
        this.setState({
            selectedClassName: className
        })
    },
    render: function () {
        let icons = [
            'fa-info',
            'fa-warning',
            'fa-check',
            'fa-user',
            'fa-lock',
            'fa-clock-o'
        ];
        let colorClassNames = [
            {
                bg: 'bg-color-darken',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-blue',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-orange',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-greenLight',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-blueLight',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-red',
                txt: 'txt-color-white'
            }
        ]
        return (
            <form id="add-event-form">
                <fieldset>
                    <div className="form-group">
                        <label>Select Event Icon</label>
                        <ButtonGroup bsSize="small" justified>
                            {icons.map(function(icon, idx){
                                return (
                                <label key={'ext-even-icon-' + idx} onClick={this._setIcon.bind(this, icon)} className={classnames('btn', 'btn-default', {
                                        active: this.state.icon == icon
                                    })}>
                                    <i className={classnames('fa', 'text-muted', icon)}/>

                                </label>
                                    )
                                }.bind(this))}
                        </ButtonGroup>
                    </div>

                    <div className="form-group">
                        <label>Event Title</label>
                        <input valueLink={this.linkState('title')} className="form-control" id="title"
                               name="title" maxLength="40" type="text"
                               placeholder="Event Title"/>
                    </div>
                    <div className="form-group">
                        <label>Event Description</label>
                                                    <textarea valueLink={this.linkState('description')}
                                                              className="form-control"
                                                              placeholder="Please be brief" rows="3" maxLength="40"
                                                              id="description"/>
                        <p className="note">Maxlength is set to 40 characters</p>
                    </div>

                    <div className="form-group">
                        <label>Select Event Color</label>
                        <ButtonGroup justified className="btn-select-tick"d>

                            {colorClassNames.map(function(colorClassName, idx){
                                return (<label key={'ext-even-color-' + idx} className={classnames('btn', colorClassName.bg, {
                                active: colorClassName.bg == this.state.selectedClassName.bg
                                })} onClick={this._setClassName.bind(this, colorClassName)}>
                                    <i className={classnames(
                                        'fa fa-check', colorClassName.txt
                                    )} />
                                </label>)
                                }.bind(this))}
                        </ButtonGroup>
                    </div>

                </fieldset>
                <div className="form-actions">
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-default" type="button" id="add-event"
                                    onClick={this._addExternalEvent}>
                                Add Event
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
});

export default AddExternalEvent