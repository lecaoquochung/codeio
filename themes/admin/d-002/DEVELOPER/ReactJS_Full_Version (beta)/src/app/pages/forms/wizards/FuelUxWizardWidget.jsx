import React from 'react'

import JarvisWidget from '../../../../components/layout/widgets/JarvisWidget.jsx'
import FuelUxWizard from '../../../../components/forms/wizards/FuelUxWizard.jsx'


let FuelUxWizardWidget = React.createClass({
    _onWizardComplete: function (data) {
        console.log('fuelux wizard submit stuff', data)
    },
    render: function () {
        return (
            <JarvisWidget editbutton={false} deletebutton={false}>

                <header>
                    <h2>Fuel Wizard </h2>

                </header>

                {/* widget div*/}
                <div>

                    {/* widget content */}
                    <FuelUxWizard className="widget-body fuelux" onComplete={this._onWizardComplete}>

                        <div className="wizard">
                            <ul className="steps">
                                <li data-step="1" className="active">
                                    <span className="badge badge-info">1</span>Step 1<span className="chevron"/>
                                </li>
                                <li data-step="2">
                                    <span className="badge">2</span>Step 2<span className="chevron"/>
                                </li>
                                <li data-step="3">
                                    <span className="badge">3</span>Step 3<span className="chevron"/>
                                </li>
                                <li data-step="4">
                                    <span className="badge">4</span>Step 4<span className="chevron"/>
                                </li>
                                <li data-step="5">
                                    <span className="badge">5</span>Step 5<span className="chevron"/>
                                </li>
                            </ul>
                            <div className="actions">
                                <button type="button" className="btn btn-sm btn-primary btn-prev">
                                    <i className="fa fa-arrow-left"/>Prev
                                </button>
                                <button type="button" className="btn btn-sm btn-success btn-next" data-last="Finish">
                                    Next<i className="fa fa-arrow-right"/>
                                </button>
                            </div>
                        </div>
                        <div className="step-content">
                            <form className="form-horizontal">

                                <div className="step-pane active" data-step="1">
                                    <h3><strong>Step 1 </strong> - Validation states</h3>

                                    {/* wizard form starts here */}
                                    <fieldset>

                                        <div className="form-group has-warning">
                                            <label className="col-md-2 control-label">Input warning</label>

                                            <div className="col-md-10">
                                                <div className="input-group">
                                                    <input className="form-control" type="text"/>
                                                    <span className="input-group-addon"><i
                                                        className="fa fa-warning"/></span>
                                                </div>
                                                <span className="help-block">Something may have gone wrong</span>
                                            </div>

                                        </div>

                                        <div className="form-group has-error">
                                            <label className="col-md-2 control-label">Input error</label>

                                            <div className="col-md-10">
                                                <div className="input-group">
                                                    <input className="form-control" type="text"/>
                                                    <span className="input-group-addon"><i
                                                        className="glyphicon glyphicon-remove-circle"/></span>
                                                </div>
                                                <span className="help-block"><i className="fa fa-warning"/> Please correct the error</span>
                                            </div>
                                        </div>

                                        <div className="form-group has-success">
                                            <label className="col-md-2 control-label">Input success</label>

                                            <div className="col-md-10">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i
                                                        className="fa fa-dollar"/></span>
                                                    <input className="form-control" type="text"/>
                                                    <span className="input-group-addon"><i
                                                        className="fa fa-check"/></span>
                                                </div>
                                                <span className="help-block">Something may have gone wrong</span>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-md-2">Input icon success</label>

                                            <div className="col-md-10">
                                                <div className="row">
                                                    <div className="col-sm-12">

                                                        <div className="input-icon-left">
                                                            <i className="fa txt-color-green fa-check"/>
                                                            <input className="form-control" placeholder="Left Icon"
                                                                   type="text"/>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </fieldset>

                                </div>

                                <div className="step-pane" data-step="2">
                                    <h3><strong>Step 2 </strong> - Alerts</h3>

                                    <div className="alert alert-warning fade in">
                                        <button className="close" data-dismiss="alert">
                                            ×
                                        </button>
                                        <i className="fa-fw fa fa-warning"/>
                                        <strong>Warning</strong> Your monthly traffic is reaching limit.
                                    </div>

                                    <div className="alert alert-success fade in">
                                        <button className="close" data-dismiss="alert">
                                            ×
                                        </button>
                                        <i className="fa-fw fa fa-check"/>
                                        <strong>Success</strong> The page has been added.
                                    </div>

                                    <div className="alert alert-info fade in">
                                        <button className="close" data-dismiss="alert">
                                            ×
                                        </button>
                                        <i className="fa-fw fa fa-info"/>
                                        <strong>Info!</strong> You have 198 unread messages.
                                    </div>

                                    <div className="alert alert-danger fade in">
                                        <button className="close" data-dismiss="alert">
                                            ×
                                        </button>
                                        <i className="fa-fw fa fa-times"/>
                                        <strong>Error!</strong> The daily cronjob has failed.
                                    </div>

                                </div>

                                <div className="step-pane" data-step="3">
                                    <h3><strong>Step 3 </strong> - Wizard continued</h3>
                                    <br/>
                                    <br/>

                                    <h1 className="text-center text-primary"> This will be your Step 3 </h1>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>

                                <div className="step-pane" data-step="4">
                                    <h3><strong>Step 4 </strong> - Wizard continued...</h3>
                                    <br/>
                                    <br/>

                                    <h1 className="text-center text-danger"> This will be your Step 4 </h1>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>

                                <div className="step-pane" data-step="5">
                                    <h3><strong>Step 5 </strong> - Finished!</h3>
                                    <br/>
                                    <br/>

                                    <h1 className="text-center text-success"><i className="fa fa-check"/>
                                        Congratulations!
                                        <br/>
                                        <small>Click finish to end wizard</small>
                                    </h1>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </div>

                            </form>
                        </div>

                    </FuelUxWizard>
                    {/* end widget content */}

                </div>
                {/* end widget div */}

            </JarvisWidget>

        )
    }
});

export default FuelUxWizardWidget