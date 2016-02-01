import React from 'react'

import {ButtonGroup, Button} from 'react-bootstrap'

import classnames from 'classnames'

import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'


let SwitchWidgetDemo = React.createClass({
	getInitialState: function(){
		return {
			style: 'style1'
		}
	},
	onStyleChange: function(style) {
	    this.setState({
	        style: style
	    });
	},
	render: function(){
		var toolbarOneClass = classnames('widget-toolbar', {
			'hidden': this.state.style == 'style1'
		});
		var toolbarTwoClass = classnames('widget-toolbar', {
			'hidden': this.state.style == 'style2'
		});
		return (
                    <JarvisWidget editbutton={false}
                                  colorbutton={false} togglebutton={false}
                                  deletebutton={false} fullscreenbutton={false}>
                        <header>
                            <h2><strong>Widget</strong><i> Switch</i></h2>
                            <div className={toolbarOneClass}>
                                <span className="onoffswitch-title"><i className="fa fa-location-arrow" /> Style 1</span>
								<span className="onoffswitch">
									<input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox"
                                           id="myonoffswitch"/>
                                        <label className="onoffswitch-label" htmlFor="myonoffswitch">
                                            <span className="onoffswitch-inner" data-swchon-text="ON"
                                                  data-swchoff-text="OFF" />
                                            <span className="onoffswitch-switch" /> </label>
									</span>
                            </div>
                            <div className={toolbarTwoClass}>
                                <div className="smart-form">
                                    <label className="toggle">
                                        <input type="checkbox" id="demo-switch-to-pills"
                                               name="checkbox-toggle"/>
                                        <i data-swchon-text="ON" data-swchoff-text="OFF" />
                                        <em className="fa fa-location-arrow" /> Style 2</label>
                                </div>
                            </div>
                        </header>
                        {/* widget div*/}
                        <div>
                            {/* widget content */}
                            <div className="widget-body">
                                <h4 className="alert alert-info"> Insert switches to widget header </h4>

                                <ButtonGroup bsSize="small">
                                    <Button onClick={this.onStyleChange.bind(this, 'style1')} active={this.state.style === 'style1'}>
                                    	<strong>Switch</strong> <i>Style 1</i>
                                    </Button>
                                    <Button onClick={this.onStyleChange.bind(this, 'style2')} active={this.state.style === 'style2'}>
										<strong>Switch</strong> <i>Style 2</i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                            {/* end widget content */}
                        </div>
                        {/* end widget div */}
                    </JarvisWidget>

		)
	}
});

export default SwitchWidgetDemo