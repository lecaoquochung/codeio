import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import BasicWizardWidget from './wizards/BasicWizardWidget.jsx'
import FuelUxWizardWidget from './wizards/FuelUxWizardWidget.jsx'

let Wizards = React.createClass({
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Forms', 'Wizards']} icon="table"
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                <WidgetGrid>

                    <div className="row">

                        <article className="col-sm-12 col-md-12 col-lg-6">

                            <BasicWizardWidget />
                        </article>

                        <article className="col-sm-12 col-md-12 col-lg-6">

                            <FuelUxWizardWidget />

                        </article>

                    </div>

                </WidgetGrid>

            </div>
        )
    }
});

export default Wizards