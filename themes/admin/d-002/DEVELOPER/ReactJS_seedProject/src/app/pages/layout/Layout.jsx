import React from 'react'

import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Ribbon from './Ribbon.jsx'
import Footer from './Footer.jsx'
import Shortcut from './Shortcut.jsx'
import DemoStylesSwitcher from '../../../components/layout/demo/DemoStylesSwitcher.jsx'

import UserActions from '../../../components/user/actions/UserActions.js'

require('../../../components/layout/less/layout.less');

let Layout = React.createClass({
    componentWillMount: function () {
        UserActions.init();
    },
    render: function(){
        return (
            <div>
                <Header />
                <Navigation />

                <div id="main" role="main">
                    <Ribbon />
                    {this.props.children}
                </div>

                <Footer />
                <Shortcut />
            </div>
        )
    }
});

export default Layout