import React from 'react'

import BootstrapValidator from '../../../../components/forms/validation/BootstrapValidator.jsx'

let validatorOptions = {
    excluded : ':disabled',
    feedbackIcons : {
        valid : 'glyphicon glyphicon-ok',
        invalid : 'glyphicon glyphicon-remove',
        validating : 'glyphicon glyphicon-refresh'
    },
    fields : {
        gender : {
            validators : {
                notEmpty : {
                    message : 'The gender is required'
                }
            }
        },
        'languages[]' : {
            validators : {
                choice : {
                    min : 1,
                    max : 2,
                    message : 'Please choose 1 - 2 languages you can speak'
                }
            }
        }
    }
};

let ButtonGroupForm = React.createClass({
    _onSubmit: function (e) {
        e.preventDefault();
        console.log('submit stuff')
    },
    render: function () {
        return (
            <BootstrapValidator options={validatorOptions}>

                <form id="buttonGroupForm" onSubmit={this._onSubmit} className="form-horizontal">

                    <fieldset>
                        <legend>
                            Default Form Elements
                        </legend>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Gender</label>
                            <div className="col-lg-9">
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="radio" name="gender" value="male"/>
                                        Male </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="gender" value="female"/>
                                        Female </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="gender" value="other"/>
                                        Other </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Languages</label>
                            <div className="col-lg-9">
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="checkbox" name="languages[]" value="english"/>
                                        English </label>
                                    <label className="btn btn-default">
                                        <input type="checkbox" name="languages[]" value="german"/>
                                        German </label>
                                    <label className="btn btn-default">
                                        <input type="checkbox" name="languages[]" value="french"/>
                                        French </label>
                                    <label className="btn btn-default">
                                        <input type="checkbox" name="languages[]" value="russian"/>
                                        Russian </label>
                                    <label className="btn btn-default">
                                        <input type="checkbox" name="languages[]" value="italian"/>
                                        Italian </label>
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

export default ButtonGroupForm