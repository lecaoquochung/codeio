import React from 'react'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import _ from 'lodash'
import {findDOMNode} from 'react-dom'


let FuelUxWizard = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            let self = this;
            let element = $(findDOMNode(self));
            let wizard = element.wizard();

            let $form = element.find('form');

            wizard.on('actionclicked.fu.wizard', function(e, data){
                if ($form.data('validator')) {
                    if (!$form.valid()) {
                        $form.data('validator').focusInvalid();
                        e.preventDefault();
                    }
                }
            });

            wizard.on('finished.fu.wizard', function (e, data) {
                var formData = {};
                _.each($form.serializeArray(), function(field){
                    formData[field.name] = field.value
                });
                if(_.isFunction(self.props.onComplete)){
                    self.props.onComplete(formData)
                }
            });
        }.bind(this))
    },
    render: function () {
        let {children, ...props} = this.props;
        return (
            <div {...props}>
                {children}
            </div>
        )
    }
});

export default FuelUxWizard