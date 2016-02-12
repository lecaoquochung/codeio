import React from 'react'

import BootstrapValidator from '../../../../components/forms/validation/BootstrapValidator.jsx'

let validatorOptions = {
    container : '#messages',
    feedbackIcons : {
        valid : 'glyphicon glyphicon-ok',
        invalid : 'glyphicon glyphicon-remove',
        validating : 'glyphicon glyphicon-refresh'
    },
    fields : {
        fullName : {
            validators : {
                notEmpty : {
                    message : 'The full name is required and cannot be empty'
                }
            }
        },
        email : {
            validators : {
                notEmpty : {
                    message : 'The email address is required and cannot be empty'
                },
                emailAddress : {
                    message : 'The email address is not valid'
                }
            }
        },
        title : {
            validators : {
                notEmpty : {
                    message : 'The title is required and cannot be empty'
                },
                stringLength : {
                    max : 100,
                    message : 'The title must be less than 100 characters long'
                }
            }
        },
        content : {
            validators : {
                notEmpty : {
                    message : 'The content is required and cannot be empty'
                },
                stringLength : {
                    max : 500,
                    message : 'The content must be less than 500 characters long'
                }
            }
        }
    }
};

let ContactForm = React.createClass({
    _onSubmit: function (e) {
        e.preventDefault();
        console.log('submit stuff')
    },
    render: function () {
        return (
            <BootstrapValidator options={validatorOptions}>
                <form id="contactForm" onSubmit={this._onSubmit} className="form-horizontal">

                        <fieldset>
                            <legend>Showing messages in custom area</legend>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Full name</label>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="fullName"/>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Email</label>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="email"/>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Title</label>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="title"/>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Content</label>
                                <div className="col-md-6">
                                    <textarea className="form-control" name="content" rows="5"/>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            {/* #messages is where the messages are placed inside */}
                            <div className="form-group">
                                <div className="col-md-9 col-md-offset-3">
                                    <div id="messages"/>
                                </div>
                            </div>
                        </fieldset>

                        <div className="form-actions">
                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn btn-default" type="submit">
                                        <i className="fa fa-eye"/>
                                        Validate
                                    </button>
                                </div>
                            </div>
                        </div>

                </form>
            </BootstrapValidator>
        )
    }
});

export default ContactForm