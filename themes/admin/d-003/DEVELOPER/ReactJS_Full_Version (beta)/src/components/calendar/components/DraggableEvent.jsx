import React from 'react'

let DraggableEvent = React.createClass({

    componentDidMount: function () {
        $(this.refs.elementRef)
            .data('eventObject', this.props.event)
            .draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });
    },
    render: function () {
        let {children, event, ...props} = this.props;
        return (
            <li {...props} ref="elementRef">
                {children}
            </li>
        )
    }
});

export default DraggableEvent