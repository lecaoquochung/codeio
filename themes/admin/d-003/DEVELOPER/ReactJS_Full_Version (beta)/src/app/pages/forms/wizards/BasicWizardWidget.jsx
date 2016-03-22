import React from 'react'
import JarvisWidget from '../../../../components/layout/widgets/JarvisWidget.jsx'

import UiValidate from '../../../../components/forms/validation/UiValidate.jsx'
import Wizard from '../../../../components/forms/wizards/Wizard.jsx'

import countries from '../../../../components/forms/commons/countries'

let validateOptions = {
    highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    unhighlight: function (element) {
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
    },
    errorElement: 'span',
    errorClass: 'help-block'
};

let BasicWizardWidget = React.createClass({
    _onWizardComplete: function(data){
        console.log('wizard submit stuff', data)
    },
    render: function () {
        return (
            <JarvisWidget editbutton={false} deletebutton={false} color="darken">

                <header>
                    <span className="widget-icon"> <i className="fa fa-check"/> </span>

                    <h2>Very Basic Wizard Example </h2>

                </header>

                {/* widget div*/}
                <div>

                    {/* widget content */}
                    <div className="widget-body">

                        <div className="row">
                            <UiValidate options={validateOptions}>
                                <form noValidate="novalidate">
                                    <Wizard className="col-sm-12"
                                         onComplete={this._onWizardComplete}>
                                        <div className="form-bootstrapWizard clearfix">
                                            <ul className="bootstrapWizard">
                                                <li data-smart-wizard-tab="1">
                                                    <a href="#"> <span className="step">1</span> <span
                                                        className="title">Basic information</span>
                                                    </a>
                                                </li>
                                                <li data-smart-wizard-tab="2">
                                                    <a href="#"> <span className="step">2</span> <span
                                                        className="title">Billing information</span> </a>
                                                </li>
                                                <li data-smart-wizard-tab="3">
                                                    <a href="#"> <span className="step">3</span> <span
                                                        className="title">Domain Setup</span> </a>
                                                </li>
                                                <li data-smart-wizard-tab="4">
                                                    <a href="#"> <span className="step">4</span> <span
                                                        className="title">Save Form</span> </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content">
                                            <div className="tab-pane" data-smart-wizard-pane="1">
                                                <br/>

                                                <h3><strong>Step 1 </strong> - Basic Information</h3>

                                                <div className="row">

                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i
                                                                    className="fa fa-envelope fa-lg fa-fw"/></span>
                                                                <input className="form-control input-lg"
                                                                       placeholder="email@address.com" type="text"
                                                                       name="email" data-smart-validate-input=""
                                                                       data-required="" data-email=""
                                                                       data-message-required="We need your email address to contact you"
                                                                       data-message-email="Your email address must be in the format of name@domain.com"/>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i
                                                                    className="fa fa-user fa-lg fa-fw"/></span>
                                                                <input className="form-control input-lg"
                                                                       placeholder="First Name" type="text" name="fname"
                                                                       data-smart-validate-input="" data-required=""
                                                                       data-message="Please specify your First name"/>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i
                                                                    className="fa fa-user fa-lg fa-fw"/></span>
                                                                <input className="form-control input-lg"
                                                                       placeholder="Last Name" type="text" name="lname"
                                                                       data-smart-validate-input="" data-required=""
                                                                       data-message="Please specify your Last name"/>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="tab-pane" data-smart-wizard-pane="2">
                                                <br/>

                                                <h3><strong>Step 2</strong> - Billing Information</h3>

                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i
                                                                    className="fa fa-flag fa-lg fa-fw"/></span>
                                                                <select name="country" data-smart-validate-input=""
                                                                        data-required=""
                                                                        className="form-control input-lg">

                                                                    {countries.map(function(country){
                                                                        return <option value={country.key} key={country.key}>{country.value}</option>
                                                                    })}

                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i
                                                                    className="fa fa-map-marker fa-lg fa-fw"/></span>
                                                                <select className="form-control input-lg"
                                                                        data-smart-validate-input="" data-required=""
                                                                        name="city">
                                                                    <option value="" >Select City
                                                                    </option>
                                                                    <option>Amsterdam</option>
                                                                    <option>Atlanta</option>
                                                                    <option>Baltimore</option>
                                                                    <option>Boston</option>
                                                                    <option>Buenos Aires</option>
                                                                    <option>Calgary</option>
                                                                    <option>Chicago</option>
                                                                    <option>Denver</option>
                                                                    <option>Dubai</option>
                                                                    <option>Frankfurt</option>
                                                                    <option>Hong Kong</option>
                                                                    <option>Honolulu</option>
                                                                    <option>Houston</option>
                                                                    <option>Kuala Lumpur</option>
                                                                    <option>London</option>
                                                                    <option>Los Angeles</option>
                                                                    <option>Melbourne</option>
                                                                    <option>Mexico City</option>
                                                                    <option>Miami</option>
                                                                    <option>Minneapolis</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i
                                                                    className="fa fa-envelope-o fa-lg fa-fw"/></span>
                                                                <input className="form-control input-lg"
                                                                       placeholder="Postal Code" type="text"
                                                                       name="postal" data-smart-validate-input=""
                                                                       data-required="" data-minlength="4"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i
                                                                    className="fa fa-phone fa-lg fa-fw"/></span>
                                                                <input className="form-control input-lg"
                                                                       data-smart-masked-input="+99 (999) 999-9999"
                                                                       data-mask-placeholder="X" placeholder="+1"
                                                                       type="text" name="wphone"
                                                                       data-smart-validate-input="" data-required=""
                                                                       data-minlength="10"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i
                                                                    className="fa fa-mobile fa-lg fa-fw"/></span>
                                                                <input className="form-control input-lg"
                                                                       data-smart-masked-input="+99 (999) 999-9999"
                                                                       data-mask-placeholder="X" placeholder="+01"
                                                                       type="text" name="hphone"
                                                                       data-smart-validate-input="" data-required=""
                                                                       data-minlength="10"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" data-smart-wizard-pane="3">
                                                <br/>

                                                <h3><strong>Step 3</strong> - Domain Setup</h3>

                                                <div className="alert alert-info fade in">
                                                    <button className="close" data-dismiss="alert">
                                                        ×
                                                    </button>
                                                    <i className="fa-fw fa fa-info"/>
                                                    <strong>Info!</strong> Place an info message box if you wish.
                                                </div>
                                                <div className="form-group">
                                                    <label>This is a label</label>
                                                    <input className="form-control input-lg"
                                                           placeholder="Another input box here..." type="text"
                                                           name="etc" id="etc"/>
                                                </div>
                                            </div>
                                            <div className="tab-pane" data-smart-wizard-pane="4">
                                                <br/>

                                                <h3><strong>Step 4</strong> - Save Form</h3>
                                                <br/>

                                                <h1 className="text-center text-success"><strong><i
                                                    className="fa fa-check fa-lg"/> Complete</strong></h1>
                                                <h4 className="text-center">Click next to finish</h4>
                                                <br/>
                                                <br/>
                                            </div>

                                            <div className="form-actions">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <ul className="pager wizard no-margin">
                                                            <li className="previous" data-smart-wizard-prev="">
                                                                <a href="#" className="btn btn-lg btn-default">
                                                                    Previous </a>
                                                            </li>
                                                            <li className="next" data-smart-wizard-next="">
                                                                <a href="#" className="btn btn-lg txt-color-darken">
                                                                    Next </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </Wizard>
                                </form>
                            </UiValidate>
                        </div>

                    </div>
                    {/* end widget content */}

                </div>
                {/* end widget div */}

            </JarvisWidget>

        )
    }
});

export default BasicWizardWidget