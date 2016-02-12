import React from 'react'
import {Route, Redirect, IndexRoute} from 'react-router'

import Layout from './pages/layout/Layout.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'

import Inbox from './pages/inbox/components/Inbox.jsx'
import InboxFolder from './pages/inbox/components/InboxFolder.jsx'
import InboxCompose from './pages/inbox/components/InboxCompose.jsx'
import InboxDetail from './pages/inbox/components/InboxDetail.jsx'
import InboxReplay from './pages/inbox/components/InboxReplay.jsx'

import FlotCharts from './pages/graphs/FlotCharts.jsx'
import SparklineCharts from './pages/graphs/SparklineCharts.jsx'
import EasyPieCharts from './pages/graphs/EasyPieCharts.jsx'
import ChartJs from './pages/graphs/ChartJs.jsx'
import MorrisCharts from './pages/graphs/MorrisCharts.jsx'
import Dygraphs from './pages/graphs/Dygraphs.jsx'
import HighchartTables from './pages/graphs/HighchartTables.jsx'

import Datatables from './pages/tables/Datatables.jsx'

import UiGeneral from './pages/ui/UiGeneral.jsx'

import FlagIcons from './pages/ui/icons/FlagIcons.jsx'
import FontAwesomeIcons from './pages/ui/icons/FontAwesomeIcons.jsx'
import Glyphicons from './pages/ui/icons/Glyphicons.jsx'
import TreeViews from './pages/ui/TreeViews.jsx'
import NestableLists from './pages/ui/NestableLists.jsx'
import JQueryUi from './pages/ui/JQueryUi.jsx'

import FormElements from './pages/forms/FormElements.jsx'
import FormPlugins from './pages/forms/FormPlugins.jsx'
import ImageEditor from './pages/forms/ImageEditor.jsx'
import BootstrapEditors from './pages/forms/BootstrapEditors.jsx'
import FormLayouts from './pages/forms/FormLayouts.jsx'
import BootstrapValidation from './pages/forms/BootstrapValidation.jsx'
import Wizards from './pages/forms/Wizards.jsx'
import DropzoneDemo from './pages/forms/DropzoneDemo.jsx'

import CalendarPage from './pages/calendar/CalendarPage.jsx'


import Projects from './pages/app-views/Projects.jsx'
import Gallery from './pages/app-views/Gallery.jsx'

import Maps from './pages/maps/Maps.jsx'
import MapView from './pages/maps/MapView.jsx'

import Widgets from './pages/widgets/Widgets.jsx'
import StaticPageLoader from './pages/layout/tools/StaticPageLoader.jsx'

import Page404 from './pages/misc/Page404.jsx'
import Page500 from './pages/misc/Page500.jsx'
import BlankPage from './pages/misc/BlankPage.jsx'
import LockedScreen from './pages/misc/LockedScreen.jsx'
import Login from './pages/misc/Login.jsx'
import Forgot from './pages/misc/Forgot.jsx'
import Register from './pages/misc/Register.jsx'
import CKEditorDemo from './pages/misc/CKEditorDemo.jsx'

import Orders from './pages/e-commerce/Orders.jsx'

