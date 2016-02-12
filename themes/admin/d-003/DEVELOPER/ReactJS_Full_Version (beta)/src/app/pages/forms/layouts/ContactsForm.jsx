import React from 'react'
import UiValidate from '../../../../components/forms/validation/UiValidate.jsx'
import MaskedInput from '../../../../components/forms/inputs/MaskedInput.jsx'
import UiDatepicker from '../../../../components/forms/inputs/UiDatepicker.jsx'


let validationOptions = {
    // Rules for form validation
    rules : {
        name : {
            required : true
        },
        email : {
            required : true,
            email : true
        },
        message : {
            required : true,
            minlength : 10
        }
    },

    // Messages for form validation
    messages : {
        name : {
            required : 'Please enter your name'
        },
        email : {
            required : 'Please enter your email address',
            email : 'Please enter a VALID email address'
        },
        message : {
            required : 'Please enter your message'
        }
    }

};

let ContactsForm = React.createClass({
    _onSubmit: function(e){
        e.preventDefault();
        console.log('submit stuff')
    },
    render: function () {
        return (
            <UiValidate options={validationOptions}>
                <form id="contact-form" className="smart-form" noValidate="novalidate" onSubmit={this._onSubmit}>
                    <header>Contacts form</header>

                    <fieldset>
                        <div className="row">
                            <section className="col col-6">
                                <label className="label">Name</label>
                                <label className="input">
                                    <i className="icon-append fa fa-user"/>
                                    <input type="text" name="name" id="named"/>
                                </label>
                            </section>
                            <section className="col col-6">
                                <label className="label">E-mail</label>
                                <label className="input">
                                    <i className="icon-append fa fa-envelope-o"/>
                                    <input type="email" name="email" id="emaild"/>
                                </label>
                            </section>
                        </div>

                        <section>
                            <label className="label">Subject</label>
                            <label className="input">
                                <i className="icon-append fa fa-tag"/>
                                <input type="text" name="subject" id="subject"/>
                            </label>
                        </section>

                        <section>
                            <label className="label">Message</label>
                            <label className="textarea">
                                <i className="icon-append fa fa-comment"/>
                                <textarea rows="4" name="message" id="message"/>
                            </label>
                        </section>

                        <section>
                            <label className="checkbox"><input type="checkbox" name="copy" id="copy"/><i/>Send a copy to
                                my
                                e-mail address</label>
                        </section>
                    </fieldset>

                    <footer>
                        <button type="submit" className="btn btn-primary">Validate Form</button>
                    </footer>

                    <div className="message">
                        <i className="fa fa-thumbs-up"/>

                        <p>Your message was successfully sent!</p>
                    </div>
                </form>
            </UiValidate>
        )
    }
});

export default ContactsForm