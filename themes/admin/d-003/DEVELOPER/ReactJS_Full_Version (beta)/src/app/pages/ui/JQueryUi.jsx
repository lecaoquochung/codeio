import React from 'react'
import ReactDOM from 'react-dom'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import UiDialogLauncher from '../../../components/ui/UiDialogLauncher.jsx'
import UiTabs from '../../../components/ui/UiTabs.jsx'
import UiMenu from '../../../components/ui/UiMenu.jsx'
import UiAccordion from '../../../components/ui/UiAccordion.jsx'
import UiAutocomplete from '../../../components/ui/UiAutocomplete.jsx'
import UiAjaxAutocomplete from '../../../components/ui/UiAjaxAutocomplete.jsx'
import UiProgressbar from '../../../components/ui/UiProgressbar.jsx'
import UiSlider from '../../../components/forms/inputs/UiSlider.jsx'
import UiSpinner from '../../../components/forms/inputs/UiSpinner.jsx'


let JQueryUi = React.createClass({
    getInitialState: function(){
        return {
            demoAjaxAutocomplete: ''
        }
    },
    _onAjaxAutoCompleteFind: function(data){
        this.setState({
            demoAjaxAutocomplete: data
        })
    },
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['UI Elements', 'JQuery UI']} icon="desktop"
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>


                {/* row */}
                <div className="row">

                    <div className="col-sm-6 col-md-6 col-lg-6">

                        <div className="well well-sm well-light">
                            <h3>Dialogue</h3>

                            <UiDialogLauncher
                                header="<h4><i class='fa fa-warning'/> Empty the recycle bin?</h4>"
                                content={<DemoDialogSimple />}
                                className="btn btn-info">Open Dialog</UiDialogLauncher>
                            &nbsp;
                            <UiDialogLauncher
                                header="<h4><i class='icon-ok'/> jQuery UI Dialog</h4>"
                                content={<DemoDialogModal />}
                                modal={true}
                                className="btn bg-color-purple txt-color-white">Open Modal Dialog </UiDialogLauncher>

                        </div>

                        <div className="well well-sm well-light">
                            <h3>Jquery Tabs
                                <br/>
                                <small>Simple Tabs</small>
                            </h3>

                            <UiTabs id="tabs">
                                <ul>
                                    <li>
                                        <a href="#tabs-a">First</a>
                                    </li>
                                    <li>
                                        <a href="#tabs-b">Second</a>
                                    </li>
                                    <li>
                                        <a href="#tabs-c">Third</a>
                                    </li>
                                </ul>
                                <div id="tabs-a">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div id="tabs-b">
                                    <p>
                                        Phasellus mattis tincidunt nibh. Cras orci urna, blandit id, pretium vel,
                                        aliquet ornare, felis.
                                        Maecenas scelerisque sem non nisl. Fusce sed lorem in enim dictum bibendum.
                                    </p>
                                </div>
                                <div id="tabs-c">
                                    <p>
                                        Nam dui erat, auctor a, dignissim quis, sollicitudin eu, felis. Pellentesque
                                        nisi urna, interdum
                                        eget, sagittis et, consequat vestibulum, lacus. Mauris porttitor ullamcorper
                                        augue.
                                    </p>
                                </div>
                            </UiTabs>

                            <hr className="simple"/>

                        </div>

                        <div className="well well-sm well-light">
                            <h3>Slider
                                <br/>
                                <small>Horizontal Slider with tooltip</small>
                            </h3>

                            <UiSlider className="slider slider-primary" id="g1" defaultValue=""
                                   data-slider-max="500" data-slider-value="185" data-slider-selection="before"
                                   data-slider-handle="round"/>

                            <UiSlider className="slider slider-success" id="g2" defaultValue=""
                                   data-slider-max="1000" data-slider-step="1" data-slider-value="[150,760]"
                                   data-slider-handle="squar"/>


                            <h3>Usage
                                <small>Its so simple...</small>
                            </h3>
				<pre>
<code><strong>&lt;input className="slider slider-primary" data-slider-min="10" .. /></strong></code>

data-slider-min="10"       <span className="text-muted"> // slider min value</span>
data-slider-max="500"      <span className="text-muted"> // slider max value</span>
data-slider-value="315"    <span className="text-muted"> // handler position on slider</span>
data-slider-handle="round" <span className="text-muted"> // round or square</span> </pre>


                        </div>

                        <div className="well well-sm well-light">
                            <h3>Spinner</h3>

                            <div className="row">

                                <div className="col-sm-6 col-md-6 col-lg-6">

                                    <div className="form-group">
                                        <label>Spinner Right</label>
                                        <UiSpinner spinnerType="decimal" className="form-control"
                                                  name="spinner-decimal" defaultValue="7.99"
                                               />
                                    </div>

                                </div>

                                <div className="col-sm-6 col-md-6 col-lg-6">

                                    <div className="form-group">
                                        <label>Spinner Left</label>
                                        <UiSpinner className="form-control spinner-left" name="spinner" defaultValue="1"
                                               />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">

                        <div className="well well-sm well-light">

                            <h3>Menu <br/>
                                <small>Easy Menu List</small>
                            </h3>

                            <UiMenu>
                                <ul id="menu">
                                    <li>
                                        <a href-void="" className="ui-state-disabled">Aberdeen (disabled)</a>
                                    </li>
                                    <li>
                                        <a href-void="">Ada</a>
                                    </li>
                                    <li>
                                        <a href-void="">Adamsville</a>
                                    </li>
                                    <li>
                                        <a href-void="">Addyston</a>
                                    </li>
                                    <li>
                                        <a href-void="">Delphi</a>
                                        <ul>
                                            <li>
                                                <a href-void="">Ada</a>
                                            </li>
                                            <li>
                                                <a href-void="">Saarland</a>
                                            </li>
                                            <li>
                                                <a href-void="">Salzburg</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href-void="">Saarland</a>
                                    </li>
                                    <li>
                                        <a href-void="">Salzburg</a>
                                        <ul>
                                            <li>
                                                <a href-void="">Delphi</a>
                                                <ul>
                                                    <li>
                                                        <a href-void="" className="ui-state-disabled">Ada</a>
                                                    </li>
                                                    <li>
                                                        <a href-void="">Saarland</a>
                                                    </li>
                                                    <li>
                                                        <a href-void="">Salzburg</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="?Delphi">Delphi</a>
                                                <ul>
                                                    <li>
                                                        <a href-void="">Ada</a>
                                                    </li>
                                                    <li>
                                                        <a href-void="">Saarland</a>
                                                    </li>
                                                    <li>
                                                        <a href-void="">Salzburg</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href-void="">Perch</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </UiMenu>

                        </div>


                        <div className="well well-sm well-light">
                            <h3>Auto Complete
                                <br/>
                                <small>Type something to reveal autocompelete tags</small>
                            </h3>

                            <UiAutocomplete className="form-control" placeholder="Type something..."
                                   source={demoAutocompleteWords} />

                            <p className="note">
                                Usage: data-autocomplete= ' ["this", "message", "bold", "text"] '
                            </p>

                            <h3>Auto Complete Ajax
                                <br/>
                                <small>Fetches data from JSON url</small>
                            </h3>

                            <UiAjaxAutocomplete className="form-control" placeholder="City..." onFind={this._onAjaxAutoCompleteFind} id="city"/>

                            <div id="log" className="font-xs margin-top-10 text-danger">
                                {this.state.demoAjaxAutocomplete}
                            </div>

                        </div>

                        <div className="well well-sm well-light">
                            <h3>Accordion
                                <br/>
                                <small>With fontawesome icons</small>
                            </h3>

                            <UiAccordion>
                                <div>
                                    <div>
                                        <h4>First</h4>

                                        <div className="padding-10">
                                            Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus.
                                            Curabitur
                                            nec arcu. Donec
                                            sollicitudin mi sit amet mauris.
                                            Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris
                                            dapibus lacus auctor
                                            risus. Aenean tempor ullamcorper leo.
                                            Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam
                                            sodales
                                            tortor vitae ipsum.
                                            Aliquam nulla. Duis aliquam molestie erat.
                                            Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt
                                            interdum. Phasellus
                                            ipsum. Nunc tristique tempus lectus.
                                        </div>
                                    </div>

                                    <div>
                                        <h4>Second</h4>

                                        <div className="padding-10">
                                            Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus.
                                            Curabitur
                                            nec arcu. Donec
                                            sollicitudin mi sit amet mauris.
                                            Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris
                                            dapibus lacus auctor
                                            risus. Aenean tempor ullamcorper leo.
                                            Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam
                                            sodales
                                            tortor vitae ipsum.
                                            Aliquam nulla. Duis aliquam molestie erat.
                                            Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt
                                            interdum. Phasellus
                                            ipsum. Nunc tristique tempus lectus.
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Third</h4>

                                        <div className="padding-10">
                                            Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus.
                                            Curabitur
                                            nec arcu. Donec
                                            sollicitudin mi sit amet mauris.
                                            Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris
                                            dapibus lacus auctor
                                            risus. Aenean tempor ullamcorper leo.
                                            Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam
                                            sodales
                                            tortor vitae ipsum.
                                            Aliquam nulla. Duis aliquam molestie erat.
                                            Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt
                                            interdum. Phasellus
                                            ipsum. Nunc tristique tempus lectus.
                                        </div>
                                    </div>
                                </div>
                            </UiAccordion>
                        </div>

                        <div className="well well-sm well-light">
                            <h3>Progress Bar
                                <br/>
                                <small>Default progress bar.</small>
                            </h3>
                            <div className="bar-holder">
                                <div className="progress">
                                    <UiProgressbar className="progress-bar" data-transitiongoal="25" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
});

