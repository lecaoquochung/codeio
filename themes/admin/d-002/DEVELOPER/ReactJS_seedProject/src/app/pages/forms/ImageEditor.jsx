import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

//import SmartJcrop from '../../../components/forms/editors/SmartJcrop.jsx'

import ApiPanel from './jcrop/containers/ApiPanel.jsx'
import DefaultPanel from './jcrop/containers/DefaultPanel.jsx'
import ShowSelectionPanel from './jcrop/containers/ShowSelectionPanel.jsx'
import PreviewPanel from './jcrop/containers/PreviewPanel.jsx'
import StylingPanel from './jcrop/containers/StylingPanel.jsx'
import AnimationsPanel from './jcrop/containers/AnimationsPanel.jsx'

export default () => (
    <div id="content">
        <div className="row">
            <BigBreadcrumbs items={['Forms', 'Image Editor']} icon="table"
                            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
            <SubHeader />
        </div>


        {/* widget grid */}


        <WidgetGrid>

            {/* row */}
            <div className="row">

                {/* NEW WIDGET START */}
                <article className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                    <div className="alert alert-danger hidden-lg hidden-md hidden-sm">
                        <b>Please note:</b>
                        This plugin is non-responsive
                    </div>

                    {/* Widget ID (each widget will need unique ID)*/}

                    <JarvisWidget colorbutton={false} editbutton={false} togglebutton={false}
                                  deletebutton={false} fullscreenbutton={false}>

                        <header role="heading">
                            <span className="widget-icon"> <i className="fa fa-file-image-o txt-color-darken"/> </span>

                            <h2 className="hidden-xs hidden-sm">jcrop </h2>

                            <ul className="nav nav-tabs pull-right in" id="myTab">

                                <li className="active">
                                    <a data-toggle="tab" href="#s1"><i className="fa fa-crop text-success"/>
                                        <span className="hidden-mobile hidden-tablet">API</span></a>
                                </li>

                                <li>
                                    <a data-toggle="tab" href="#s2"><i className="fa fa-crop text-primary"/>
                                        <span className="hidden-mobile hidden-tablet">Default</span></a>
                                </li>

                                <li>
                                    <a data-toggle="tab" href="#s3"><i className="fa fa-crop text-warning"/>
                                        <span className="hidden-mobile hidden-tablet">Basic</span></a>
                                </li>

                                <li>
                                    <a data-toggle="tab" href="#s4"><i className="fa fa-crop text-danger"/>
                                        <span className="hidden-mobile hidden-tablet">Aspect Ratio</span></a>
                                </li>

                                <li>
                                    <a data-toggle="tab" href="#s5"><i className="fa fa-crop txt-color-purple"/>
                                        <span className="hidden-mobile hidden-tablet">Animations</span></a>
                                </li>

                                <li>
                                    <a data-toggle="tab" href="#s6"><i className="fa fa-crop txt-color-pink"/>
                                        <span className="hidden-mobile hidden-tablet">Styling</span></a>
                                </li>

                            </ul>


                        </header>

                        {/* widget div*/}
                        <div role="content">
                            {/* widget edit box */}

                            <div className="widget-body">
                                {/* content */}
                                <div id="myTabContent" className="tab-content">

                                    {/* new tab: API interface */}
                                    <div className="tab-pane fade active in" id="s1">

                                        <h4 className="margin-bottom-10">API Interface — real-time API
                                            example</h4>

                                        <div className="alert alert-info">
                                            <b>Jcrop 2.0 API interface panel</b>
                                            <br/>

                                        </div>

                                        <ApiPanel />


                                    </div>
                                    {/* end s1 tab pane */}

                                    {/* new tab: Default */}
                                    <div className="tab-pane fade" id="s2">

                                        <h4 className="margin-bottom-10">Default Behaviour</h4>

                                        <div className="alert alert-info">
                                            <b>This example demonstrates the default behavior of Jcrop.</b>
                                            <br/>
                                            Since no event handlers have been attached it only performs
                                            the cropping behavior.
                                        </div>

                                        <DefaultPanel />


                                    </div>
                                    {/* end s1 tab pane */}

                                    {/* new tab: Basic handler */}
                                    <div className="tab-pane fade" id="s3">

                                        <h4 className="margin-bottom-10">Basic Handler — basic form
                                            integration</h4>

                                        <div className="alert alert-info">
                                            <b>An example with a basic event handler.</b> Here we've tied
                                            several form values together with a simple event handler invocation.
                                            The result is that the form values are updated in real-time as
                                            the selection is changed using Jcrop's <em>onChange</em> handler.
                                        </div>

                                        {/* This is the image we're attaching Jcrop to */}


                                        <ShowSelectionPanel />
                                    </div>
                                    {/* end s2 tab pane */}

                                    {/* new tab: Aspect ratio */}
                                    <div className="tab-pane fade" id="s4">

                                        <h4 className="margin-bottom-10">Aspect Ratio w/ Preview Pane — nice
                                            visual example</h4>

                                        <div className="alert alert-info">
                                            <b>An example implementing a preview pane.</b>
                                            Obviously the most visual demo, the preview pane is accomplished
                                            entirely outside of Jcrop with a simple jQuery-flavored callback.
                                            This type of interface could be useful for creating a thumbnail
                                            or avatar. The onChange event handler is used to update the
                                            view in the preview pane.
                                        </div>

                                        <div id="jcrop-demo-with-preview">

                                            <PreviewPanel />

                                        </div>


                                    </div>
                                    {/* end s3 tab pane */}

                                    {/* new tab: animation/transitions */}
                                    <div className="tab-pane fade" id="s5">

                                        <h4 className="margin-bottom-10">Animation/Transitions —
                                            animation/fading demo</h4>

                                        <div className="alert alert-info">
                                            <b>Experimental shader active.</b>
                                            Jcrop now includes a shading mode that facilitates building
                                            better transparent Jcrop instances. The experimental shader is less
                                            robust than Jcrop's default shading method and should only be
                                            used if you require this functionality.
                                        </div>

                                        <div className="row">

                                            <div className="col-sm-12 col-md-12 col-lg-12">

                                                <AnimationsPanel />

                                            </div>

                                        </div>

                                    </div>
                                    {/* end s4 tab pane */}

                                    {/* new tab: Styling */}
                                    <div className="tab-pane fade padding-10 no-padding-bottom" id="s6">

                                        <h4 className="margin-bottom-10">Styling Example — style Jcrop
                                            dynamically</h4>


                                        <StylingPanel />

                                    </div>
                                    {/* end s6 tab pane */}

                                </div>

                                {/* end content */}
                            </div>

                        </div>
                        {/* end widget div */}
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
