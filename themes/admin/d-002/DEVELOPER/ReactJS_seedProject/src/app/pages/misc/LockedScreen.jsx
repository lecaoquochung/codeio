import React from 'react'

let LockedScreen = React.createClass({
    render: function () {
        return (
            <div id="lock-page">
                <div id="main" role="main">
                    <link rel="stylesheet" href="/styles/css/lockscreen.min.css"/>
                    <form className="lockscreen animated flipInY" action="#/dashboard">
                        <div className="logo">
                            <h1 className="semi-bold"><img src="styles/img/logo-o.png" alt=""/> SmartAdmin</h1>
                        </div>
                        <div>
                            <img src="styles/img/avatars/sunny-big.png" alt="" width="120" height="120"/>
                            <div>
                                <h1><i className="fa fa-user fa-3x text-muted air air-top-right hidden-mobile"/>John Doe
                                    <small><i className="fa fa-lock text-muted"/> &nbsp;Locked</small>
                                </h1>
                                <p className="text-muted">
                                    <a href="mailto:simmons@smartadmin">john.doe@smartadmin.com</a>
                                </p>

                                <div className="input-group">
                                    <input className="form-control" type="password" placeholder="Password"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary" type="submit">
                                            <i className="fa fa-key"/>
                                        </button>
                                    </div>
                                </div>
                                <p className="no-margin margin-top-5">
                                    Logged as someone else? <a href="#/login"> Click here</a>
                                </p>
                            </div>

                        </div>
                        <p className="font-xs margin-top-5">
                            Copyright SmartAdmin 2014-2020.

                        </p>
                    </form>

                </div>
            </div>
        )
    }
});

export default LockedScreen