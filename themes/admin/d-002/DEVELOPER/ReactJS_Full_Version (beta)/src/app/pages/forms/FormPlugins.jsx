import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import IonSlider from '../../../components/forms/inputs/IonSlider.jsx'
import NoUiSlider from '../../../components/forms/inputs/NoUiSlider.jsx'
import UiSlider from '../../../components/forms/inputs/UiSlider.jsx'
import DualListbox from '../../../components/forms/inputs/DualListbox.jsx'
import Select2 from '../../../components/forms/inputs/Select2.jsx'
import UiDatepicker from '../../../components/forms/inputs/UiDatepicker.jsx'
import Timepicker from '../../../components/forms/inputs/Timepicker.jsx'
import Clockpicker from '../../../components/forms/inputs/Clockpicker.jsx'
import UiSpinner from '../../../components/forms/inputs/UiSpinner.jsx'
import Colorpicker from '../../../components/forms/inputs/Colorpicker.jsx'
import Tagsinput from '../../../components/forms/inputs/Tagsinput.jsx'
import Knob from '../../../components/forms/inputs/Knob.jsx'
import MaskedInput from '../../../components/forms/inputs/MaskedInput.jsx'


import XEditableWidget from './plugin-demos/XEditableWidget.jsx'


let FormPlugins = React.createClass({
    render: function () {
        return (       <div id="content">
            <div className="row">
                <BigBreadcrumbs items={['Forms', 'Form Plugins']} icon="table"
                                className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                <SubHeader />
            </div>

            {/* widget grid */}
            <WidgetGrid>

                {/* row */}
                <div className="row">

                    {/* NEW COL START */}
                    <article className="col-sm-12">

                        {/* Widget ID (each widget will need unique ID)*/}
                        <XEditableWidget />
                        {/* end widget */}

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget colorbutton={false} editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>
                                <h2>Sliders </h2>

                            </header>

                            {/* widget div*/}
                            <div>


                                {/* widget content */}
                                <div className="widget-body">

                                    <form>

                                        <fieldset>
                                            <legend>
                                                Smart Scale Slider
                                            </legend>
                                            <div className="row">
                                                <div className="col-sm-6">

                                                    <div className="form-group">
                                                        <IonSlider type="text" data-min="0"
                                                                   data-max="5000" data-from="1000" data-to="4000"
                                                                   data-type="double" data-step="1" data-prefix="$"
                                                                   data-prettify="false" data-hasgrid="true"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">

                                                    <div className="form-group">
                                                        <IonSlider type="text" defaultValue="1000;100000"
                                                                   data-type="double" data-step="500" data-postfix=" €"
                                                                   data-from="30000" data-to="90000"
                                                                   data-hasgrid="true"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-6">

                                                    <div className="form-group">
                                                        <IonSlider type="text" data-min="0"
                                                                   data-from="2.3" data-max="10" data-type="single"
                                                                   data-step="0.1" data-postfix=" mm"
                                                                   data-prettify="false"
                                                                   data-hasgrid="true"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">

                                                    <div className="form-group">
                                                        <IonSlider type="text" data-min="-50"
                                                                   data-max="50" data-from="5" data-to="25"
                                                                   data-type="double" data-step="1" data-postfix="°"
                                                                   data-prettify="false" data-hasgrid="true"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-12">

                                                    <div className="form-group">
                                                        <IonSlider type="text" data-min="0"
                                                                   data-from="0" data-max="10" data-type="single"
                                                                   data-step="0.1" data-postfix=" mm"
                                                                   data-prettify="false"
                                                                   data-hasgrid="true"/>
                                                    </div>
                                                </div>
                                            </div>

                                        </fieldset>

                                        <fieldset>
                                            <legend>
                                                noScale Slider
                                            </legend>
                                            <div className="row">
                                                <div className="col-sm-6">

                                                    <div className="form-group">
                                                        <label>Default</label>
                                                        <NoUiSlider start={55} rangeMin="2"
                                                                    rangeMax="100" connect="lower"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">

                                                    <div className="form-group">
                                                        <label>Range slider (<span className="nouislider-value">["251.00","776.00"]</span>)</label>
                                                        <NoUiSlider start={[264, 776]}
                                                                    rangeMin="0" rangeMax="1000"
                                                                    connect="true" step="1"
                                                                    update=".nouislider-value"/>
                                                    </div>

                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Default Slider (disabled)</label>
                                                        <NoUiSlider start={50} rangeMin="0"
                                                                    rangeMax="100" connect="lower"
                                                                    disabled={true}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">

                                                    <div className="form-group">
                                                        <label>Skips a beat</label>
                                                        <NoUiSlider start={[55, 130]}
                                                                    rangeMin="0" rangeMax="300" connect="true"
                                                                    step="50"/>
                                                    </div>

                                                </div>
                                            </div>
                                        </fieldset>

                                        <fieldset className="margin-top-10">

                                            <legend>
                                                JQuery UI Slider
                                            </legend>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label><code>.slider .slider-danger</code></label>
                                                    <UiSlider
                                                        className="slider slider-danger" id="sal"
                                                        data-slider-min="10" data-slider-max="1000"
                                                        data-slider-step="1" data-slider-value="[50,450]"
                                                        data-slider-handle="round"/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label><code>.slider .slider-success</code></label>
                                                    <UiSlider
                                                        className="slider slider-success" id="sa2"
                                                        data-slider-min="10" data-slider-max="1000"
                                                        data-slider-step="1" data-slider-value="[150,760]"
                                                        data-slider-handle="triangle"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label><code>.slider .slider-warning</code></label>
                                                    <UiSlider
                                                        className="slider slider-warning" id="sa3"
                                                        data-slider-min="1" data-slider-max="300"
                                                        data-slider-value="150" data-slider-selection="before"
                                                        data-slider-handle="squar"/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label><code>.slider .slider-info</code></label>
                                                    <UiSlider
                                                        className="slider slider-info" id="sa4"
                                                        data-slider-min="1" data-slider-max="300"
                                                        data-slider-value="150" data-slider-selection="after"
                                                        data-slider-handle="round"/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <label><code>.slider .slider-primary</code></label>
                                                    <UiSlider
                                                        className="slider slider-primary" id="sa5"
                                                        data-slider-min="1" data-slider-max="300"
                                                        data-slider-value="150" data-slider-selection="before"
                                                        data-slider-handle="round"/>
                                                </div>
                                            </div>

                                            <div className="row">

                                                <div className="col-sm-6">

            <pre><strong className="margin-top-10 margin-bottom-10 font-lg">Usage</strong><br/>
            <code><strong>&lt;input data-slider-min="10" .. /&gt;</strong></code>
        data-slider-orientation="vertical" <span className="text-muted"> // vertical or horizontal</span>
        data-slider-step="1"               <span className="text-muted"> // increment step</span>
        data-slider-min="10"               <span className="text-muted"> // slider min value</span>
        data-slider-max="500"              <span className="text-muted"> // slider max value</span>
        data-slider-value="315"            <span className="text-muted"> // handler position on slider</span>
        data-slider-selection = "after"    <span className="text-muted"> // handler position on slider</span>
        data-slider-handle="round"         <span className="text-muted"> // round or square</span>
        data-slider-tooltip = "show"       <span className="text-muted"> // show or hide</span>
            </pre>
                                                </div>

                                                <div className="col-sm-6">

                                                    <div className="well">

                                                        <table>
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                    <UiSlider
                                                                        className="slider slider-danger"
                                                                        data-slider-reverse="true"
                                                                        data-slider-min="-20" data-slider-max="20"
                                                                        data-slider-step="1" data-slider-value="-13"
                                                                        data-slider-orientation="vertical"
                                                                        data-slider-selection="after"
                                                                        data-slider-handle="square"
                                                                        data-slider-data-toggle="tooltip"
                                                                        title="hide"/>
                                                                </td>
                                                                <td>
                                                                    <UiSlider
                                                                        className="slider"
                                                                        data-slider-min="-20" data-slider-max="20"
                                                                        data-slider-step="1" data-slider-value="-11"
                                                                        data-slider-orientation="vertical"
                                                                        data-slider-selection="before"
                                                                        data-slider-handle="triangle"
                                                                        data-slider-data-toggle="tooltip"
                                                                        title="hide"/>
                                                                </td>
                                                                <td>
                                                                    <UiSlider
                                                                        className="slider"
                                                                        data-slider-min="-20" data-slider-max="20"
                                                                        data-slider-step="1" data-slider-value="-6"
                                                                        data-slider-orientation="vertical"
                                                                        data-slider-selection="before"
                                                                        data-slider-data-toggle="tooltip"
                                                                        title="hide"/>
                                                                </td>
                                                                <td>
                                                                    <UiSlider
                                                                        className="slider"
                                                                        data-slider-min="-20" data-slider-max="20"
                                                                        data-slider-step="1" data-slider-value="-4"
                                                                        data-slider-orientation="vertical"
                                                                        data-slider-selection="before"
                                                                        data-slider-data-toggle="tooltip"
                                                                        title="hide"/>
                                                                </td>
                                                                <td>
                                                                    <UiSlider
                                                                        className="slider"
                                                                        data-slider-min="-20" data-slider-max="20"
                                                                        data-slider-step="1" data-slider-value="-6"
                                                                        data-slider-orientation="vertical"
                                                                        data-slider-selection="before"
                                                                        data-slider-data-toggle="tooltip"
                                                                        title="hide"/>
                                                                </td>
                                                                <td>
                                                                    <UiSlider
                                                                        className="slider slider-warning"
                                                                        data-slider-min="-20" data-slider-max="20"
                                                                        data-slider-step="1"
                                                                        data-slider-value="[-11, 19]"
                                                                        data-slider-orientation="vertical"
                                                                        data-slider-selection="before"
                                                                        data-slider-handle="triangle"
                                                                        data-slider-data-toggle="tooltip"
                                                                        title="show"/>
                                                                </td>
                                                                <td>
                                                                    <UiSlider
                                                                        className="slider slider-success"
                                                                        data-slider-min="-20" data-slider-max="20"
                                                                        data-slider-step="1" data-slider-value="-17"
                                                                        data-slider-orientation="vertical"
                                                                        data-slider-selection="before"
                                                                        data-slider-data-toggle="tooltip"
                                                                        title="show"/>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>

                                                    </div>

                                                </div>

                                            </div>
                                        </fieldset>


                                    </form>

                                </div>
                                {/* end widget content */}

                            </div>
                            {/* end widget div */}

                        </JarvisWidget>
                        {/* end widget */}

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget colorbutton={false} editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>
                                <h2>Bootstrap Duallist Box </h2>

                            </header>

                            {/* widget div*/}
                            <div>


                                {/* widget content */}
                                <div className="widget-body">

                                    <DualListbox size={10}
                                                 items={[{key: "option1", value:"Option 1"},
                                        {key: "option2", value:"Option 2"},
                                        {key: "option3", value:"Option 3"},
                                        {key: "option4", value:"Option 4"},
                                        {key: "option5", value:"Option 5"},
                                        {key: "option6", value:"Option 6"},
                                        {key: "option7", value:"Option 7"},
                                        {key: "option8", value:"Option 8", selected: true},
                                        {key: "option9", value:"Option 9", selected: true},
                                        {key: "option0", value:"Option 10"},
                                        {key: "option0", value:"Option 11"},
                                        {key: "option0", value:"Option 12"},
                                        {key: "option0", value:"Option 13"},
                                        {key: "option0", value:"Option 14"},
                                        {key: "option0", value:"Option 15"},
                                        {key: "option0", value:"Option 16"},
                                        {key: "option0", value:"Option 17"},
                                        {key: "option0", value:"Option 18"},
                                        {key: "option0", value:"Option 19"},
                                        {key: "option0", value:"Option 20"}]}
                                                 nonSelectedFilter="ion ([7-9]|[1][0-2])">

                                    </DualListbox>

                                </div>
                                {/* end widget content */}

                            </div>
                            {/* end widget div */}

                        </JarvisWidget>
                        {/* end widget */}

                    </article>
                    {/* END COL */}

                </div>

                {/* end row */}

                {/* START ROW */}

                <div className="row">

                    {/* NEW COL START */}
                    <article className="col-sm-12 col-md-12 col-lg-6">

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget colorbutton={false} editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>
                                <h2>Plugins & Enhancers </h2>

                            </header>

                            {/* widget div*/}
                            <div>


                                {/* widget content */}
                                <div className="widget-body">

                                    <form className="">

                                        <fieldset>
                                            <legend>
                                                Select 2
                                            </legend>

                                            <div className="form-group">
                                                <label>Select2 Plugin (select)</label>
                                                <Select2 style={{width:'100%'}}
                                                        className="select2">
                                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                                        <option value="AK">Alaska</option>
                                                        <option value="HI">Hawaii</option>
                                                    </optgroup>
                                                    <optgroup label="Pacific Time Zone">
                                                        <option value="CA">California</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="WA">Washington</option>
                                                    </optgroup>
                                                    <optgroup label="Mountain Time Zone">
                                                        <option value="AZ">Arizona</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="WY">Wyoming</option>
                                                    </optgroup>
                                                    <optgroup label="Central Time Zone">
                                                        <option value="AL">Alabama</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="WI">Wisconsin</option>
                                                    </optgroup>
                                                    <optgroup label="Eastern Time Zone">
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WV">West Virginia</option>
                                                    </optgroup>
                                                </Select2>

                                                <div className="note">
                                                    <strong>Usage:</strong> &lt;select style=&quot;width:100%&quot;
                                                    class=&quot;select2&quot; &quot;&gt;...&lt;/select&gt;
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>Select2 Plugin (multi-select)</label>
                                                <Select2 multiple={true} style={{width:'100%'}}
                                                        className="select2" defaultValue={["NV", "MT", "MI"]}>
                                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                                        <option value="AK">Alaska</option>
                                                        <option value="HI">Hawaii</option>
                                                    </optgroup>
                                                    <optgroup label="Pacific Time Zone">
                                                        <option value="CA">California</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="WA">Washington</option>
                                                    </optgroup>
                                                    <optgroup label="Mountain Time Zone">
                                                        <option value="AZ">Arizona</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="WY">Wyoming</option>
                                                    </optgroup>
                                                    <optgroup label="Central Time Zone">
                                                        <option value="AL">Alabama</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="WI">Wisconsin</option>
                                                    </optgroup>
                                                    <optgroup label="Eastern Time Zone">
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WV">West Virginia</option>
                                                    </optgroup>
                                                </Select2>

                                                <div className="note">
                                                    <strong>Usage:</strong> &lt;select multiple style=&quot;
                                                    width:100%&quot; class=&quot;select2&quot; &gt;...&lt;/select&gt;
                                                </div>
                                            </div>

                                        </fieldset>

                                        <fieldset>
                                            <legend>
                                                Date Picker (Jquery UI)
                                            </legend>

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label>Select a date (single):</label>
                                                        <div className="input-group">
                                                            <UiDatepicker
                                                                name="mydate" placeholder="Select a date"
                                                                   className="form-control datepicker"

                                                                   data-date-format="dd/mm/yy"/>
                                                            <span className="input-group-addon"><i
                                                                className="fa fa-calendar"/></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <label>Select a date (range):</label>
                                                </div>
                                                <div className="col-sm-6">

                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <UiDatepicker className="form-control" id="from"
                                                                   minRestrict="#to"
                                                                   numberOfMonths={3} changesMonth={true}
                                                                   defaultDate="+1w"
                                                                   placeholder="From"/>
                                                            <span className="input-group-addon"><i
                                                                className="fa fa-calendar"/></span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-sm-6">

                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <UiDatepicker className="form-control" id="to"
                                                                    maxRestrict="#from"
                                                                          numberOfMonths={3} changesMonth={true}
                                                                          defaultDate="+1w"
                                                                   placeholder="Select a date"/>
                                                            <span className="input-group-addon"><i
                                                                className="fa fa-calendar"/></span>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </fieldset>

                                        <fieldset>
                                            <legend>
                                                Bootstrap Timepicker
                                            </legend>

                                            <div className="row">

                                                <div className="col-sm-12">
                                                    <div className="row">

                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label>Timepicker (default):</label>
                                                                <div className="input-group">
                                                                    <Timepicker className="form-control"
                                                                           placeholder="Select time"/>
                                                                    <span className="input-group-addon"><i
                                                                        className="fa fa-clock-o"/></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </fieldset>

                                        <fieldset>
                                            <legend>
                                                Clockpicker
                                            </legend>

                                            <div className="row">

                                                <div className="col-sm-12">
                                                    <div className="row">

                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label>Clockpicker:</label>
                                                                <div className="input-group">
                                                                    <Clockpicker className="form-control"
                                                                           placeholder="Select time"
                                                                           data-autoclose="true"/>
                                                                    <span className="input-group-addon"><i
                                                                        className="fa fa-clock-o"/></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </fieldset>

                                        <fieldset>
                                            <legend>
                                                Spinners
                                            </legend>

                                            <div className="row">

                                                <div className="col-sm-6 col-md-4 col-lg-4">

                                                    <div className="form-group">
                                                        <label>Default</label>
                                                        <UiSpinner className="form-control spinner-left" name="spinner"
                                                                   defaultValue={1} />
                                                    </div>

                                                </div>
                                                <div className="col-sm-6 col-md-4 col-lg-4">
                                                    <div className="form-group">
                                                        <label>Decimal spinner</label>
                                                        <UiSpinner className="form-control" id="spinner-decimal"
                                                               name="spinner-decimal" defaultValue={7.99}
                                                               spinnerType="decimal"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 col-lg-4">
                                                    <div className="form-group">
                                                        <label>Increment spinner</label>
                                                        <UiSpinner className="form-control spinner-both"
                                                               name="spinner-currency" defaultValue={5}
                                                               spinnerType="currency"/>
                                                    </div>
                                                </div>
                                            </div>

                                        </fieldset>

                                        <fieldset>
                                            <legend>
                                                Color Pickers
                                            </legend>

                                            <div className="row">

                                                <div className="col-sm-6">

                                                    <div className="form-group">
                                                        <label>Color Picker (HEX)</label>
                                                        <Colorpicker className="form-control" defaultValue="#8fff00"/>
                                                    </div>

                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Color Picker (RGBA)</label>
                                                        <Colorpicker className="form-control"
                                                               defaultValue="rgba(0,194,255,0.78)"
                                                               data-color-format="rgba"/>
                                                    </div>
                                                </div>
                                            </div>

                                        </fieldset>

                                        <fieldset>
                                            <legend>
                                                Tags
                                            </legend>

                                            <div className="row">

                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label>Type and enter to add tag</label>
                                                        <Tagsinput
                                                               className="form-control tagsinput"
                                                               defaultValue="Amsterdam,Washington,Sydney,Beijing,Cairo"
                                                               data-role="tagsinput"/>
                                                    </div>
                                                </div>

                                            </div>

                                        </fieldset>

                                        <div className="form-actions">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button className="btn btn-default" type="submit">
                                                        Cancel
                                                    </button>
                                                    <button className="btn btn-primary" type="submit">
                                                        <i className="fa fa-save"/>
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </form>

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
                        <JarvisWidget colorbutton={false} editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>
                                <h2>All Masking </h2>

                            </header>

                            {/* widget div*/}
                            <div>


                                {/* widget content */}
                                <div className="widget-body">
                                    <p className="alert alert-info text-align-center">
                                        USAGE: &lt;input type=&quot;text&quot; <strong>data-mask=&quot;99/99/9999&quot;
                                        maskPlaceholder= &quot;-&quot;&gt;</strong>
                                    </p>

                                    <form>

                                        <fieldset>
                                            <legend>
                                                Input Masking made easier!
                                            </legend>

                                            <div className="form-group">
                                                <label>Date masking</label>
                                                <div className="input-group">
                                                    <MaskedInput type="text" className="form-control"
                                                           mask="99/99/9999"
                                                           maskPlaceholder="-"/>
                                                    <span className="input-group-addon"><i className="fa fa-calendar"/></span>
                                                </div>
                                                <p className="note">
                                                    Data format **/**/****
                                                </p>
                                            </div>

                                            <div className="form-group">
                                                <label>Phone masking</label>
                                                <div className="input-group">
                                                    <MaskedInput type="text" className="form-control"
                                                           mask="(999) 999-9999"
                                                           maskPlaceholder="X"/>
                                                    <span className="input-group-addon"><i
                                                        className="fa fa-phone"/></span>
                                                </div>
                                                <p className="note">
                                                    Data format (XXX) XXX-XXXX
                                                </p>
                                            </div>

                                            <div className="form-group">
                                                <label>Credit card masking</label>
                                                <div className="input-group">
                                                    <MaskedInput type="text" className="form-control"
                                                           mask="9999-9999-9999-9999"
                                                           maskPlaceholder="*"/>
                                                    <span className="input-group-addon"><i
                                                        className="fa fa-credit-card"/></span>
                                                </div>
                                                <p className="note">
                                                    Data format ****-****-****-****
                                                </p>
                                            </div>

                                            <div className="form-group">
                                                <label>Serial number masking</label>
                                                <div className="input-group">
                                                    <MaskedInput type="text" className="form-control"
                                                           mask="***-***-***-***-***-***"
                                                           maskPlaceholder="_"/>
                                                    <span className="input-group-addon"><i className="fa fa-asterisk"/></span>
                                                </div>
                                                <p className="note">
                                                    Data format ***-***-***-***-***-***
                                                </p>
                                            </div>

                                            <div className="form-group">
                                                <label>Tax ID masking</label>
                                                <div className="input-group">
                                                    <MaskedInput type="text" className="form-control"
                                                           mask="99-9999999"
                                                           maskPlaceholder="X"/>
                                                    <span className="input-group-addon"><i className="fa fa-briefcase"/></span>
                                                </div>
                                                <p className="note">
                                                    Data format 99-9999999
                                                </p>
                                            </div>

                                            <div className="form-actions">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <button className="btn btn-default" type="submit">
                                                            Cancel
                                                        </button>
                                                        <button className="btn btn-primary" type="submit">
                                                            <i className="fa fa-save"/>
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </fieldset>
                                    </form>

                                </div>
                                {/* end widget content */}

                            </div>
                            {/* end widget div */}

                        </JarvisWidget>
                        {/* end widget */}

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget colorbutton={false} editbutton={false} custombutton={false}>

                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>
                                <h2>JS Knob </h2>

                            </header>

                            {/* widget div*/}
                            <div>


                                {/* widget content */}
                                <div className="widget-body">

                                    <form>

                                        <fieldset>
                                            <legend>
                                                JS Knob Input
                                            </legend>

                                            <div className="knobs-demo">

                                                <div>
                                                    <Knob width={120} height={120}
                                                           displayInput={true} defaultValue={35}
                                                           displayPrevious={true} fgColor="#428BCA"/>
                                                </div>

                                                <div>
                                                    <Knob  width={180} height={180}
                                                           cursor={true} fgColor="#222222" thickness={.3}
                                                           defaultValue={29}/>
                                                </div>

                                                <div>
                                                    <Knob  width={80} height={80}
                                                           fgColor="#71843F" angleOffset={-125}
                                                           angleArc={250} defaultValue={33} thickness={.3} />
                                                </div>

                                            </div>

                                        </fieldset>
                                        <div className="form-actions">

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button className="btn btn-default" type="submit">
                                                        Cancel
                                                    </button>
                                                    <button className="btn btn-primary" type="submit">
                                                        <i className="fa fa-save"/>
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

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

        </div>)
    }
})


export default FormPlugins