import  React from 'react'

import {Provider} from 'react-redux'
import stylingPanelStore from '../stores/stylingPanelStore'

import JCrop from '../components/JCrop.jsx'
import OptionRadio from '../components/OptionRadio.jsx'

export default ()=>(
    <Provider store={stylingPanelStore}>
        <div>
            <section className="row">
                <JCrop store={stylingPanelStore}
                       className="col-sm-9"
                       options={{
                       } }
                       src="styles/img/superbox/superbox-full-16.jpg" />

                    <fieldset className="col-md-3" style={{
                        position: 'absolute',
                        top: '20px',
                        left: '620px'
                    }}>
                        <legend>Manipulate classes</legend>
                        <OptionRadio group="containerClass" checked={true} options={{
                            containerClass: 'jcrop-dark',
                            bgOpacity: .65,
                            bgColor: 'black'

                        }} label="jcrop-dark"/>
                        <OptionRadio group="containerClass" options={{
                            containerClass: "jcrop-light",
                             bgOpacity: .35,
                            bgColor: 'white'
                        }} label="jcrop-light"/>
                        <OptionRadio group="containerClass" options={{
                            containerClass: "jcrop-normal",
                             bgOpacity: .25,
                            bgColor: 'black'
                        }} label="jcrop-normal"/>

                        <br/>
                    </fieldset>
            </section>
        </div>
    </Provider>
);
