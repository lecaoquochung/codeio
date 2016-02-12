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
        phone : {
            required : true
        },
        interested : {
            required : true
        },
        budget : {
            required : true
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
        phone : {
            required : 'Please enter your phone number'
        },
        interested : {
            required : 'Please select interested service'
        },
        budget : {
            required : 'Please select your budget'
        }
    }
};

let OrderForm = React.createClass({
    _onSubmit: function(e){
        e.preventDefault();
        console.log('submit stuff')
    },
    render: function () {
        return (
        <UiValidate options={validationOptions}>
            <form id="order-form" className="smart-form" noValidate="novalidate" onSubmit={this._onSubmit}>
                <header>
                    Order services
                </header>

                <fieldset>
                    <div className="row">
                        <section className="col col-6">
                            <label className="input"> <i className="icon-append fa fa-user"/>
                                <input type="text" name="name" placeholder="Name"/>
                            </label>
                        </section>
                        <section className="col col-6">
                            <label className="input"> <i className="icon-append fa fa-briefcase"/>
                                <input type="text" name="company" placeholder="Company"/>
                            </label>
                        </section>
                    </div>

                    <div className="row">
                        <section className="col col-6">
                            <label className="input"> <i className="icon-append fa fa-envelope-o"/>
                                <input type="email" name="email" placeholder="E-mail"/>
                            </label>
                        </section>
                        <section className="col col-6">
                            <label className="input"> <i className="icon-append fa fa-phone"/>
                                <MaskedInput type="tel" name="phone" placeholder="Phone" mask="(999) 999-9999" />
                            </label>
                        </section>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="row">
                        <section className="col col-6">
                            <label className="select">
                                <select name="interested" defaultValue={"0"}>
                                    <option value="0" disabled={true}>Interested in</option>
                                    <option value="1">design</option>
                                    <option value="1">development</option>
                                    <option value="2">illustration</option>
                                    <option value="2">branding</option>
                                    <option value="3">video</option>
                                </select> <i/> </label>
                        </section>
                        <section className="col col-6">
                            <label className="select">
                                <select name="budget" defaultValue={"0"}>
                                    <option value="0" disabled={true}>Budget</option>
                                    <option value="1">less than 5000$</option>
                                    <option value="2">5000$ - 10000$</option>
                                    <option value="3">10000$ - 20000$</option>
                                    <option value="4">more than 20000$</option>
                                </select> <i/> </label>
                        </section>
                    </div>

                    <div className="row">
                        <section className="col col-6">
                            <label className="input"> <i className="icon-append fa fa-calendar"/>
                                <UiDatepicker type="text" name="startdate" id="startdate" minRestrict="#finishdate" placeholder="Expected start date"/>
                            </label>
                        </section>
                        <section className="col col-6">
                            <label className="input"> <i className="icon-append fa fa-calendar"/>
                                <UiDatepicker type="text" name="finishdate" id="finishdate" maxRestrict="#startdate" placeholder="Expected finish date"/>
                            </label>
                        </section>
                    </div>

                    <section>
                        <div className="input input-file">
                            <span className="button"><input id="file2" type="file" name="file2" onchange="this.parentNode.nextSibling.value = this.value"/>Browse</span><input type="text" placeholder="Include some files" readOnly={true}/>
                        </div>
                    </section>

                    <section>
                        <label className="textarea"> <i className="icon-append fa fa-comment"/>
                            <textarea rows="5" name="comment" placeholder="Tell us about your project"/>
                        </label>
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

export default OrderForm