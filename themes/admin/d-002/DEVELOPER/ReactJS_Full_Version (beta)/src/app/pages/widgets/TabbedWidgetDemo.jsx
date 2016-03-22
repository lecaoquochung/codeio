import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import {Tabs, Tab} from 'react-bootstrap'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

let TabbedWidgetDemo = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function(){
        return {
            demoShowTabs: false
        }
    },
    render: function(){
        var bsStyle = !!this.state.demoShowTabs ? 'tabs' : 'pills';
        return (
            <JarvisWidget colorbutton={false}
                          editbutton={false} togglebutton={false}
                          deletebutton={false} fullscreenbutton={false}
                          custombutton={false}>                                          
                <header>
                    <h2><strong>Tabs / Pills</strong> <i>Widget</i></h2>
                </header>
                {/* widget div*/}
                <div>
                    {/* widget content */}
                    <div className="widget-body no-padding">

                        <Tabs bsStyle={bsStyle} className="padding-10" activeKey={this.state.key} onSelect={this.handleSelect}>
                            <Tab eventKey={1} title="Tab 1" >
                                <h4 className="alert alert-danger"> Insert tabs / pills to widget
                                    header </h4>
                                I have six locks on my door all in a row. When I go out, I lock every
                                other one. I figure no matter how long somebody stands there picking the
                                locks, they are always locking three.
                            </Tab>
                            <Tab eventKey={2} title="Tab 2">
                                <h4 className="alert alert-warning"> Checkout the <a
                                    href="general-elements.html">General Elements</a> page for more tab
                                    options </h4>
                                Food truck fixie locavore, accusamus mcsweeney&#39;s marfa nulla
                                single-origin coffee squid. Exercitation +1 labore velit, blog sartorial
                                PBR leggings next level wes anderson artisan four loko farm-to-table
                                craft beer twee.
                            </Tab>
                        </Tabs>

                        {/* widget body text*/}
                        
                        {/* end widget body text*/}
                        {/* widget footer */}
                        <div className="widget-footer text-right">
                            <span className="onoffswitch-title">
                                <i className="fa fa-check" /> Show Tabs
                            </span>
                            <span className="onoffswitch">
                                <input type="checkbox" name="onoffswitch"
                                       className="onoffswitch-checkbox" id="show-tabs"
                                       checkedLink={this.linkState('demoShowTabs')}/>
                                    <label className="onoffswitch-label" htmlFor="show-tabs">
                                        <span className="onoffswitch-inner" data-swchon-text="True"
                                              data-swchoff-text="NO" />
                                        <span className="onoffswitch-switch" />
                                    </label>
                            </span>
                        </div>
                        {/* end widget footer */}
                    </div>
                    {/* end widget content */}
                </div>
                {/* end widget div */}
            </JarvisWidget>
        )
    }
});

export default TabbedWidgetDemo
