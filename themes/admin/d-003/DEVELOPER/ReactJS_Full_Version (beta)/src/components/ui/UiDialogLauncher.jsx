import React from 'react'
import ReactDOM from 'react-dom'

$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function (title) {
        if (!this.options.title) {
            title.html("&#160;");
        } else {
            title.html(this.options.title);
        }
    }
}));

let UiDialogLauncher = React.createClass({

    openDialog: function (e) {
        e.preventDefault();

        let $dialog = $('<div>').dialog({
            title: `<div class="widget-header">${this.props.header}</div>`,
            width: 400,
            modal: !!this.props.modal,
            close: function (e) {
                ReactDOM.unmountComponentAtNode(this);
                $(this).remove();
            }
        });

        let closeDialog = function (e) {
            e.preventDefault();
            $dialog.dialog('close');
        };

        let _content = this.props.content

        let content = React.createElement(_content.type, {
            closeDialog: closeDialog
        });


        ReactDOM.render(content, $dialog[0])
    },
    render: function () {
        return (
            <button onClick={this.openDialog} className={this.props.className}>{
                this.props.children
            }</button>
        )
    }
});
export default UiDialogLauncher