import React from 'react'

let DeviceDetect = React.createClass({
    render: function () {
        var $body = $('body');

        var isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

        $body.toggleClass('desktop-detected', !isMobile);
        $body.toggleClass('mobile-detected', isMobile);
        return (
            <div />
        )
    }
});

export default DeviceDetect