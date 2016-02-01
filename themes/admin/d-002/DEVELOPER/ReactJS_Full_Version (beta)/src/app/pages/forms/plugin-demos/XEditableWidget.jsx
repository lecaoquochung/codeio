import React from 'react'
import JarvisWidget from '../../../../components/layout/widgets/JarvisWidget.jsx'
import OnOffSwitch from '../../../../components/forms/inputs/OnOffSwitch.jsx'
import XEditable from '../../../../components/forms/inputs/XEditable.jsx'
import LinkedStateMixin from 'react-addons-linked-state-mixin'


let XEditableWidget = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function () {
        return {
            data: {
                username: 'superuser',
                firstname: null,
                sex: 'not selected',
                group: "Admin",
                vacation: "25.02.2013",
                combodate: "15/05/1984",
                event: null,
                comments: 'awesome user!',
                state2: 'California',
                fruits: 'peach<br/>apple'
            },


            fruits: [
                {value: 'banana', text: 'banana'},
                {value: 'peach', text: 'peach'},
                {value: 'apple', text: 'apple'},
                {value: 'watermelon', text: 'watermelon'},
                {value: 'orange', text: 'orange'}],
            genders: [
                {value: 'not selected', text: 'not selected'},
                {value: 'Male', text: 'Male'},
                {value: 'Female', text: 'Female'}
            ],

            groups: [
                {value: 'Guest', text: 'Guest'},
                {value: 'Service', text: 'Service'},
                {value: 'Customer', text: 'Customer'},
                {value: 'Operator', text: 'Operator'},
                {value: 'Support', text: 'Support'},
                {value: 'Admin', text: 'Admin'}
            ],
            options: {
                mode: 'inline',
                disabled: false
            }
        }
    },
    _onChange: function (field, value) {
        let data = this.state.data;
        data[field] = value;
        this.setState({
            data: data
        })
    },
    _toggleInline: function () {
        let options = this.state.options;
        options.mode = options.mode == 'inline' ? 'popup' : 'inline';
        this.setState({
            options: options
        })
    },
    _toggleDisabled: function () {
        let options = this.state.options;
        options.disabled = !options.disabled;
        this.setState({
            options: options
        })
    },
    render: function () {
        let state = this.state;
        let data = state.data;
        return (
            <JarvisWidget colorbutton={false} editbutton={false} custombutton={false}>

                <header>
                    <span className="widget-icon"> <i className="fa fa-edit"/> </span>
                    <h2>x-ediable </h2>

                </header>

                {/* widget div*/}
                <div>


                    {/* widget content */}
                    <div className="widget-body">
                        <div className="widget-body-toolbar">

                            <div className="row">

                                <div className="col-sm-6">
                                    <button id="enable" className="btn btn btn-default"
                                            onClick={this._toggleDisabled}>
                                        enable / disable
                                    </button>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <OnOffSwitch title="Open Inline" defaultChecked={
                                        state.options.mode == 'inline'
                                    } onClick={this._toggleInline}/>

                                </div>

                            </div>


                        </div>

                        <table id="user" className="table table-bordered table-striped"
                               style={{clear:'both'}}>
                            <tbody>
                            <tr>
                                <td style={{width:'30%',}}>Simple text field</td>
                                <td style={{width:'35%'}}>
                                    <XEditable type="text"
                                               originalTitle="Enter username"
                                               mode={state.options.mode}
                                               disabled={state.options.disabled}
                                               onChange={this._onChange.bind(this, 'username')}
                                               className="editable editable-click">
                                        {data.username}
                                    </XEditable>

                                </td>
                                <td style={{width:'35%'}}>
                                    {data.username}
                                </td>
                            </tr>
                            <tr>
                                <td>Empty text field, required</td>
                                <td><XEditable type="text"
                                               placement="right"
                                               mode={state.options.mode}
                                               disabled={state.options.disabled}
                                               onChange={this._onChange.bind(this, 'firstname')}
                                               placeholder="Required"
                                               originalTitle="Enter your firstname"
                                               className="editable editable-click editable-empty">
                                    {data.firstname}
                                </XEditable>
                                </td>
                                <td>
                                    {data.firstname}
                                </td>
                            </tr>
                            <tr>
                                <td>Select, local array, custom display</td>
                                <td><XEditable
                                    type="select"
                                    value={data.sex}
                                    source={state.genders}
                                    originalTitle="Select sex"
                                    mode={state.options.mode}
                                    disabled={state.options.disabled}
                                    onChange={this._onChange.bind(this, 'sex')}
                                    className="editable editable-click"
                                    style={{color:'rgb(128, 128, 128)',}}>
                                    {data.sex}
                                </XEditable>
                                </td>
                                <td>
                                    {data.sex}
                                </td>
                            </tr>
                            <tr>
                                <td>Select, remote array, no buttons</td>
                                <td><XEditable

                                    mode={state.options.mode}
                                    disabled={state.options.disabled}
                                    onChange={this._onChange.bind(this, 'group')}
                                    type="select"
                                    value={data.group}
                                    source={state.groups} showbuttons={false}
                                    originalTitle="Select group"
                                    className="editable editable-click">
                                    {data.group}
                                </XEditable>
                                </td>
                                <td>
                                    {data.group}
                                </td>
                            </tr>
                            <tr>
                                <td>Select, error while loading</td>
                                <td><XEditable
                                    mode={state.options.mode}
                                    disabled={state.options.disabled}
                                    type="select" value={0} source="/status"
                                    originalTitle="Select status"
                                    className="editable editable-click">Active</XEditable></td>
                                <td>

                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    {/* end widget content */}

                </div>
                {/* end widget div */}

            </JarvisWidget>

        )
    }
});

export default XEditableWidget