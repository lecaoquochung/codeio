import  React from 'react'

import {Provider} from 'react-redux'
import previewPanelStore from '../stores/previewPanelStore'

import JCrop from '../components/JCrop.jsx'
import Fields from '../components/Fields.jsx'

export default ()=>(
    <Provider store={previewPanelStore}>
        <div>
            <section>
                <JCrop store={previewPanelStore}
                       src="styles/img/superbox/superbox-full-9.jpg" width={600} height={400}/>
            </section>
            <section>
                <Fields />
            </section>
        </div>
    </Provider>
);
