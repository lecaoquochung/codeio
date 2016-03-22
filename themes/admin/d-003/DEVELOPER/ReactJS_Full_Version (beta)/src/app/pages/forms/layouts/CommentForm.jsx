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
        url : {
            url : true
        },
        comment : {
            required : true
        }
    },

    // Messages for form validation
    messages : {
        name : {
            required : 'Enter your name',
        },
        email : {
            required : 'Enter your email address',
            email : 'Enter a VALID email'
        },
        url : {
            email : 'Enter a VALID url'
        },
        comment : {
            required : 'Please enter your comment'
        }
    }
};

let CommentForm = React.createClass({
    _onSubmit: function(e){
        e.preventDefault();
        console.log('submit stuff')
    },
    render: function () {
        return (
            <UiValidate options={validationOptions}>
                <form id="comment-form" className="smart-form" noValidate="novalidate" onSubmit={this._onSubmit}>
                    <header>
                        Comment form
                    </header>

                    <fieldset>
                        <div className="row">
                            <section className="col col-4">
                                <label className="label">Name</label>
                                <label className="input"> <i className="icon-append fa fa-user"/>
                                    <input type="text" name="name"/>
                                </label>
                            </section>
                            <section className="col col-4">
                                <label className="label">E-mail</label>
                                <label className="input"> <i className="icon-append fa fa-envelope-o"/>
                                    <input type="email" name="email"/>
                                </label>
                            </section>
                            <section className="col col-4">
                                <label className="label">Website</label>
                                <label className="input"> <i className="icon-append fa fa-globe"/>
                                    <input type="url" name="url"/>
                                </label>
                            </section>
                        </div>

                        <section>
                            <label className="label">Comment</label>
                            <label className="textarea"> <i className="icon-append fa fa-comment"/> <textarea rows="4"
                                                                                                              name="comment"/>
                            </label>

                            <div className="note">
                                You may use these HTML tags and attributes: &lt;a href="" title=""&gt;, &lt;abbr
                                title=""&gt;,
                                &lt;acronym title=""&gt;, &lt;b&gt;, &lt;blockquote cite=""&gt;, &lt;cite&gt;, &lt;
                                code&gt;,
                                &lt;del datetime=""&gt;, &lt;em&gt;, &lt;i&gt;, &lt;q cite=""&gt;, &lt;strike&gt;, &lt;
                                strong&gt;.
                            </div>
                        </section>
                    </fieldset>

                    <footer>
                        <button type="submit" name="submit" className="btn btn-primary">
                            Validate Form
                        </button>
                    </footer>

                    <div className="message">
                        <i className="fa fa-check fa-lg"/>

                        <p>
                            Your comment was successfully added!
                        </p>
                    </div>
                </form>
            </UiValidate>
        )
    }
});

export default CommentForm