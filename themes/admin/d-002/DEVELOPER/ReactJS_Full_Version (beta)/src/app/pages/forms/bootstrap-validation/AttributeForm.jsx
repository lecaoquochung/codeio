import React from 'react'

import BootstrapValidator from '../../../../components/forms/validation/BootstrapValidator.jsx'

let AttributeForm = React.createClass({
    _onSubmit: function (e) {
        e.preventDefault();
        console.log('submit stuff')
    },
    render: function () {
        return (
            <BootstrapValidator>
                <form id="attributeForm" onSubmit={this._onSubmit} className="form-horizontal"
                      data-bv-message="This value is not valid"
                      data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
                      data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
                      data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">

                    <fieldset>
                        <legend>
                            Set validator options via HTML attributes
                        </legend>

                        <div className="alert alert-warning">
                            <code>&lt; input
                                data-bv-validatorname
                                data-bv-validatorname-validatoroption="..." / &gt;</code>

                            <br/>
                            <br/>
                            More validator options can be found here:
                            <a href="http://bootstrapvalidator.com/validators/" target="_blank">http://bootstrapvalidator.com/validators/</a>
                        </div>

                        <div className="form-group">
                            <label className="col-lg-3 control-label">Full name</label>
                            <div className="col-lg-4">
                                <input type="text" className="form-control" name="firstName" placeholder="First name"
                                       data-bv-notempty="true"
                                       data-bv-notempty-message="The first name is required and cannot be empty"/>
                            </div>
                            <div className="col-lg-4">
                                <input type="text" className="form-control" name="lastName" placeholder="Last name"
                                       data-bv-notempty="true"
                                       data-bv-notempty-message="The last name is required and cannot be empty"/>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Username</label>
                            <div className="col-lg-5">
                                <input type="text" className="form-control" name="username"
                                       data-bv-message="The username is not valid" data-bv-notempty="true"
                                       data-bv-notempty-message="The username is required and cannot be empty"
                                       data-bv-regexp="true" data-bv-regexp-regexp="^[a-zA-Z0-9_\.]+$"
                                       data-bv-regexp-message="The username can only consist of alphabetical, number, dot and underscore"
                                       data-bv-stringlength="true" data-bv-stringlength-min="6"
                                       data-bv-stringlength-max="30"
                                       data-bv-stringlength-message="The username must be more than 6 and less than 30 characters long"
                                       data-bv-different="true" data-bv-different-field="password"
                                       data-bv-different-message="The username and password cannot be the same as each other"/>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Email address</label>
                            <div className="col-lg-5">
                                <input className="form-control" name="email" type="email" data-bv-emailaddress="true"
                                       data-bv-emailaddress-message="The input is not a valid email address"/>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Password</label>
                            <div className="col-lg-5">
                                <input type="password" className="form-control" name="password" data-bv-notempty="true"
                                       data-bv-notempty-message="The password is required and cannot be empty"
                                       data-bv-identical="true" data-bv-identical-field="confirmPassword"
                                       data-bv-identical-message="The password and its confirm are not the same"
                                       data-bv-different="true" data-bv-different-field="username"
                                       data-bv-different-message="The password cannot be the same as username"/>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Retype password</label>
                            <div className="col-lg-5">
                                <input type="password" className="form-control" name="confirmPassword"
                                       data-bv-notempty="true"
                                       data-bv-notempty-message="The confirm password is required and cannot be empty"
                                       data-bv-identical="true" data-bv-identical-field="password"
                                       data-bv-identical-message="The password and its confirm are not the same"
                                       data-bv-different="true" data-bv-different-field="username"
                                       data-bv-different-message="The password cannot be the same as username"/>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Languages</label>
                            <div className="col-lg-5">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" name="languages[]" value="english"
                                               data-bv-message="Please specify at least one language you can speak"
                                               data-bv-notempty="true"/>
                                        English </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" name="languages[]" value="french"/>
                                        French </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" name="languages[]" value="german"/>
                                        German </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" name="languages[]" value="russian"/>
                                        Russian </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" name="languages[]" value="other"/>
                                        Other </label>
                                </div>
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

export default AttributeForm