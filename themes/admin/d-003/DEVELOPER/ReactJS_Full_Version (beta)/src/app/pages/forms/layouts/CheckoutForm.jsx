import React from 'react'

let CheckoutForm = React.createClass({
    _onSubmit: function(e){
        e.preventDefault()
        console.log('checkout submit stuff')
    },
    render: function () {
        return (
            <form id="checkout-form" className="smart-form" noValidate="novalidate" onSubmit={this._onSubmit}>

                <fieldset>
                    <div className="row">
                        <section className="col col-6">
                            <label className="input"> <i className="icon-prepend fa fa-user"/>
                                <input type="text" name="fname" placeholder="First name"/>
                            </label>
                        </section>
                        <section className="col col-6">
                            <label className="input"> <i className="icon-prepend fa fa-user"/>
                                <input type="text" name="lname" placeholder="Last name"/>
                            </label>
                        </section>
                    </div>

                    <div className="row">
                        <section className="col col-6">
                            <label className="input"> <i className="icon-prepend fa fa-envelope-o"/>
                                <input type="email" name="email" placeholder="E-mail"/>
                            </label>
                        </section>
                        <section className="col col-6">
                            <label className="input"> <i className="icon-prepend fa fa-phone"/>
                                <input type="tel" name="phone" placeholder="Phone" data-smart-masked-input="(999) 999-9999"/>
                            </label>
                        </section>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="row">
                        <section className="col col-5">
                            <label className="select">
                                <select name="country">
                                    <option value="0" defaultSelected disabled>Country</option>
                                    <option value="[[country.key]]" ng-repeat="country in countries">[[country.value]]</option>
                                </select> <i/> </label>
                        </section>

                        <section className="col col-4">
                            <label className="input">
                                <input type="text" name="city" placeholder="City"/>
                            </label>
                        </section>

                        <section className="col col-3">
                            <label className="input">
                                <input type="text" name="code" placeholder="Post code"/>
                            </label>
                        </section>
                    </div>

                    <section>
                        <label htmlFor="address2" className="input">
                            <input type="text" name="address2" id="address2" placeholder="Address"/>
                        </label>
                    </section>

                    <section>
                        <label className="textarea">
                            <textarea rows="3" name="info" placeholder="Additional info"/>
                        </label>
                    </section>
                </fieldset>

                <fieldset>
                    <section>
                        <div className="inline-group">
                            <label className="radio">
                                <input type="radio" name="radio-inline" defaultChecked/>
                                <i/>Visa</label>
                            <label className="radio">
                                <input type="radio" name="radio-inline"/>
                                <i/>MasterCard</label>
                            <label className="radio">
                                <input type="radio" name="radio-inline"/>
                                <i/>American Express</label>
                        </div>
                    </section>

                    <section>
                        <label className="input">
                            <input type="text" name="name" placeholder="Name on card"/>
                        </label>
                    </section>

                    <div className="row">
                        <section className="col col-10">
                            <label className="input">
                                <input type="text" name="card" placeholder="Card number" data-mask="9999-9999-9999-9999"/>
                            </label>
                        </section>
                        <section className="col col-2">
                            <label className="input">
                                <input type="text" name="cvv" placeholder="CVV2" data-mask="999"/>
                            </label>
                        </section>
                    </div>

                    <div className="row">
                        <label className="label col col-4">Expiration date</label>
                        <section className="col col-5">
                            <label className="select">
                                <select name="month" defaultValue={"0"}>
                                    <option value="0"  disabled>Month</option>
                                    <option value="1">January</option>
                                    <option value="1">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select> <i/> </label>
                        </section>
                        <section className="col col-3">
                            <label className="input">
                                <input type="text" name="year" placeholder="Year" data-mask="2099"/>
                            </label>
                        </section>
                    </div>
                </fieldset>

                <footer>
                    <button type="submit" className="btn btn-primary">
                        Validate Form
                    </button>
                </footer>
            </form>
        )
    }
});

export default CheckoutForm