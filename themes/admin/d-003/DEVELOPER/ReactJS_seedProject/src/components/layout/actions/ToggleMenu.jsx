import React from 'react'

let ToggleMenu = React.createClass({
	toggleMenu: function(e){
		var $body = $('body'), $html = $('html');

        if (!$body.hasClass("menu-on-top")){
            $html.toggleClass("hidden-menu-mobile-lock");
            $body.toggleClass("hidden-menu");
            $body.removeClass("minified");
        } else if ( $body.hasClass("menu-on-top") && $body.hasClass("mobile-view-activated") ) {
            $html.toggleClass("hidden-menu-mobile-lock");
            $body.toggleClass("hidden-menu");
            $body.removeClass("minified");
        }
        e.preventDefault();
	},
	render: function(){
		return (
            <div id="hide-menu" className={this.props.className}>
                <span>
                    <a href-void onClick={this.toggleMenu} title="Collapse Menu"><i className="fa fa-reorder"/></a>
                </span>
            </div>

		)
	}
});

export default ToggleMenu