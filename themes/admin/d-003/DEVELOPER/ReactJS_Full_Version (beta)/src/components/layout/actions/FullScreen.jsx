import React from 'react'

let FullScreen = React.createClass({
	handleToggle: function(){
        var $body = $('body');
        if (!$body.hasClass("full-screen")) {
            $body.addClass("full-screen");
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
        } else {
            $body.removeClass("full-screen");
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }

	},
	render: function(){
		return (
			<div id="fullscreen" onClick={this.handleToggle} className={this.props.className}>
            	<span> <a href-void title="Full Screen"><i
	            	className="fa fa-arrows-alt"/></a> </span>
        	</div>
    	)	
	}	
});

export default FullScreen