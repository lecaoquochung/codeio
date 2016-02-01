import React from 'react'
import Reflux from 'reflux'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import {findDOMNode} from 'react-dom'

import _ from 'lodash'

import DemoStore from './DemoStore'
import DemoActions from './DemoActions'

let $body = $('body');
let config = window.SMARTADMIN_GLOBALS;

let DemoStylesSwitcher = React.createClass({
    mixins: [LinkedStateMixin, Reflux.connect(DemoStore)],
    getInitialState: function () {
        return DemoStore.getStore()
    },
    setSkinState: function (skin) {
        DemoActions.smartSkin(skin)
    },
    _toggle: function(prop){
        DemoActions[prop]()
    },
    render: function () {
        this._processBody();

        return (
            <div className="demo" ref="demoStylesSwitcher">
				<span id="demo-setting" onClick={this._toggleActivate}>
			    	<i className="fa fa-cog txt-color-blueDark"/>
			    </span>
                <form>
                    <legend className="no-padding margin-bottom-10">Layout Options</legend>
                    <section>
                        <label><input type="checkbox" checked={this.state.fixedHeader} onChange={this._toggle.bind(this, 'fixedHeader')}
                                      className="checkbox style-0"/><span>Fixed Header</span></label>
                        <label><input type="checkbox"
                                      checked={this.state.fixedNavigation} onChange={this._toggle.bind(this, 'fixedNavigation')}
                                      className="checkbox style-0"/><span>Fixed Navigation</span></label>
                        <label><input type="checkbox"
                                      checked={this.state.fixedRibbon} onChange={this._toggle.bind(this, 'fixedRibbon')}
                                      className="checkbox style-0"/><span>Fixed Ribbon</span></label>
                        <label><input type="checkbox"
                                      checked={this.state.fixedPageFooter} onChange={this._toggle.bind(this, 'fixedPageFooter')}
                                      className="checkbox style-0"/><span>Fixed Footer</span></label>
                        <label><input type="checkbox"
                                      checked={this.state.insideContainer} onChange={this._toggle.bind(this, 'insideContainer')}
                                      className="checkbox style-0"/><span>Inside <b> .container</b></span></label>
                        <label><input type="checkbox"
                                      checked={this.state.rtl} onChange={this._toggle.bind(this, 'rtl')}
                                      className="checkbox style-0"/><span>RTL</span></label>
                        <label><input type="checkbox"
                                      checked={this.state.menuOnTop} onChange={this._toggle.bind(this, 'menuOnTop')}
                                      className="checkbox style-0"/><span>Menu on <b>top</b></span></label>
                        <label><input type="checkbox"
                                      checked={this.state.colorblindFriendly} onChange={this._toggle.bind(this, 'colorblindFriendly')}
                                      className="checkbox style-0"/><span>For Colorblind <div
                            className="font-xs text-right">(experimental)
                        </div></span>
                        </label><span id="smart-bgimages"/></section>
                    <section><h6 className="margin-top-10 semi-bold margin-bottom-5">Clear Localstorage</h6><a
                        onClick={this._factoryReset} className="btn btn-xs btn-block btn-primary"
                        id="reset-smart-widget"><i
                        className="fa fa-refresh"/> Factory Reset</a></section>

                    <h6 className="margin-top-10 semi-bold margin-bottom-5">SmartAdmin Skins</h6>

                    <section id="smart-styles">
                        {
                            this.state.skins.map(function (skin) {
                                var check = this.state.smartSkin == skin.name ? <i className="fa fa-check fa-fw"/> : '';
                                var beta = skin.beta ? <sup>beta</sup> : '';
                                return <a onClick={this.setSkinState.bind(this, skin)} className={skin.class}
                                          style={skin.style} key={skin.name}>{check} {skin.label} {beta}</a>
                            }.bind(this))
                        }
                    </section>
                </form>
            </div>
        )
    },
    _toggleActivate: function () {
        $(this.refs.demoStylesSwitcher).toggleClass('activate')
    },
    _processBody: function() {
        let state = this.state;

        $body.removeClass(_.pluck(state.skins, 'name').join(' '));
        $body.addClass(state.skin.name);
        $("#logo img").attr('src', state.skin.logo);

        $body.toggleClass('fixed-header', state.fixedHeader);
        $body.toggleClass('fixed-navigation', state.fixedNavigation);
        $body.toggleClass('fixed-ribbon', state.fixedRibbon);
        $body.toggleClass('fixed-page-footer', state.fixedPageFooter);
        $body.toggleClass('container', state.insideContainer);
        $body.toggleClass('smart-rtl', state.rtl);
        $body.toggleClass('menu-on-top', state.menuOnTop);
        $body.toggleClass('colorblind-friendly', state.colorblindFriendly);

        if (state.menuOnTop) $body.removeClass('minified');
    },
    _factoryReset: function () {
        $.SmartMessageBox({
            title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
            content: "Would you like to RESET all your saved widgets and clear LocalStorage?",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed == "Yes" && localStorage) {
                localStorage.clear();
                location.reload()
            }
        });
    }
});


export default DemoStylesSwitcher

