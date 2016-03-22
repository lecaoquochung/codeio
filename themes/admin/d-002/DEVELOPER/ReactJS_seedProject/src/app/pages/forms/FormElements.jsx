import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

let FormElements = React.createClass({
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Forms', 'Form Elements']} icon="table"
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                <div className="row">
                    <div className="col-sm-12">

                        <div className="well">
                            <button className="close" data-dismiss="alert" />

                            <h1 className="semi-bold">What are "Smart Form Elements?"</h1>

                            <p>
                                SmartAdmin comes with a fully customized grid system catered specifically for building
                                form layouts.
                                Its not technically "better" than the bootstrap 3 built in grid system,
                                but rather more simplified for rapid form layout and faster development. Idealy you
                                would use either
                                the <strong>bootstrap</strong> grid or the <strong>smart-form</strong> grid,
                                when building your form layouts. It is important not to mix elements from two seperate
                                classes as it
                                can cause conflict.
                            </p>

                            <p>
                                You can explore some of the <a ui-sref="app.form.layouts" title="Go to Bootstrap Forms">layouts</a>
                                made using Smart Forms grid system or if you are not comfortable with this grid system
                                you can
                                simply stick to the default <a ui-sref="app.form.bootstrap"
                                                               title="Go to Bootstrap Forms">Bootstrap
                                forms</a>
                            </p>
                        </div>


                    </div>
                </div>

                {/* widget grid */}
                <WidgetGrid>

                    {/* START ROW */}
                    <div className="row">

                        {/* NEW COL START */}
                        <article className="col-sm-12 col-md-12 col-lg-12">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false}
                                          custombutton={false}>

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                    <h2>Form Grid </h2>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget content */}
                                    <div className="widget-body no-padding">

                                        <form className="smart-form">
                                            <header>
                                                Responsive grid system
                                            </header>

                                            <fieldset>
                                                <div className="row">
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                </div>

                                                <div className="row">
                                                    <section className="col col-3">
                                                        <label className="input">
                                                            <input type="text" placeholder="3/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-3">
                                                        <label className="input">
                                                            <input type="text" placeholder="3/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-3">
                                                        <label className="input">
                                                            <input type="text" placeholder="3/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-3">
                                                        <label className="input">
                                                            <input type="text" placeholder="3/12"/>
                                                        </label>
                                                    </section>
                                                </div>

                                                <div className="row">
                                                    <section className="col col-4">
                                                        <label className="input">
                                                            <input type="text" placeholder="4/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-4">
                                                        <label className="input">
                                                            <input type="text" placeholder="4/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-4">
                                                        <label className="input">
                                                            <input type="text" placeholder="4/12"/>
                                                        </label>
                                                    </section>
                                                </div>

                                                <div className="row">
                                                    <section className="col col-6">
                                                        <label className="input">
                                                            <input type="text" placeholder="6/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-6">
                                                        <label className="input">
                                                            <input type="text" placeholder="6/12"/>
                                                        </label>
                                                    </section>
                                                </div>

                                                <section>
                                                    <label className="input">
                                                        <input type="text" placeholder="12/12"/>
                                                    </label>
                                                </section>
                                            </fieldset>

                                            <fieldset>
                                                <div className="row">
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-3">
                                                        <label className="input">
                                                            <input type="text" placeholder="3/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-3">
                                                        <label className="input">
                                                            <input type="text" placeholder="3/12"/>
                                                        </label>
                                                    </section>
                                                </div>

                                                <div className="row">
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-4">
                                                        <label className="input">
                                                            <input type="text" placeholder="4/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-4">
                                                        <label className="input">
                                                            <input type="text" placeholder="4/12"/>
                                                        </label>
                                                    </section>
                                                </div>

                                                <div className="row">
                                                    <section className="col col-2">
                                                        <label className="input">
                                                            <input type="text" placeholder="2/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-4">
                                                        <label className="input">
                                                            <input type="text" placeholder="4/12"/>
                                                        </label>
                                                    </section>
                                                    <section className="col col-6">
                                                        <label className="input">
                                                            <input type="text" placeholder="6/12"/>
                                                        </label>
                                                    </section>
                                                </div>
                                            </fieldset>

                                            <footer>
                                                <button type="submit" className="btn btn-primary">
                                                    Submit
                                                </button>
                                                <button type="button" className="btn btn-default"
                                                        onclick="window.history.back();">
                                                    Back
                                                </button>
                                            </footer>
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
                            <JarvisWidget colorbutton={false} editbutton={false}
                                          custombutton={false}>
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                    <h2>Basic Form Elements </h2>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget content */}
                                    <div className="widget-body no-padding">

                                        <form className="smart-form">
                                            <header>
                                                Standard Form Header
                                            </header>

                                            <fieldset>

                                                <section>
                                                    <label className="label">Extra Small text input</label>
                                                    <label className="input">
                                                        <input type="text" className="input-xs"/>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Small text input</label>
                                                    <label className="input">
                                                        <input type="text" className="input-sm"/>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Default text input with maxLength</label>
                                                    <label className="input">
                                                        <input type="text" maxLength="10"/>
                                                    </label>

                                                    <div className="note">
                                                        <strong>Maxlength</strong> is automatically added via the
                                                        "maxLength='#'" attribute
                                                    </div>
                                                </section>

                                                <section>
                                                    <label className="label">Large text input</label>
                                                    <label className="input">
                                                        <input type="text" className="input-lg"/>
                                                    </label>
                                                </section>

                                            </fieldset>

                                            <fieldset>

                                                <section>
                                                    <label className="label">File input</label>

                                                    <div className="input input-file">
                                                        <span className="button"><input type="file" id="file"
                                                                                        name="file"
                                                                                        onchange="this.parentNode.nextSibling.value = this.value"/>Browse</span><input
                                                        type="text" placeholder="Include some files" readOnly/>
                                                    </div>
                                                </section>

                                                <section>
                                                    <label className="label">Input with autocomlete</label>
                                                    <label className="input">
                                                        <input type="text" list="list"/>
                                                        <datalist id="list">
                                                            <option value="Alexandra">Alexandra</option>
                                                            <option value="Alice">Alice</option>
                                                            <option value="Anastasia">Anastasia</option>
                                                            <option value="Avelina">Avelina</option>
                                                            <option value="Basilia">Basilia</option>
                                                            <option value="Beatrice">Beatrice</option>
                                                            <option value="Cassandra">Cassandra</option>
                                                            <option value="Cecil">Cecil</option>
                                                            <option value="Clemencia">Clemencia</option>
                                                            <option value="Desiderata">Desiderata</option>
                                                            <option value="Dionisia">Dionisia</option>
                                                            <option value="Edith">Edith</option>
                                                            <option value="Eleanora">Eleanora</option>
                                                            <option value="Elizabeth">Elizabeth</option>
                                                            <option value="Emma">Emma</option>
                                                            <option value="Felicia">Felicia</option>
                                                            <option value="Florence">Florence</option>
                                                            <option value="Galiana">Galiana</option>
                                                            <option value="Grecia">Grecia</option>
                                                            <option value="Helen">Helen</option>
                                                            <option value="Helewisa">Helewisa</option>
                                                            <option value="Idonea">Idonea</option>
                                                            <option value="Isabel">Isabel</option>
                                                            <option value="Joan">Joan</option>
                                                            <option value="Juliana">Juliana</option>
                                                            <option value="Karla">Karla</option>
                                                            <option value="Karyn">Karyn</option>
                                                            <option value="Kate">Kate</option>
                                                            <option value="Lakisha">Lakisha</option>
                                                            <option value="Lana">Lana</option>
                                                            <option value="Laura">Laura</option>
                                                            <option value="Leona">Leona</option>
                                                            <option value="Mandy">Mandy</option>
                                                            <option value="Margaret">Margaret</option>
                                                            <option value="Maria">Maria</option>
                                                            <option value="Nanacy">Nanacy</option>
                                                            <option value="Nicole">Nicole</option>
                                                            <option value="Olga">Olga</option>
                                                            <option value="Pamela">Pamela</option>
                                                            <option value="Patricia">Patricia</option>
                                                            <option value="Qiana">Qiana</option>
                                                            <option value="Rachel">Rachel</option>
                                                            <option value="Ramona">Ramona</option>
                                                            <option value="Samantha">Samantha</option>
                                                            <option value="Sandra">Sandra</option>
                                                            <option value="Tanya">Tanya</option>
                                                            <option value="Teresa">Teresa</option>
                                                            <option value="Ursula">Ursula</option>
                                                            <option value="Valerie">Valerie</option>
                                                            <option value="Veronica">Veronica</option>
                                                            <option value="Wilma">Wilma</option>
                                                            <option value="Yasmin">Yasmin</option>
                                                            <option value="Zelma">Zelma</option>
                                                        </datalist>
                                                    </label>

                                                    <div className="note">
                                                        <strong>Note:</strong> works in Chrome, Firefox, Opera and IE10.
                                                    </div>
                                                </section>
                                            </fieldset>

                                            <fieldset>

                                                <section>
                                                    <label className="label">Select Small</label>
                                                    <label className="select">
                                                        <select className="input-sm">
                                                            <option value="0">Choose name</option>
                                                            <option value="1">Alexandra</option>
                                                            <option value="2">Alice</option>
                                                            <option value="3">Anastasia</option>
                                                            <option value="4">Avelina</option>
                                                        </select> <i/> </label>
                                                </section>

                                                <section>
                                                    <label className="label">Select default</label>
                                                    <label className="select">
                                                        <select>
                                                            <option value="0">Choose name</option>
                                                            <option value="1">Alexandra</option>
                                                            <option value="2">Alice</option>
                                                            <option value="3">Anastasia</option>
                                                            <option value="4">Avelina</option>
                                                        </select> <i/> </label>
                                                </section>

                                                <section>
                                                    <label className="label">Select Large</label>
                                                    <label className="select">
                                                        <select className="input-lg">
                                                            <option value="0">Choose name</option>
                                                            <option value="1">Alexandra</option>
                                                            <option value="2">Alice</option>
                                                            <option value="3">Anastasia</option>
                                                            <option value="4">Avelina</option>
                                                        </select> <i/> </label>
                                                </section>

                                                <section>
                                                    <label className="label">Multiple select</label>
                                                    <label className="select select-multiple">
                                                        <select multiple className="custom-scroll">
                                                            <option value="1">Alexandra</option>
                                                            <option value="2">Alice</option>
                                                            <option value="3">Anastasia</option>
                                                            <option value="4">Avelina</option>
                                                            <option value="5">Basilia</option>
                                                            <option value="6">Beatrice</option>
                                                            <option value="7">Cassandra</option>
                                                            <option value="8">Clemencia</option>
                                                            <option value="9">Desiderata</option>
                                                        </select> </label>

                                                    <div className="note">
                                                        <strong>Note:</strong> hold down the ctrl/cmd button to select
                                                        multiple options.
                                                    </div>
                                                </section>
                                            </fieldset>

                                            <fieldset>
                                                <section>
                                                    <label className="label">Textarea</label>
                                                    <label className="textarea">
                                                        <textarea rows="3" className="custom-scroll"/>
                                                    </label>

                                                    <div className="note">
                                                        <strong>Note:</strong> height of the textarea depends on the
                                                        rows attribute.
                                                    </div>
                                                </section>

                                                <section>
                                                    <label className="label">Textarea resizable</label>
                                                    <label className="textarea textarea-resizable">
                                                        <textarea rows="3" className="custom-scroll"/>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Textarea expandable</label>
                                                    <label className="textarea textarea-expandable">
                                                        <textarea rows="3" className="custom-scroll"/>
                                                    </label>

                                                    <div className="note">
                                                        <strong>Note:</strong> expands on focus.
                                                    </div>
                                                </section>
                                            </fieldset>

                                            <fieldset>
                                                <section>
                                                    <label className="label">Columned radios</label>

                                                    <div className="row">
                                                        <div className="col col-4">
                                                            <label className="radio">
                                                                <input type="radio" name="radio" defaultChecked/>
                                                                <i/>Alexandra</label>
                                                            <label className="radio">
                                                                <input type="radio" name="radio"/>
                                                                <i/>Alice</label>
                                                            <label className="radio">
                                                                <input type="radio" name="radio"/>
                                                                <i/>Anastasia</label>
                                                        </div>
                                                        <div className="col col-4">
                                                            <label className="radio">
                                                                <input type="radio" name="radio"/>
                                                                <i/>Avelina</label>
                                                            <label className="radio">
                                                                <input type="radio" name="radio"/>
                                                                <i/>Basilia</label>
                                                            <label className="radio">
                                                                <input type="radio" name="radio"/>
                                                                <i/>Beatrice</label>
                                                        </div>
                                                        <div className="col col-4">
                                                            <label className="radio">
                                                                <input type="radio" name="radio"/>
                                                                <i/>Cassandra</label>
                                                            <label className="radio">
                                                                <input type="radio" name="radio"/>
                                                                <i/>Clemencia</label>
                                                            <label className="radio">
                                                                <input type="radio" name="radio"/>
                                                                <i/>Desiderata</label>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section>
                                                    <label className="label">Inline radios</label>

                                                    <div className="inline-group">
                                                        <label className="radio">
                                                            <input type="radio" name="radio-inline" defaultChecked/>
                                                            <i/>Alexandra</label>
                                                        <label className="radio">
                                                            <input type="radio" name="radio-inline"/>
                                                            <i/>Alice</label>
                                                        <label className="radio">
                                                            <input type="radio" name="radio-inline"/>
                                                            <i/>Anastasia</label>
                                                        <label className="radio">
                                                            <input type="radio" name="radio-inline"/>
                                                            <i/>Avelina</label>
                                                        <label className="radio">
                                                            <input type="radio" name="radio-inline"/>
                                                            <i/>Beatrice</label>
                                                    </div>
                                                </section>
                                            </fieldset>

                                            <fieldset>
                                                <section>
                                                    <label className="label">Columned checkboxes</label>

                                                    <div className="row">
                                                        <div className="col col-4">
                                                            <label className="checkbox">
                                                                <input type="checkbox" name="checkbox"
                                                                       defaultChecked/>
                                                                <i/>Alexandra</label>
                                                            <label className="checkbox">
                                                                <input type="checkbox" name="checkbox"/>
                                                                <i/>Alice</label>
                                                            <label className="checkbox">
                                                                <input type="checkbox" name="checkbox"/>
                                                                <i/>Anastasia</label>
                                                        </div>
                                                        <div className="col col-4">
                                                            <label className="checkbox">
                                                                <input type="checkbox" name="checkbox"/>
                                                                <i/>Avelina</label>
                                                            <label className="checkbox">
                                                                <input type="checkbox" name="checkbox"/>
                                                                <i/>Basilia</label>
                                                            <label className="checkbox">
                                                                <input type="checkbox" name="checkbox"/>
                                                                <i/>Beatrice</label>
                                                        </div>
                                                        <div className="col col-4">
                                                            <label className="checkbox">
                                                                <input type="checkbox" name="checkbox"/>
                                                                <i/>Cassandra</label>
                                                            <label className="checkbox">
                                                                <input type="checkbox" name="checkbox"/>
                                                                <i/>Clemencia</label>
                                                            <label className="checkbox">
                                                                <input type="checkbox" name="checkbox"/>
                                                                <i/>Desiderata</label>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section>
                                                    <label className="label">Inline checkboxes</label>

                                                    <div className="inline-group">
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"
                                                                   defaultChecked/>
                                                            <i/>Alexandra</label>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>Alice</label>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>Anastasia</label>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>Avelina</label>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>Beatrice</label>
                                                    </div>
                                                </section>
                                            </fieldset>

                                            <fieldset>
                                                <div className="row">
                                                    <section className="col col-5">
                                                        <label className="label">Radio Toggles</label>
                                                        <label className="toggle">
                                                            <input type="radio" name="radio-toggle" defaultChecked/>
                                                            <i data-swchon-text="ON" data-swchoff-text="OFF"/>Alexandra</label>
                                                        <label className="toggle">
                                                            <input type="radio" name="radio-toggle"/>
                                                            <i data-swchon-text="ON" data-swchoff-text="OFF"/>Anastasia</label>
                                                        <label className="toggle">
                                                            <input type="radio" name="radio-toggle"/>
                                                            <i data-swchon-text="ON"
                                                               data-swchoff-text="OFF"/>Avelina</label>
                                                    </section>

                                                    <div className="col col-2"/>

                                                    <section className="col col-5">
                                                        <label className="label">Checkbox Toggles</label>
                                                        <label className="toggle">
                                                            <input type="checkbox" name="checkbox-toggle"
                                                                   defaultChecked/>
                                                            <i data-swchon-text="ON" data-swchoff-text="OFF"/>Cassandra</label>
                                                        <label className="toggle">
                                                            <input type="checkbox" name="checkbox-toggle"/>
                                                            <i data-swchon-text="ON" data-swchoff-text="OFF"/>Clemencia</label>
                                                        <label className="toggle">
                                                            <input type="checkbox" name="checkbox-toggle"/>
                                                            <i data-swchon-text="ON" data-swchoff-text="OFF"/>Desiderata</label>
                                                    </section>
                                                </div>
                                            </fieldset>

                                            <fieldset>
                                                <section>
                                                    <label className="label">Ratings with different icons</label>

                                                    <div className="rating">
                                                        <input type="radio" name="stars-rating" id="stars-rating-5"/>
                                                        <label htmlFor="stars-rating-5"><i
                                                            className="fa fa-star"/></label>
                                                        <input type="radio" name="stars-rating" id="stars-rating-4"/>
                                                        <label htmlFor="stars-rating-4"><i
                                                            className="fa fa-star"/></label>
                                                        <input type="radio" name="stars-rating" id="stars-rating-3"/>
                                                        <label htmlFor="stars-rating-3"><i
                                                            className="fa fa-star"/></label>
                                                        <input type="radio" name="stars-rating" id="stars-rating-2"/>
                                                        <label htmlFor="stars-rating-2"><i
                                                            className="fa fa-star"/></label>
                                                        <input type="radio" name="stars-rating" id="stars-rating-1"/>
                                                        <label htmlFor="stars-rating-1"><i
                                                            className="fa fa-star"/></label>
                                                        Stars
                                                    </div>

                                                    <div className="rating">
                                                        <input type="radio" name="trophies-rating"
                                                               id="trophies-rating-7"/>
                                                        <label htmlFor="trophies-rating-7"><i className="fa fa-trophy"/></label>
                                                        <input type="radio" name="trophies-rating"
                                                               id="trophies-rating-6"/>
                                                        <label htmlFor="trophies-rating-6"><i className="fa fa-trophy"/></label>
                                                        <input type="radio" name="trophies-rating"
                                                               id="trophies-rating-5"/>
                                                        <label htmlFor="trophies-rating-5"><i className="fa fa-trophy"/></label>
                                                        <input type="radio" name="trophies-rating"
                                                               id="trophies-rating-4"/>
                                                        <label htmlFor="trophies-rating-4"><i className="fa fa-trophy"/></label>
                                                        <input type="radio" name="trophies-rating"
                                                               id="trophies-rating-3"/>
                                                        <label htmlFor="trophies-rating-3"><i className="fa fa-trophy"/></label>
                                                        <input type="radio" name="trophies-rating"
                                                               id="trophies-rating-2"/>
                                                        <label htmlFor="trophies-rating-2"><i className="fa fa-trophy"/></label>
                                                        <input type="radio" name="trophies-rating"
                                                               id="trophies-rating-1"/>
                                                        <label htmlFor="trophies-rating-1"><i className="fa fa-trophy"/></label>
                                                        Trophies
                                                    </div>

                                                    <div className="rating">
                                                        <input type="radio" name="asterisks-rating"
                                                               id="asterisks-rating-10"/>
                                                        <label htmlFor="asterisks-rating-10"><i
                                                            className="fa fa-asterisk"/></label>
                                                        <input type="radio" name="asterisks-rating"
                                                               id="asterisks-rating-9"/>
                                                        <label htmlFor="asterisks-rating-9"><i
                                                            className="fa fa-asterisk"/></label>
                                                        <input type="radio" name="asterisks-rating"
                                                               id="asterisks-rating-8"/>
                                                        <label htmlFor="asterisks-rating-8"><i
                                                            className="fa fa-asterisk"/></label>
                                                        <input type="radio" name="asterisks-rating"
                                                               id="asterisks-rating-7"/>
                                                        <label htmlFor="asterisks-rating-7"><i
                                                            className="fa fa-asterisk"/></label>
                                                        <input type="radio" name="asterisks-rating"
                                                               id="asterisks-rating-6"/>
                                                        <label htmlFor="asterisks-rating-6"><i
                                                            className="fa fa-asterisk"/></label>
                                                        <input type="radio" name="asterisks-rating"
                                                               id="asterisks-rating-5"/>
                                                        <label htmlFor="asterisks-rating-5"><i
                                                            className="fa fa-asterisk"/></label>
                                                        <input type="radio" name="asterisks-rating"
                                                               id="asterisks-rating-4"/>
                                                        <label htmlFor="asterisks-rating-4"><i
                                                            className="fa fa-asterisk"/></label>
                                                        <input type="radio" name="asterisks-rating"
                                                               id="asterisks-rating-3"/>
                                                        <label htmlFor="asterisks-rating-3"><i
                                                            className="fa fa-asterisk"/></label>
                                                        <input type="radio" name="asterisks-rating"
                                                               id="asterisks-rating-2"/>
                                                        <label htmlFor="asterisks-rating-2"><i
                                                            className="fa fa-asterisk"/></label>
                                                        <input type="radio" name="asterisks-rating"
                                                               id="asterisks-rating-1"/>
                                                        <label htmlFor="asterisks-rating-1"><i
                                                            className="fa fa-asterisk"/></label>
                                                        Asterisks
                                                    </div>
                                                    <div className="note">
                                                        <strong>Note:</strong> you can use more than 300 vector icons
                                                        for rating.
                                                    </div>
                                                </section>
                                            </fieldset>

                                            <footer>
                                                <button type="submit" className="btn btn-primary">
                                                    Submit
                                                </button>
                                                <button type="button" className="btn btn-default"
                                                        onclick="window.history.back();">
                                                    Back
                                                </button>
                                            </footer>
                                        </form>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                        </article>

                        <article className="col-sm-12 col-md-12 col-lg-6">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false}
                                          custombutton={false}>
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                    <h2>Disabled States </h2>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget content */}
                                    <div className="widget-body no-padding">

                                        <form className="smart-form">
                                            <header>
                                                Disabled States
                                            </header>

                                            <fieldset>

                                                <section>
                                                    <label className="label">Extra Small text input</label>
                                                    <label className="input state-disabled">
                                                        <input type="text" className="input-xs" disabled="disabled"/>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Small text input</label>
                                                    <label className="input state-disabled">
                                                        <input type="text" className="input-sm" disabled="disabled"/>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Default text input with maxLength</label>
                                                    <label className="input state-disabled">
                                                        <input type="text" maxLength="10" disabled="disabled"/>
                                                    </label>

                                                    <div className="note">
                                                        <strong>Maxlength</strong> is automatically added via the
                                                        "maxLength='#'" attribute
                                                    </div>
                                                </section>

                                                <section>
                                                    <label className="label">Large text input</label>
                                                    <label className="input state-disabled">
                                                        <input type="text" className="input-lg" disabled="disabled"/>
                                                    </label>
                                                </section>

                                            </fieldset>

                                            <fieldset>

                                                <section>
                                                    <label className="label">File input (disabled)</label>
                                                    <label htmlFor="file2" className="input input-file state-disabled">
														<span className="button disabled">
															Browse
														</span>
                                                        <input id="file2" type="text" disabled="disabled"/>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Input with autocomlete (disabled)</label>
                                                    <label className="input state-disabled">
                                                        <input type="text" list="list" disabled="disabled"/>
                                                    </label>

                                                    <div className="note">
                                                        <strong>Note:</strong> works in Chrome, Firefox, Opera and IE10.
                                                    </div>
                                                </section>
                                            </fieldset>

                                            <fieldset>
                                                <section>
                                                    <label className="label">Select Small (disabled)</label>
                                                    <label className="select state-disabled">
                                                        <select className="input-sm" disabled="disabled">
                                                            <option value="0">Choose name</option>
                                                            <option value="1">Alexandra</option>
                                                            <option value="2">Alice</option>
                                                            <option value="3">Anastasia</option>
                                                            <option value="4">Avelina</option>
                                                        </select> <i/> </label>
                                                </section>

                                                <section>
                                                    <label className="label">Select Small (disabled)</label>
                                                    <label className="select state-disabled">
                                                        <select className="input-sm" disabled="disabled">
                                                            <option value="0">Choose name</option>
                                                            <option value="1">Alexandra</option>
                                                            <option value="2">Alice</option>
                                                            <option value="3">Anastasia</option>
                                                            <option value="4">Avelina</option>
                                                        </select> <i/> </label>
                                                </section>

                                                <section>
                                                    <label className="label">Select default (disabled)</label>
                                                    <label className="select state-disabled">
                                                        <select className="input-lg" disabled="disabled">
                                                            <option value="0">Choose name</option>
                                                            <option value="1">Alexandra</option>
                                                            <option value="2">Alice</option>
                                                            <option value="3">Anastasia</option>
                                                            <option value="4">Avelina</option>
                                                        </select> <i/> </label>
                                                </section>

                                                <section>
                                                    <label className="label">Multiple select (disabled)</label>
                                                    <label className="select select-multiple state-disabled">
                                                        <select multiple className="custom-scroll" disabled="disabled">
                                                            <option value="1">Alexandra</option>
                                                            <option value="2">Alice</option>
                                                            <option value="3">Anastasia</option>
                                                            <option value="4">Avelina</option>
                                                            <option value="5">Basilia</option>
                                                            <option value="6">Beatrice</option>
                                                            <option value="7">Cassandra</option>
                                                            <option value="8">Clemencia</option>
                                                            <option value="9">Desiderata</option>
                                                        </select> </label>

                                                    <div className="note">
                                                        <strong>Note:</strong> hold down the ctrl/cmd button to select
                                                        multiple options.
                                                    </div>
                                                </section>
                                            </fieldset>

                                            <fieldset>
                                                <section>
                                                    <label className="label">Textarea (disabled)</label>
                                                    <label className="textarea state-disabled"> <textarea rows="3"
                                                                                                          className="custom-scroll"
                                                                                                          disabled="disabled"/>
                                                    </label>

                                                    <div className="note">
                                                        <strong>Note:</strong> height of the textarea depends on the
                                                        rows
                                                        attribute.
                                                    </div>
                                                </section>

                                                <section>
                                                    <label className="label">Textarea resizable (disabled)</label>
                                                    <label
                                                        className="textarea textarea-resizable state-disabled"> <textarea
                                                        rows="3" className="custom-scroll" disabled="disabled"/>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Textarea expandable (disabled)</label>
                                                    <label className="textarea textarea-expandable state-disabled">
                                                        <textarea rows="3" className="custom-scroll"
                                                                  disabled="disabled"/>
                                                    </label>

                                                    <div className="note">
                                                        <strong>Note:</strong> expands on focus.
                                                    </div>
                                                </section>
                                            </fieldset>

                                            <fieldset>
                                                <section>
                                                    <label className="label">Columned radios (disabled)</label>

                                                    <div className="row">
                                                        <div className="col col-4">
                                                            <label className="radio state-disabled">
                                                                <input type="radio" name="radio" defaultChecked
                                                                       disabled="disabled"/>
                                                                <i/>Alexandra</label>
                                                            <label className="radio state-disabled">
                                                                <input type="radio" name="radio" disabled="disabled"/>
                                                                <i/>Alice</label>
                                                            <label className="radio state-disabled">
                                                                <input type="radio" name="radio" disabled="disabled"/>
                                                                <i/>Anastasia</label>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section>
                                                    <label className="label">Inline radios (disabled)</label>

                                                    <div className="inline-group">
                                                        <label className="radio state-disabled">
                                                            <input type="radio" name="radio-inline" defaultChecked/>
                                                            <i/>Alexandra</label>
                                                        <label className="radio state-disabled">
                                                            <input type="radio" name="radio-inline"
                                                                   disabled="disabled"/>
                                                            <i/>Alice</label>
                                                        <label className="radio state-disabled">
                                                            <input type="radio" name="radio-inline"
                                                                   disabled="disabled"/>
                                                            <i/>Anastasia</label>

                                                    </div>
                                                </section>
                                            </fieldset>

                                            <fieldset>
                                                <section>
                                                    <label className="label">Columned checkboxes (disabled)</label>

                                                    <div className="row">
                                                        <div className="col col-4">
                                                            <label className="checkbox state-disabled">
                                                                <input type="checkbox" name="checkbox" defaultChecked
                                                                       disabled="disabled"/>
                                                                <i/>Alexandra</label>
                                                            <label className="checkbox state-disabled">
                                                                <input type="checkbox" name="checkbox"
                                                                       disabled="disabled"/>
                                                                <i/>Alice</label>
                                                            <label className="checkbox state-disabled">
                                                                <input type="checkbox" name="checkbox"
                                                                       disabled="disabled"/>
                                                                <i/>Anastasia</label>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section>
                                                    <label className="label">Inline checkboxes (disabled)</label>

                                                    <div className="inline-group">
                                                        <label className="checkbox state-disabled">
                                                            <input type="checkbox" name="checkbox-inline"
                                                                   defaultChecked
                                                                   disabled="disabled"/>
                                                            <i/>Alexandra</label>
                                                        <label className="checkbox state-disabled">
                                                            <input type="checkbox" name="checkbox-inline"
                                                                   disabled="disabled"/>
                                                            <i/>Alice</label>
                                                        <label className="checkbox state-disabled">
                                                            <input type="checkbox" name="checkbox-inline"
                                                                   disabled="disabled"/>
                                                            <i/>Anastasia</label>

                                                    </div>
                                                </section>
                                            </fieldset>

                                            <fieldset>
                                                <div className="row">
                                                    <section className="col col-5">
                                                        <label className="label">Radio Toggles (disabled)</label>
                                                        <label className="toggle state-disabled">
                                                            <input type="radio" name="radio-toggle" defaultChecked/>
                                                            <i data-swchon-text="ON"
                                                               data-swchoff-text="OFF"/>Alexandra</label>
                                                        <label className="toggle state-disabled">
                                                            <input type="radio" name="radio-toggle"
                                                                   disabled="disabled"/>
                                                            <i data-swchon-text="ON"
                                                               data-swchoff-text="OFF"/>Anastasia</label>
                                                        <label className="toggle state-disabled">
                                                            <input type="radio" name="radio-toggle"
                                                                   disabled="disabled"/>
                                                            <i data-swchon-text="ON"
                                                               data-swchoff-text="OFF"/>Avelina</label>
                                                    </section>

                                                    <div className="col col-2"/>

                                                    <section className="col col-5">
                                                        <label className="label">Checkbox Toggles (disabled)</label>
                                                        <label className="toggle state-disabled">
                                                            <input type="checkbox" name="checkbox-toggle"
                                                                   defaultChecked
                                                                   disabled="disabled"/>
                                                            <i data-swchon-text="ON"
                                                               data-swchoff-text="OFF"/>Cassandra</label>
                                                        <label className="toggle state-disabled">
                                                            <input type="checkbox" name="checkbox-toggle"
                                                                   disabled="disabled"/>
                                                            <i data-swchon-text="ON"
                                                               data-swchoff-text="OFF"/>Clemencia</label>
                                                        <label className="toggle state-disabled">
                                                            <input type="checkbox" name="checkbox-toggle"
                                                                   disabled="disabled"/>
                                                            <i data-swchon-text="ON"
                                                               data-swchoff-text="OFF"/>Desiderata</label>
                                                    </section>
                                                </div>
                                            </fieldset>

                                            <footer>
                                                <button type="submit" className="btn btn-primary">
                                                    Submit
                                                </button>
                                                <button type="button" className="btn btn-default"
                                                        onclick="window.history.back();">
                                                    Back
                                                </button>
                                            </footer>
                                        </form>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                        </article>

                    </div>
                    <div className="row">


                        {/* NEW COL START */}
                        <article className="col-sm-12 col-md-12 col-lg-6">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false}
                                          custombutton={false}
                                          color="blueDark">
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                    <h2>Smart Tooltips (left) </h2>

                                </header>

                                {/* widget div*/}
                                <div>
                                    <div className="widget-body no-padding">

                                        <form className="smart-form">
                                            <header>
                                                Tooltips (with icon)
                                            </header>

                                            <fieldset>
                                                <section>
                                                    <label className="label">Text input with top-right tooltip</label>
                                                    <label className="input"> <i
                                                        className="icon-append fa fa-question-circle"/>
                                                        <input type="text" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-top-right">
                                                            <i className="fa fa-warning txt-color-teal"/>
                                                            Some helpful information</b>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Text input with bottom-right
                                                        tooltip</label>
                                                    <label className="input"> <i
                                                        className="icon-append fa fa-question-circle"/>
                                                        <input type="text" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-bottom-right">
                                                            <i className="fa fa-warning txt-color-teal"/>
                                                            Some helpful information</b>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Text input with right tooltip</label>
                                                    <label className="input"> <i
                                                        className="icon-append fa fa-question-circle"/>
                                                        <input type="text" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-right">
                                                            <i className="fa fa-warning txt-color-teal"/>
                                                            Some helpful information</b>
                                                    </label>
                                                </section>

                                            </fieldset>

                                            <fieldset>
                                                <section>
                                                    <label className="label">Textarea with top-right tooltip</label>
                                                    <label className="textarea"> <i
                                                        className="icon-append fa fa-question-circle"/>
                                                        <textarea rows="3" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-top-right">
                                                            <i className="fa fa-warning txt-color-teal"/>
                                                            Some helpful information </b>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Textarea with bottom-right tooltip</label>
                                                    <label className="textarea"> <i
                                                        className="icon-append fa fa-question-circle"/>
                                                        <textarea rows="3" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-bottom-right"><i
                                                            className="fa fa-warning txt-color-teal"/>
                                                            Some helpful information</b>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Textarea with right tooltip</label>
                                                    <label className="textarea"> <i
                                                        className="icon-append fa fa-question-circle"/>
                                                        <textarea rows="3" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-right"><i
                                                            className="fa fa-warning txt-color-teal"/> Some
                                                            helpful information</b>
                                                    </label>
                                                </section>

                                            </fieldset>

                                        </form>

                                    </div>
                                    {/* end widget content */}

                                </div>
                            </JarvisWidget>
                        </article>

                        <article className="col-sm-12 col-md-12 col-lg-6">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false}
                                          custombutton={false}
                                          color="blueDark">
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                                    <h2>Smart Tooltips (right) </h2>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget content */}
                                    <div className="widget-body no-padding">

                                        <form className="smart-form">
                                            <header>
                                                Tooltips (with icon)
                                            </header>

                                            <fieldset>

                                                <section>
                                                    <label className="label">Text input with top-left tooltip</label>
                                                    <label className="input"> <i
                                                        className="icon-prepend fa fa-question-circle"/>
                                                        <input type="text" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-top-left">
                                                            <i className="fa fa-warning txt-color-teal"/>
                                                            Some helpful information</b>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Text input with bottom-left tooltip</label>
                                                    <label className="input"> <i
                                                        className="icon-prepend fa fa-question-circle"/>
                                                        <input type="text" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-bottom-left">
                                                            <i className="fa fa-warning txt-color-teal"/>
                                                            Some helpful information</b>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Text input with left tooltip</label>
                                                    <label className="input"> <i
                                                        className="icon-prepend fa fa-question-circle"/>
                                                        <input type="text" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-left">
                                                            <i className="fa fa-warning txt-color-teal"/>
                                                            Some helpful information</b>
                                                    </label>
                                                </section>
                                            </fieldset>

                                            <fieldset>

                                                <section>
                                                    <label className="label">Textarea with top-left tooltip</label>
                                                    <label className="textarea"> <i
                                                        className="icon-prepend fa fa-question-circle"/>
                                                        <textarea rows="3" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-top-left"> <i
                                                            className="fa fa-warning txt-color-teal"/>
                                                            Some helpful information</b>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Textarea with bottom-left tooltip</label>
                                                    <label className="textarea"> <i
                                                        className="icon-prepend fa fa-question-circle"/>
                                                        <textarea rows="3" placeholder="Focus to view the tooltip"/>
                                                        <b className="tooltip tooltip-bottom-left"><i
                                                            className="fa fa-warning txt-color-teal"/>
                                                            Some helpful information</b>
                                                    </label>
                                                </section>


                                                <section>
                                                    <label className="label">Textarea with left tooltip</label>
                                                    <label className="textarea"> <i
                                                        className="icon-prepend fa fa-question-circle"/>
                                                        <textarea rows="3" placeholder="Focus to view the tooltip"/> <b
                                                            className="tooltip tooltip-left">
                                                            <i className="fa fa-warning txt-color-teal"/> Some helpful
                                                            information</b>
                                                    </label>
                                                </section>
                                            </fieldset>

                                        </form>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}


                                {/* end widget */}

                            </JarvisWidget>
                        </article >
                    </div>
                </WidgetGrid>
            </div>
        )
    }
});

export default FormElements