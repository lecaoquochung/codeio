import React from 'react'
import ReactDOM from 'react-dom'


let UiSpinner = React.createClass({
    componentDidMount: function () {
        let options = {};
        let props = this.props;
        if (props.spinnerType == 'decimal') {
            options = {
                step: 0.01,
                numberFormat: "n"
            };
        } else if (props.spinnerType == 'currency') {
            options = {
                min: 5,
                max: 2500,
                step: 25,
                start: 1000,
                numberFormat: "C"
            };
        }

        $(ReactDOM.findDOMNode(this)).spinner(options);

    },
    render: function () {
        return <input type="text" {...this.props} />
    }
});

export default UiSpinner