import React from 'react'
import UiValidate from '../../../../components/forms/validation/UiValidate.jsx'
import MaskedInput from '../../../../components/forms/inputs/MaskedInput.jsx'
import UiDatepicker from '../../../../components/forms/inputs/UiDatepicker.jsx'


let validationOptions = {

    // Rules for form validation
    rules: {
        username: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 3,
            maxlength: 20
        },
        passwordConfirm: {
            required: true,
            minlength: 3,
            maxlength: 20,
            equalTo: '#password'
        },
        firstname: {
            required: true
        },
        lastname: {
            required: true
        },
        gender: {
            required: true
        },
        terms: {
            required: true
        }
    },

    // Messages for form validation
    messages: {
        login: {
            required: 'Please enter your login'
        },
        email: {
            required: 'Please enter your email address',
            email: 'Please enter a VALID email address'
        },
        password: {
            required: 'Please enter your password'
        },
        passwordConfirm: {
            required: 'Please enter your password one more time',
            equalTo: 'Please enter the same password as above'
        },
        firstname: {
            required: 'Please select your first name'
        },
        lastname: {
            required: 'Please select your last name'
        },
        gender: {
            required: 'Please select your gender'
        },
        terms: {
            required: 'You must agree with Terms and Conditions'
        }
    }

};

let RegistrationForm = React.createClass({
    _onSubmit: function(e){
        e.preventDefault();
        console.log('submit stuff')
    },
    render: function () {
        return (
            <UiValidate options={validationOptions}>
                <form id="smart-form-register" className="smart-form" noValidate="novalidate" onSubmit={this._onSubmit}>
                    <header>
                        Registration form
                    </header>

                    <fieldset>
                        <section>
                            <label className="input"> <i className="icon-append fa fa-user"/>
                                <input type="text" name="username" placeholder="Username"/>
                                <b className="tooltip tooltip-bottom-right">Needed to enter the website</b> </label>
                        </section>


                        <section>
                            <label className="input"> <i className="icon-append fa fa-envelope-o"/>
                                <input type="email" name="email" placeholder="Email address"/>
                                <b className="tooltip tooltip-bottom-right">Needed to verify your account</b> </label>
                        </section>

                        <section>
                            <label className="input"> <i className="icon-append fa fa-lock"/>
                                <input type="password" name="password" placeholder="Password" id="password"/>
                                <b className="tooltip tooltip-bottom-right">Don't forget your password</b> </label>
                        </section>

                        <section>
                            <label className="input"> <i className="icon-append fa fa-lock"/>
                                <input type="password" name="passwordConfirm" placeholder="Confirm password"/>
                                <b className="tooltip tooltip-bottom-right">Don't forget your password</b> </label>
                        </section>
                    </fieldset>

                    <fieldset>
                        <div className="row">
                            <section className="col col-6">
                                <label className="input">
                                    <input type="text" name="firstname" placeholder="First name"
                                           />
                                </label>
                            </section>
                            <section className="col col-6">
                                <label className="input">
                                    <input type="text" name="lastname" placeholder="Last name"
                                           />
                                </label>
                            </section>
                        </div>

                        <div className="row">
                            <section className="col col-6">
                                <label className="select">
                                    <select name="gender" defaultValue={"0"}>
                                        <option value="0" disabled={true}>Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Prefer not to answer</option>
                                    </select> <i/> </label>
                            </section>
                            <section className="col col-6">
                                <label className="input"> <i className="icon-append fa fa-calendar"/>
                                    <UiDatepicker type="text" name="request" placeholder="Request activation on"
                                           dateFormat="dd/mm/yy"/>
                                </label>
                            </section>
                        </div>

                        <section>
                            <label className="checkbox">
                                <input type="checkbox" name="subscription" id="subscription"/>
                                <i/>I want to receive news and special offers</label>
                            <label className="checkbox">
                                <input type="checkbox" name="terms" id="terms"/>
                                <i/>I agree with the Terms and Conditions</label>
                        </section>
                    </fieldset>
                    <footer>
                        <button type="submit" className="btn btn-primary">
                            Validate Form
                        </button>
                    </footer>
                </form>
            </UiValidate>
        )
    }
});

export default RegistrationForm