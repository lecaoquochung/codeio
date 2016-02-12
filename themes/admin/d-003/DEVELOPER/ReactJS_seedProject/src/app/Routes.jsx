import React from 'react'
import {Route, Redirect, IndexRoute} from 'react-router'

import Layout from './pages/layout/Layout.jsx'

import Home from './pages/home/Home.jsx'

import LockedScreen from './pages/misc/LockedScreen.jsx'
import Login from './pages/misc/Login.jsx'
import Forgot from './pages/misc/Forgot.jsx'
import Register from './pages/misc/Register.jsx'

const Routes = (
    <Route>
        <Route path="/" component={Layout}>
            <Redirect from="/" to="/home"/>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
        </Route>
        <Route path="lock" component={LockedScreen} />
        <Route path="login" component={Login}/>
        <Route path="forgot" component={Forgot}/>
        <Route path="register" component={Register}/>
    </Route>);


export default Routes