export default JQueryUi


let DemoDialogSimple = React.createClass({
    _submitDialog: function (e) {
        console.log('submit stuff')
        this.props.closeDialog(e)
    },
    render: function () {
        return (
            <div id="dialog_simple">
                <form>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo
                        consequat.
                    </p>

                    <div>
                        <button className="btn btn-danger" onClick={this._submitDialog}><i
                            className="fa fa-trash-o"/>&nbsp; Delete all items
                        </button>
                        <button className="btn btn-default" onClick={this.props.closeDialog}><i
                            className="fa fa-times"/>&nbsp; Cancel
                        </button>
                    </div>
                </form>
            </div>

        )
    }
});

let DemoDialogModal = React.createClass({
    _submitDialog: function (e) {
        console.log('submit stuff')
        this.props.closeDialog(e)
    },
    render: function () {
        return (
            <div id="dialog-message">

                <p>
                    This is the default dialog which is useful for displaying information. The dialog window can be
                    moved, resized
                    and closed with the 'x' icon.
                </p>

                <div className="hr hr-12 hr-double"/>

                Currently using
                <b>36% of your storage space</b>

                <div className="progress progress-striped active no-margin">
                    <div className="progress-bar progress-primary" role="progressbar" style={{width:'36%'}}/>
                    <br/>
                </div>

                <div >
                    <button className="btn btn-defaultr" onClick={this.props.closeDialog}>Cancel</button>
                    <button className="btn btn-primary" onClick={this._submitDialog}><i
                        className="fa fa-check"/>&nbsp; OK
                    </button>
                </div>

            </div>

        )
    }
});

let demoAutocompleteWords = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"];