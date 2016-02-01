import React from 'react'

let ResetWidgets = React.createClass({
    resetWidgets: function(){
        $.SmartMessageBox({
            title : "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
            content : "Would you like to RESET all your saved widgets and clear LocalStorage?",
            buttons : '[No][Yes]'
        }, function(ButtonPressed) {
            if (ButtonPressed == "Yes" && localStorage) {
                localStorage.clear();
                location.reload()
            }
        });
    },
    render: function () {
        return (
            <span id="refresh" className="btn btn-ribbon" onClick={this.resetWidgets}>
                <i className="fa fa-refresh" />
            </span>
        )
    }
});

export default ResetWidgets