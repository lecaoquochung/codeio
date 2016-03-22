import React from 'react'

import BootstrapValidator from '../../../../components/forms/validation/BootstrapValidator.jsx'

let validatorOptions = {
    feedbackIcons : {
        valid : 'glyphicon glyphicon-ok',
        invalid : 'glyphicon glyphicon-remove',
        validating : 'glyphicon glyphicon-refresh'
    },
    fields : {
        price : {
            validators : {
                notEmpty : {
                    message : 'The price is required'
                },
                numeric : {
                    message : 'The price must be a number'
                }
            }
        },
        amount : {
            validators : {
                notEmpty : {
                    message : 'The amount is required'
                },
                numeric : {
                    message : 'The amount must be a number'
                }
            }
        },
        color : {
            validators : {
                notEmpty : {
                    message : 'The color is required'
                }
            }
        },
        size : {
            validators : {
                notEmpty : {
                    message : 'The size is required'
                }
            }
        }
    }
};

let ProductForm = React.createClass({
    _onSubmit: function (e) {
        e.preventDefault();
        console.log('submit stuff')
    },
    render: function () {
        return (
            <BootstrapValidator options={validatorOptions}>
                <form id="productForm" onSubmit={this._onSubmit} className="form-horizontal">

                    <fieldset>
                        <legend>
                            Default Form Elements
                        </legend>
                        <div className="form-group">
                            <label className="col-xs-2 col-lg-3 control-label">Price</label>
                            <div className="col-xs-9 col-lg-6 inputGroupContainer">
                                <div className="input-group">
                                    <input type="text" className="form-control" name="price"/>
                                    <span className="input-group-addon">$</span>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-xs-2 col-lg-3 control-label">Amount</label>
                            <div className="col-xs-9 col-lg-6 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon">&#8364;</span>
                                    <input type="text" className="form-control" name="amount"/>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-xs-2 col-lg-3 control-label">Color</label>
                            <div className="col-xs-9 col-lg-6 selectContainer">
                                <select className="form-control" name="color">
                                    <option value="">Choose a color</option>
                                    <option value="blue">Blue</option>
                                    <option value="green">Green</option>
                                    <option value="red">Red</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="white">White</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="col-xs-2 col-lg-3 control-label">Size</label>
                            <div className="col-xs-9 col-lg-6 selectContainer">
                                <select className="form-control" name="size">
                                    <option value="">Choose a size</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
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

export default ProductForm