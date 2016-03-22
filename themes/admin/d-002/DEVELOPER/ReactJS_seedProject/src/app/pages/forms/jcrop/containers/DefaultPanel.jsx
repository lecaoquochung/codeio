import  React from 'react'

import {Provider} from 'react-redux'
import defaultBehaviorStore from '../stores/defaultDemoStore'

import JCrop from '../components/JCrop.jsx'
import Fields from '../components/Fields.jsx'
import ApiPanelControls from './ApiPanelControls.jsx'

export default ()=>(
    <Provider store={defaultBehaviorStore}>
        <div>
            <section>
                <JCrop

                    store={defaultBehaviorStore} src="styles/img/superbox/superbox-full-11.jpg" width={600} height={400}/>
            </section>
        </div>
    </Provider>
);
