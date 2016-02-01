import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import CheckoutForm from './layouts/CheckoutForm.jsx'
import OrderForm from './layouts/OrderForm.jsx'
import ReviewForm from './layouts/ReviewForm.jsx'
import RegistrationForm from './layouts/RegistrationForm.jsx'
import CommentForm from './layouts/CommentForm.jsx'
import ContactsForm from './layouts/ContactsForm.jsx'

let FormLayouts = React.createClass({
    render: function () {
        return (
        <div id="content">
            <div className="row">
                <BigBreadcrumbs items={['Forms', 'Form Layouts']} icon="table" className="col-xs-12 col-sm-9 col-md-9 col-lg-9"/>

                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    {/* Button trigger modal */}
                    <a ng-click="openModal()" className="btn btn-success btn-lg pull-right header-btn hidden-mobile"><i className="fa fa-circle-arrow-up fa-lg"/> Launch form modal</a>
                </div>
            </div>


            <div className="alert alert-block alert-success" dismisser="">

                <h4 className="alert-heading"><i className="fa fa-check-square-o"/> Check validation!</h4>

                <p>
                    You may also check the form validation by clicking on the form action button. Please try and see the results
                    below!
                </p>
            </div>

            {/* widget grid */}

            <WidgetGrid>


                {/* START ROW */}

                <div className="row">

                    {/* NEW COL START */}
                    <article className="col-sm-12 col-md-12 col-lg-6">

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                <h2>Checkout Form </h2>

                            </header>

                            {/* widget div*/}
                            <div>


                                {/* widget content */}
                                <div className="widget-body no-padding">

                                    <CheckoutForm />

                                </div>
                                {/* end widget content */}

                            </div>
                            {/* end widget div */}

                        </JarvisWidget>
                        {/* end widget */}

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                <h2>Order form </h2>

                            </header>

                            {/* widget div*/}
                            <div>

                                {/* widget content */}
                                <div className="widget-body no-padding">

                                    <OrderForm />

                                </div>
                                {/* end widget content */}

                            </div>
                            {/* end widget div */}

                        </JarvisWidget>
                        {/* end widget */}

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                <h2>Review form </h2>

                            </header>

                            {/* widget div*/}
                            <div>


                                {/* widget content */}
                                <div className="widget-body no-padding">

                                    <ReviewForm />

                                </div>
                                {/* end widget content */}

                            </div>
                            {/* end widget div */}

                        </JarvisWidget>
                        {/* end widget */}

                    </article>
                    {/* END COL */}

                    {/* NEW COL START */}
                    <article className="col-sm-12 col-md-12 col-lg-6">

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                <h2>Registration form</h2>

                            </header>

                            {/* widget div*/}
                            <div>


                                {/* widget content */}
                                <div className="widget-body no-padding">

                                    <RegistrationForm />

                                </div>
                                {/* end widget content */}

                            </div>
                            {/* end widget div */}

                        </JarvisWidget>
                        {/* end widget */}

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                <h2>Comment form </h2>

                            </header>

                            {/* widget div*/}
                            <div>


                                {/* widget content */}
                                <div className="widget-body no-padding">

                                    <CommentForm />


                                </div>
                                {/* end widget content */}

                            </div>
                            {/* end widget div */}

                        </JarvisWidget>
                        {/* end widget */}


                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                <h2>Contacts form </h2>

                            </header>

                            {/* widget div*/}
                            <div>


                                {/* widget content */}
                                <div className="widget-body no-padding">

                                    <ContactsForm />

                                </div>
                                {/* end widget content */}

                            </div>
                            {/* end widget div */}

                        </JarvisWidget>
                        {/* end widget */}


                    </article>
                    {/* END COL */}

                </div>

                {/* END ROW */}

            </WidgetGrid>

            {/* end widget grid */}


        </div>
        )
    }
});

export default FormLayouts