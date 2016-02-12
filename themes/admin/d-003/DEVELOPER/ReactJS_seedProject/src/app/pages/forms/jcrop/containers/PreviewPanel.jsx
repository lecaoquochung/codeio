import  React from 'react'

import {Provider} from 'react-redux'
import showSelectionStore from '../stores/showSelectionStore'

import JCrop from '../components/JCrop.jsx'
import OptionRadio from '../components/OptionRadio.jsx'

export default ()=>(
    <Provider store={showSelectionStore}>
        <div>
            <section className="row">
                <JCrop store={showSelectionStore}
                       options={{
                            showThumbnail: true,
                            thumbnailSize: 200
                       }}
                       className="col-sm-9"
                       src="styles/img/superbox/superbox-full-10.jpg" width={600} height={400}/>

                    <fieldset className="col-md-3" style={{
                        position: 'absolute',
                        marginTop: '220px',
                        left: '620px'
                    }}>
                        <legend>Aspect Ratio</legend>
                        <OptionRadio group="aspectRatio" checked={true} options={{
                            aspectRatio: 0
                        }} label="None"/>
                                    <OptionRadio group="aspectRatio" options={{
                            aspectRatio: 1.4
                        }} label="Wide"/>
                                    <OptionRadio group="aspectRatio" options={{
                            aspectRatio: 0.8
                        }} label="Tall"/>

                        <br/>
                    </fieldset>
            </section>
        </div>
    </Provider>
);
