import  React from 'react'

import apiPanelStore from '../stores/apiPanelStore'
import {Provider} from 'react-redux'

import JCrop from '../components/JCrop.jsx'
import Fields from '../components/Fields.jsx'
import ApiPanelControls from './ApiPanelControls.jsx'

export default ()=>(
    <Provider store={apiPanelStore}>
        <div>
            <section>
                <JCrop store={apiPanelStore}
                       src="styles/img/superbox/superbox-full-7.jpg" width={600} height={400}/>
            </section>
            <section className="card">
                {/*
                 <Fields />
                 */}
                <ApiPanelControls />
            </section>
        </div>
    </Provider>
);
