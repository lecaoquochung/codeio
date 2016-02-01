import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router'

import History from '../components/layout/navigation/classes/History.js';

import Routes from './Routes.jsx';

var rootInstance = render((
    <Router history={History}>
        {Routes}
    </Router>
), document.getElementById('smartadmin-root'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            // Help React Hot Loader figure out the root component instances on the page:
            return [rootInstance];
        }
    });
}