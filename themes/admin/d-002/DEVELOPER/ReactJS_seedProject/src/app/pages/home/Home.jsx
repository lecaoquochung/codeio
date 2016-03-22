import React from 'react'

import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'

export default () => (
    <div id="content">
        <div className="row">
            <BigBreadcrumbs items={['Page Header', 'Subtitle']} icon="fa fa-fw fa-home"
                            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
        </div>
    </div>
)