const Routes = (
    <Route>
        <Route path="/" component={Layout}>
            <Redirect from="/" to="/dashboard"/>
            <IndexRoute component={Dashboard}/>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="dashboard/social-wall.html" component={StaticPageLoader} subHeader={false}/>

            <Redirect from="inbox" to="/inbox/folder/inbox"/>
            <Route path="inbox" component={Inbox}>
                <Route path="folder/:folder" component={InboxFolder}/>
                <Route path="compose" component={InboxCompose}/>
                <Route path="detail/:messageId" component={InboxDetail}/>
                <Route path="replay/:messageId" component={InboxReplay}/>
            </Route>

            <Redirect from="graphs" to="/graphs/chartjs"/>
            <Route path="graphs">
                <Route path="flot" component={FlotCharts}/>
                <Route path="easy-pie-charts" component={EasyPieCharts}/>
                <Route path="sparklines" component={SparklineCharts}/>
                <Route path="chartjs" component={ChartJs}/>
                <Route path="morris" component={MorrisCharts}/>
                <Route path="dygraphs" component={Dygraphs}/>
                <Route path="highchart-table" component={HighchartTables}/>
            </Route>

            <Redirect from="tables" to="/tables/normal"/>
            <Route path="tables">
                <Route path="normal.html" component={StaticPageLoader}/>
                <Route path="datatables" component={Datatables}/>
            </Route>

            <Redirect from="forms" to="/forms/elements"/>
            <Route path="forms">
                <Route path="elements" component={FormElements}/>
                <Route path="layouts" component={FormLayouts}/>
                <Route path="form-validation.html" component={StaticPageLoader}/>
                <Route path="plugins" component={FormPlugins}/>
                <Route path="wizards" component={Wizards}/>
                <Route path="dropzone" component={DropzoneDemo}/>
                <Route path="image-editor" component={ImageEditor}/>
                <Route path="bootstrap-validation" component={BootstrapValidation}/>
                <Route path="bootstrap-editors" component={BootstrapEditors}/>
                <Route path="bootstrap-form-elements.html" component={StaticPageLoader}/>
            </Route>

            <Redirect from="ui" to="/ui/general"/>
            <Route path="ui">

                <Route path="general" component={UiGeneral}/>
                <Route path="buttons.html" component={StaticPageLoader}/>
                <Route path="icons">
                    <Route path="font-awesome" component={FontAwesomeIcons}/>
                    <Route path="glyphicons" component={Glyphicons}/>
                    <Route path="flags" component={FlagIcons}/>
                </Route>

                <Route path="jquery-ui" component={JQueryUi}/>
                <Route path="tree-view" component={TreeViews}/>
                <Route path="nestable-lists" component={NestableLists}/>
                <Route path="grid.html" component={StaticPageLoader}/>
                <Route path="typography.html" component={StaticPageLoader}/>
            </Route>

            <Route path="calendar" component={CalendarPage}/>


            <Redirect from="maps" to="/maps/colorful"/>
            <Route path="maps" component={Maps}>
                <Route path=":style" component={MapView}/>
            </Route>

            <Route path="widgets" component={Widgets}/>

            <Route path="views">
                <Route path="projects" component={Projects}/>
                <Route path="blog.html" component={StaticPageLoader}/>
                <Route path="timeline.html" component={StaticPageLoader}/>
                <Route path="profile.html" component={StaticPageLoader}/>
                <Route path="gallery" component={Gallery}/>
                <Route path="forum">
                    <Route path="general.html" component={StaticPageLoader} />
                    <Route path="topic.html" component={StaticPageLoader} />
                    <Route path="post.html" component={StaticPageLoader} />
                </Route>

            </Route>

            <Route path="misc">
                <Route path="pricing-tables.html" component={StaticPageLoader}/>
                <Route path="invoice.html" component={StaticPageLoader}/>
                <Route path="search.html" component={StaticPageLoader}/>
                <Route path="email-template.html" component={StaticPageLoader}/>

                <Route path="404" component={Page404}/>
                <Route path="500" component={Page500}/>
                <Route path="blank" component={BlankPage}/>
                <Route path="ck-editor" component={CKEditorDemo}/>


            </Route>

            <Route path="e-commerce">
                <Route path="orders" component={Orders}/>
                <Route path="products-view.html" component={StaticPageLoader} subHeader={false}/>
                <Route path="products-detail.html" component={StaticPageLoader} subHeader={false}/>


            </Route>
            <Route path="smartadmin/app-layouts.html" component={StaticPageLoader} subHeader={false} />
            <Route path="smartadmin/skins.html" component={StaticPageLoader} subHeader={false} />
        </Route>
        <Route path="lock" component={LockedScreen} />
        <Route path="login" component={Login}/>
        <Route path="forgot" component={Forgot}/>
        <Route path="register" component={Register}/>
    </Route>);


export default Routes