import React from 'react'
import {findDOMNode} from 'react-dom'

let UiDatepicker = React.createClass({
    componentDidMount: function(){
        let onSelectCallbacks = [];
        let props = this.props;
        let element = $(findDOMNode(this));

        if (props.minRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(props.minRestrict).datepicker('option', 'minDate', selectedDate);
            });
        }
        if (props.maxRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(props.maxRestrict).datepicker('option', 'maxDate', selectedDate);
            });
        }

        //Let others know about changes to the data field
        onSelectCallbacks.push(function (selectedDate) {
            element.triggerHandler("change");

            let form = element.closest('form');

            if(typeof form.bootstrapValidator == 'function'){
                try {
                    form.bootstrapValidator('revalidateField', element);
                } catch (e) {
                    console.log(e.message)
                }
            }


        });

        let options = {
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function (selectedDate) {
                _.forEach(onSelectCallbacks, function (callback) {
                    callback.call(callback, selectedDate)
                })
            }
        };


        if (props.numberOfMonths) options.numberOfMonths = props.numberOfMonths;

        if (props.dateFormat) options.dateFormat = props.dateFormat;

        if (props.defaultDate) options.defaultDate = props.defaultDate;

        if (props.changeMonth) options.changeMonth = props.changeMonth;


        element.datepicker(options);
    },
    render: function () {
        return (
            <input type="text" {...this.props} />
        )
    }
});

export default UiDatepicker