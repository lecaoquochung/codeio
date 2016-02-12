import React from 'react'

import {OverlayTrigger, Tooltip, Popover} from 'react-bootstrap'

import SubHeader from '../layout/SubHeader.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'


import AddExternalEvent from '../../../components/calendar/components/AddExternalEvent.jsx'
import ExternalEvents from '../../../components/calendar/components/ExternalEvents.jsx'
import FullCalendarWidget from '../../../components/calendar/components/FullCalendarWidget.jsx'

let CalendarPage = React.createClass({
    render: function () {
        return (
            <div id="content">

                <div className="row">
                    <BigBreadcrumbs items={['Home', 'Calendar']} className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>
                {/* widget grid */}
                <WidgetGrid>
                    {/* row */}
                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-3">

                            <JarvisWidget color="blueDark">
                                <header>
                                    <h2> Add Events </h2>
                                </header>

                                <JarvisWidget.Body>
                                    <AddExternalEvent />
                                </JarvisWidget.Body>
                            </JarvisWidget>

                            <div className="well well-sm" id="event-container">


                                    <ExternalEvents />



                            </div>
                        </div>


                        <article className="col-sm-12 col-md-12 col-lg-9">

                            <FullCalendarWidget />
                        </article>
                    </div>
                </WidgetGrid>
            </div>
        )
    }
});

export default CalendarPage