import React from 'react'

import UiValidate from '../../../components/forms/validation/UiValidate.jsx'
let Forgot = React.createClass({
    render: function () {
        return (
            <div id="extr-page" >
                <header id="header" className="animated fadeInDown">

                    <div id="logo-group">
                        <span id="logo"> <img src="styles/img/logo.png" alt="SmartAdmin"/> </span>
                    </div>

                    <span id="extr-page-header-space"> <span className="hidden-mobile hiddex-xs">Need an account?</span> <a ui-sref="register" className="btn btn-danger">Create account</a> </span>

                </header>
                <div id="main" role="main" className="animated fadeInDown">

                    <div id="content" className="container">

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
                                <h1 className="txt-color-red login-header-big">SmartAdmin</h1>
                                <div className="hero">

                                    <div className="pull-left login-desc-box-l">
                                        <h4 className="paragraph-header">It's Okay to be Smart. Experience the simplicity of SmartAdmin, everywhere you go!</h4>
                                        <div className="login-app-icons">
                                            <a href="#/dashboard" className="btn btn-danger btn-sm">Frontend Template</a>
                                            <span> </span>
                                            <a href="#/smartadmin/different-versions.html" className="btn btn-danger btn-sm">Find out more</a>
                                        </div>
                                    </div>

                                    <img src="styles/img/demo/iphoneview.png" className="pull-right display-image" alt="" style={{width:'210px'}}/>

                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <h5 className="about-heading">About SmartAdmin - Are you up to date?</h5>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <h5 className="about-heading">Not just your average template!</h5>
                                        <p>
                                            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi voluptatem accusantium!
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                <div className="well no-padding">
                                    <form action="#/login" id="login-form" className="smart-form client-form">
                                        <header>
                                            Forgot Password
                                        </header>

                                        <fieldset>

                                            <section>
                                                <label className="label">Enter your email address</label>
                                                <label className="input"> <i className="icon-append fa fa-envelope"/>
                                                    <input type="email" name="email"/>
                                                    <b className="tooltip tooltip-top-right"><i className="fa fa-envelope txt-color-teal"/> Please enter email address for password reset</b></label>
                                            </section>
                                            <section>
										<span className="timeline-seperator text-center text-primary"> <span className="font-sm">OR</span>
                            </span></section>
                                            <section>
                                                <label className="label">Your Username</label>
                                                <label className="input"> <i className="icon-append fa fa-user"/>
                                                    <input type="text" name="username"/>
                                                    <b className="tooltip tooltip-top-right"><i className="fa fa-user txt-color-teal"/> Enter your username</b> </label>
                                                <div className="note">
                                                    <a href="#/login">I remembered my password!</a>
                                                </div>
                                            </section>

                                        </fieldset>
                                        <footer>
                                            <button type="submit" className="btn btn-primary">
                                                <i className="fa fa-refresh"/> Reset Password
                                            </button>
                                        </footer>
                                    </form>

                                </div>

                                <h5 className="text-center"> - Or sign in using -</h5>

                                <ul className="list-inline text-center">
                                    <li>
                                        <a href-void="" className="btn btn-primary btn-circle"><i className="fa fa-facebook"/></a>
                                    </li>
                                    <li>
                                        <a href-void="" className="btn btn-info btn-circle"><i className="fa fa-twitter"/></a>
                                    </li>
                                    <li>
                                        <a href-void="" className="btn btn-warning btn-circle"><i className="fa fa-linkedin"/></a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
});

export default Forgot