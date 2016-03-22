import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import MarkdownEditor from '../../../components/forms/editors/MarkdownEditor.jsx'
import Summernote from '../../../components/forms/editors/Summernote.jsx'
import SmartEditSummernote from '../../../components/forms/editors/SmartEditSummernote.jsx'
import SmartDestroySummernote from '../../../components/forms/editors/SmartDestroySummernote.jsx'

let demoText = `### Hello there
How are you?

I have bellow task for you :

Select from this text...
Click the bold on THIS WORD and make THESE ONE italic
Link GOOGLE to google.com
Test to insert image (and try to tab after write the image description)
Test Preview
And ending here... Click "List"

Enjoy!`

let BootstrapEditors = React.createClass({
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Forms', 'Bootstrap Editors']} icon="table"
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                <WidgetGrid>

                    <div className="row">

                        {/* NEW WIDGET START */}
                        <article className="col-sm-12 col-md-12 col-lg-6">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} togglebutton={false}
                                          fullscreenbutton={false} sortable={false} color="purple">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-pencil"/> </span>

                                    <h2>Markdown</h2>

                                </header>

                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body no-padding">

                                        <MarkdownEditor value={demoText} className="custom-scroll" height={270}/>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget className="well" colorbutton={false} editbutton={false} togglebutton={false}
                                          fullscreenbutton={false} sortable={false}>

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-pencil"/> </span>

                                    <h2>Markdown API</h2>

                                </header>

                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">

                                        <h3>Markdown API</h3>

                                        <table className="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Method Name</th>
                                                <th>Description</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><code>
                                                    showEditor()</code></td>
                                                <td>Toggle on the editor visibility</td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    showPreview()</code></td>
                                                <td>Toggle on the preview visibility</td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    hidePreview()</code></td>
                                                <td>Toggle off the editor visibility</td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    isDirty()</code></td>
                                                <td>Check the editor content state, return true if the original content
                                                    was changed
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    getContent()</code></td>
                                                <td>Get the editor content</td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    setContent(<em>string</em> content)</code></td>
                                                <td>Set the editor content</td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    findSelection(<em>string</em> words)</code></td>
                                                <td>Find some words/sentence within the editor and returned selection
                                                    object(containing word
                                                    position and other useful information).
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    getSelection()</code></td>
                                                <td>Get the current selected chunk of words within the editor.</td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    setSelection(<em>int</em> start, <em>int</em> end)</code></td>
                                                <td>Tell the editor to select a span of words from <code>
                                                    start</code> to <code>
                                                    end</code>.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    replaceSelection(<em>string</em> content)</code></td>
                                                <td>Replace the current selected chunk of words within the editor with
                                                    any content.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    getNextTab()</code></td>
                                                <td>Get the next tab memory. Returned selection object(containing word
                                                    position and other useful
                                                    information).
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    setNextTab(<em>int</em> start, <em>int</em> end)</code></td>
                                                <td>Tell the editor to select a span of words from <code>
                                                    start</code> to <code>
                                                    end</code> at next <code>
                                                    tab</code> keypress event.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    enableButtons(<em>string</em> name)</code></td>
                                                <td>Enabled a button by <code>
                                                    name</code> that described in <code>
                                                    buttons</code> or <code>
                                                    additionalButtons</code> arrays. Passing <code>
                                                    all</code> will enabled all buttons.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><code>
                                                    disableButtons(<em>string</em> name)</code></td>
                                                <td>Disabled a button by <code>
                                                    name</code> that described in <code>
                                                    buttons</code> or <code>
                                                    additionalButtons</code> arrays. Passing <code>
                                                    all</code> will disabled all buttons.
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                        </article>
                        {/* WIDGET END */}

                        {/* NEW WIDGET START */}
                        <article className="col-sm-12 col-md-12 col-lg-6">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} togglebutton={false}
                                          fullscreenbutton={false} sortable={false} color="blue">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-pencil"/> </span>

                                    <h2>Summernote (Lightweight)</h2>

                                </header>

                                {/* widget div*/}
                                <div>


                                    {/* widget content */}
                                    <div className="widget-body no-padding">

                                        <Summernote className="summernote" height={180}/>

                                        <div className="widget-footer smart-form">

                                            <div className="btn-group">

                                                <button className="btn btn-sm btn-primary" type="button">
                                                    <i className="fa fa-times"/> Cancel
                                                </button>

                                            </div>
                                            <div className="btn-group">

                                                <button className="btn btn-sm btn-success" type="button">
                                                    <i className="fa fa-check"/> Save
                                                </button>

                                            </div>

                                            <label className="checkbox pull-left">
                                                <input type="checkbox" defaultChecked name="autosave" id="autosave"/>
                                                <i/>Auto Save
                                            </label>

                                        </div>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget className="well">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-pencil"/> </span>

                                    <h2>Example </h2>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget content */}
                                    <div className="widget-body">

                                        <h3>Summernote Example</h3>

                                        <p>
                                            <SmartEditSummernote target=".click2edit" className="btn btn-primary" type="button">
                                                Edit
                                            </SmartEditSummernote>
                                            <SmartDestroySummernote target=".click2edit" className="btn btn-primary" type="button">
                                                Save
                                            </SmartDestroySummernote>
                                        </p>
                                        <p/>

                                        <div className="click2edit">
                                            To change this text with summernote, click `Edit` button
                                        </div>

                                        <h5>HTML:</h5>
				<pre><code className="xml">&lt;button className="btn btn-primary"
                    data-smart-edit-summernote=".click2edit"&gt;Edit&lt;/button&gt;
                    &lt;button className="btn btn-primary" data-smart-destroy-summernote=".click2edit"&gt;Save&lt;
                    /button&gt;

                    &lt;div className="click2edit"&gt;To change this text with summernote, click `Edit` button&lt;
                    /div&gt;
                </code></pre>
                                        <h5>Script:</h5>
				<pre><code className="javascript">
                    //no scripts required
                </code></pre>


                                        <h5>Documentation:</h5>

                                        <p className="alert alert-info">
                                            Full API for Summernote.js, including keybored shortcuts, PHP Examples,
                                            Django installation, and
                                            Rails (gem) integration can be found <a
                                            href="http://hackerwins.github.io/summernote/features.html#api">here</a>
                                        </p>
                                    </div>
                                    {/* end widget content */}


                                    {/* end widget div */}
                                </div>

                            </JarvisWidget>
                            {/* end widget */}

                        </article>
                        {/* WIDGET END */}

                    </div>

                    {/* end row */}

                </WidgetGrid>

                {/* end widget grid */}


            </div>
        )
    }
});

export default BootstrapEditors