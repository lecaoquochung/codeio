import React from 'react'

let Page500 = React.createClass({
    render: function () {
        return (
            <div id="content">
                {/* row */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="text-center error-box">
                                    <h1 className="error-text tada animated"><i className="fa fa-times-circle text-danger error-icon-shadow"/> Error 500</h1>
                                    <h2 className="font-xl"><strong>Oooops, Something went wrong!</strong></h2>
                                    <br/>
                                    <p className="lead semi-bold">
                                        <strong>You have experienced a technical error. We apologize.</strong><br/><br/>
                                        <small>
                                            We are working hard to correct this issue. Please wait a few moments and try your search again. <br/> In the meantime, check out whats new on SmartAdmin:
                                        </small>
                                    </p>
                                    <ul className="error-search text-left font-md">
                                        <li><a href-void=""><small>Go to My Dashboard <i className="fa fa-arrow-right"/></small></a></li>
                                        <li><a href-void=""><small>Contact SmartAdmin IT Staff <i className="fa fa-mail-forward"/></small></a></li>
                                        <li><a href-void=""><small>Report error!</small></a></li>
                                        <li><a href-void=""><small>Go back</small></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end row */}
            </div>
        )
    }
});

export default Page500