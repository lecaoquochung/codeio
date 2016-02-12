import React from 'react'

import BootstrapValidator from '../../../../components/forms/validation/BootstrapValidator.jsx'

let validatorOptions = {
    feedbackIcons : {
        valid : 'glyphicon glyphicon-ok',
        invalid : 'glyphicon glyphicon-remove',
        validating : 'glyphicon glyphicon-refresh'
    },
    fields : {
        firstName : {
            validators : {
                notEmpty : {
                    message : 'The first name is required'
                }
            }
        },
        lastName : {
            validators : {
                notEmpty : {
                    message : 'The last name is required'
                }
            }
        },
        company : {
            validators : {
                notEmpty : {
                    message : 'The company name is required'
                }
            }
        },
        // These fields will be validated when being visible
        job : {
            validators : {
                notEmpty : {
                    message : 'The job title is required'
                }
            }
        },
        department : {
            validators : {
                notEmpty : {
                    message : 'The department name is required'
                }
            }
        },
        mobilePhone : {
            validators : {
                notEmpty : {
                    message : 'The mobile phone number is required'
                },
                digits : {
                    message : 'The mobile phone number is not valid'
                }
            }
        },
        // These fields will be validated when being visible
        homePhone : {
            validators : {
                digits : {
                    message : 'The home phone number is not valid'
                }
            }
        },
        officePhone : {
            validators : {
                digits : {
                    message : 'The office phone number is not valid'
                }
            }
        }
    }
};

let TogglingForm = React.createClass({
    _onSubmit: function(e){
        e.preventDefault();
        console.log('submit stuff')
    },

    getInitialState: function(){
        return {
            jobInfo: false,
            phoneInfo: false
        }
    },
    _toggleInfo: function(type){
        let state = {};
        state[type] = !this.state[type];
        this.setState(state)
        $(this.refs.form).data('bootstrapValidator').disableSubmitButtons(false);
    },
    render: function () {
        return (
            <BootstrapValidator options={validatorOptions}>
                <form id="togglingForm" ref="form" onSubmit={this._onSubmit} className="form-horizontal">

                    <fieldset>
                        <legend>
                            Default Form Elements
                        </legend>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Full name <sup>*</sup></label>
                            <div className="col-lg-4">
                                <input type="text" className="form-control" name="firstName" placeholder="First name"/>
                            </div>
                            <div className="col-lg-4">
                                <input type="text" className="form-control" name="lastName" placeholder="Last name"/>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Company <sup>*</sup></label>
                            <div className="col-lg-5">
                                <input type="text" className="form-control" name="company" required={true} data-bv-notempty-message="The company name is required"/>
                            </div>
                            <div className="col-lg-2">
                                <button type="button" className="btn btn-info btn-sm" onClick={this._toggleInfo.bind(this, 'jobInfo')}>
                                    Add more info
                                </button>
                            </div>
                        </div>
                    </fieldset>

                    {/* These fields will not be validated as long as they are not visible */}
                    <div id="jobInfo" style={{display: (this.state.jobInfo ? 'block' : 'none')}}>
                        <fieldset>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Job title <sup>*</sup></label>
                                <div className="col-lg-5">
                                    <input type="text" className="form-control" name="job"/>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Department <sup>*</sup></label>
                                <div className="col-lg-5">
                                    <input type="text" className="form-control" name="department"/>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Mobile phone <sup>*</sup></label>
                            <div className="col-lg-5">
                                <input type="text" className="form-control" name="mobilePhone"/>
                            </div>
                            <div className="col-lg-2">
                                <button type="button" className="btn btn-info btn-sm" onClick={this._toggleInfo.bind(this, 'phoneInfo')}>
                                    Add more phone numbers
                                </button>
                            </div>
                        </div>
                    </fieldset>
                    {/* These fields will not be validated as long as they are not visible */}
                    <div id="phoneInfo" style={{display: (this.state.phoneInfo ? 'block' : 'none')}}>

                        <fieldset>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Home phone</label>
                                <div className="col-lg-5">
                                    <input type="text" className="form-control" name="homePhone"/>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Office phone</label>
                                <div className="col-lg-5">
                                    <input type="text" className="form-control" name="officePhone"/>
                                </div>
                            </div>
                        </fieldset>
                    </div>

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

export default TogglingForm