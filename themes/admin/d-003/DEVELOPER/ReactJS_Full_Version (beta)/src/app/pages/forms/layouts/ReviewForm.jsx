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
        review : {
            required : true,
            minlength : 20
        },
        quality : {
            required : true
        },
        reliability : {
            required : true
        },
        overall : {
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
            email : '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
        },
        review : {
            required : 'Please enter your review'
        },
        quality : {
            required : 'Please rate quality of the product'
        },
        reliability : {
            required : 'Please rate reliability of the product'
        },
        overall : {
            required : 'Please rate the product'
        }
    }

};

let ReviewForm = React.createClass({
    _onSubmit: function(e){
        e.preventDefault();
        console.log('submit stuff')
    },
    render: function () {
        return (
            <UiValidate options={validationOptions}>
                <form id="review-form" className="smart-form" noValidate="novalidate" onSubmit={this._onSubmit}>
                    <header>
                        Review form
                    </header>

                    <fieldset>
                        <section>
                            <label className="input"> <i className="icon-append fa fa-user"/>
                                <input type="text" name="name" id="name" placeholder="Your name"/>
                            </label>
                        </section>

                        <section>
                            <label className="input"> <i className="icon-append fa fa-envelope-o"/>
                                <input type="email" name="email" id="email" placeholder="Your e-mail"/>
                            </label>
                        </section>

                        <section>
                            <label className="label"/>
                            <label className="textarea"> <i className="icon-append fa fa-comment"/>
                                <textarea rows="3" name="review" id="review" placeholder="Text of the review"/>
                            </label>
                        </section>

                        <section>
                            <div className="rating">
                                <input type="radio" name="quality" id="quality-5"/>
                                <label htmlFor="quality-5"><i className="fa fa-star"/></label>
                                <input type="radio" name="quality" id="quality-4"/>
                                <label htmlFor="quality-4"><i className="fa fa-star"/></label>
                                <input type="radio" name="quality" id="quality-3"/>
                                <label htmlFor="quality-3"><i className="fa fa-star"/></label>
                                <input type="radio" name="quality" id="quality-2"/>
                                <label htmlFor="quality-2"><i className="fa fa-star"/></label>
                                <input type="radio" name="quality" id="quality-1"/>
                                <label htmlFor="quality-1"><i className="fa fa-star"/></label>
                                Quality of the product
                            </div>

                            <div className="rating">
                                <input type="radio" name="reliability" id="reliability-5"/>
                                <label htmlFor="reliability-5"><i className="fa fa-star"/></label>
                                <input type="radio" name="reliability" id="reliability-4"/>
                                <label htmlFor="reliability-4"><i className="fa fa-star"/></label>
                                <input type="radio" name="reliability" id="reliability-3"/>
                                <label htmlFor="reliability-3"><i className="fa fa-star"/></label>
                                <input type="radio" name="reliability" id="reliability-2"/>
                                <label htmlFor="reliability-2"><i className="fa fa-star"/></label>
                                <input type="radio" name="reliability" id="reliability-1"/>
                                <label htmlFor="reliability-1"><i className="fa fa-star"/></label>
                                Reliability of the product
                            </div>

                            <div className="rating">
                                <input type="radio" name="overall" id="overall-5"/>
                                <label htmlFor="overall-5"><i className="fa fa-star"/></label>
                                <input type="radio" name="overall" id="overall-4"/>
                                <label htmlFor="overall-4"><i className="fa fa-star"/></label>
                                <input type="radio" name="overall" id="overall-3"/>
                                <label htmlFor="overall-3"><i className="fa fa-star"/></label>
                                <input type="radio" name="overall" id="overall-2"/>
                                <label htmlFor="overall-2"><i className="fa fa-star"/></label>
                                <input type="radio" name="overall" id="overall-1"/>
                                <label htmlFor="overall-1"><i className="fa fa-star"/></label>
                                Overall rating
                            </div>
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

export default ReviewForm